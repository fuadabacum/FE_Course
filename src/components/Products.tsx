import { FC } from "react";
import { Grid } from "@mui/material";
import { Product } from "./Product";
import { IProduct } from "../CommonTypes";

interface IProducts {
  products: IProduct[] | null;
}

export const Products: FC<IProducts> = ({ products }) => {
  return (
    <Grid container spacing={2} mt={1} mr={1} ml={1} xs={4}>
      {products?.map((product, index) => (
        <Product product={product} index={index} />
      ))}
    </Grid>
  );
};
