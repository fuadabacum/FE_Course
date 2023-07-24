import { Grid } from "@mui/material";
import { Product } from "./Product";

export const Products = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <Product title="Redbull" price={5} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Fanta" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Coke" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Coke" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Coke" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Water" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Water" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Water" price={3} />
      </Grid>
      <Grid item xs={4}>
        <Product title="Water" price={3} />
      </Grid>
    </Grid>
  );
};
