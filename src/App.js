import './App.css';

import stupid from "./vjezba/default";
import { a } from "./vjezba/normal";
import { b } from "./vjezba/normal";
import { c } from "./vjezba/normal";


function App() {
  return  <div className="App">
       <p>Broj poslje 9 je: {stupid.number1} </p>
       <p>Broj poslje 19 je: {stupid.number2}</p>
       <p>Prvi broj je: {a}</p>
       <p>20/2 je: {b} </p>
       <p>3 * 5 je: {c}</p>
       
       
    </div>
 
}

export default App;
