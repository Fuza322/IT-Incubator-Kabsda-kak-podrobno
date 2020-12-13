import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    );
}
