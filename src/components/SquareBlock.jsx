import React, {useState, useEffect} from 'react'
import Square from './Square'
import './Square.css'

function SquareBlock({countSquare, boardArray}) {
    const [mouseTrack, setMouseTrack] = useState([])
    const addBlockToTrack = (index) => {
        const row_index = Math.trunc(index / countSquare)+1;
        const column_index = index % countSquare + 1;
        const tmp = [...mouseTrack];
        tmp.unshift({id:mouseTrack.length, row:row_index, column:column_index})
        setMouseTrack(tmp)
    }
    const squareBlockStyle = {
        gridTemplateColumns: `repeat(${countSquare}, 1fr)`,
        gridTemplateRows: `repeat(${countSquare}, 1fr)`
    }
    return (
        <div className="wrapper">
            <div className ="squareBlock" style ={squareBlockStyle}>
                {
                    boardArray.map((value, index) => 
                        <Square key= {index} id = {index} addPath={addBlockToTrack} />) 
                }
            </div>
            <div className="path">
                <h2>Hover squares</h2>
                <div className="pathInfo">
                    {
                        mouseTrack.map( value => {
                            return <div className="pathIndex"> row: <span>{value.row}</span>  column: <span>{value.column}</span></div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SquareBlock
