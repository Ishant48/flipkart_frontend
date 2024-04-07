import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Box style={{ "margin-top": "54px" }}>
        <Home></Home>
      </Box>
    </DataProvider>
  );
}

export default App;
