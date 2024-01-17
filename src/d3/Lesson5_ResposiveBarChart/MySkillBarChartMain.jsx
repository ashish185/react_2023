import React from "react";
import MySkillBarChart from './MySkillBarChart';
import IconReact from "./IconReact";

const mySkillChart = [
  { label: "React", value: 5 },
  { label: "Redux", value: 4 },
  { label: "JavaScript", value: 5 },
  { label: "CSS", value: 3 },
  { label: "HTML5", value: 4 },
];

const MySkillBarChartMain = () => {
  return <MySkillBarChart data={mySkillChart} />;
};

export default MySkillBarChartMain;
