import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { prod } = location.state;
  console.log(prod);

  const { reviewObj } = useSelector((v) => v.Review);

  console.log(reviewObj);

  const starRatingValues = reviewObj.map((review) => review.starRating);

  // const ratingStars = starRatingValues.map((starRatingValue) => {
  //   return Array.from({ length: 5 }, (elem, idx) => {
  //     let number = idx + 0.5;
  //     return (
  //       <span key={idx}>
  //         {starRatingValue >= idx + 1 ? (
  //           <FaStar className="icon" />
  //         ) : starRatingValue >= number ? (
  //           <FaStarHalfAlt className="icon" />
  //         ) : (
  //           <AiOutlineStar className="icon" />
  //         )}
  //       </span>
  //     );
  //   });
  // });

  return (
    <>
      <div className="container">
        <div className="card mb-3" style={{ maxWidthidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4 image">
              <img
                src={prod.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="cards">
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text price">
                    Price: <span>${prod.price}</span>
                  </p>
                  <p>Rating: {prod.rating.rate}</p>
                  <p className="card-text">{prod.description}</p>
                </div>
                <button className="buy-now-btn">Buy Now</button>
                <Link to={`/reviewForm/${prod.id}`} state={{ prod: prod }}>
                  <button className="add-feedback-btn">Add Feedback</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="feedbackContainer">
        <h1 style={{ textAlign: "center" }}>Cutomer Feedback</h1>
        <br />
        <ul class="list-group">
          {!reviewObj ?  (
            <div style={{ textAlign: "center" }}>
              <h4>No Feedback</h4>
            </div>
          ) : (
            reviewObj.map((da) => {
              const starRatingValue = da.starRating;
              const ratingStars = Array.from({ length: 5 }, (elem, idx) => {
                let number = idx + 0.5;
                return (
                  <span key={idx}>
                    {starRatingValue >= idx + 1 ? (
                      <FaStar className="icon" />
                    ) : starRatingValue >= number ? (
                      <FaStarHalfAlt className="icon" />
                    ) : (
                      <AiOutlineStar className="icon" />
                    )}
                  </span>
                );
              });

              return (
                <li class="list-group-item">
                  <h5 className="cusName">{da.customerName}</h5>
                  <p style={{ fontWeight: "700" }}>Rating: {ratingStars}</p>
                  <p>{da.description}</p>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default ProductDetail;
