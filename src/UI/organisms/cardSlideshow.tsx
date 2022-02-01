import React, { useEffect } from "react";
import ListComponent from "./listComponent";
import {item} from '../../types';

type Props = {
    array: item[],
    curritem: item,
    changeCurr: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const CardSlideshow = ({array, curritem, changeCurr}: Props) => {
    return (
        <React.Fragment>
            <div className="slideshow">
                {curritem &&
                    <ListComponent curritem={curritem} changeCurr={changeCurr} array={array} />
                }
            </div>
        </React.Fragment>
    )
}

export default CardSlideshow;

