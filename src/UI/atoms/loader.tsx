import React, {useState} from "react";

type Props = {}

const Loader = ({}: Props) => {
    return (
        <React.Fragment>    
            <div className="loader"><h1 className="font-300">Loading...</h1></div>
        </React.Fragment>
    )
}

export default Loader;