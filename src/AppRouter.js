import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./View";
 import Add from "./Add";
  import Edit from "./Edit";
 import Home from "./Home";
  import ViewConsumer from "./ViewConsumer";
  import AddEmp from "./AddCons";
 import UpdateConsumer from "./UpdateConsumer";
 import Login from "./Login"
import Home1 from "./Home1";
import SignUp from "./SignUp";

// import AddCont from "./AddCont";
// import EditCon from "./EditCon";

function AppRouter() {
  return (
    <div>




    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/View" element={<View />} />
         <Route path="/create" element={<Add />} />
         <Route path="/Viewconsumer" element={<ViewConsumer />} />
         <Route path="/createemployee" element={<AddEmp />} />
         <Route path="/updateemployee/:id" element={<UpdateConsumer/>} />
         <Route path="/update/:id" element={<Edit/>} />
         <Route path="/Login" element={<Login />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Home" element={<Home />} />

         
      </Routes>
    </Router>
    
    </div>
  );
}

export default AppRouter;
