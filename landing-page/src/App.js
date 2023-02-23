import './App.css';

import {AppBar, Toolbar, Typography, Button} from '@mui/material/';
import eslogo from './images/energyscapes-logo-lowres.png'
import ProductHero from './components/ProductHero';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <main className="App">

      <AppBar component="nav" sx={{bgcolor:"#5b6236"}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between', alignContent:'center', height:"100px"}}>
          <img src={eslogo} style={{height:80, margin:"10px"}}/>
          <Typography variant='h6'>Call or Text (720) 556-0759</Typography>
        </Toolbar>
      </AppBar>
        <ProductHero/>
        <Content/>
        <Footer />
    </main>
  );
}

export default App;
