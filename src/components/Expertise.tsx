import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="expertise-container" id="groups">
        <div className="skills-container">
            <h1 className="section-title">Groups</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>
                        <a
                            href="https://researchportal.list.lu/organisation/detail/tai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TAI
                        </a>
                    </h3>
                    <p>
                        The Trustworthy AI group aims to co-design trustworthy AI systems
                        through rigorous benchmarking, explainability, and strong alignment
                        to regulatory knowledge across domains.
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>
                        <a
                            href="https://www.uni.lu/fstm-en/research-groups/computational-law-and-machine-ethics/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CLAIM
                        </a>
                    </h3>
                    <p>
                        The Computational Law and Machine Ethics group investigates
                        computational models of and approaches to legal and ethical concepts
                        and structures to be deployed in Artificial Intelligence.
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>
                        <a
                            href="https://icr.uni.lu/index.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ICR
                        </a>
                    </h3>
                    <p>
                        The Individual and Collective Reasoning group develops and investigates
                        comprehensive formal models and computational realizations of
                        individual and collective reasoning and rationality.
                    </p>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;