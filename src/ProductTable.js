import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  handleDestroy = id => {
    this.props.onDestroy(id)
  }

  handleUpdateStatus = id => {
    this.props.onUpdate(id)
  }

  render() {
    let productsArray = Object.keys(this.props.products).map(pid => this.props.products[pid])
    let rows = []

    productsArray.forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1) {
        return
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.productId}
          onDestroy={this.handleDestroy}
          updateStatus={this.handleUpdateStatus}></ProductRow>
      )
    })

    return (
      <div>
        <table className="table table-striped table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable
