import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElemnetValue] = useState(props.value)

    useEffect(() => {
        setHoveredElemnetValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(item => item.value === props.value);
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue);

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendenElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendenElement) {
                        props.onChange(pretendenElement.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span
                    className={s.main}
                    onClick={toggleItems}
                >{selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(item => <div
                            className={`${s.item} ${(hoveredItem === item ? s.selected : '')}`}
                            key={item.value}
                            onClick={() => {
                                onItemClick(item.value)
                            }}
                            onMouseEnter={() => {
                                setHoveredElemnetValue(item.value)
                            }}
                        >{item.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}
