import { Grid } from "@mui/material";
import { Products } from "./Products";
import { ControlPanel } from "./ControlPanel";

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
