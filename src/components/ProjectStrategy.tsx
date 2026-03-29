import React from "react";

const items = [
  {
    title: "Reasoning-based and agentic AI",
    desc: "AI systems that can deliberate, justify decisions, and interact responsibly.",
  },
  {
    title: "AI and law",
    desc: "Legal reasoning, normative representation, and compliance-oriented AI.",
  },
  {
    title: "Machine ethics",
    desc: "Ethically aware AI systems and stakeholder-sensitive decision support.",
  },
  {
    title: "Trustworthy and explainable AI",
    desc: "Transparent, robust, and deployable AI for real-world settings.",
  },
  {
    title: "RegTech and FinTech applications",
    desc: "AI for high-accountability and regulated domains.",
  },
];

function ProjectStrategy() {
  return (
    <section className="project-strategy-section" id="project-strategy">
      <div className="project-strategy-shell">
        <div className="project-strategy-header">
          <p className="eyebrow">Research directions</p>
          <h1>Project Strategy</h1>
          <p className="intro">
            The collaboration focuses on developing new joint projects that leverage
            the complementarity between reasoning, law and ethics, and trustworthy AI.
          </p>
        </div>

        <div className="strategy-list">
          {items.map((item) => (
            <article className="strategy-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectStrategy;