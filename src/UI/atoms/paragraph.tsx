import React, {useState} from "react";

type Props = {
    width: string, height: string,
    info: string[] | React.ReactNode[], classes: string
}

const Paragraph = ({width, height, info, classes}: Props) => {
    return (
        <React.Fragment>      
            <div 
            className={classes ? classes + ` ${width + ' ' + height} text-left` : null + ` ${width + ' ' + height} text-left`}>
                {info.map((data, i) => {
                    return <p 
                    className="p-5"
                    key={i}>{data}</p>
                })}
            </div>
        </React.Fragment>
    )
}

export default Paragraph;