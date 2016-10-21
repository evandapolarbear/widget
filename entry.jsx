import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
// import Weather from './weather';
import Clock from './clock';

const testTabs = [{title: "one", content: "page 1"}, {title: "two",
content: "page 2"}, {title: "three", content: "page 3"}];

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  // const weather  = document.getElementById("weather");
  const clock = document.getElementById("clock");
  ReactDOM.render(<Tabs tabs={testTabs} />, root);
  // ReactDOM.render(<Weather />, weather);
  ReactDOM.render(<Clock />, clock);
});
