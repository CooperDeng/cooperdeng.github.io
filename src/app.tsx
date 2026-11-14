import { useLayoutEffect, useSyncExternalStore } from "react";

const projects = [
  {
    title: "Flapping-Wing Robot Control",
    tools: "Python / MATLAB",
    description:
      "Designed a state estimator and feedback controller for 3D trajectory tracking, then tested them on the flapping-wing platform at Waterloo RoboHub.",
  },
  {
    title: "RISC-V Processor Design",
    tools: "Verilog / Verilator",
    description:
      "Built and verified a 32-bit, five-stage RISC-V processor with data forwarding, hazard detection, and stalling.",
  },
  {
    title: "AI Chip IP Design",
    tools: "SystemVerilog / OpenROAD",
    description:
      "Took a self-attention hardware module from RTL to GDSII on Sky130HD and analyzed timing, area, and congestion.",
  },
  {
    title: "Embedded RTOS",
    tools: "Embedded C / STM32",
    description:
      "Built a real-time operating system with preemptive scheduling, dynamic task creation, and memory management on an ARM Cortex-M4.",
  },
];

const experience = [
  {
    organization: "ERABLab, University of Waterloo",
    role: "Undergraduate Research Assistant",
    dates: "Started Sep 2025",
    description:
      "Simulated and visualized distributed control behaviors for multi-robot systems, including consensus, flocking, and formation.",
  },
  {
    organization: "University of Waterloo",
    role: "CS136 Instructional Support Assistant",
    dates: "Jan–Apr 2025",
    description:
      "Maintained grading automation and helped students troubleshoot C++, shell scripts, and file management.",
  },
  {
    organization: "Southern University of Science and Technology",
    role: "Research Assistant",
    dates: "May–Aug 2024",
    description:
      "Built a Python API to parse XML and CSV data for research models and contributed to data cleaning and visualization tools.",
  },
  {
    organization: "University of Waterloo",
    role: "ECE150 WEEF Teaching Assistant",
    dates: "Aug–Dec 2023",
    description:
      "Guided students through programming projects and helped develop C++ learning modules and review sessions.",
  },
  {
    organization: "Forming and Crash Lab, University of Waterloo",
    role: "Research Assistant",
    dates: "Jan–Apr 2023",
    description:
      "Automated the extraction and formatting of material-testing data from Vic3D.",
  },
];

const cvUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const views = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "cv", label: "CV" },
] as const;

function getView() {
  const hash = window.location.hash.slice(1);
  return views.find(({ id }) => id === hash)?.id ?? "home";
}

function subscribeToView(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export default function App() {
  const view = useSyncExternalStore(subscribeToView, getView);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="site">
      <nav className="links site-nav" aria-label="Portfolio">
        {views.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={view === id ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>

      <main key={view} className={view === "home" ? "intro view" : "view content"}>
        {view === "home" && (
          <>
            <h1>Chengfeng/Cooper Deng</h1>
            <p>i like controls</p>
          </>
        )}

        {view === "projects" && (
          <>
            <h1>Projects</h1>
            <ul className="entries">
              {projects.map(({ title, tools, description }) => (
                <li key={title}>
                  <h2>{title}</h2>
                  <p className="note">{tools}</p>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {view === "experience" && (
          <>
            <h1>Experience</h1>
            <ul className="entries">
              {experience.map(({ organization, role, dates, description }) => (
                <li key={organization + role}>
                  <h2>{role}</h2>
                  <p className="note">{organization} · {dates}</p>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {view === "cv" && (
          <>
            <h1>CV</h1>
            <p><a href={cvUrl}>Open CV (PDF)</a></p>
            <iframe className="cv-preview" src={cvUrl} title="Chengfeng Deng’s CV" />
            <footer className="links" aria-label="Contact">
              <a href="https://github.com/CooperDeng">GitHub</a>
              <a href="https://www.linkedin.com/in/cooperdengg/">LinkedIn</a>
              <a href="mailto:c39deng@uwaterloo.ca">Email</a>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
