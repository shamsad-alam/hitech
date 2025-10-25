import React, { useState } from 'react'

function PracticeDay1() {
    const [text, setText] = useState('This is normal paragraph.')
    const [active, setActive] = useState(false)

    const [Inputval, setInputval] = useState()

    const stdName = ["shamsad", "syam", "rahul", "mark", "sikandar"]

    const [stdData, setstdData] = useState({
        name: 'shamsad',
        age: 35,
        address: {
            city: "kolkata",
            country: 'india'
        }
    })

    const handleAge = (ag) => {
        stdData.age = ag
        console.log(stdData);
        setstdData({ ...stdData })
    }

    const handlecity = (c) => {
        stdData.address.city = c
        console.log(stdData);

        setstdData({ ...stdData, address: { ...stdData.address, c } })
    }

    const updatcontry = () => {
        setstdData({
            ...stdData, address: { ...stdData.address, country: 'japan' }
        })
    }
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
                <input type="text" onChange={(e) => setInputval(e.target.value)} placeholder='enter text here...' className='border-1 py-1 px-3' />
                <p> Input value: {Inputval} </p>
            </div>

            <div className='my-5 p-5 border-1'>
                <h3 className=' text-xl font-semibold my-2'>object and array dat change by state</h3>
                <input className='border-1' type="number" onChange={(e) => handleAge(e.target.value)} placeholder='enter age' />
                <p> Age : {stdData.age}</p>

                <input type="text" onChange={(e) => handlecity(e.target.value)} placeholder='enter city' className='border-1' />
                <p>City : {stdData.address.city} </p>

                <button onClick={updatcontry} className='border-1 bg-zinc-100 rounded-md py-1 px-3'>update country</button>
                <p>Country : {stdData.address.country} </p>


            </div>

        </div>
    )
}

export default PracticeDay1
