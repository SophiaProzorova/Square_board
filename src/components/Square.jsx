import React from 'react'
import './Square.css'

function Square({id, addPath}) {
    function changeBox(e) {
        e.target.style.background  = (e.target.style.background === 'aqua') ? 'whitesmoke' : 'aqua';
        addPath(id)
    }

    return (
        <div id = {id} onMouseOver = {(ev)=> changeBox(ev)} >
        </div>
    )
}

export default Square
