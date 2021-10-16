import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

function SimpleCounter() {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const singleDigit = Math.floor(seconds / 1) % 10;
	const tensDigit = Math.floor(seconds / 10) % 10;
	const hundredsDigit = Math.floor(seconds / 100) % 10;
	let interval = null;

	useEffect(() => {
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	function toggle() {
		setIsActive(!isActive);
	}
	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	return (
		<div className="container-fluid">
			<section>
				<div className="square">
					<i className="fas fa-stopwatch"></i>
				</div>
				<div className="square">{hundredsDigit}</div>
				<div className="square">{tensDigit}</div>
				<div className="square">{singleDigit}</div>
			</section>
			<section className="btn-group w-100" role="group">
				<button
					className={`btn btn-${
						isActive ? "warning" : "success"
					} shadow-none`}
					onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button className="btn btn-danger shadow-none" onClick={reset}>
					Reset
				</button>
			</section>
		</div>
	);
}

ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
