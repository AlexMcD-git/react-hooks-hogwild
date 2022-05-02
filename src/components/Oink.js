import React,{useState} from 'react'
import ExtraInfo from './ExtraInfo'

function Oink(props) {
    return (
    <div className='pigTile' onClick={e=>props.onHandleClick(e)}>
        <h3>Name: {props.name}</h3>
        <p><button onClick={()=>props.onHidePig(props.name)}>Hide</button></p>
        <img alt={props.name} src={props.image}></img>
        <ExtraInfo name={props.name} clicked={props.clicked} greased={props.greased} best={props.best} spec={props.spec} weight={props.weight}/>

    </div>
  )
}

export default Oink