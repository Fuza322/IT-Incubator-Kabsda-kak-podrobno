import React, {ChangeEvent, useRef, useState} from 'react';
import {OnOff} from '../OnOff/OnOff';

export default {
    title: 'input',
    component: OnOff,
}

export const UncontrolledInput = () => {
    return (
        <input/>
    )
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <> <input value={value} onChange={ onChangeClick }/> - {value} </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const saveClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <> <input ref={inputRef} /> <button onClick={ saveClick }>Save</button> - actual value: {value} </>
    )
}

export const ControlledInputWithFixedValue = () => {
    return (
        <input value='IT-Incubator.by'/>
    )
}