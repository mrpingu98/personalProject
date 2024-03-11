import { Button, TextField, Typography } from "@mui/material"
import { useQueryPost } from "../../Hooks/useQueryPost";
import React from "react";


export const MerchandiseAdmin :React.FC = () => {
    const [productName, setProductName] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');
    const [price, setPrice] = React.useState<string>('');
    const [imageUrl, setImageUrl] = React.useState<string>('');


    const { mutation } = useQueryPost('https://localhost:7119/product', {
        name: 'QueryProduct',
        description: 'third product added using query mutation',
        price: 12
      });

    return (
        <>
        <Typography variant='h1'>Add Product</Typography>
        <div>Name</div>
        <TextField onChange={(e) => setProductName(e.target.value)}/>
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