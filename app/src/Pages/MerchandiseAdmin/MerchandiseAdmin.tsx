import React from "react";
import { EditProduct } from "./EditProduct";
import { AddProduct } from "./AddProduct";
import { DeleteProduct } from "./DeleteProduct";


const MerchandiseAdmin: React.FC = () => {
  return (
    <>
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
    </>
  )
}

export { MerchandiseAdmin }