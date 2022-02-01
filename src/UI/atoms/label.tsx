import React, {useState} from "react";

type Props = {
    string: string,
    classes: string
}

const Label = ({string, classes}: Props) => {
    return (
        <React.Fragment>      
            <div className={classes}>{string}</div>
        </React.Fragment>
    )
}

export default Label;