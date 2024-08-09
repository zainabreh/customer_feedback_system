import React from "react";
import { Link } from "react-router-dom";

const ReviewTable = () => {
  return (
    <>
      <table class="table table-success table-striped review_table">
        <thead>
          <tr>
            <th scope="col">Form Details</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Price</th>
            <th scope="col">Quality</th>
            <th scope="col">Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><Link to={""}>View Detail</Link></th>
            <td>Mark</td>
            <td>zain@gmail.com</td>
            <td>12345678941</td>
            <td>Good</td>
            <td>Poor</td>
            <td>Neutral</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ReviewTable;
