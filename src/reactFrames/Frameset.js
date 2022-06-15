import React, { useReducer } from "react";
import FrameContext from "./FrameContext";

function reducer(state, action) {
	switch (action.type) {
		case "set":
			return { ...state, [action.name]: action.component };
		default:
	}
}

function FrameProvider({ children }) {
	const [frames, dispatch] = useReducer(reducer, {});
	const setFrame = (name, component) => {
		dispatch({
			type: "set",
			name,
			component
		});
	};

	return (
		<FrameContext.Provider value={{ frames, setFrame }}>
			{children}
		</FrameContext.Provider>
	);
}

class Frameset extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}
	componentDidMount() {
		if (this.props.cols) {
			this.ref.current.setAttribute("cols", this.props.cols);
		}
		if (this.props.rows) {
			this.ref.current.setAttribute("rows", this.props.rows);
		}
	}
	render() {
		return (
			<FrameProvider>
				<frameset ref={this.ref}>{this.props.children}</frameset>
			</FrameProvider>
		);
	}
}

export default Frameset;
