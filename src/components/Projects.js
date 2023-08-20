import React from "react";
import "./css/projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <div className="p">
          <iframe
            src="https://y2-media.netlify.app/"
            frameborder="0"
            style={{ border: "none" }}
          ></iframe>
          <h3 className="p-name">y2-media</h3>
        </div>

        <div className="p">
          <iframe
            src="https://text-to-emojis.web.app/"
            frameborder="0"
          ></iframe>
          <h3 className="p-name">text-to-emojis</h3>
        </div>

        <div className="p">
          <iframe src="https://y2-media1.vercel.app/" frameborder="0"></iframe>
          <h3 className="p-name">y2-media</h3>
        </div>
      </div>
    </>
  );
}
