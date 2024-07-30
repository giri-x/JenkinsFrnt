import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
 
function SignUp() {
  const [inputData, setInputData] = useState({
    uid: "",
    uname: "",
    pass: "",
    email: ""
  });
 
  const navigate = useNavigate();
 
  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
 
    if (result === true) {
      axios
       .post("http://localhost:1229/user", inputData)
       .then((res) => {
          alert("Data added Successfully");
          navigate("/AppRouter");
          console.log(res.data);
        })
       .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };
 
  const validateValues = (inputData) => {
    if (inputData.uname.length === 0) {
      alert("Please enter  Name!!! ");
      return false;
    } else if (inputData.email.length === 0) {
      alert("Please enter email!!!");
      return false;
    } else if (inputData.pass.length === 0) {
      alert("Please Enter the password!!!");
      return false;
    } else {
      return true;
    }
  };
 
  return (
    <div className="containersign">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Register</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="uname">Username</label>
                  <input
                    type="text"
                    name="uname"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({...inputData, uname: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pass">Password</label>
                  <input
                    type="pass"
                    name="pass"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({...inputData, pass: e.target.value })
                    }
                  />
                </div>
 
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({...inputData, email: e.target.value })
                    }
                  />
                </div>
 
               
 
                <button className="btton btton-primary" onClick={handleSubmit}>
                  Register
                </button>
                <p>Already have an account?</p>
                <Link to={"/Login"}>
                  <button className="btton btton-secondary">Sign In</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SignUp;
 