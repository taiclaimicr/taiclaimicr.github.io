import React from "react";
import mock01 from '../assets/images/mock01.png';
import serafin from '../assets/images/serafin.png';
import recall from '../assets/images/recall.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import eai from '../assets/images/eai.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects-people">

        <h1>Projects & People</h1>

        <h2 style={{ marginBottom: "20px" }}>Projects</h2>

        <div className="projects-grid">

            <div className="project">
                <img src={recall} className="zoom" alt="RECALL" width="100%"/>
                <h2>RECALL (2026–2029)</h2>
                <p>
                    Reasoning and Explaining CAusality and Liability through Legal AI.
                    The project develops hybrid AI methods combining formal argumentation
                    and large language models to reason about and explain causality and
                    legal liability in computational law.
                </p>
            </div>

            <div className="project">
                <img src={serafin} className="zoom" alt="SERAFIN" width="100%"/>
                <h2>SERAFIN (2025–2028)</h2>
                <p>
                    Symbolic and Explainable Regulatory AI for Finance Innovation. The project
                    explores the use of large models in multi-agent systems to understand
                    overlapping financial regulations, extract relationships from regulatory texts,
                    and build dynamic knowledge graphs that support compliance management and
                    policy development.
                </p>
            </div>

            <div className="project">
                <img src={mock02} className="zoom" alt="DJ4ME" width="100%"/>
                <h2>DJ4ME (2025–2028)</h2>
                <p>
                    A DJ for Machine Ethics: the Dialogue Jiminy. The project develops a new
                    system for machine ethics in which agents’ moral dilemmas are resolved through
                    persuasion dialogue between stakeholder avatars, with a bidirectional language
                    interface to support normative programming and explanation.
                </p>
            </div>

            <div className="project">
                <a href="https://www.uni.lu/fhse-en/research-projects/eai/" target="_blank" rel="noreferrer">
                    <img src={eai} className="zoom" alt="EAI" width="100%"/>
                </a>
                <a href="https://www.uni.lu/fhse-en/research-projects/eai/" target="_blank" rel="noreferrer">
                    <h2>EAI (2023–2026)</h2>
                </a>
                <p>
                    The fundamental aim of this project is to investigate how we can rationally
                    respond to the outputs of artificial intelligence systems and what is required
                    to understand and explain AI systems.
                </p>
            </div>

            <div className="project">
                <a href="https://airobolab.uni.lu/project-expectation/" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="EXPECTATION" width="100%"/>
                </a>
                <a href="https://airobolab.uni.lu/project-expectation/" target="_blank" rel="noreferrer">
                    <h2>EXPECTATION (2021–2024)</h2>
                </a>
                <p>
                    Personalized Explainable Artificial Intelligence for decentralized agents with
                    heterogeneous knowledge. The project addresses personalization of XAI and the
                    integration of explanations in decentralized environments by leveraging the
                    multi-agent systems paradigm.
                </p>
            </div>

        </div>

        <h2 style={{ marginTop: "80px", marginBottom: "20px" }}>People</h2>

        <div className="projects-grid">

            <div className="project">
                <h3>Leon van der Torre</h3>
                <p>Lead, ICR</p>
            </div>

            <div className="project">
                <h3>Réka Markovich</h3>
                <p>Lead, CLAIM</p>
            </div>

            <div className="project">
                <h3>Alexandru Tantar</h3>
                <p>Lead, TAI</p>
            </div>

            <div className="project">
                <h3>Liuwen Yu</h3>
                <p>Coordinator</p>
            </div>

        </div>

    </div>
    );
}

export default Project;