import { Button, Grid, Typography } from "@mui/material";


interface ProductProps {
    title: string;
    price: number;
  }

  
export const Product = ({ title, price }: ProductProps) => {
    return (
      <Grid container>
        <Grid item mt={1} xs={12} sx={{ border: ".5px solid grey" }}>
          <Typography sx={{ fontSize: 21, fontWeight: 800 }}>{title}</Typography>
          <Typography>{price}€</Typography>
        </Grid>
        <Grid item mt={1} xs={12}>
          <Button sx={{ width: "100%" }} variant="outlined">
            Buy
          </Button>
        </Grid>
      </Grid>
    );
  };