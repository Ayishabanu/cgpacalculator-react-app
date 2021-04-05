import React from "react"; 
import "./index.css";
function cal(){
 var sum=0;
  var values =[ document.getElementById("sub1").value, document.getElementById("sub2").value];
  var val=[10,3];
  for(var i=0; i<2; i++){
    switch ( values[i].toLowerCase() )
 {
   case "o": {sum+=val[i]*10;}break;
   case "a+":{sum+=val[i]*9;};break;
   case "a":{sum+=val[i]*8;};break;
   case "b+":{sum+=val[i]*7;};break;
   case "b":{sum+=val[i]*6;};break;
   default:{sum=0;i=10;alert("Enter proper grade!")};break;
  }
}
  var ans=sum/13;
 document.getElementById("ans").innerHTML=ans.toFixed(2);

}

function Sem8(){ 
  return(<> 
 <div class="top">

<p >Semester 8</p><p>Total Credits:13</p>

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
    <td>U15CS836</td>
    <td>Project Work</td>
    <td>10</td>
    <td><input type="text"  maxLength = "02"  id="sub1" required/></td>
  </tr>
  <tr>
  <td rowSpan="2">02</td>
    <td></td>
    <td>Open Elective - II</td>
    <td>03</td>
    <td rowSpan='2'><input type="text"  maxLength = "02"   id="sub2" required/></td>
    
  </tr>
  <tr>
    <td></td>
    <td>Open Elective - II</td>
    <td>03</td>
  </tr>
</table> 

<b><button id="sum" class="glass"  onClick={cal} > calculate SGPA(Semester Grade Point Average )</button> </b>
<br/>
<h1  id="ans"></h1>

 </>);
    }
export default Sem8;