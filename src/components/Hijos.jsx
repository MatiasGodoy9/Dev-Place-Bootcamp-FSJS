import React from 'react'

function Hijos(props) {
    console.log(props.tipo)
    return (
        <div>
            <p>{props.tipo}</p>
            <p>{props.children}</p>
        </div>
    )
}
export default Hijos
