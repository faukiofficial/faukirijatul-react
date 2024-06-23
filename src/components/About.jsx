import "../styles/About.css";
import { TiHtml5 } from "react-icons/ti";
import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNode,
  FaVuejs,
  FaGithub,
} from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiNestjs, SiMysql, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          dolorum!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dicta, accusamus perspiciatis dolores similique incidunt totam, rem
          odio aliquam vero ad voluptas ullam! Laudantium facere ex, totam
          possimus libero exercitationem?
        </p>
        <h4>Programming Languages & Tools</h4>
        <div className="skills">
          <TiHtml5 />
          <FaCss3Alt />
          <TbBrandJavascript />
          <FaBootstrap />
          <RiTailwindCssFill />
          <FaReact />
          <RiNextjsLine />
          <FaVuejs />
          <FaNode />
          <SiExpress />
          <SiNestjs />
          <SiMysql />
          <SiMongodb />
          <FaGithub />
        </div>
      </div>
    </section>
  );
};

export default About;
