import React from "react";
import List from "../atoms/list";
import Paragraph from "../atoms/paragraph";
import { Capitalize } from '../../helpers';
import {item} from '../../types';
import Button from "../atoms/button";
import { Link } from "react-router-dom";

type Props = {
    curritem: item
}

const Card = ({curritem}: Props) => {
    let newArr:object[] = [];
    Object.entries(curritem.features).map(item => {
        let c = Capitalize(item[0])
        newArr.push({key: c, value: item[1]})
    })
    return (
        <React.Fragment>
            <Paragraph classes={'text-center-mob'} width="w-1-3" height="h-half" info={['Quote Name', curritem.name]} /> 
            <Paragraph classes={'text-center-mob'} width="w-1-3" height="h-half" info={curritem.price ? ['Cheapest Price', String(curritem.price)] : ['Cheapest Price', 'No price available']} />
            <Paragraph classes={'link-style text-center-mob'} width="w-1-3" height="h-half" info={[
                <Link className="card__link" to={`/single-item/${curritem.id}`} 
                >View Quote</Link>
            ]} />
            <div className="w-full"> 
                <List width="w-full" height="h-half" info={newArr} />
            </div>
        </React.Fragment>
    )
}

export default Card;