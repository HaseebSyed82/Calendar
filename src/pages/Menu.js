import React from "react";
import Link from "../reactFrames/Link";
import MyContacts from "./Appointments"
import ApptType from "./Home"
import MyAvail from "./Avail"
import useStyle from "../reactFrames/useStyle";

// Admin Part menu

function Menu() {
	useStyle("menu.css");

	return (
		<ul>
      <li>
				<Link target="main" component={MyContacts}>
					Create Appointment
				</Link>
			</li>
      <li>
				<Link target="main" component={ApptType}>
					Appointment Types
				</Link>
			</li>      
      <li>
				<Link target="main" component={MyAvail}>
					Times Available
				</Link>
			</li>
		</ul>
	);
}

export default Menu;