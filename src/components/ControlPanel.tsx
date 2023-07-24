import { Button, ButtonGroup, Grid, Typography } from "@mui/material";


interface UserProps {
    name: string;
    surname: string;
    balance?: number;
  }
  

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