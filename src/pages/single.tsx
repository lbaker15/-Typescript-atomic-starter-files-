import React, {useState} from "react";
import {useParams} from 'react-router-dom';

const Single = (props: any) => {
    const params = useParams();
    
    return (
        <React.Fragment>    
            {params.id && (
            <div>Page for quote {params.id}</div>
            )}
        </React.Fragment>
    )
}

export default Single;