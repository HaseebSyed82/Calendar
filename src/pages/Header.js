import React from "react";

const Header = ({
	frameBorder,
	setFrameBorder,
	noResize,
	setNoResize,
	scrolling,
	setScrolling
}) => {
	return (
		<>
			<input
				name="frameBorder"
				type="checkbox"
				checked={!!frameBorder}
				onChange={() => setFrameBorder(!frameBorder)}
			/>
			<label htmlFor="frameBorder">Frameborder</label>
			<input
				name="noResize"
				type="checkbox"
				checked={!!noResize}
				onChange={() => setNoResize(!noResize)}
			/>
			<label htmlFor="noResize">No resize</label>
			<input
				name="scrolling"
				type="checkbox"
				checked={!!scrolling}
				onChange={() => setScrolling(!scrolling)}
			/>
			<label htmlFor="scrolling">Scrolling</label>
		</>
	);
};

export default Header;