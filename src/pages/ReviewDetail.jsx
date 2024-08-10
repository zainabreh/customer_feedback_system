import React from "react";

const ReviewDetail = () => {
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
            <td>Mark</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Email</td>
            <td>zain@gmail.com</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Phone</td>
            <td>12345678941</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Price</td>
            <td>Good</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Quality</td>
            <td>Poor</td>
          </tr>

          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Service</td>
            <td>Neutral</td>
          </tr>
        </tbody>
      </table>

      <div style={{textAlign:"center"
      }}>
        <h5>Overall Impression</h5>
        <p>Stars</p>
      </div>
    </>
  );
};

export default ReviewDetail;
