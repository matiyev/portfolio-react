// import React, { useEffect } from "react";
import React from "react";
import "./textSphere.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
const TextSphere = () => (
  <TagCloud
    options={(w) => ({
      radius: Math.min(650, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: "normal",
    })}
    onClick={(tag, ev) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
        "JavaScript",
        "Computer Security Operations",
        "Troubleshooting",
        "React",
        "Information Security Threats and Vulnerabilities",
        "Linux",
        "Cyber Threat Intelligence",
        "Malware Analysis",
        "Breach & Attack Simulation",
        "SIEM",
        "Security Onion",
        "nmap",
        "pfSense",
        "LimaCharlie EDR",
        "Splunk",
        "Threat-Informed Defense",
        "Network Security Fundamentals",
        "CSS",
        "Documentation",
        "Network Traffic Monitoring",
        "HTML",
        "Network Logs Monitoring and Analysis",
    ]}
  </TagCloud>
);

export default TextSphere;
