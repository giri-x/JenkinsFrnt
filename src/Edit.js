import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1229/bill/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1229/bill", data).then((res) => {
      alert("User Updated Successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border  p-5" id="addemp">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE BILL DATA</h1>
            <div>
              <lable htmlFor="bid">ID :</lable>
              <input
                type="number"
                disabled
                name="bid"
                className="form-control"
                value={data.bid}
                //onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="food">FOOD :</lable>
              <input
                type="text"
                name="food"
                className="form-control"
                value={data.food}
                onChange={(e) => setData({ ...data, food: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="tax">TAX</lable>
              <input
                type="number"
                name="tax"
                className="form-control"
                value={data.tax}
                onChange={(e) => setData({ ...data, tax: e.target.value })}
              />
            </div>

            <div>
            <lable htmlFor="total">TOTAL :</lable>
            <input
              type="number"
              name="total"
              className="form-control"
              value={parseInt(data.tax)*2}
              onBlur={(e) =>
                setData({ ...data, total:e.target.value })
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

export default Edit;