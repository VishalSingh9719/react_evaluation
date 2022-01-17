
import './App.css';
import {Nav} from "./component/navbar";
import {Routes,Route} from "react-router-dom";

function App() {
    return(
     <div>
         <Nav />
         <Routes>
             <Route path="/login" element={<login />}></Route>
             <Route path="/AllJob" element={<alljob />}></Route>
         </Routes>
     </div>
    )
}

export default App;
