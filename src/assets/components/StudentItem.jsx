import React from 'react';
import './StudentItem.css'

function StudentItem(props) {
    const name = props.name
    const surname = props.surname
    const age = props.age

    return (
        <div className='StudentItem'>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
        </div>
    )
}

export default StudentItem;