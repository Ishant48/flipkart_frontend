import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Box style={{'margin-top':'54px'}}>
        <Home></Home>
      </Box>
    </div>
  );
}

export default App;
