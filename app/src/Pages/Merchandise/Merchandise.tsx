import React from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { styled } from '@mui/system';


const Merchandise: React.FC = () => {
  const [products, setProducts] = React.useState<any>(null);


  React.useEffect(() => {
    axios.get('https://localhost:7119/product').then(response => {
      setProducts(response.data);
      console.log('complete')
    })
      .catch(error => {
        console.error('Error fetching data');
      })
  }, []);
  //make a custom hook for get and post requests 

  return (
    <>
      {products ? (
        products.map((x: any) => (
          <>
            <MainContainer>
              <Column>
                <Typography>{x.name}</Typography>
                <Typography>{x.description}</Typography>
                <Typography>{x.price}</Typography>
              </Column>
              <Box marginRight='15%'>
                <Typography>test2</Typography>
              </Box>
            </MainContainer>
          </>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const MainContainer = styled('div')({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: '10%',
  '@media (max-width: 600px)': {
    flexDirection: 'column', // Apply for screens up to 600px (xs screens) - need to check this
  },
});

const Column = styled('div')({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginLeft: "15%"
});

export { Merchandise };