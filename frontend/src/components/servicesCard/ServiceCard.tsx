import { 
  Card,
  CardContent,
  Icon,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  title: string;
  icon: string;
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

  return (
    <Card
      ref={cardRef}
      sx={{
        animation: `${isVisible ? animateCard : ""} 1s ease`,
        width: "20vw",
        minHeight: "150px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          cursor: "pointer",
        },
      }}
    >
      <CardContent>
        <Icon sx={{ color: "primary.main", mb: 1 }}>
          <img style={{ height: "100%" }} src={icon} alt=""/>
        </Icon>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
