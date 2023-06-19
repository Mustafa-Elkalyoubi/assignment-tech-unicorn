import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Rating,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Filters from "./Filters";

import { fakeStoreProduct } from "../../types";

function ProductCard(props: { product: fakeStoreProduct }) {
  const { product } = props;
  const theme = useTheme();
  return (
    <Card sx={{ height: 1 }}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: 1,
          padding: 1,
        }}>
        <CardMedia
          sx={{ height: "30vh", objectFit: "contain" }}
          component="img"
          src={product.image}
          title={product.title}
        />
        <CardContent
          sx={{
            gap: 1,
          }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Rating value={Math.floor(Math.random() * 5 + 1)} readOnly />
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <Typography variant="h3" color={theme.palette.primary.main}>
          ${product.price}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

function FilteredItems(props: {
  products: fakeStoreProduct[];
  filterString: string;
  category: string;
  price: number[];
  showAll?: boolean;
}) {
  const { products, filterString, price, category } = props;
  var showAll = props.showAll;
  if (!showAll) showAll = false;
  var filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(filterString.toLowerCase()) &&
      parseFloat(product.price) >= price[0] &&
      parseFloat(product.price) <= price[1] &&
      (product.category === category || category === "")
  );
  if (filteredProducts.length < 1)
    return (
      <Grid item xs={12}>
        <Typography variant="h6">
          Sorry, we couldn't find any items matching your search.
        </Typography>
      </Grid>
    );

  if (!showAll) filteredProducts = filteredProducts.slice(0, 6);

  const gridItem = filteredProducts.map((product) => (
    <Grid item xs={6} sm={4} md={3}>
      <ProductCard product={product} />
    </Grid>
  ));

  return gridItem;
}

function Items() {
  const [products, setProducts] = useState<fakeStoreProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [showAll, setButtonPressed] = useState(false);
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 1000]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

  const theme = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json: fakeStoreProduct[]) => {
        setProducts(json);

        const _categories = json.map((product) => product.category);
        setCategories(Array.from(new Set(_categories)));

        const highestPrice = Math.max(...json.map((product) => parseFloat(product.price)));

        setPriceFilter([0, highestPrice]);
        setMaxPrice(highestPrice);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      width={1}
      padding={3}
      bgcolor={theme.palette.lighterGray}>
      {/* Left */}
      <Box width={0.3} padding={1}>
        <Filters
          categories={categories}
          searchHook={setSearch}
          priceHook={setPriceFilter}
          maxPrice={maxPrice}
          categoryHook={setCategoryFilter}
        />
      </Box>
      {/* Right */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={0.7}>
        <Grid container spacing={2}>
          <FilteredItems
            products={products}
            filterString={search}
            category={categoryFilter}
            showAll={showAll || search.length > 0}
            price={priceFilter}
          />
        </Grid>
        {!showAll && search.length < 1 && (
          <Button sx={{ mt: "5rem" }} variant="contained" onClick={() => setButtonPressed(true)}>
            See More
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Items;
