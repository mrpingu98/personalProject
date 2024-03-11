import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Error } from "../Error/Error";
import { apiEndpoints } from "../../Store/Endpoints";
import { useQueryGet } from "../../Hooks/useQueryGet"
import { LoadingCircle } from "../../Components/LoadingCircle";
import { useTranslation } from "react-i18next";
import { useQueryPost } from "../../Hooks/useQueryPost";
import { LinkButton } from "../../Components/LinkButton";
import { routes } from "../../Constants/Routes/RoutesEndpoints";


const Merchandise: React.FC = () => {
  const { t } = useTranslation("merchandise");

  const { mutation } = useQueryPost('https://localhost:7119/product', {
    name: 'QueryProduct',
    description: 'third product added using query mutation',
    price: 12
  });

  const { data: products, error, isPending } = useQueryGet(apiEndpoints.getAllProducts, 'getProducts', false, false);
  if (isPending) return <LoadingCircle />
  if (error) return <Error />

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
        <Typography variant='h1'>{t("title")}</Typography>
        <LinkButton
          text="Admin"
          route={routes.merchandiseAdmin}
        />
      </Box>
      <Box sx={{ marginTop: '2%' }}>
        <Typography variant='body1'>{t("description")}</Typography>
      </Box>
      {products.map((product: any) => (
        <MainContainer key={product.id}>
          <Column>
            <Typography>{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.price}</Typography>
          </Column>
          <Box marginRight='15%'>
            <Typography>PICTURE</Typography>
          </Box>
        </MainContainer>
      ))}
      <div>
        {mutation.isPending ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Todo added!</div> : null}

            <Button onClick={() => mutation.mutate()}>dohwocwdc</Button>
          </>
        )}
      </div>
    </>
  );
};

const MainContainer = styled('div')({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: '5%',
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