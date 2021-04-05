import React from 'react';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import "./index.css";
import {Link} from 'react-router-dom';
const result=()=>{
   var total=0;
   var count=document.getElementById("count").value;
   var input=[document.getElementById("one").value,document.getElementById("two").value,document.getElementById("three").value,document.getElementById("four").value,document.getElementById("five").value,document.getElementById("six").value,document.getElementById("seven").value,document.getElementById("eight").value];
   for(var i=0;i<count;i++)
{   
   if( isNaN(input[i] ))
   alert("Enter a valid points");
   total += Number(input[i]);
 }
var z=total/count;
   if( isNaN(z ))
   alert("Enter a valid points");
   else
   document.getElementById("result").innerHTML=z.toFixed(2);
}

const Cgpa=()=>{
    return (<>
     <Link  style={{color:"white",textDecoration:"none"}} to="/Cgpa" ><h5 class=" text-center  text-center display-4">Calculate CGPA..<DoubleArrowIcon/></h5> </Link>
   
 <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-6">Enter upto how many semester you want to calculate CGPA<input type="number" maxLength="1" min="0" max="8" id="count"></input></h5>
      </div>
      </div>
      <h5 class=" text-center  text-center display-7">Enter obtained SGPA in each Semester. </h5>
       <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-1 <input type="number" maxlength="04" min="0.00" max="10" id="one"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-2 <input type="number" min="0.0" max="10" id="two"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-3 <input type="number" min="0.0" max="10" id="three"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-4 <input type="number" min="0.0" max="10" id="four"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-5 <input type="number" min="0.0" max="10" id="five"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-6 <input type="number" min="0.0" max="10" id="six"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-7 <input type="number" min="0.0" max="10" id="seven"></input></h5>
      </div>
      </div>
      <div class="card-deck m-3  text-white">
       <div class="card ">
     <h5 class="card-title text-center  text-center display-4">Semester-8 <input type="number" min="0.0" max="10" id="eight"></input></h5>
      </div>
      </div>

      <b><button id="sum" class="glass"  onClick={result} > calculate CGPA(Cummulative Grade Point Average )</button> </b>
      <br/>
      <h1  id="result"></h1>

</>);
};

export default Cgpa;
