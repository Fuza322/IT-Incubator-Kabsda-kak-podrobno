import React, {useState} from 'react'

/*
type PropsType = {
    on: boolean
}
*/

function OnOff(/*props: PropsType*/) {

    let [on, setOn] = useState <boolean>(false)



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green': 'white',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'green': 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}

export default OnOff;