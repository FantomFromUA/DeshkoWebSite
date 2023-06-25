import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const CalculatorPage: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" sx={{fontWeight: "bold", ml:"15%", my: 5}}>Розрахунок вартості</Typography>
      <Container
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            mb: 6
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="fullWidth"
        >
          <Tab
            label="В межах України"
            sx={{
              py: 5,
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "#042c4b",
                transition: "background-color 0.5s ease-out",
              },
            }}
          />
          <Tab
            label="За кордон"
            sx={{
              py: 5,
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "#042c4b",
                transition: "background-color 0.8s ease-out",
              },
            }}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Tab1 />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Tab2 />
        </TabPanel>
      </Container>
    </div>
  );
};

export default CalculatorPage;
