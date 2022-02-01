import React from "react";
import Button from "../atoms/button";
import {MyContext, useContext} from '../../context';

type Props = {}

const FilterBtns = ({}: Props) => {
    const {selected, products, handleSelect} = useContext()
        return (
            <React.Fragment>
                <div
                className="filter-btns"
                >
                    {Object.keys(products).length > 0 && (
                        Object.keys(products).map((item: string, index: number) => {
                            const string =  item;
                            return <Button 
                            classes={item === selected ? "filter-btns__item filter-btns--active" : "filter-btns__item"}
                            highlighted={String(Object.values(products)[index])}
                            key={index}
                            value={item}
                            string={string}
                            handleClick={handleSelect}></Button>
                        })
                    )}          
                </div>
            </React.Fragment>
        )
}

export default FilterBtns;