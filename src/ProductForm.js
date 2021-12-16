import React, { Component } from 'react'

const RESET_VALUES = { id: '', category: '', price: '', name: '', instock: '' }

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    }
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState(prevState => {
      prevState.product[name] = value
      return { product: prevState.product }
    })
  }


  onRadioChange = (newValue) => {
    this.setState({
      selectedOption: newValue.target.value
    });
    var option = newValue.target.value;
    this.setState((prevState) => {
      if (option === "In Stock") {
        console.log("product in stock")
        prevState.product.instock = true;
      }
      else {
        console.log("product out stock")
        prevState.product.instock = false;
      }
      return { product: prevState.product }
    })
  }

  handleSave(e) {
    this.props.resetForm(this.state.product)
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    })
    // prevent HTTP post api 
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <h4>Add product</h4>
        <p>
          <label>
            Name <br />
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={this.state.product.name}
            />
          </label>
        </p>
        <p>
          <label>
            Category <br />
            <input
              type="text"
              className="form-control"
              name="category"
              onChange={this.handleChange}
              value={this.state.product.category}
            />
          </label>
        </p>
        <p>
          <label>
            Price <br />
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={this.handleChange}
              value={this.state.product.price}
            />
          </label>
        </p>
        <div className="form-group">

          <input className="form-group-input" type="radio" value="In Stock" checked={this.state.product.instock === true} onChange={this.onRadioChange} />
          <label className="form-group-label">In Stock</label>
          <br />
          <input className="form-group-input" type="radio" value="Out Stock" checked={this.state.product.instock === false} onChange={this.onRadioChange} />
          <label className="form-group-label">Out of Stock</label>
        </div>
        <input type="submit" className="btn btn-info" value="Save" onClick={this.handleSave}></input>
      </form>
    )
  }
}

export default ProductForm
