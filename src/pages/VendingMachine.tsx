import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { ControlPanel } from "../components/ControlPanel";
import { api } from "../api";

export const VendingMachine = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      
        setLoading(true);
        const response = await api.getProductsMock();
        setProducts(response.data);
        setLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Products products={products}></Products>
      <Grid item xs={4}>
        <ControlPanel name="Fuad" surname="Mimoun" balance={2} />
      </Grid>
    </Grid>
  );
};
