import Button from "@mui/material/Button";
import { Box, ButtonGroup, Grid, Typography } from "@mui/material";

interface ProductProps {
  title: string;
  price: number;
}

interface UserProps {
  name: string;
  surname: string;
  balance?: number;
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

export const ControlPanel = ({ name, surname, balance }: UserProps) => {
  return (
    <Grid container>
      <Grid item mt={1} xs={12}>
        <Typography sx={{ fontSize: 21, fontWeight: 800 ,border: ".5px solid grey" }}>
          {name} {surname}
        </Typography>
      </Grid>
      <Grid item mt={1} xs={12} sx={{border: ".5px solid grey" }}>
	  	<Typography sx={{ fontSize: 21, fontWeight: 800 }}>
          Add money
        </Typography>
        <ButtonGroup fullWidth
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>0,10€</Button>
          <Button>0.20€</Button>
          <Button>0.50€</Button>
        </ButtonGroup>
        <ButtonGroup fullWidth
          sx={{ width: "100%" }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>1€</Button>
          <Button>2€</Button>
          <Button>3€</Button>
        </ButtonGroup>
      </Grid>
      <Grid item mt={1} xs={12} sx={{border: ".5px solid grey" }}>
        <Typography sx={{ fontSize: 21, fontWeight: 800 }}>
          Balance: {balance} EUR{" "}
        </Typography>
      </Grid>
      <Grid item mt={1} xs={12}>
        <Button fullWidth variant="outlined">Refund money</Button>
      </Grid>
    </Grid>
  );
};

export const VendingMachine = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Products />
      </Grid>
      <Grid item xs={6}>
        <ControlPanel name="Fuad" surname="Mimoun" balance={2} />
      </Grid>
    </Grid>
  );
};
