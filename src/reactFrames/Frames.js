import React from "react";
import { Helmet } from "react-helmet";

/**
 * This component mainly exists to fix the <head> tag.
 * If you look at index.html, you can see that there's only a <html> tag.
 * React mounts the app inside the html tag, because a <frameset> has to be
 * a child of the <html> element (in other words, it replaces the <body> tag).
 */
class Frames extends React.Component {
	constructor(props) {
		super(props);
		let head = document.createElement("head");
		document.getElementById("root").prepend(head);
	}

	render() {
		return (
			<>
				<Helmet defaultTitle={this.props.title}></Helmet>
				{this.props.children}
			</>
		);
	}
}

export default Frames;