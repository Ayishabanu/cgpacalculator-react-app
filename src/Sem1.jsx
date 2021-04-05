import React from "react"; 
import "./index.css";
function cal(){
 var sum=0;
  var values =[ document.getElementById("sub1").value, document.getElementById("sub2").value, document.getElementById("sub3").value, document.getElementById("sub4").value, document.getElementById("sub5").value, document.getElementById("sub6").value,document.getElementById("sub7").value,document.getElementById("sub8").value];
  var val=[4,4,3,3,3,4,2,2];
  for(var i=0; i<8; i++){
    switch(values[i].toLowerCase())
 {
   case "o": {sum+=val[i]*10;}break;
   case "a+":{sum+=val[i]*9;};break;
   case "a":{sum+=val[i]*8;};break;
   case "b+":{sum+=val[i]*7;};break;
   case "b":{sum+=val[i]*6;};break;
   case "ra":{sum+=val[i]*0;};break;
   case "w":{sum+=val[i]*0;};break;
   case "se":{sum+=val[i]*0;};break;
   default:{sum=0;i=10;alert("Enter proper grade!")};break;
  }
}
  var ans=sum/25;
 document.getElementById("ans").innerHTML=ans.toFixed(2);
}

function Sem1(){ 
  return(<> 
<div class="top">
  <p >Semester 1</p><p>Total Credits:25</p>
</div> 
<h5 class=" text-center  text-center display-7">Grade: O , A+ , A ,B+, B , RA , W , SE </h5> 
  <table class="glass">
  <tr>
  <th>S.NO</th>
  <th>Subject Code</th>
    <th>Sub,ject Name</th>
    <th>Credits</th>
    <th>Grade</th>
  </tr>
  <tr>
  <td>01</td>
    <td>U15EN101</td>
    <td>English for Communication – I</td>
    <td>04</td>
    <td><input maxLength = "02"  type="text"   pattern="[A-Z]{2}"  id="sub1" required/></td>
  </tr>
  <tr>
  <td>02</td>
    <td>U15MA101</td>
    <td>Calculus</td>
    <td>04</td>
    <td><input  maxLength = "02"  type="text" pattern="[A-Z]{2}"   id="sub2" required/></td>
  </tr>
  <tr>
  <td>04</td>
    <td>U15PH101</td>
    <td>Physics- I</td>
    <td>03</td>
    <td><input type="text" pattern="[A-Z]{2}"   maxLength = "02"  id="sub3" required/></td>
  </tr>
  <tr>
  <td>03</td>
    <td>U15CH101</td>
    <td>Chemistry</td>
    <td>03</td>
    <td><input  maxLength = "02"  type="text" pattern="[A-Z]{2}"   id="sub4" required/></td>
  </tr>

  <tr>
  <td>05</td>
    <td>U15CS101</td>
    <td>Fundamentals of Computing and C Programming</td>
    <td>03</td>
    <td><input type="text" pattern="[A-Z]{2}"   maxLength = "02"  id="sub5" required/></td>
  </tr>
  <tr>
  <td>06</td>
    <td>U15GE101</td>
    <td>Engineering Graphics</td>
    <td>04</td>
    <td><input type="text" pattern="[A-Z]{2}"   maxLength = "02"   id="sub6" required/></td>
  </tr>
  <tr>
  <td>07</td>
    <td>U15CS102</td>
    <td>Computer Programming in C Laboratory</td>
    <td>02</td>
    <td><input type="text" pattern="[A-Z]{2}"   maxLength = "02"   id="sub7" required/></td>
  </tr>
  <tr>
  <td>08</td>
    <td>U15GE102</td>
    <td>Engineering Practices Laboratory</td>
    <td>02</td>
    <td><input type="text" pattern="[A-Z]{2}"   maxLength = "02"  id="sub8" required/></td>
  </tr>
</table> 

<b><button id="sum" class="glass"  onClick={cal} > calculate SGPA(Semester Grade Point Average )</button> </b>
<br/>
<h1  id="ans"></h1>

 </>);
    }
  
    export default Sem1;