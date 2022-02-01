import React, {useState} from "react";

type Props = {
    width: string, height: string,
    info: object[]
}

const List = ({width, height, info}: Props) => {
    return (
        <React.Fragment>      
            <div 
            className={`${width + ' ' + height} text-left`}>
                <ul className="pl-0">
                {info.map((data: any) => {
                    return <li key={data.key + Math.random()}><span>{data.key}:</span>  {String(data.value)}</li>
                })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default List;