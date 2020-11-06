import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')
export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (<Accordion titleValue={'Users'} collapsed={collapsed} onChange={ () => setCollapsed(!collapsed) }/>)
}
