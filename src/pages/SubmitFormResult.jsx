import React from 'react'

const SubmitFormResult = () => {
  return (
    <>
      <div className="main_container">
        <div>
            <i class="fa-solid fa-circle-check" style={{color:"green", fontSize:"60px", marginBlock: "10px"}}></i>
        </div>
        <div>
          <h5>Thank you for providing the feedback</h5>
          <p>We will work towards Improving your experience</p>
        </div>
        <button type="submit" className="btn btn-primary">
              Close
            </button>
      </div>
    </>
  )
}

export default SubmitFormResult
