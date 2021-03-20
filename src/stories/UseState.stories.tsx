import React, {useMemo, useState} from 'react'

export default {
    title: 'UseState'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 1
}

export const Example = () => {
    console.log('Example')

     // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)

    return (
        <>
            <button onClick={() => {setCounter(state => state + 1)}}>+</button>
            {counter}
        </>
    )
}