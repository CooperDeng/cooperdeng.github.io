import { useEffect } from "react";
import logo from "./assets/logo.png";
import PixelFlowBackground from "./PixelFlowBackground";

export default function MinimalistControlsPortfolio() {
  const projects = [
    {
      title: "Flapping-Wing Robot Control",
      tag: "control / estimation / robotics",
      desc: "Built a digital control framework with state-space modeling, observer design, pole-placement control, and trajectory tracking. Validated performance through simulation and on-hardware testing.",
    },
    {
      title: "RISC-V Processor Design",
      tag: "verilog / computer architecture / verification",
      desc: "Designed and verified a 32-bit five-stage pipelined RISC-V processor with hazard detection, data forwarding, stalling, and cycle-level validation using Verilator and GTKWave.",
    },
    {
      title: "AI Chip IP Design",
      tag: "systemverilog / asic / openroad",
      desc: "Integrated a self-attention hardware module into a full RTL-to-GDSII ASIC flow, working through synthesis, placement, routing, timing analysis, and physical design inspection.",
    },
    {
      title: "Embedded RTOS",
      tag: "embedded c / stm32 / arm",
      desc: "Built a real-time operating system with task scheduling, memory management, interrupts, and low-level execution support on an ARM Cortex-M4 platform.",
    },
  ];

  const links = [
    { label: "GitHub", href: "https://github.com/CooperDeng" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cooperdengg/" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Email", href: "mailto:c39deng@uwaterloo.ca" },
  ];

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.style.scrollBehavior = "smooth";
    html.style.backgroundColor = "#09090b";
    body.style.margin = "0";
    body.style.backgroundColor = "#09090b";
    body.style.color = "#f4f4f5";
    body.style.overscrollBehavior = "none";

    const styleId = "minimalist-controls-portfolio-reveal-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        #root {
          min-height: 100vh;
          background: #09090b;
        }
      
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms ease;
          will-change: opacity, transform;
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-mono selection:bg-zinc-200 selection:text-zinc-900">
      <PixelFlowBackground />
      <div className="fixed inset-0 pointer-events-none opacity-[0.025]" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="mb-20 flex items-center justify-between border-b border-zinc-800 pb-4 text-sm uppercase tracking-[0.24em] text-zinc-400">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-5 w-auto opacity-90" />
            <div>{"<cooper_deng/>"}</div>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="transition hover:text-zinc-100">
              about
            </a>
            <a href="#projects" className="transition hover:text-zinc-100">
              projects
            </a>
            <a href="#contact" className="transition hover:text-zinc-100">
              contact
            </a>
          </nav>
        </header>

        <section
          data-reveal
          className="grid flex-1 items-center gap-12 pb-20 lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-zinc-800 px-3 py-1 text-xs uppercase tracking-[0.22em] text-zinc-400">
              systems / control / compute
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-6xl">
              Building robust,
              <br />
              structured platforms with a focus on
              <span className="text-zinc-400"> control systems</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I work across control systems, embedded software, and digital
              hardware. This site is a small corner of the internet for
              selected projects, technical interests, and ongoing work.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl border border-zinc-700 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:translate-y-[-1px]"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                get in touch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 text-xs uppercase tracking-[0.22em] text-zinc-500">
                terminal
              </span>
            </div>

            <div className="space-y-3 text-sm leading-7 text-zinc-300">
              <div>
                <span className="text-zinc-500">&gt;</span> name ={" "}
                <span className="text-zinc-100">"Cooper_Deng"</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt;</span> focus = [
                "controls", "embedded", "digital_design"]
              </div>
              <div>
                <span className="text-zinc-500">&gt;</span> university ={" "}
                <span className="text-zinc-100">"UWaterloo"</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt;</span> level_of_study ={" "}
                {"{"}
              </div>
              <div className="ml-6">
                undergrad:{" "}
                <span className="text-zinc-100">"ECE honours, co-op"</span>
              </div>
              <div className="ml-6">
                next:{" "}
                <span className="text-zinc-100">
                  "graduate studies in SYDE / ECE"
                </span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </section>

        <section
          data-reveal
          id="about"
          className="grid gap-8 border-t border-zinc-800 py-16 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              01 / about
            </p>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I am interested in systems that feel precise: control loops,
              motion control and estimation, embedded implementation,
              hardware-aware design, and the mathematical structure underneath
              them.
            </p>
            <p>
              I am especially drawn to work in settings where models, signals,
              and algorithms have to survive contact with real constraints —
              especially in robotics, automotive, and hardware-software systems.
            </p>
          </div>
        </section>

        <section
          data-reveal
          id="projects"
          className="border-t border-zinc-800 py-16"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              02 / projects
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {item.tag}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          data-reveal
          id="contact"
          className="border-t border-zinc-800 py-16"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              03 / contact
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}