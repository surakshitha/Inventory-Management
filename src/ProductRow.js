import React, { Component } from 'react'

class ProductRow extends Component {
  destroy = () => {
    this.props.onDestroy(this.props.product.productId)
  }

  updateStatus = () => {
    this.props.updateStatus(this.props.product.productId)
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.category}</td>
        <td>{String(this.props.product.instock)}</td>
        <td className="text-right">
          <button onClick={this.updateStatus} className="btn btn-info">
            Update Status
          </button>
        </td>
        <td>
          <button onClick={this.destroy} className="btn btn-info">
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default ProductRow
