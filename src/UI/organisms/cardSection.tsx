import React, { useEffect, useState } from "react";
import CardSlideshow from "./cardSlideshow";
import {MyContext, useContext} from '../../context';
import SelectedCard from './selectedCard';
import {item} from '../../types';

type Props = {}

const CardSection = ({}: Props) => {
    let [array, setArr] = useState<item[]>([]);
    let [currItem, setCurrItem] = useState<item>({
        product: '', id: 0, name: '', price: 0, 
        features: {}
    });
    const {
        quotes,
        selected
    } = useContext()
    const changeCurr = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;
        let item = array.filter(a => {
            return a.id === Number(target.value)
        })
        setCurrItem(item[0])
    }
    const setState = (sortedArr: object[]) => {
        let arr2: item[] = sortedArr.map((i: any) => {
            let obj = {id: i.id, price: i.price, features: i.features, name: i.name, product: i.product}
            return obj;
        })
        setArr(arr2)
        setCurrItem(arr2[0])
    }
    const selectedQuotes = () => {
        if (selected !== 'all quotes') {
            //Find selected item 
            let selectedArr = quotes.filter((item: any) => {
                return item.product === selected;
            })
            //Sort via price
            let sortedArr: object[] = selectedArr.sort((a:any, b:any) => {
                return a.price - b.price;
            });      
            //Change assignment type so can set state
            setState(sortedArr)
        } else {
            setState(quotes)
        }
    }
    useEffect(() => {
        selectedQuotes()
    }, [selected, quotes])
    return (
        <React.Fragment>
                <React.Fragment>
                    <SelectedCard curritem={currItem} />
                    <CardSlideshow changeCurr={changeCurr} array={array} curritem={currItem} />
                </React.Fragment>
        </React.Fragment>
    )
}

export default CardSection;