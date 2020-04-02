import React from "react";
import ProductList from './ProductList'
import CardItemList from './CardItemList'
import AddProduct from './AddProduct'

function Shop() {
  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-md-8">
          <ProductList/>
          <AddProduct/>
        </div>
        <div className="col-md-4">
          <CardItemList/>
        </div>
      </div>
    </div>
  );
}

export default Shop;
