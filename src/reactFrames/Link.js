import React, { useContext } from "react";
import FrameContext from "./FrameContext";

function Link({ component, target, href, children }) {
	const ctx = useContext(FrameContext);

	if (href) {
		return (
			<a href={href} target={target}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={() => ctx.setFrame(target, component)}>
			{children}
		</button>
	);
}

export default Link;
