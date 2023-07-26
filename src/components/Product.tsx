import { FC } from "react";
import { Button, Grid, Typography } from "@mui/material";
import {IProduct} from "../CommonTypes";

interface ProductProps {
    product: IProduct;
    index: number;
  }

  
export const Product: FC<ProductProps> = ({ product, index }) => {
    return (
      <Grid item key={index} spacing={2} xs={4} sx={{ border: ".5px solid grey" }}>
        <Typography sx={{ fontSize: 21, fontWeight: 800 }}>{product.title}</Typography>
        <Typography> Stock: {product.stock}</Typography>
        <Typography>Price: {product.price}€</Typography>
        <Button sx={{ width: "100%" }} variant="outlined">Buy</Button>
      </Grid>
    );
  };