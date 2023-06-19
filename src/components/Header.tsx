import { useState } from "react";
import { Box, InputAdornment, Link, TextField, Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography/Typography";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Header() {
  const [search, setSearch] = useState("");
  const theme = useTheme();

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "1rem 5rem 1rem 5rem",
        }}>
        <Box>
          <Link href="/" underline="none">
            <Typography variant="h3" color={theme.palette.primary.main}>
              Dealerz.
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }} gap={5}>
          <Link
            href="#"
            sx={{ display: "flex", alignItems: "center" }}
            underline="none"
            color="inherit">
            <LocalPhoneOutlinedIcon sx={{ marginRight: "1rem" }} /> Call Center
          </Link>
          <Link
            href="#"
            sx={{ display: "flex", alignItems: "center" }}
            underline="none"
            color="inherit">
            <LocalShippingOutlinedIcon sx={{ marginRight: "1rem" }} /> Shipping & Returns
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "1rem",
          backgroundColor: theme.palette.lighterGray,
          width: 1,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "60%",
          }}>
          {["Shop", "Promo", "About", "Blog"].map((location) => (
            <Link
              href={location}
              key={location}
              color="inherit"
              underline="none"
              fontWeight="bold"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {location}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            width: 1,
          }}>
          <TextField
            variant="outlined"
            label="Search what you want"
            sx={{ width: 0.8, backgroundColor: "white" }}
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            onSubmit={(event) => handleSearchSubmit(event)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}>
          <Link href="#" color="inherit">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit">
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </Link>
          <Link href="#" color="inherit">
            <PersonOutlineOutlinedIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit">
            <NotificationsOutlinedIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Header;
