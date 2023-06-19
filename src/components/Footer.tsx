import { Box, useTheme, Typography, Button } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-between"} width={1} padding={3}>
      <Box display="flex" flexDirection="row">
        <Box
          bgcolor={theme.palette.primary.main}
          width={"300px"}
          height={"300px"}
          marginRight={3}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start">
          <Box display="flex" flexDirection="column" alignItems="start">
            <Typography variant="h1" color={theme.palette.primary.main} marginBottom={2}>
              Dealerz.
            </Typography>
            <Button color="inherit">Privacy Policy</Button>
            <Button color="inherit">Terms & Conditions</Button>
          </Box>
          <Typography variant="body2">@2023 Copyright</Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="row" height={1} gap={3}>
        <Button variant="contained" sx={{ padding: 1, backgroundColor: "red" }}>
          YouTube
        </Button>
        <Button variant="contained" sx={{ padding: 1, backgroundColor: "blue" }}>
          FaceBook
        </Button>
        <Button variant="contained" sx={{ padding: 1, backgroundColor: "#00acee", color: "black" }}>
          Twitter
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: 1,
            backgroundColor: "#d6249f",
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          }}>
          Instagram
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
