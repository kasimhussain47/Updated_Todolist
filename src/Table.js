import React, { useState , useEffect } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";


export default function Table() {
  const [values, setValues] = useState([]);

  useEffect(()=>{
    const values =localStorage.getItem("values")
    setValues(JSON.parse(values))
},[])
  return (
    <>
      <div>
        { values.map((value) => {
           return ( 
            <> 
           
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                   
                    <th>Name</th>
                    
                    <th>Image</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>
                      {value.name}

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
                          }}
                          type="text"
                          //   value={fixData}
                        ></textarea>
                        &nbsp;&nbsp;
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                          }}
                        >
                          <DeleteOutlineRoundedIcon
                            sx={{ color: "yellow", fontSize: "22px" }}
                          />
                        </button>
                      </div>
                    </td>

                    <td>
                      {/* <img  style={{width:"100px",height:"100px"}}/> */}
                      {/* style={{width:"100px",height:"100px"}} onChange={(event)=>{setClick(event.target.value)}}  */}
                      <img src={value.file} style={{width:"100px",height:"100px"} }  
                    />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          ); 
        })} 
      </div>
    </>
  );
}
