import React, {useEffect, useState} from 'react'

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

export const SetIntervalExample = () => {

    console.log('SetIntervalExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("tick: " + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    )
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered with: ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('Reset effect: ' + counter)
        }
    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeOutExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}