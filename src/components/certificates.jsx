import "./certificates.css";
import { useMemo, useState } from "react";

/* ===== Images ===== */
import linkedinGenAI from "../assets/certificates/linkedin-generative-ai.jpg";
import ultimateReact from "../assets/certificates/ultimate-react-udemy.jpg";

import ibmMarketing from "../assets/certificates/ibm-marketing.jpg";
import matlabML from "../assets/certificates/matlab-ml-onramp.jpg";

import jsPhp from "../assets/certificates/javascript-php-udemy.jpg";
import gitMasterclass from "../assets/certificates/git-masterclass-udemy.jpg";
import javaBeginner from "../assets/certificates/java-beginner-udemy.jpg";
import dsaJava from "../assets/certificates/dsa-java-udemy.jpg";
import gitFundamentals from "../assets/certificates/git-fundamentals-udemy.jpg";
import sqlIBM from "../assets/certificates/sql-ibm.jpg";

import reactBeginners from "../assets/certificates/react-beginners-udemy.jpg";
import jsZeroToExpert from "../assets/certificates/js-zero-to-expert-udemy.jpg";
import agileScrum from "../assets/certificates/agile-scrum-udemy.jpg";
import projectManagement from "../assets/certificates/project-management-udemy.jpg";
import introToAI365 from "../assets/certificates/intro-to-ai-365.jpg";
import htmlCssJonas from "../assets/certificates/html-css-udemy.jpg";

