import React, { Component, Fragment } from "react";
import "./style2.css";

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 mt-3 text-gray-800">About Page</h1>
        </div>
        <p class="mb-10">
          This project was created by Edo Novanto, Yasta Mardika, and Nur Rohman
        </p>

        <div class="d-inline d-flex justify-content-center github">
          <div
            class="github-card"
            data-github="edonovanto"
            data-width="350"
            data-theme="default"
          ></div>
          <div
            class="github-card"
            data-github="yastamardika"
            data-width="350"
            data-theme="default"
          ></div>
          <div
            class="github-card"
            data-github="rohmanseo"
            data-width="350"
            data-theme="default"
          ></div>
        </div>
      </Fragment>
    );
  }
}

export default AboutPage;
