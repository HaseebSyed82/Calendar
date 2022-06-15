import { useContext, useEffect } from "react";
import FrameContext from "./FrameContext";

/* Loads a stylesheet from the given path in public assets folder.
 * @param {String} path */
const useStyle = (path) => {
	let { loadStyle } = useContext(FrameContext);

	useEffect(() => {
		loadStyle(path);
	}, [loadStyle, path]);

	return;
};

export default useStyle;