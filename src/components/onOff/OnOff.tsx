import React from 'react'

type PropsType = {
    on: boolean
    onChange: (on:boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green': 'white',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green': 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={ () => {props.onChange(false)} }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}