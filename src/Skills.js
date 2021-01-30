import React from "react";

import Typography from "@material-ui/core/Typography";

export default function Skills() {
  return (
    <div>
      <div className=" container border border-primary my-2 ">
        <Typography gutterBottom variant="h3" component="h2">
          <svg
            width="1em"
            color="yellow"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-code-slash m-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
            />
          </svg>
          Skills
        </Typography>
        <div>
          <button type="button" className="btn btn-primary m-1 rounded-lg">
            C++
          </button>
          <button type="button" className="btn btn-danger m-1 rounded-lg">
            Data Structure
          </button>
          <button type="button" className="btn btn-secondary m-1 rounded-lg">
            Python
          </button>
          <button type="button" className="btn btn-success m-1 rounded-lg">
            HTML/CSS/JavaScript/Bootstrap
          </button>
          <button type="button" className="btn btn-danger m-1 rounded-lg">
            React/Material-UI
          </button>
          <button type="button" className="btn btn-warning m-1 rounded-lg">
            Django
          </button>
          <button type="button" className="btn btn-info m-1 rounded-lg">
            MongoDB
          </button>
          <button type="button" className="btn btn-primary m-1 rounded-lg">
            Machine Learning
          </button>
          <button type="button" className="btn btn-dark m-1 rounded-lg">
            Deep Learning
          </button>
          <button type="button" className="btn btn-success m-1 rounded-lg">
            Natural Language Processing
          </button>
        </div>
      </div>

      <div className=" container border border-primary ">
        <Typography gutterBottom variant="h3" component="h2">
          <svg
            width="1em"
            height="1em"
            color=" yellow"
            viewBox="0 0 16 16"
            className="bi bi-award m-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"
            />
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
          </svg>
          Achievements
        </Typography>
        <div>
          <button type="button" className="btn btn-primary m-1 rounded-lg">
            Got 147th rank with 99.10 accuracy in <strong>MNIST Digits</strong>{" "}
            classification in <strong>Analytics Vidhya</strong> Competetion.
          </button>

          <button type="button" className="btn btn-danger m-1 rounded-lg">
            Got 179th rank with{" "}
            <strong>Real or Not? NLP with Disaster Tweets</strong>{" "}
            classification in <strong>Kaggle</strong> Competetion.
          </button>
        </div>
      </div>
    </div>
  );
}
