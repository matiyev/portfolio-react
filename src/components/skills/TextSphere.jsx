// import React, { useEffect } from "react";
import React from "react";
import "./textSphere.css";

// Importing TagCloud package
// import TagCloud from "TagCloud";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// const TextSphere = () => {
//   // Animation settings for Text Cloud
//   useEffect(() => {
//     return () => {
//       const container = ".tagcloud";
//       const texts = [
//         "JavaScript",
//         "Computer Security Operations",
//         "Troubleshooting",
//         "React",
//         "Information Security Threats and Vulnerabilities",
//         "Linux",
//         "SIEM",
//         "Network Security Fundamentals",
//         "CSS",
//         "Network Traffic Monitoring",
//         "HTML",
//         "Network Logs Monitoring and Analysis",
//       ];

//       const options = {
//         radius: 100,
//         maxSpeed: "fast",
//         initSpeed: "fast",
//         keep: true,
//       };

//       TagCloud(container, texts, options);
//     };
//   }, []);

//   return (
//     <>
//       <div className="text-sphere">
//         {/* span tag className must be "tagcloud"  */}
//         <span className="tagcloud"></span>
//       </div>
//     </>
//   );
// };
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
        "SIEM",
        "Network Security Fundamentals",
        "CSS",
        "Network Traffic Monitoring",
        "HTML",
        "Network Logs Monitoring and Analysis",
    ]}
  </TagCloud>
);

export default TextSphere;
