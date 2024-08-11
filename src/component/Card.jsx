import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Carad({ prod }) {
  
  const ratingStar = Array.from({length:5},(elem,index)=>{
    let number = index + 0.5
    return (
      <span key={index}>
        {
          prod.rating.rate >= index + 1 ? (<FaStar className="icon"/>) : prod.rating.rate >= number ? (<FaStarHalfAlt className="icon"/> ) : (<AiOutlineStar className="icon"/>)
        }
      </span>
    )
  })
  
  return (
    <div>
      <Card sx={{ maxWidth: 340 }}>
      <img
    src={prod.image}
    alt={prod.title}
    style={{
      height: 200,
      width: 200,
      objectFit: 'contain', 
      cursor:"pointer"
    }}
  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{
            overflow:"hidden",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
            maxWidth:"400px"
          }}>
            {prod.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              display:"-webkit-box",
              WebkitBoxOrient:"vertical",
              WebkitLineClamp:2
            }}
          >
            {prod.description}
          </Typography>
          <Typography 
           sx={{
          fontSize:"15px",
          marginTop:"20px"
          }}
          >
            Rating: {ratingStar}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/productDetail/${prod.id}`} state={{prod:prod}}><Button size="small">Detail</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
}
