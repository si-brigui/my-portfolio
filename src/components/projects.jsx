import { useMemo, useState } from "react";
import "./Projects.css";

// Images (adjust names if yours differ)
import coffeeParadiseImg from "../assets/projects/coffee-paradise.jpeg";
import omnifoodImg from "../assets/projects/omnifood.jpeg";
import textSummarizerImg from "../assets/projects/text-summarizer.jpeg";
import tripChecklistImg from "../assets/projects/trip-checklist.jpeg";

import guessMyNumberImg from "../assets/projects/guess-my-number.jpeg";
import dailyPlannerImg from "../assets/projects/daily-planner.jpeg";
import classyWeatherImg from "../assets/projects/classy-weather.jpeg";
import expenseTrackerImg from "../assets/projects/expense-tracker.jpeg";
import eatNSplitImg from "../assets/projects/eat-n-split.jpeg";

import imageSearchImg from "../assets/projects/image-search.jpeg";
import reactQuizImg from "../assets/projects/react-quiz.jpeg";
import phpLoginImg from "../assets/projects/php-login.jpeg";

const TABS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "course", label: "Course" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = useMemo(
    () => [
      {
        id: "coffee-paradise",
        title: "Coffee Paradise Website",
        badge: "Student Project",
        category: "web",
        image: coffeeParadiseImg,
        description:
          "Responsive coffee shop website with sections for menu, testimonials, gallery, and a contact form.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: "omnifood",
        title: "Omnifood Website",
        badge: "Course Project",
        category: "course",
        image: omnifoodImg,
        description:
          "Responsive marketing website for an AI food subscription service with JavaScript interactivity (Jonas Schmedtmann course).",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: "classy-weather",
        title: "Classy Weather",
        badge: "Course Project",
        category: "course",
        image: classyWeatherImg,
        description:
          "Class-based React weather app using Open-Meteo API. Search any city and view a clean 7-day forecast.",
        tech: ["React (Class)", "CSS", "API"],
      },
      {
        id: "text-summarizer",
        title: "Text Summarizer",
        badge: "Student Project",
        category: "web",
        image: textSummarizerImg,
        description:
          "Web app that summarizes text into concise output. Supports direct input, uploading text files, and downloading/sharing the summary.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: "trip-checklist",
        title: "Trip Checklist App",
        badge: "Course Project",
        category: "course",
        image: tripChecklistImg,
        description:
          "React checklist app for packing items, tracking progress, and staying organized (course-based learning project).",
        tech: ["React", "CSS"],
      },
      {
        id: "image-search",
        title: "Image Search Engine",
        badge: "Student Project",
        category: "web",
        image: imageSearchImg,
        description:
          "Image search engine powered by the Unsplash API with a responsive masonry-style layout.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
      },
      {
        id: "react-quiz",
        title: "React Quiz",
        badge: "Course Project",
        category: "course",
        image: reactQuizImg,
        description:
          "Quiz app with timer, progress bar, score tracking, and saved high score.",
        tech: ["React", "JavaScript"],
      },
      {
        id: "daily-planner",
        title: "Daily Planner",
        badge: "Student Project",
        category: "web",
        image: dailyPlannerImg,
        description:
          "Minimal daily task planner with CRUD, filters (all/open/done), and LocalStorage persistence.",
        tech: ["React", "Vite", "Tailwind"],
      },

      {
        id: "eat-n-split",
        title: "Split Bill App (Eat-N-Split)",
        badge: "Course Project",
        category: "course",
        image: eatNSplitImg,
        description:
          "React app to split bills with friends and track balances (who owes whom). Built to practice core React fundamentals.",
        tech: ["React", "CSS"],
      },

      {
        id: "guess-my-number",
        title: "Guess My Number!",
        badge: "Course Project",
        category: "course",
        image: guessMyNumberImg,
        description:
          "Tiny browser game: guess a secret number (1–20), get feedback (too high/low), score tracking, and session high score.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: "expense-tracker",
        title: "Expense Tracker",
        badge: "Student Project",
        category: "web",
        image: expenseTrackerImg,
        description:
          "Set a monthly budget, add/edit/delete expenses, track totals, toggle light/dark mode, and persist data in LocalStorage.",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      },
      {
        id: "php-login-register",
        title: "PHP Login & Register (User/Admin)",
        badge: "Student Project",
        category: "web",
        image: phpLoginImg,
        description:
          "Minimal PHP authentication starter with user/admin roles, secure password hashing, sessions, and clean redirects.",
        tech: ["PHP", "MySQL", "MySQLi", "Auth", "Sessions"],
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab, projects]);

  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h2>Projects</h2>
        <p>
          A selection of student and course projects built to practice modern
          web development.
        </p>
      </div>

      <div className="projects__tabs" role="tablist" aria-label="Project tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`projects__tab ${
              activeTab === t.key ? "is-active" : ""
            }`}
            onClick={() => setActiveTab(t.key)}
            type="button"
            role="tab"
            aria-selected={activeTab === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-card__imageWrap">
              <img className="project-card__img" src={p.image} alt={p.title} />
            </div>

            <div className="project-card__body">
              <div className="project-card__top">
                <h3 className="project-card__title">{p.title}</h3>
                <span className="project-card__badge">{p.badge}</span>
              </div>

              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tech">
                {p.tech.map((tag) => (
                  <span key={tag} className="project-card__chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
