import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReviewTable = () => {
  const { reviewObj } = useSelector((v) => v.Review);


  return (
    <>
      <div className="table-responsive">
        <table className="table table-success  table-striped review_table">
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
            {reviewObj.map((data,index) => (
              <tr key={index}>
                <th>
                <Link to={`/reviewDetail/${data.id}?data=${encodeURIComponent(JSON.stringify(data))}`}>View Detail</Link>
                </th>
                <td>{data.customerName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.price}</td>
                <td>{data.quality}</td>
                <td>{data.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReviewTable;
