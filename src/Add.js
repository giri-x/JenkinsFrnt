import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Add() {
  const [inputData, setInputData] = useState({
    
    food: "",
    tax:"",
    total: ""
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:1229/bill", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/View");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };


  const validateValues = (inputData) => {
    if (inputData.tax.length === 0) {
      alert("Please enter basic pay !!! ");
      return false;
    
    }  else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border  p-5" id="addemp">
        <form onSubmit={handleSubmit}>
          <h1>ADD  DATA</h1>
         
          <div>
            <lable htmlFor="food">FOOD</lable>
            <input
              type="text"
              name="food"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, food: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="tax">TAX</lable>
            <input
              type="number"
              name="tax"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, tax: e.target.value })
              }
            />
          </div>

         

<div>
            <lable htmlFor="total" >TOTAL</lable>
 
            <input
              type="number"
              name="total"
              className="form-control"
              value={parseInt(inputData.tax)*6}
              onBlur={(e) =>
                setInputData({ ...inputData, total:e.target.value })
              }
            />
          </div>

          
          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Add;
