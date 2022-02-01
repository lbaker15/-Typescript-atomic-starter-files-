import React, {useEffect, useState} from "react";
import {MyContext, useContext} from '../../context';

type Props = {}

const TitleSection = ({}: Props) => {
    const [number, setNumber] = useState(0)
    const {
        products, 
        selected
    } = useContext()
    useEffect(() => {
        if (Object.keys(products).length > 0) {
            Object.entries(products).map(p => {
                if (p[0] === selected) {
                    setNumber(p[1])
                }
            })
        }
    }, [selected])
    return (
        <React.Fragment>    
            <div className="title-section">
                <div className="title-section__wording">Quotes for product: {selected}</div>
                <div className="title-section__number">Available quotes: {number}</div>
            </div>
        </React.Fragment>
    )
}

export default TitleSection;