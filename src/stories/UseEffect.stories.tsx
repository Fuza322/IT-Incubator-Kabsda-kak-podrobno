import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: 'UseEffect'
}

export const SimpleExample = () => {

    console.log('SimpleExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('UseEffect every component render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('UseEffect only first component render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect first component render and counter changed')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => {
                setFake(fake + 1)
            }}>Fake+
            </button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Counter+
            </button>
        </>
    )
}

export const SetTimeOutExample = () => {

    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        setInterval(() => {
            console.log("tick: " + counter)
            setCounter(state => state + 1)
            }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    )
}