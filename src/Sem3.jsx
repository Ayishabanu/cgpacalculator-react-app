import React from "react"; 
import "./index.css";
function cal(){
 var sum=0;
  var values =[ document.getElementById("sub1").value, document.getElementById("sub2").value, document.getElementById("sub3").value, document.getElementById("sub4").value, document.getElementById("sub5").value, document.getElementById("sub6").value,document.getElementById("sub7").value,document.getElementById("sub8").value];
  var val=[4,4,3,3,3,3,2,2];
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
  var ans=sum/24;
 document.getElementById("ans").innerHTML=ans.toFixed(2);

}

function Sem3(){ 
  return(<> 
 <div class="top">

<p >Semester 3</p><p>Total Credits:24</p>

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
    <td>U15MA303</td>
    <td>Discrete Mathematics*</td>
    <td>04</td>
    <td><input maxLength = "02"  type="text"  id="sub1" required/></td>
  </tr>
  <tr>
  <td>02</td>
    <td>U15EE309</td>
    <td>Introduction to Electrical and Electronics Circuits</td>
    <td>04</td>
    <td><input  maxLength = "02"  type="text"  id="sub2" required/></td>
  </tr>
  <tr>
  <td>03</td>
    <td>U15CS305</td>
    <td>Data Structures</td>
    <td>03</td>
    <td><input  maxLength = "02"  type="text"  id="sub3" required/></td>
  </tr>
  <tr>
  <td>04</td>
    <td>U15CS306</td>
    <td>Database Management Systems</td>
    <td>03</td>
    <td><input type="text"  maxLength = "02"  id="sub4" required/></td>
  </tr>
  <tr>
  <td>05</td>
    <td>U15EC305</td>
    <td>Digital Logic Design</td>
    <td>03</td>
    <td><input type="text"  maxLength = "02"  id="sub5" required/></td>
  </tr>
  <tr>
  <td>06</td>
    <td>U15HS301</td>
    <td>Professional Ethics in Engineering</td>
    <td>03</td>
    <td><input type="text"  maxLength = "02"   id="sub6" required/></td>
  </tr>
  <tr>
  <td>07</td>
    <td>U15CS307</td>
    <td>Data Structures Laboratory</td>
    <td>02</td>
    <td><input type="text"  maxLength = "02"   id="sub7" required/></td>
  </tr>
  <tr>
  <td>08</td>
    <td>U15CS308</td>
    <td>Database Management Systems Laboratory</td>
    <td>02</td>
    <td><input type="text"  maxLength = "02"  id="sub8" required/></td>
  </tr>
</table>
<b><button id="sum" class="glass"  onClick={cal} > calculate SGPA(Semester Grade Point Average )</button> </b>
<br/>
<h1  id="ans"></h1>

 </>);
    }
    export default Sem3;