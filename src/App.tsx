import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrollledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>
            <PageTitle title={'This is APP component'}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Artem', value: 3},
                           {title: 'Victor', value: 4},
                       ]}
                       onClick={() => {} }
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <PageTitle title={'My friends'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating onChange={setRatingValue}/> {/*!!!!!*/}
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