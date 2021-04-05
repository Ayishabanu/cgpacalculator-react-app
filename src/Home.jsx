import React from 'react';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import "./start.css";

import {Link} from "react-router-dom";
  
const Home=()=>{
    return (<>
    
<header>
  <div class="overlay">
  </div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://player.vimeo.com/external/260569304.sd.mp4?s=13f08e97ea873e8e61cb3a228bb8169da9f4c7ec&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-1 one">Hi! Vivekan's...</h1>
        <p class="lead mb-0">let's make the calculation easy!</p>
        <p class="lead mb-0">by Ayisha!</p>
      </div>
    </div>
  </div>
</header>

<div id="glass" >
<Link style={{color:"white",textDecoration:"none"}} to="/Sgpa" ><h5 class=" text-center  text-center display-4">Calculate SGPA..<DoubleArrowIcon/></h5> </Link>
</div>
<div id="glass" >
<Link  style={{color:"white",textDecoration:"none"}} to="/Cgpa" > <h5 class="text-center display-4">Calculate CGPA... <DoubleArrowIcon /></h5> </Link>
</div>

</>);
};

export default Home;


