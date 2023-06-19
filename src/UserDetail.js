import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {
    
    let param = useParams();
    return (
        <>
            { console.log(param.userId) }
            <h1>{ param.userId }</h1>
            <div>UserDetail</div>
        </>
    )
}
