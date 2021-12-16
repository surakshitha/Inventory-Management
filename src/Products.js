import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'
import $ from 'jquery'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      products: []
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch('http://localhost:3001/product/get/')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            products: result
          })
        },
        error => {
          console.log('Fetch Error: ', error)
        }
      )
  }

  handleFilter(filterInput) {
    this.setState(filterInput)
  }

  handleSave(product) {
    if (!product.id) {
      product.id = new Date().getTime()
    }

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/product/create/',
      data: product
    }).then(() => {
      this.getData()
    })
  }

  handleDestroy = productId => {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001/product/delete/${productId}`
    }).then(() => {
      this.getData()
    })
  }

  handleUpdateStatus = productId => {
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3001/product/update/${productId}`
    }).then(() => {
      this.getData()
    })
  }

  render() {
    return (
      <div>
        <h1>My Inventory</h1>
        <Filters onFilter={this.handleFilter}></Filters>
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          onDestroy={this.handleDestroy}
          onUpdate={this.handleUpdateStatus}></ProductTable>
        <ProductForm resetForm={this.handleSave}></ProductForm>
      </div>
    )
  }
}

export default Products
