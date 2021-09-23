import React from 'react'

const List = ({ text }) => {

    return (
        <div>
            <h1 style={{ padding: "10px 20px" }}>Enter your options here:</h1>
            <h2 className='options' style={{ padding: "10px 40px" }}>{text}</h2>
        </div>
    )
}

export default List
