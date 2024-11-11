import React from "react";
import {
  FaJava,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaPython
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiGithub,
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipseide,
  SiWebpack,
  SiApachekafka
} from "react-icons/si";
import "./TechStackData.css";

const techStackData = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython }
    ]
  },
  {
    category: "Frontend Technologies",
    technologies: [
      { name: "ReactJs", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Angular", icon: SiAngular },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript (ES6+)", icon: SiJavascript }
    ]
  },
  {
    category: "Backend Technologies",
    technologies: [
      { name: "NodeJs", icon: FaNodeJs },
      { name: "Express", icon: FaNodeJs },
      { name: "Spring", icon: SiSpring },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Hibernate", icon: SiHibernate },
      { name: "RESTful APIs", icon: SiSpringboot },
      { name: "Microservices", icon: SiSpringboot }
    ]
  },
  {
    category: "Databases",
    technologies: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql }
    ]
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      {
        name: "AWS (EC2, S3, Lambda, DynamoDB, CodeDeploy, SageMaker)",
        icon: FaAws
      },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub", icon: SiGithub }
    ]
  },
  {
    category: "Tools/Software",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "IntelliJ IDEA", icon: SiIntellijidea },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "Webpack", icon: SiWebpack },
      { name: "Apache Kafka", icon: SiApachekafka }
    ]
  },
  {
    category: "Data Structures & Algorithms",
    technologies: [
      {
        name: "Strong knowledge of algorithms and data structures",
        icon: FaJava
      }
    ]
  }
];

const TechStackList = () => {
  return (
    <div className="tech-stack-list">
      {techStackData.map((section, index) => (
        <div key={index} className="tech-section">
          <h3>{section.category}</h3>
          <div className="tech-icons">
            {section.technologies.map((tech, idx) => (
              <div key={idx} className="tech-icon" title={tech.name}>
                {React.createElement(tech.icon)}
                <span className="tooltip">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackList;




