import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";

const ReviewDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataString = queryParams.get('data');
  let data;

  const ratingLabels = {
    1: "Bad",
    2: "Fair",
    3: "Good",
    4: "very Good",
    5: "Excellent",
  }

  if (dataString) {
    data = JSON.parse(decodeURIComponent(dataString));
  }

  const ratingStar = Array.from({length:5},(elem,index)=>{
    let number = index + 0.5
    return (
      <>
      <span key={index}>
        {
          data.starRating >= index + 1 ? (<FaStar className="icon"/>) : data.starRating >= number ? (<FaStarHalfAlt className="icon"/> ) : (<AiOutlineStar className="icon"/>)
        }
      </span>
    </>
    )
  })
  const label = ratingLabels[Math.floor(data.starRating)]
  
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
            <td>{data.customerName}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Email</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Phone</td>
            <td>{data.phoneNumber}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Price</td>
            <td>{data.price}</td>
          </tr>
          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Quality</td>
            <td>{data.quality}</td>
          </tr>

          <tr>
            <td scope="col" style={{fontWeight:"600"}}>Service</td>
            <td>{data.service}</td>
          </tr>
        </tbody>
      </table>

      <div style={{textAlign:"center"
      }}>
        <h5>Overall Impression</h5>
        <h6>{ratingStar}</h6>
        <h4>{label}</h4>
      </div>
    </>
  );
};

export default ReviewDetail;
