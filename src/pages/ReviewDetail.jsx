import React from "react";
import { useParams } from "react-router-dom";

const ReviewDetail = () => {
  const {id} = useParams
  return (
    <>
      <table
        className="table table-borderless table-success review_table"
        style={{ backgroundColor: "aliceblue" }}
      >
        <thead>
          <tr>
            <th scope="col" style={{fontSize:"20px"}}>Form Details</th>
            <th scope="col" style={{fontSize:"20px"}}>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Customer Name</td>
            <td>{id.customerName}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Email</td>
            <td>{id.email}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Phone</td>
            <td>{id.phoneNumber}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Price</td>
            <td>{id.price}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Quality</td>
            <td>{id.quality}</td>
          </tr>

          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Service</td>
            <td>{id.service}</td>
          </tr>
        </tbody>
      </table>

      <div style={{textAlign:"center"
      }}>
        <h5>Overall Impression</h5>
        <p>{id.rating}</p>
      </div>
    </>
  );
};

export default ReviewDetail;
