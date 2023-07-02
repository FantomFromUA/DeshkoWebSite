import { 
  Box,
  Card,
  CardContent,
  Icon,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  title: string;
  icon: any;
}

const animateCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  console.log(icon)
  return (
    <Card
      ref={cardRef}
      sx={{
        animation: `${isVisible ? animateCard : ""} 1s ease`,
        width: "20vw",
        minHeight: "150px",
        transition: "background-color 0.3s",
        backgroundColor: "#9ba7b3",
        "&:hover": {
          backgroundColor: "#042c4b"
        },
      }}
    >
      <CardContent>
      <Typography
          sx={{            
            color: "white",
            textAlign: "end",
            pr: 2,
            fontSize: { xs: "h4.fontSize", sm: "h6.fontSize" },          
          }}
        >{icon}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "h6.fontSize", sm: "h5.fontSize" },        
            fontWeight: "bold",
            textAlign: "center",
            color: "white"
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
