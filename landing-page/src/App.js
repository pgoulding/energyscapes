import './App.css';

import {AppBar, Toolbar, Typography, Button} from '@mui/material/';
import eslogo from './images/energyscapes-logo-lowres.png'
import ProductHero from './components/ProductHero';
import Content from './components/Content';
function App() {
  return (
    <main className="App">
      <AppBar component="nav" sx={{bgcolor:"#5b6236"}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
          <img src={eslogo} style={{height:"80px", margin:"10px"}}/>
          <Typography variant='h6'>Call or Text (720) 556-0759</Typography>
        </Toolbar>
        <ProductHero/>
        <Content/>
      </AppBar>
    </main>
  );
}

export default App;
