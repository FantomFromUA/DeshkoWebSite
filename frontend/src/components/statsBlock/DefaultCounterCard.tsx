import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";
import { keyframes } from "@emotion/react";

interface CounterCardProps {
  title: string;
  count: number;
  description: string;
}

const animateCount = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DefaultCounterCard: React.FC<CounterCardProps> = ({
  title,
  count,
  description,
}) => {
  return (
    <Card sx={{minWidth: 200, border: "none", boxShadow: "none", display: "flex", backgroundColor: "#fbfafa"}}>
      <CardContent sx={{alignContent:"center", justifyContent:"stretch"}}>
        <Typography variant="h5"  sx={{
              fontFamily: '"Helvetica Neue"',
              fontWeight: "bold",
              color: "#042c4b",
              textAlign:"center"
            }}>
          {title}
        </Typography>
        <Typography
          variant="h3" 
          sx={{
            mt: 2,
            color: "#085b9c",
            textAlign:"center",
            animation: `${animateCount} 1s ease`,
          }}
        >
          <CountUp start={0} end={count} duration={2}/>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DefaultCounterCard;
