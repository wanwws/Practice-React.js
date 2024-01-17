import './StudentItem.css'
import React from 'react';

class StudentItem2 extends React.Component {
    render() {
        let name = "Wanwisa";
    let surname = "Kaewbuaphan";
    let age = 24;

    return (
        <div className='StudentItem'>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
            <div>Class component</div>
        </div>
    )
    }
}

export default StudentItem2;