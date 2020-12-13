import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')
const onClickCallback = action('Some item was clicked')

export const CollapsedMode = () => {
    return (
        <Accordion
            titleValue={'Menu'}
            collapsed={true}
            onChange={callback}
            items={[]}
            onClick={onClickCallback}
        />
    )
}
export const UncollapsedMode = () => {
    return (
        <Accordion
            titleValue={'Users'}
            collapsed={false}
            onChange={callback}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Artem', value: 3},
                {title: 'Victor', value: 4},
            ]}
            onClick={onClickCallback}
        />
    )
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Accordion
            titleValue={'Users'}
            collapsed={collapsed}
            onChange={() => setCollapsed(!collapsed)}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Artem', value: 3},
                {title: 'Victor', value: 4},
            ]}
            onClick={onClickCallback}
        />
    )
}
