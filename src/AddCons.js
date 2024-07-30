import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function AddEmployee() {
  const [records, setRecords] = useState([]);
  const[data,setData]=useState([])
  const [inputData, setInputData] = useState({
    id:"-1",
    name: "",
    pincode:"",
    street:"",
    number:"",
    bill:
    {
    bid:"",
    food:"",
    tax:"",
    total: ""
    
  }
});

useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:1229/bill/idlist")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  let handleChange = (e) => {
    if (e.target.name === "bid") {
        console.log(e.target.value);
        setInputData({ ...inputData, bill: { bid: e.target.value } });
        axios.get("http://localhost:1229/bill/"+e.target.value)
        .then((res)=>{
            console.log(res.data);
            setInputData({ ...inputData, bill: res.data });
            // setInputData({ ...inputData, payroll: { da: res.data.da } });
            // setInputData({ ...inputData, payroll: { basic: res.data.basic } });
            setData(res.data);
            return res.data;
        })
        .catch((err) => console.error(err));
    }; 
  }

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:1229/customer", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

 

  const validateValues = (inputData) => {
    if (inputData.name.length === 0) {
      alert("Enter Valid Details ");
      return false;
    } else if (inputData.pincode.length ===0) {
        alert("Enter Valid Details ");
      return false;
    } 
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border  p-5" style={{color:"white"}} id="addemp">
        <form onSubmit={handleSubmit}>
          <h1 >ADD CUSTOMER DATA</h1>
          <div>
            <lable htmlFor="name">Name</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="pincode">PINCODE</lable>
            <input
              type="text"
              name="pincode"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, pincode: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="street">STREET</lable>
            <input
              type="text"
              name="street"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, street: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="number">NUMBER</lable>
            <input
              type="number"
              name="number"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, number: e.target.value })
              }
            />
          </div>


          <div>
          <label htmlFor="bid">Bill Id</label>
          
                  <select
                    class="form-select"
                    required="required"
                    name="bid"
                    title="Select ID "
                    onChange={handleChange}
                  >
                    <option name="bid" selected="selected">
                      Select One
                    </option>
                    {records.map((items) => (
                      <option value={items} key={items}>
                        {items}
                      </option>
                    ))}
                  </select>
            </div>

          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default AddEmployee;
