// material
import { Container, Stack, Typography } from "@mui/material";
// components
import ProductList from "./ProductList";
import ProductCartWidget from "./ProductCartWidget";
// mock
import PRODUCTS from "./products";

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  return (
    <Container>
      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack
          direction="row"
          spacing={1}
          flexShrink={0}
          sx={{ my: 1 }}
        ></Stack>
      </Stack>

      <ProductList products={PRODUCTS} />
      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack
          direction="row"
          spacing={1}
          flexShrink={0}
          sx={{ my: 1 }}
        ></Stack>
      </Stack>
    </Container>
  );
}
