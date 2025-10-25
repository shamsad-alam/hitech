import React, { useState } from 'react'

function PracticeDay1() {
    const [text, setText] = useState('This is normal paragraph.')
    const [active, setActive] = useState(false)

    const [Inputval, setInputval] = useState()

    const stdName = ["shamsad", "syam", "rahul", "mark", "sikandar"]
    return (
        <div className='w-7xl mt-10 mx-auto'>
            <h3>This is my first react.js task.</h3>
            <button onClick={() => setText('This is new text in paragraph.')}
                className='border-1 bg-amber-100 rounded-md py-2 px-7 mt-5 mb-2 cursor-pointer'>text change</button>
            <p>{text}</p>

            <div className='my-4 border-2'>
                <h3>Array Looping here!</h3>
                {
                    stdName.map((std) => (
                        <h3 key={std}>{std}</h3>
                    ))
                }
            </div>

            <div className='border-1 my-5'>
                {
                    active && (
                        <h3>this is data, show.</h3>
                    )
                }
                <button className='border-1 bg-amber-100 rounded-md py-2 px-7 mt-5 mb-2 cursor-pointer'
                    onClick={() => setActive(!active)}>{active ? "hide" : "show"}
                </button>
            </div>

            <div className='my-5 border-1 p-5'>
                <input type="text" value={Inputval} placeholder='enter text here...' className='border-1 py-1 px-3' />
                <p> Input value: {setInputval} </p>
            </div>

        </div>
    )
}

export default PracticeDay1
