import React, {useState} from "react";

type Props = {
    string: string,
    handleClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    value: any;
    classes: string;
    highlighted?: string;
}

const Button = ({string, handleClick, value, classes, highlighted}: Props) => {
    return (
        <React.Fragment>      
            <button className={classes} value={value} onClick={handleClick}>
                {string}
                {(highlighted) &&
                <div className="highlighted">{highlighted}</div>
                }
            </button>
        </React.Fragment>
    )
}

export default Button;