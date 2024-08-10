import React, { useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addReview } from "../Feature/Review";


const ReviewForm = () => {
  const prodId = useParams()
  
    const [value, setValue] = useState(0);
    const [form,setForm] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {handleChange,handleSubmit,handleBlur,touched,errors,values,isValid} = useFormik({
      initialValues:{
        email:"",
        customerName:"",
        phoneNumber:"",
        price:"",
        quality:"",
        service:"",
        starRating:"",
      },
      validationSchema: yup.object({
        email:yup.string().email('Invalid email address').required('Required'),
        customerName:yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        phoneNumber:yup.number().typeError("Enter only Numeric value").min(3,'Atleast 3 Digits are required').required("Reqiured"),
        price:yup.string().required("Reqiured"),
        quality:yup.string().required('Required'),
        service:yup.string().required('Required'),
        starRating:yup.string().required('Required'),
      }),
      onSubmit: (v,{setSubmitting})=>{
        // console.log(v);
        setSubmitting(false)
        setForm(v)
        navigate("/submittedForm")
      }
    })

    const handleReview = (id)=>{
      dispatch(addReview(form,id))
    }


  return (
    <>
      <div className="reviewForm">
        <div className="heading">
          <h2>What do you say about this Product</h2>
        </div>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email address
            </label>
            <input type="email" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} className="form-control" id="inputEmail4" />
          {touched.email && errors.email ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.email }</div>) : ("")}
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Customer Name
            </label>
            <input type="text" value={values.customerName} onChange={handleChange} onBlur={handleBlur} name="customerName" className="form-control" id="inputPassword4" />
            {touched.customerName && errors.customerName ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.customerName }</div>) : ("")}
          </div>
          <div className="col-md-6">
            <label for="inputAddress" className="form-label">
              Phone Number
            </label>
            <input type="text" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} name="phoneNumber" className="form-control" id="inputAddress" />
            {touched.phoneNumber && errors.phoneNumber ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.phoneNumber }</div>) : ("")}
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <h5>Price</h5>
              <div className="radio-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="price"
                    value="Very Reasonable"
                    onChange={handleChange}
                     onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Very Reasonable
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange} onBlur={handleBlur}
                    name="price"
                    value="Reasonable"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Reasonable
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange} onBlur={handleBlur}
                    name="price"
                    value="neutral"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Neutral
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange} onBlur={handleBlur}
                    name="price"
                    value="expensive"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Expensive
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="price"
                    value="very Expensive"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    very Expensive
                  </label>
                </div>
              </div>
              {touched.price && errors.price ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.price }</div>) : ("")}
            </div>

            <div className="col-md-6">
              <h5>Overall quality?</h5>
              <div className="radio-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="quality"
                    value="Excellent"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Excellent
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="quality"
                    value="good"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Good
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange} onBlur={handleBlur}
                    name="quality"
                    value="fair"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Fair
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={handleChange} onBlur={handleBlur}
                    name="quality"
                    value="poor"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Poor
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="quality"
                    value="very poor"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Very Poor
                  </label>
                </div>
              </div>
              {touched.quality && errors.quality ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.quality }</div>) : ("")}
            </div>

            <div className="col-md-6">
              <h5>Service</h5>
              <div className="radio-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="service"
                    value="Best"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Best
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="service"
                    value="Good"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Good
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Neutral"
                    onChange={handleChange} onBlur={handleBlur}
                    name="service"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Neutral
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="service"
                    value="bad"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Bad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="service"
                    value="very bad"
                    onChange={handleChange} onBlur={handleBlur}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    very Bad
                  </label>
                </div>
              </div>
              {touched.service && errors.service ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.service }</div>) : ("")}
            </div>


            <div className="col-md-6">
              <h5></h5>
              <div className="radio-group">
              <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend" variant="h6" fontWeight={600}>Final Rating</Typography>
      <Rating
        name="starRating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleChange(event)
        }}
      />
      </Box>
              </div>
              {touched.starRating && errors.starRating ? (<div style={{color:'red',marginTop:"-1px"}}>{errors.starRating }</div>) : ("")}
            </div>

            <div className="col-md-6">
            <h5 >
              Leave a written review for others.
            </h5>
            <textarea rows={5}  className="form-control" id="inputAddress" />
          </div>


          </div>

          <div className="col-12 text-center my-5 ">
            <button type="submit" className="btn btn-primary" onClick={()=>handleReview(prodId.id)}>
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
