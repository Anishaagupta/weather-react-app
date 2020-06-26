/*eslint-disable   */
import React from 'react'

const weather = (props)=>{
    return (
        <>
        <div className="container">
            <div className="cards pt-4 t">
            <h2>{props.city}</h2>
            
            <h6 className="py-4"> 
            <i class={`wi ${props.wIcon} display-1`}></i>
            </h6>
            {props.temp ? (<h2>Current Weather&nbsp; &nbsp;{props.temp}&deg;C</h2>):null}
            &nbsp; &nbsp; &nbsp;
            {props.description ? (<h3 className="py-3">Description &nbsp;{props.description}</h3>):null}
            {props.humidity ? (<h3><span className="py-3 ">Humidity &nbsp; {props.humidity}%</span></h3>):null}
            {props.speed ? (<h3><span className="py-3">Speed Of Wind &nbsp; {props.speed}m/s</span></h3>):null}
            </div>
        </div>
        </>
    )
}
export default weather