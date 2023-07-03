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
                   
                  fontWeight: "bold",
                }}
              >
                Якими видами перевезень займається Deshko Company?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Deshko Company спеціалізується на автомобільних вантажних
                перевезеннях. Вона здійснює перевезення вантажів з країн
                Євросоюзу до України та в зворотному напрямку.
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
                   
                  fontWeight: "bold",
                }}
              >
                З яких країн Євросоюзу здійснюється перевезення?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Deshko Company здійснює перевезення з усіх країн Євросоюзу.
                Незалежно від того, з якої країни ви потребуєте перевезення,
                Deshko Company може надати послуги з доставки вашого вантажу.
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
                   
                  fontWeight: "bold",
                }}
              >
                Як можу замовити перевезення від Deshko Company?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Для замовлення перевезення від Deshko Company ви можете
                зв'язатися з нашим клієнтським сервісом. Ми надамо вам всю
                необхідну інформацію щодо процесу замовлення та відповімо на
                ваші запитання
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
                   
                  fontWeight: "bold",
                }}
              >
                Які типи вантажу можуть бути перевезені Deshko Company?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Deshko Company здійснює перевезення різних типів вантажу,
                включаючи палетизований товар, контейнери, великогабаритні
                вантажі та інше. Вони мають досвід у роботі з різними видами
                вантажів і можуть забезпечити відповідність вимогам перевезення
                вашого товару.
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
