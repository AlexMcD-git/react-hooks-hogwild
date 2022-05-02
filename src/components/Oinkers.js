import React, {useState} from 'react'
import Oink from './Oink'
function Oinkers({hogs, greaseFilterOn, onHidePig}) {
    const [clicked, setClicked] = useState("")
    function onHandleClick(e){
        setClicked(e.target.alt)
    }
    return (
        <div>
            {hogs.filter(pig=>!pig.hidden).filter(pig=>greaseFilterOn?pig.greased:true).map(pig=><Oink onHidePig={onHidePig} clicked={clicked} onHandleClick={onHandleClick} key={pig.name} name={pig.name} spec={pig.specialty} greased={pig.greased} weight={pig.weight} image={pig.image} best={pig[`highest medal achieved`]}/>)}
        </div>
    )
}

export default Oinkers