import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrollledRating/UncontrolledRating';

function App() {
    return (
        <div>
            <OnOff/>
            <PageTitle title={'This is APP component'}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Rating value={3}/>
            <PageTitle title={'My friends'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
