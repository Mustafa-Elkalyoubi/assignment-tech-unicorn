import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./styles/App.css";

/*
  API: https://fakestoreapi.com/docs
  Template: https://www.figma.com/file/1k5LY1hla3D6PQVPlc0EPp/Shopping-Web-Template?type=design&node-id=1-3
*/

const theme = createTheme({
  palette: {
    primary: {
      light: "#fbd18f",
      main: "#ff5722",
      dark: "#de6220",
    },
    secondary: {
      light: "#dfe774",
      main: "#d1dc36",
      dark: "#a19d22",
    },
    lighterGray: "#ededed",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
