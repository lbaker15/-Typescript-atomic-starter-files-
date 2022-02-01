import React from "react";
import Card from "../molecules/card";
import Label from "../atoms/label";
import {item} from '../../types';
import { Capitalize } from "../../helpers";


type Props = {
    curritem: item
}

const SelectedCard = ({curritem}: Props) => {
    return (
        <React.Fragment>
            <div className="card">
                <Label 
                classes="card__label"
                string={Capitalize(curritem.product)} />
                <div className="card__item card-style">
                    {curritem && 
                    <React.Fragment>
                    <Card curritem={curritem} />
                    </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default SelectedCard;