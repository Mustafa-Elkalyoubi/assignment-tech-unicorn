import { useState, useEffect } from "react";

import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { fakeStoreProduct } from "../../types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function FilteredGrid(props: { products: fakeStoreProduct[]; filter: string }) {
  const { products, filter } = props;
  return (
    <Grid container spacing={2}>
      {products
        .filter(
          (product) =>
            product.category.toLowerCase() === filter.toLowerCase() || filter === "All Products"
        )
        .map((product) => <CardView product={product} key={product.title} />)
        .slice(0, 6)}
    </Grid>
  );
}

function CardView(props: { product: fakeStoreProduct }) {
  const { product } = props;
  return (
    <Grid item xs={4}>
      <Card sx={{ height: 1 }}>
        <CardActionArea sx={{ height: 1 }}>
          <CardMedia
            sx={{ height: "30vh", objectFit: "contain" }}
            component="img"
            src={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function Premium() {
  const [tabValue, setTabValue] = useState(0);
  const [products, setProducts] = useState<fakeStoreProduct[]>([]);

  const theme = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const categories = [
    "All Products",
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <Box
      sx={{ backgroundColor: theme.palette.lighterGray, padding: "5rem 2rem 2rem 2rem", width: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Our Premium Collection
      </Typography>
      <Box sx={{ marginTop: "2rem", bgcolor: "background.paper" }}>
        <Tabs value={tabValue} onChange={(_event, newValue) => setTabValue(newValue)} centered>
          {categories.map((category) => (
            <Tab label={category} key={category} />
          ))}
        </Tabs>
      </Box>
      {categories.map((category, index) => (
        <TabPanel value={tabValue} index={index} key={index}>
          <FilteredGrid products={products} filter={category} />
        </TabPanel>
      ))}

      <Button href="#" variant="contained" sx={{ padding: "1rem", marginTop: "2rem" }}>
        Find Out More
      </Button>
    </Box>
  );
}

export default Premium;
