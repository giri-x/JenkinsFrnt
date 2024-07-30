import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";
 
function UpdateEmployee() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1229/customer/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
 
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1229/customer", data).then((res) => {
      alert("User Updated Successfully");
      navigate("/ViewConsumer");
    });
  };
 
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border p-5" id="addemp">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE CONSUMER DATA</h1>
 
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                value={data.id}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
 
            <div>
            <lable htmlFor="name">Name :</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </div>
 
          <div>
            <lable htmlFor="pincode">Pincode :</lable>
            <input
              type="text"
              name="pincode"
              className="form-control"
              value={data.pincode}
              onChange={(e) =>
                setData({ ...data, pincode: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="street">Street :</lable>
            <input
              type="text"
              name="street"
              className="form-control"
              value={data.street}
              onChange={(e) =>
                setData({ ...data, street: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="number">NUMBER :</lable>
            <input
              type="number"
              name="number"
              className="form-control"
              value={data.number}
              onChange={(e) =>
                setData({ ...data, number: e.target.value })
              }
            />
          </div>
 
          
            <br />
 
            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default UpdateEmployee;