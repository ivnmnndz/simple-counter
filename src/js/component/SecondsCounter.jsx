import React from "react";
import { useState, useEffect } from "react";

const SimpleCounter = () => {
	const [seconds, setSeconds] = useState(0);
	const [timerRunning, setTimerRunning] = useState(false);
	let interval = null;

	useEffect(() => {
		if (timerRunning) {
			interval = setInterval(() => {
				setSeconds(prevTime => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timerRunning]);

	console.log(seconds);
	return (
		<>
			<div>{seconds}</div>
			<button
				onClick={() => {
					setTimerRunning(true);
				}}>
				Start
			</button>
			<button
				onClick={() => {
					setTimerRunning(false);
				}}>
				Stop
			</button>
			<button
				onClick={() => {
					setSeconds(0);
				}}>
				Reset
			</button>
		</>
	);
};

export default SimpleCounter;
