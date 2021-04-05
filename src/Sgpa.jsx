import React from 'react';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import "./index.css";
import {Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Sgpa=()=>{
    return (<>

<Link  style={{color:"white",textDecoration:"none"}} to="/Sgpa" ><h5 class=" text-center  text-center display-4">Calculate SGPA..<DoubleArrowIcon/></h5> </Link>
<h5 class=" text-center  text-center display-8">Pick one semester....</h5>
<div class="card-deck m-5 text-white">
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem1"><h5 class="card-title text-center  text-center display-4">Semester-1<DoubleArrowIcon /></h5></Link>
  </div>
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem2">  <h5 class="card-title text-center display-4">Semester-2 <DoubleArrowIcon /></h5></Link>
    </div>
</div>

<div class="card-deck m-5">
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem3">  <h5 class="card-title text-center display-4">Semester-3 <DoubleArrowIcon /></h5></Link>
  </div>
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem4">  <h5 class="card-title text-center display-4">Semester-4 <DoubleArrowIcon /></h5></Link>
 </div>
</div>

<div class="card-deck m-5">
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem5">  <h5 class="card-title text-center display-4">Semester-5 <DoubleArrowIcon /></h5></Link>
  </div>
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem6">  <h5 class="card-title text-center display-4">Semester-6 <DoubleArrowIcon /></h5></Link>
  </div>
</div>


<div class="card-deck m-5">
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem7"><h5 class="card-title text-center display-4">Semester-7 <DoubleArrowIcon /></h5></Link>
 </div>
  <div class="card ">
      <Link  style={{color:"white",textDecoration:"none"}}  to="/Sem8">  <h5 class="card-title text-center display-4">Semester-8 <DoubleArrowIcon /></h5></Link>
   </div>
</div>
 
</>);
};

export default Sgpa;