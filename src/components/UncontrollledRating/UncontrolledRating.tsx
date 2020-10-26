import React, {useState} from 'react';

/*type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}*/

function UncontrolledRating(/*props: RatingProps*/) {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={ () => props.setValue(props.value)}>{props.selected ? <b>star </b>: 'star ' }</span>
    );
}

export default UncontrolledRating;