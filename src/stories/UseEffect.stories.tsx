import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: 'UseEffect'
}

export const SimpleExample = () => {

    console.log('SimpleExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect( ()=> {
        console.log('UseEffect every component render')
        document.title = counter.toString()
    })

    useEffect( ()=> {
        console.log('UseEffect only first component render')
        document.title = counter.toString()
    }, [])

    useEffect( ()=> {
        console.log('UseEffect first component render and counter changed')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => {setFake(fake + 1)}}>Fake+</button>
            <button onClick={() => {setCounter(counter + 1)}}>Counter+</button>
        </>
    )
}