export default function Certificates() {
  const [filter, setFilter] = useState("all");

  // Filter bar (added 365 + renamed IBM -> Cognitive Class)
  const FILTERS = [
    { key: "all", label: "All" },
    { key: "udemy", label: "Udemy" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "ibmi", label: "IBMI" },
    { key: "mathworks", label: "MathWorks" },
    { key: "cognitive", label: "Cognitive Class" },
    { key: "365", label: "365 Data Science" },
  ];

  const certificates = useMemo(
    () => [
      /* ===== LinkedIn ===== */
      {
        id: "linkedin-generative-ai",
        title: "What Is Generative AI?",
        issuer: "LinkedIn Learning",
        type: "linkedin",
        image: linkedinGenAI,
        date: "Nov 2024",
        description:
          "Introduction to Generative AI concepts, tools, and real-world applications.",
        skills: ["Generative AI", "AI Tools", "Artificial Intelligence"],
        link: "https://www.linkedin.com/learning/certificates/b2484cfc9424e781e7edc8d1d267003604a252dcbcb16b8912fac7eda743d06a",
      },

      /* ===== Udemy ===== */
      {
        id: "ultimate-react",
        title: "The Ultimate React Course 2025",
        issuer: "Udemy",
        type: "udemy",
        image: ultimateReact,
        date: "Dec 2025",
        description: "React, Next.js, Redux, hooks, and modern best practices.",
        skills: ["React", "Next.js", "Redux", "JavaScript"],
        link: "https://www.udemy.com/certificate/UC-5c823e66-5da7-40a1-b7e0-897cd070194b/",
      },
      {
        id: "js-php",
        title: "JavaScript & PHP Programming Complete Course",
        issuer: "Udemy",
        type: "udemy",
        image: jsPhp,
        date: "Oct 2025",
        description: "JavaScript + PHP fundamentals and practical projects.",
        skills: ["JavaScript", "PHP"],
        link: "https://www.udemy.com/certificate/UC-3519165f-b2b9-42d7-acd9-26f8fb7d26f5/",
      },
      {
        id: "git-masterclass",
        title: "Git & GitHub MasterClass",
        issuer: "Udemy",
        type: "udemy",
        image: gitMasterclass,
        date: "Dec 2025",
        description: "Git workflow, commands, and GitHub essentials.",
        skills: ["Git", "GitHub"],
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cd464241-51e0-4dd0-961c-7732ec23eacb.pdf",
      },
      {
        id: "java-beginner",
        title: "Java for Absolute Beginners",
        issuer: "Udemy",
        type: "udemy",
        image: javaBeginner,
        date: "Jun 2023",
        description: "Java fundamentals for beginners.",
        skills: ["Java"],
        link: "https://www.udemy.com/certificate/UC-8e3d7633-b6dd-4fb2-881e-9f95f16e5c8a/",
      },
      {
        id: "dsa-java",
        title: "Data Structures & Algorithms Using Java",
        issuer: "Udemy",
        type: "udemy",
        image: dsaJava,
        date: "Oct 2025",
        description: "Deep dive into DSA with Java implementations.",
        skills: ["DSA", "Java"],
        link: "https://www.udemy.com/certificate/UC-b2214f37-a514-4612-996a-b1633608d3ec/",
      },
      {
        id: "git-fundamentals",
        title: "Git, GitLab & GitHub Fundamentals",
        issuer: "Udemy",
        type: "udemy",
        image: gitFundamentals,
        date: "Nov 2025",
        description: "Git basics plus GitHub/GitLab usage for developers.",
        skills: ["Git", "Version Control"],
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1ef1ee9b-692e-47fd-9ca5-2e0f24319d9c.pdf",
      },
      {
        id: "react-beginners",
        title: "ReactJs - The Complete ReactJs Course For Beginners",
        issuer: "Udemy ",
        type: "udemy",
        image: reactBeginners,
        date: "Dec 2025",
        description: "React basics: components, props, state, and hooks.",
        skills: ["React", "JavaScript"],
        link: "https://www.udemy.com/certificate/UC-bc335f76-d6dd-4f08-b915-e14767bd35aa/",
      },
      {
        id: "js-zero-to-expert",
        title: "The Complete JavaScript Course 2024: From Zero to Expert!",
        issuer: "Udemy ",
        type: "udemy",
        image: jsZeroToExpert,
        date: "Nov 2024",
        description: "JavaScript from fundamentals to advanced concepts.",
        skills: ["JavaScript", "DOM", "ES6+"],
        link: "https://www.udemy.com/certificate/UC-50e4e904-8e02-4bae-a917-9429b557b0e9/",
      },
      {
        id: "agile-scrum",
        title: "Master Agile & Scrum Basics",
        issuer: "Udemy",
        type: "udemy",
        image: agileScrum,
        date: "Oct 2025",
        description: "Agile mindset and Scrum framework essentials.",
        skills: ["Agile", "Scrum"],
        link: "https://www.udemy.com/certificate/UC-453fde2b-80c1-4567-ada1-1d6e96e86fb2/",
      },
      {
        id: "project-management",
        title: "The Project Management Course: Beginner to PROject Manager",
        issuer: "Udemy ",
        type: "udemy",
        image: projectManagement,
        date: "Nov 2025",
        description: "Project management fundamentals and practical tools.",
        skills: ["Project Management", "Planning"],
        link: "https://www.udemy.com/certificate/UC-fddb48fd-125e-4341-8a21-9c2fe368c6f9/",
      },
      {
        id: "html-css",
        title: "Build Responsive Real-World Websites with HTML and CSS",
        issuer: "Udemy ",
        type: "udemy",
        image: htmlCssJonas,
        date: "Nov 2025",
        description: "Modern HTML/CSS and responsive layout techniques.",
        skills: ["HTML", "CSS", "Responsive Design"],
        link: "https://www.udemy.com/certificate/UC-6eaf5d66-d21c-4533-bc97-aae5bc42e8aa/",
      },

      /* ===== IBMI ===== */
      {
        id: "ibmi-marketing",
        title: "Marketing & Communications",
        issuer: "IBMI",
        type: "ibmi",
        image: ibmMarketing,
        date: "Dec 2022",
        description: "Certificate in Marketing and Communications.",
        skills: ["Marketing", "Communication"],
        link: "https://www.ibm-institute.com/certificates/course-certificate/?quiz=1569&cert-nonce=b154541a0a&time=1672065788",
      },

      /* ===== MathWorks ===== */
      {
        id: "matlab-ml",
        title: "Machine Learning Onramp",
        issuer: "MathWorks",
        type: "mathworks",
        image: matlabML,
        date: "Dec 2024",
        description: "Self-paced ML fundamentals using MATLAB.",
        skills: ["Machine Learning", "MATLAB"],
        link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=25320e10-7ddf-4725-b761-aa99ca73fe28",
      },

      /* ===== Cognitive Class (IBM) ===== */
      {
        id: "sql-cognitive-class",
        title: "SQL & Relational Databases 101",
        issuer: "Cognitive Class (IBM)",
        type: "cognitive",
        image: sqlIBM,
        date: "Sep 2024",
        description: "SQL basics and relational database fundamentals.",
        skills: ["SQL", "Databases"],
        link: "https://courses.cognitiveclass.ai/certificates/8332dcabaf54460fb53dd1c49ef5c70c",
      },

      /* ===== 365 Data Science ===== */
      {
        id: "intro-ai-365",
        title: "Intro to AI",
        issuer: "365 Data Science",
        type: "365",
        image: introToAI365,
        date: "Nov 2025",
        description: "Introductory AI concepts and fundamentals.",
        skills: ["AI Fundamentals", "Intro to AI"],
        link: "https://learn.365datascience.com/certificates/CC-CE5F68567E/",
      },
    ],
    []
  );

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter((c) => c.type === filter);

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__heading">
        <h2>Certificates</h2>
        <p>Professional and academic certificates from learning platforms.</p>
      </div>

      {/* ===== Filters ===== */}
      <div className="certificates__filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={filter === f.key ? "active" : ""}
            onClick={() => setFilter(f.key)}
            type="button"
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ===== Grid ===== */}
      <div className="certificates__grid">
        {filteredCertificates.map((c) => (
          <article className="cert-card" key={c.id}>
            <div className="cert-card__img">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>

            <div className="cert-card__body">
              <div className="cert-card__top">
                <h3>{c.title}</h3>
                <span className="cert-card__issuer">{c.issuer}</span>
              </div>

              {c.description ? (
                <p className="cert-card__desc">{c.description}</p>
              ) : null}

              <div className="cert-card__chips">
                {c.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cert-card__footer">
                <span className="cert-card__date">{c.date}</span>

                {c.link ? (
                  <a
                    className="cert-card__link"
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate
                  </a>
                ) : (
                  <span className="cert-card__nolink">No link</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
