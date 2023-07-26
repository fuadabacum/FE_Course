import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { ControlPanel } from "../components/ControlPanel";
import { api } from "../api";

export const VendingMachine = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.getProducts();
        const productsResponse = response.data.map(
          (item: {
            product: { name: string; price: string };
            quantity: number;
          }) => ({
            title: item.product ? item.product.name : "Not available",
            stock: item.quantity ? item.quantity : "-",
            price: item.product?.price,
          })
        );
        setProducts(productsResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
