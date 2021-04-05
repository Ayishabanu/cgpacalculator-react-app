
import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Sgpa from "./Sgpa";
import Cgpa from "./Cgpa";
import Sem1 from "./Sem1";
import Sem2 from "./Sem2";
import Sem3 from "./Sem3";
import Sem4 from "./Sem4";
import Sem5 from "./Sem5";
import Sem6 from "./Sem6";
import Sem7 from "./Sem7";
import Sem8 from "./Sem8";
function App(){
    return(<> 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Sgpa' component={Sgpa}/>
      <Route  path='/Cgpa' component={Cgpa}/>
      <Route  path='/Sem1' component={Sem1}/>
      <Route path='/Sem2' component={Sem2}/>
      <Route  path='/Sem3' component={Sem3}/>
      <Route path='/Sem4' component={Sem4}/>
      <Route path='/Sem5' component={Sem5}/> 
      <Route path='/Sem6' component={Sem6}/>
      <Route  path='/Sem7' component={Sem7}/>
      <Route path='/Sem8' component={Sem8}/>
    </Switch>
 </>);     
    }
  export default App;
  