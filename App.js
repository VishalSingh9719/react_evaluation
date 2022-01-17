
import './App.css';
import {Nav} from "./component/navbar";
import {Routes,Route,privateRoute} from "react-router-dom";
import {Login} from "./component/login";
import {AllJob} from "./component/alljob";
import {AdminPanel} from "./component/Adminpage"

function App() {
    return(
     <div>
         <Nav />
         <Routes>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/alljob" element={
                 <privateRoute> <AllJob /></privateRoute>
            }></Route>
             <Route path="Adminpage" element={
                <privateRoute>    
             <AdminPanel />
             </privateRoute>
             }></Route>
         </Routes>
     </div>
    )
}

export default App;
