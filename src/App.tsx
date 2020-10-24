import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating/Rating';

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'}/>
            Article 1
            <Rating value={4}/>
            <Accordion titleValue={'Users'}/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
