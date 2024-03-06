import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createTheme from "@mui/material/styles/createTheme";
import axios from "axios";


const Merchandise: React.FC = () => {
  const styles = useStyles();
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
            <Box className={styles.mainContainer}>
              <Box className={styles.column}>
                <Typography>{x.name}</Typography>
                <Typography>{x.description}</Typography>
                <Typography>{x.price}</Typography>
              </Box>
              <Box marginRight='15%'>
                <Typography>test2</Typography>
              </Box>
            </Box>
          </>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const theme = createTheme();
const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: '10%',
    '@media (max-width: 600px)': {
      flexDirection: 'column', // Apply for screens up to 600px (xs screens) - need to check this
    },
  },
  column: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    marginLeft: "15%"
  },
});

export { Merchandise };