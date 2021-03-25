import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type PropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const idInterval = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])

    let view

    switch (props.mode) {
        case "analog": {
            view = <AnalogClockView date={date}/>
            break
        }
        case "digital":
        default: {
            view = <DigitalClockView date={date}/>
        }
    }

    return (
        <div>
            {view}
        </div>
    )
}