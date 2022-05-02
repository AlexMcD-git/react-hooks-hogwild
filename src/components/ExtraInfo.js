import React from 'react'

function ExtraInfo(props) {
    if(props.clicked===props.name)
  return (
    <><p>Specialty: {props.spec}</p>
    <p>Weight: {props.weight}</p>
    <p>Greased: {props.greased?"Yes":"No"}</p>
    <p>Best Medal: {props.best}</p>
    </>
  )
  else return null
}

export default ExtraInfo