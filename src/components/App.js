import React, {useState} from "react";
import Nav from "./Nav";
import Oinkers from "./Oinkers";
import PigForm from "./PigForm";
import pigs from "../porkers_data";

function App() {
	const [hogs, setHogs]= useState(pigs.map(obj=>({...obj, hidden:false})))
	const [greaseFilterOn, setGreaseFilterOn]= useState(false)
	const [newHog, setNewHog]= useState({
		name:"",
		specialty:"",
		greased:false,
		weight:0,
		"highest medal achieved": "wood",
		image:"",
		hidden:false
	})
	//name, spec, greased, weight, medal, image
	function onFormChange(e){
		const name= e.target.name
		let value= e.target.value
		if(name === 'weight'){
			value=parseFloat(value)
		}
		setNewHog({...newHog, [name]:value})
	}
	console.log(hogs)
	function onFormSubmit(e){
		e.preventDefault()
		setHogs([...hogs, newHog])
		setNewHog({
			name:"",
			specialty:"",
			greased:false,
			weight:0,
			"highest medal achieved": "wood",
			image:"",
			hidden:false
		})
	}
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
		setHogs(prevState=>[...prevState].sort((a,b)=> a.weight - b.weight))
	}

	function nameSort(){
		setHogs(prevState=>[...prevState].sort((a,b)=>(a.name>b.name)?1:((b.name > a.name)?-1:0)))
	}
	return (
		<div className="App">
			<Nav greaseFilterOn={greaseFilterOn} onGreaseFilter={onGreaseFilter} onUnhide={onUnhide} weightSort={weightSort} nameSort={nameSort}/>
			<PigForm pig={newHog} onFormChange={onFormChange} onFormSubmit={onFormSubmit}/>
			<Oinkers hogs={hogs} greaseFilterOn={greaseFilterOn} onHidePig={onHidePig}/>
		</div>
	);
}

export default App;
