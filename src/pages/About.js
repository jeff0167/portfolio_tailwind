import '../App.scss';
import { useNavigate } from "react-router-dom";
import resume from '../images/Resume_opaque.png';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function About() { 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  return (
    <div>
      <RiArrowLeftCircleFill class="backArrow" onClick={()=> navigate("../portfolio_tailwind")}></RiArrowLeftCircleFill>
      <div class="header">
        <div class="container">
              <div style={{ width: '80rem' }}>
                <div class="bg-transparent">
                    <img alt="Resume" src={resume}/> 
                  </div>
              </div>
        </div>
      </div>
      <div class="fixed bottom-0 right-0 infoCard">
        <div class="bg-zinc-800 inline-block flex flex-row pt-10 pb-10" style={{ width: '15rem' }}>
            <a href="https://github.com/jeff0167"><BsGithub class="iconLink extraMarginLeft"></BsGithub></a>
            <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da"><BsLinkedin class="iconLink"></BsLinkedin></a>
            <a href="https://github.com/jefferen"><BsGithub class="iconLink extraMarginLeft"></BsGithub></a>
        </div>
      </div> 
  </div>
  );
}

export default About;