import React, { useState, useEffect } from "react";
// import  ReactDOM  from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import TextField from "@mui/material/TextField";
import { Table } from "react-bootstrap";

export default function Notes() {
  const [inputData, setInputData] = useState("");
  // const [items , setItem] = useState("");
  const [file, setFile] = useState();

  const [click, setClick] = useState("");

  const [error, setError] = useState(false);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const addItem = (e) => {
    // window.location.reload();
    if (!inputData) {
      if (inputData.length === 0) {
        setError(true);
      }
      console.log(error);
    }
     else if (values && !toggleSubmit) {
      setValues(
        values.map((value) => {
          if (value.id === editItem) {
            return { ...value, name: inputData, file: file };
          }
          return value;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setFile("");
      setEditItem(null);
    } else {
      window.location.reload();
      var values = JSON.parse(localStorage.getItem("values") || "[]");

      var kasim = {
        name: inputData,
        file: file,
        id: Math.random(),
      };
      values.push(kasim);
      localStorage.setItem("values", JSON.stringify(values));
      console.log(e.target.value[0]);
      // window.location.reload();

      // setFixData((oldItems) => {
      //   return [...oldItems, inputData];
      // });
      setInputData("");
      alert("uploaded");
    }
  };

  const handleDelete = (id) => {
    window.location.reload();

    const values = JSON.parse(localStorage.getItem("values"));
    var index = values.filter((users) => {
      return id !== users.id;
    });
    console.log(index);
    localStorage.setItem("values", JSON.stringify(index));
  };

  const handleEdit = (id) => {
    // window.location.reload();
    let newEditItem = values.find((value) => {
      return value.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setFile(newEditItem.file);
    setEditItem(id);
  };
  // useEffect(() => {
  //   setInputData(localStorage.getItem("Name"));
  //   setFile(localStorage.getItem("file"));
  // }, []);

  const [values, setValues] = useState([]);
  useEffect(() => {
    const values = localStorage.getItem("values");
    setValues(JSON.parse(values));
  }, []);

  return (
    <>
      <div>
        <NoteAltRoundedIcon
          sx={{ fontSize: "80px", marginTop: "50px", color: "gray" }}
        />
        <p style={{ fontSize: "20px", color: "whitesmoke" }}>
          <b>Add your list here ✌️</b>
        </p>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <div>
          <PersonSearchRoundedIcon
            sx={{ color: "gray", fontSize: "32px", margin: "10px 10px 0px 0px",
            }}
          />
        </div>
        &nbsp;&nbsp;
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <TextField
          sx={{
            width: "100px",
            // fontSize: "14px",
            // outline: "none",
            // border: "0px",
            width: "auto",
            backgroundColor: "gray",
            // height: "30px",
            borderRadius: "8px",
            // borderColor: "#5f5f91",
            textAlign: "center",
            color: "yellow",
            boxShadow: "0px 0px 50px 5px",
          }}
          label="Enter anything"
          variant="outlined"
          type="text"
          color="primary"
          // placeholder="Enter anything"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />
        &nbsp;&nbsp;
        {toggleSubmit ? (
          <button
            style={{
              borderRadius: "20px",
              backgroundColor: "gray",
              height: "35px",
              width: "30px",
              margin: "10px 0px 0px 20px",
              color:"white",
              boxShadow:"0px 0px 30px 3px",
            }}
            onClick={addItem}
            type="submit"
          >
            +
          </button>
        ) : (
          <button
            style={{
              borderRadius: "20px",
              backgroundColor: "transparent",
              border: "none",
              color: "gray",
            }}
            onClick={addItem}
            type="submit"
          >
            <EditLocationIcon sx={{}} />
          </button>
        )}
      </div>
      <br />
      {error && inputData.length < 3 ? (
        <small style={{ color: "red" }}>minimum 3 character required</small>
      ) : (
        ""
      )}

      <div style={{ margin: "30px 0px 30px 46px" }}>
        <b>Image :</b> &nbsp;&nbsp;&nbsp;
        <input
          type="file"
          accept="image/*"
          // ref={(input)=> this.getImage = input }
          onChange={handleChange}
          // value={click}
        ></input>
        <img
          src={file}
          onChange={(event) => {
            setClick(event.target.value);
          }}
        />
      </div>

      <div>
        {values && values.length > 0
          ? values.map((value) => {
              return (
                //    <Notes2
                //    text={elem}

                //    />

                <Table  style={{justifyContent:"center" , margin:"auto" ,color:"white",
                boxShadow:"0px 0px 15px 1px", }}>
                  <thead>
                    <tr>
                      <th>Id</th>
                      {/* &nbsp; */}
                      <th>Name</th>

                      <th>Image</th>

                      {/* <th>
            Age
        </th> */}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{value.id}</td>
                      {/* &nbsp; */}

                      <td>
                        <div
                          className="eachItem"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "40px",
                          }}
                        >
                          <textarea
                            style={{
                              width: "100px",
                              outline: "none",
                              border: "0px",
                              width: "auto",
                              height: "20px",
                              borderRadius: "8px",
                              borderColor: "#5f5f91",
                              textAlign: "center",
                              backgroundColor: "gray",
                              padding: "5px 5px 0px 5px",
                              color:"black",
                              boxShadow:"0px 0px 30px 5px",
                            }}
                            type="text"
                            //   value={fixData}
                          >
                            {value.name}
                          </textarea>
                          &nbsp;&nbsp;
                        </div>
                      </td>

                      <td>
                        {/* <img  style={{width:"100px",height:"100px"}}/> */}
                        <img
                          src={value.file}
                          style={{ width: "100px", height: "100px" }}
                        />

                        {/* <img src={localStorage.getItem('image')} alt={'C - language'}/> */}
                      </td>

                      <td>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                          }}
                        >
                          <DeleteOutlineRoundedIcon
                            onClick={() => handleDelete(value.id)}
                            sx={{ color: "yellow", fontSize: "22px" }}
                          />
                        </button>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                          }}
                        >
                          <BorderColorIcon
                            onClick={() => handleEdit(value.id)}
                            sx={{ color: "blue", fontSize: "22px" }}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              );
            })
          : "no DAta"}
      </div>
    </>
  );
}
