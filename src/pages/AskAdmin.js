import React from "react";
import Link from "../reactFrames/Link";
//import Page1 from "./Page1";
//import Page2 from "./Page2";
//import Page4 from "./Page4";
import DangerButton from '../DangerButton' // Import a component from another file
import useStyle from "../reactFrames/useStyle";

//Danger Button Module

function AskAdmin() {
  //useStyle("LeftButton.css");
  let className = 'menu';
  
	return (
		<>
			<h2>Ask Admin</h2>
      <textarea rows="10" cols="50" placeholder="Type your request here...">
  </textarea>
      <DangerButton />
		</>
	);
}

export default AskAdmin;