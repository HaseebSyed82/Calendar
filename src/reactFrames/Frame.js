import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import FrameContext from "./FrameContext";

class Frame extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		children: PropTypes.node,
		style: PropTypes.object
	};

	constructor(props) {
		super(props);

		// The div inside the frame's document to render components to
		this.rootRef = React.createRef();

		// Ref to the frame element
		this.frameRef = React.createRef();
	}

	componentDidMount() {
		if (this.props.name) {
			setTimeout(() => {
				this.setRoot();
				this.renderContent();
			}, 0);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		this.renderContent();
	}

	render() {
		let { name, frameBorder, scrolling, noResize } = this.props;
		return (
			<frame
				name={name}
				frameBorder={frameBorder ? "1" : "0"}
				scrolling={scrolling ? "yes" : "no"}
				noResize={noResize ? "noResize" : null}
				ref={this.frameRef}
			/>
		);
	}

	renderContent() {
		// Context contains a 'frames' object mapping the name of a frame to a component, e.g. {'main': MainComponent, 'header': HeaderComponent}
		let ContextElement =
			this.context &&
			this.context.frames &&
			this.context.frames[this.props.name];

		let frameContext = { ...this.context, loadStyle: this.loadStyle };

		ReactDOM.render(
			// Need to wrap in a new Context provider, otherwise the component's context is undefined
			<FrameContext.Provider value={frameContext}>
				{ContextElement ? <ContextElement /> : this.props.children}
			</FrameContext.Provider>,
			this.rootRef.current
		);
	}

	/**
	 * Adds a stylesheet to the head of this frame document linking to the given path.
	 * @param {String} path Path to the CSS file, in public asset dir.
	 */
	loadStyle = (path) => {
		let frame = this.getFrame();
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", path);
		frame.head.appendChild(link);
	};

	/**
	 * Returns the document of the frame.
	 * @see https://stackoverflow.com/a/21087072/2090827
	 */
	getFrame() {
		return window.frames[this.props.name].document;
	}

	/**
	 * Add a div to the frame where we can render React components (prevents React warning about rendering to the <body>)
	 */
	setRoot = () => {
		let root = document.createElement("div");
		root.setAttribute("id", "root");
		let frame = this.getFrame();

		if (this.props.stylesheet) {
			this.loadStyle(this.props.stylesheet);
		}

		frame.body.appendChild(root);
		this.rootRef.current = root;
	};
}
Frame.contextType = FrameContext;

export default Frame;