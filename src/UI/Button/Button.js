import React from 'react'
import './Button.scss'

const Button = ({children, clicked, onClick}) => {

    // const bg  =  `${(clicked ? 'yellow' : 'green')}`
    // console.log(bg)

    const style = { 
        backgroundColor : clicked ?  'yellow' : 'green'
    }


    return (
        <button onClick = {onClick} style = {style}>
            {children}
        </button>
    )
}

export default Button
