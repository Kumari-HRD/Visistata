import { useNavigate } from "react-router-dom";
import SideImg from "../assets/heroSection.png";
import { StyledOutlineButton, StyledPrimaryButton } from "./styled-components";
function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="md:py-0 sm:py-2 w-12">
      <div className="grid col-10 m-auto gap-12">
        <section className="hero col-12 md:col-6">
          <h1 className="text-6xl space-grotesk">Empowering Careers Through Technology.</h1>
          <p className="text-xl text-muted-foreground">
            Visistata provides career-focused training in software development
            and quality assurance. Our expert-led courses are designed to equip
            you with the practical skills needed to excel in the tech industry.
          </p>
          <div className="flex gap-2">
            <StyledPrimaryButton
              onClick={() => navigate("/courses")}
              label="Explore Courses"
              icon="pi pi-check"
              iconPos="right"
            />
            <StyledOutlineButton onClick={() => navigate("/contact")}>
              {" "}
              Get in touch
            </StyledOutlineButton>
          </div>
        </section>
        <section className="col-12 md:col-6">
          <img src={SideImg} style={{ width: "100%" }} />
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
