import React, { Component } from "react";
import ProgressBar from "react-animated-progress-bar";
export default class SkillBar extends Component {
  render() {
    return (
      <div>
        <>
          <h1>Html</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="95"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />

          <h1>Css</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="90"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />

          <h1>Bootstrap</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="93"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />

          <h1>Javascript</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />

          <h1>React</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />

          <h1>Wordpress</h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="gray"
            percentage="80"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </>
      </div>
    );
  }
}
