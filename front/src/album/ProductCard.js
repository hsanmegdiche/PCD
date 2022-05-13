import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
// components
import Label from "./Label";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0.3,
        m: 0.3,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.7rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
export default function ShopProductCard({ product }) {
  const { name, cover, status,skills } = product;

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "sale" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
          <Box sx={{textTransform: 'uppercase' , fontWeight: 'bold', m: 1 }}>{name}
</Box>
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="caption">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            ></Typography>
            <Box
        sx={{
          flexWrap: 'wrap',
          display: 'flex',
          flexDirection: 'row',
          p: 0,
          m: 0,
          bgcolor: 'background.paper',
          borderRadius: 0,
        }}
      >
            {skills.map((s)=><Item>{s}</Item>)}
            </Box>
          </Typography>
        </Stack>
      </Stack>
      <CardActions>
        <Button size="small">Postuler</Button>
        <Button size="small">Détails</Button>
      </CardActions>
    </Card>
  );
}
