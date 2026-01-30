import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      className="py-6 md:py-6 w-12 px-4"
      style={{
        background: " hsl(var(--muted) / .4)",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="grid gap-5 mx-auto">
        <div className="md:col-4 mx-auto sm:col-5 col-5 ">
          <span
            className="text-xl font-semibold	space-grotesk"
            onClick={() => {
              navigate("/");
            }}
          >
            Visistata
          </span>
          <p className="text-sm	mt-3  text-muted-foreground">
            Visistata offers expert-led courses in software development and
            testing to help you land your next role in tech.
          </p>
        </div>
        <div className="md:col-2 mx-auto sm:col-5 col-5">
          <h4 className="font-semibold	space-grotesk">Courses</h4>
          <p className="text-sm	my-1  text-muted-foreground">Web Development</p>
          <p className="text-sm	my-1  text-muted-foreground">MERN Full Stack</p>
          <p className="text-sm	my-1  text-muted-foreground">
           Python Full Stack 
          </p>
          <p className="text-sm	my-1  text-muted-foreground">
           IOT & Smart Systems 
          </p>
          <p className="text-sm	my-1  text-muted-foreground">Drone Techonolgy</p>
          <p className="text-sm	my-1  text-muted-foreground">Career Development</p>
        </div>
        <div className="md:col-2 mx-auto sm:col-5 col-5">
          <h4 className="font-semibold	space-grotesk">Services</h4>

          <p className="text-sm	my-1  text-muted-foreground">College Training</p>
          <p className="text-sm	my-1  text-muted-foreground">
            Corporate Training
          </p>
          <p className="text-sm	my-1  text-muted-foreground">
            Interships & Projects
          </p>
          <p className="text-sm	my-1  text-muted-foreground">
            Individual Training
          </p>
          <p className="text-sm	my-1  text-muted-foreground">Hire from Us</p>
        </div>
        <div className="md:col-2 mx-auto sm:col-5 col-5">
          <h4 className="font-semibold	space-grotesk">Company</h4>
          <p className="text-sm	my-1  text-muted-foreground">About Us</p>
          <p className="text-sm	my-1  text-muted-foreground">Contact Us </p>
          <p className="text-sm	my-1  text-muted-foreground">Blog</p>
          <p className="text-sm	my-1  text-muted-foreground">
            Terms of Services
          </p>
          <p className="text-sm	my-1  text-muted-foreground">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
