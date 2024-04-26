import { useState } from "react";

function Square() {
	const [value, setValue] = useState(null);

	function handleClick() {
		return setValue("x");
	}

	return (
		<button className="square" onClick={handleClick}>
			{value}
		</button>
	);
}

export { Square };
