import "./portfolio.css";

import IMG1 from "../../assets/GoluMolu.png";
import IMG2 from "../../assets/job.jpeg";
import IMG3 from "../../assets/Graph.jpeg";
import IMG4 from "../../assets/fork.jpeg";
import IMG5 from "../../assets/spoty.jpg";
import React from "react";


const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Full Stack GoluMolu",
      img: IMG1,
      description: "Developed a full-stack social media platform with React.js, Node.js, MongoDB, JWT authentication, real-time chat, follow/unfollow features, and user profile management.",
      technologies: "HTML | CSS | JavaScript | React.js | Node.js | MongoDB | Socket.io | JWT",
      link: "https://full-stack-golumolu.onrender.com/",
      github: "https://github.com/Samrat-Suraj/Full-Stack-GoluMolu",
    },
    {
      id: 2,
      title: "Full Stack Job-Seeking Platform",
      img: IMG2,
      description: "Developed a job-seeking platform with secure authentication, company profile management, job posting, advanced search filters, and dark mode for enhanced user experience.",
      technologies: "HTML | CSS | JavaScript | React.js | Node.js | MongoDB | JWT",
      link: "https://job-port-dryp.onrender.com/",
      github: "https://github.com/Samrat-Suraj/Full-Stack-Job-Port-3.0",
    },

    {
      id: 3,
      title: "Expense Management Platform",
      img: IMG3,
      description: "Developed an expense management platform with user authentication, financial record management (add, edit, delete), and integrated RESTful API for seamless back-end communication.",
      technologies: "HTML | CSS | JavaScript | React.js | Node.js | MongoDB | RESTful API | JWT",
      link: "https://graphqls.onrender.com/",
      github: "https://github.com/Samrat-Suraj?tab=repositories",
    },
    {
      id: 4,
      title: "ForkFly Food Ordering Platform (Frontend)",
      img: IMG4,
      description: "Designed and developed a responsive, mobile-friendly food ordering platform with an intuitive UI for seamless user experience.",
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7278696540183887872/",
      github: "https://github.com/Samrat-Suraj/ForkFly-Frontend-Project",
    },
    {
      id: 5,
      title: "Full Stack Spotify Clone 🎧",
      img: IMG5,
      description: "Developed a full-stack music streaming platform with responsive design, music streaming features, and seamless performance across all devices.",
      features: "Music Streaming: Stream your favorite songs on the go.Responsive Design: Optimized for flawless music streaming on any device.",
      technologies: "MongoDB | Express.js | React.js | Node.js | Tailwind CSS",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7254387132973154307/",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <p className="para">* Note : - Project demo links may take some time to open due to free hosting.</p>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {
                pro.github ?
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    {pro?.github ? "GitHub" : ""}
                  </a>
                  : <></>
              }
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
