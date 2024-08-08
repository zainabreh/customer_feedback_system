import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Carad({ prod }) {
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
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
