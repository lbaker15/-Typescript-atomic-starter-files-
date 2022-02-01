import React from 'react';


type ctx = {
    products: object, quotes: object[], handleSelect: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    selected: string, 
}

export const MyContext = React.createContext<ctx>({selected: '', products: {}, quotes: [], handleSelect: () => {}});
export const useContext = () => React.useContext(MyContext);