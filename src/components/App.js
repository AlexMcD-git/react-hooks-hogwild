import React, {useState} from "react";
import Nav from "./Nav";
import Oinkers from "./Oinkers";

import pigs from "../porkers_data";

function App() {
	const [hogs, setHogs]= useState(pigs.map(obj=>({...obj, hidden:false})))
	const [greaseFilterOn, setGreaseFilterOn]= useState(false)
	
	function onHidePig(pigName){
		setHogs(prevState=>prevState.map(pig=>pig.name===pigName?{...pig, hidden:true}:pig))
	}
	
	function onUnhide(){
		setHogs(prevState=>prevState.map(pig=>{
			return {...pig, hidden:false}}))
	}

	function onGreaseFilter(){
		setGreaseFilterOn(!greaseFilterOn)
	}

	function weightSort(){
		setHogs(prevState=>prevState.sort((a,b)=> a.weight - b.weight))
	}

	return (
		<div className="App">
			<Nav greaseFilterOn={greaseFilterOn} onGreaseFilter={onGreaseFilter} onUnhide={onUnhide} weightSort={weightSort}/>
			<Oinkers hogs={hogs} greaseFilterOn={greaseFilterOn} onHidePig={onHidePig}/>
		</div>
	);
}

export default App;
