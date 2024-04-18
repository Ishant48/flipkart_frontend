import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/Home";
import DataProvider from "./context/DataProvider";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailsView from "./components/details/DetailsView";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header></Header>
      <Box style={{ "margin-top": "54px" }}>
        <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/product/:id" element = {<DetailsView/>}></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
