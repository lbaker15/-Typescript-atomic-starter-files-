import React from "react";
import DashboardTemplate from "../templates/dashboard";
import {MyContext} from '../context';
import {item} from '../types';
import Loader from '../UI/atoms/loader';


type State = {
    quotes: item[],
    products: Record<string, any>,
    selected: string,
    error: string
}

type Props = {}

class Dashboard extends React.Component<Props> {
    state: State = {
        quotes: [], products: {}, selected: 'all quotes',
        error: ''
    }
    handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement;
        this.setState({
            selected: target.value
        })
    }
    componentDidMount() {
        fetch('https://gc-frontendchallenge-2019.azurewebsites.net/api/easymode', 
        {method: 'GET'})
        .then(res => res.json())
        .then(data => {if (data.quotes.length > 0) {
            type Object = any;
            let newArr:Object = {};
            Promise.all(data.quotes.map((item: any, i: number) => {
                if (!newArr[item.product]) {
                    newArr[item.product] = 1
                } else {
                    newArr[item.product] = newArr[item.product] + 1
                }
            })).then(() => {
                newArr['all quotes'] = data.quotes.length
                this.setState({products: newArr})
                let quotes = data.quotes.sort((a:any, b:any) => {
                    return a.price - b.price;
                });      
                this.setState({quotes: quotes})
            })
            .catch((err) => { console.log('error'); this.setState({error: 'Error with processing data'})})
           
        }})
        .catch((err) => { console.log('error'); this.setState({error: 'Error with fetching data'})})
    }
    render() {
        const {quotes, products, selected, error} = this.state;
        if (!error) {
        return (
            <React.Fragment>
                {quotes.length > 0 ?
                <MyContext.Provider value={{
                    quotes: quotes, 
                    products: products, 
                    handleSelect: this.handleSelect,
                    selected: selected}}>
                    <DashboardTemplate />
                </MyContext.Provider>
                : <div><Loader /></div>
                }
            </React.Fragment>
        )
        } else {
            return (
                <React.Fragment>
                    {error && (
                    <div>{error}</div>
                    )}
                </React.Fragment>
            )
        }
    }
}

export default Dashboard;

