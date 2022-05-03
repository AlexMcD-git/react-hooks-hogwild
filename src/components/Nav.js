import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({greaseFilterOn, onGreaseFilter, onUnhide, weightSort, nameSort}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<button onClick={weightSort}>Sort By Weight</button>
				<button onClick={nameSort}>Sort By Name</button>
				<p>Pig Filter</p>
				<select value={greaseFilterOn?"Greased Only":"All Pigs"} onChange={onGreaseFilter}>
					<option>All Pigs</option>
					<option>Greased Only</option>
				</select>
				<button onClick={onUnhide}>Unhide All</button>
			</div>
		</div>
	);
};

export default Nav;
