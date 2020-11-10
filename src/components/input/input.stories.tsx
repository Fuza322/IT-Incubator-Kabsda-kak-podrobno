import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from '../OnOff/OnOff';

export default {
    title: 'input',
    component: OnOff,
}

export const UncontrolledInput = () => {
    return (
        <input />
    )
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <> <input onChange={ onChangeClick }/> - {value} </>
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
        <> <input ref={inputRef}/>
            <button onClick={saveClick}>Save</button>
            - actual value: {value} </>
    )
}

export const ControlledInputWithFixedValue = () => {
    return (
        <input value='IT-Incubator.by'/>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={ onChangeClick }/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }

    return (
        <input type='checkbox' checked={parentValue} onChange={ onChangeClick }/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('0')
    const onChangeClick = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeClick}>
            <option value={'0'}>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}