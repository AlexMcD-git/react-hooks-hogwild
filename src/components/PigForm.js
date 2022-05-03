import React from 'react'

function PigForm({pig, onFormChange, onFormSubmit}) {
    return (
        <form onSubmit={onFormSubmit}>
            <label>
                Name: 
            <input type="text" name="name" value={pig.name} onChange={onFormChange}/>
            </label>
            <label>
                Specialty: 
            <input type="text" name="specialty" value={pig.specialty} onChange={onFormChange}/>
            </label>
            <label>
                Greased: 
            <select type="select" name="greased" value={pig.greased} onChange={onFormChange}>
                <option>true</option>
                <option>false</option>
            </select>
            </label>
            <label>
                Weight: 
            <input type="text" name="weight" value={pig.weight} onChange={onFormChange}/>
            </label>
            <label>
                Highest Medal Achieved: 
            <select type="select" name="highest medal achieved" value={pig[`highest medal achieved`]} onChange={onFormChange}>
                <option>wood</option>
                <option>bronze</option>
                <option>silver</option>
                <option>gold</option>
                <option>platinum</option>
                <option>diamond</option>
            </select>
            </label>
            <label>
                Image: 
            <input type="text" name="image" value={pig.image} onChange={onFormChange}/>
            </label>
            <input type="submit" value="Add Pig"/>
        </form>
    )
}

export default PigForm