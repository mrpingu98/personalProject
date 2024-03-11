import { Button, TextField, Typography } from "@mui/material"
import { useQueryPost } from "../../Hooks/useQueryPost";
import { Product } from "../../Constants/Types/Product";
import React from "react";

const MerchandiseAdmin: React.FC = () => {
    const [name, setName] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');
    const [price, setPrice] = React.useState<string>('');
    const [imageUrl, setImageUrl] = React.useState<string>('');

    const addProduct: Product = {
        name: name,
        description: description,
        price: parseFloat(price),
        imageUrl: imageUrl
    }


    const { mutation } = useQueryPost('https://localhost:7119/product', addProduct);

    return (
        <>
        <Typography variant='h1'>Add Product</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setName(e.target.value)}/>
        <div>Description</div>
        <TextField onChange={(e) => setDescription(e.target.value)}/>
        <div>Price</div>
        <TextField onChange={(e) => setPrice(e.target.value)}/>
        <div>ImageUrl</div>
        <TextField onChange={(e) => setImageUrl(e.target.value)}/>
        <Button onClick={() => mutation.mutate()}>Add Product</Button>
        <div>
        {mutation.isPending ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Todo added!</div> : null}

       
          </>
        )}
      </div>
        </>
    )
}

export {MerchandiseAdmin}