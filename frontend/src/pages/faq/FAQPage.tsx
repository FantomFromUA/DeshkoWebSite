import React from "react";
import "./faqPage.css";
import BannerHero from "../../components/bannerHero/BannerHero";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import QuestionHero from "../../components/questionHero/QuestionHero";
import InfoBar from "../../components/infoBar/InfoBar";

const FAQPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <BannerHero />
      <InfoBar />
      <div className="faq-image-container">
        <div className="faq-image">
          <div className="faq-text-container">
            <Typography
              variant="h2"
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              FAQ
            </Typography>
          </div>
        </div>
      </div>

      <div className="faq-main-div">
        <div className="faq-accordion-div">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="faq-accordion"
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontWeight: "bold",
                }}
              >
                Текст 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Текст 1 - підпис
                Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="faq-accordion"
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontWeight: "bold",
                }}
              >
                Текст 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Текст 2 - підпис
                Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="faq-accordion"
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontWeight: "bold",
                }}
              >
                Текст 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Текст 3 - підпис
                Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className="faq-accordion"
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontWeight: "bold",
                }}
              >
                Текст 4
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Текст 4 - підпис
                Текст4Текст4Текст4Текст4Текст4Текст4Текст4Текст4
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <QuestionHero />
    </div>
  );
};

export default FAQPage;
