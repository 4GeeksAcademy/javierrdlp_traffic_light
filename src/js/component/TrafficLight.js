
import React, { useState } from 'react'

const colorR = ["#3c0101", "#eb0505"]
const colorY = [ "#7f7243", "#FFD43B"]
const colorG = ["#024b35", "#63E6BE"]


const TrafficLight = () => {
    const [ tonoR, setTonoR ] = useState(0);
    const [ tonoY, setTonoY ] = useState(0);
    const [ tonoG, setTonoG ] = useState(0);

    return (
        <div className="text-center">
            <div className="row mt-5 justify-content-center">
                <div className="col-5"></div>
                <div className="col-auto red bg-dark ">
                <i className="fa-solid fa-circle fa-8x pt-3" style={{ color: colorR[tonoR] }} onClick={() =>{
                    if(tonoR== 0){
                        setTonoR(1)
                        setTonoY(0)
                        setTonoG(0)
                    }else{
                        setTonoR(0)                        
                    }                     
                     }}></i>
                </div>
                <div className="col-5"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5"></div>
                <div className="col-auto yellow bg-dark pt-3 pb-3 ">
                <i className="fa-solid fa-circle fa-8x" style={{ color: colorY[tonoY]}} onClick={() =>{ 
                    if(tonoY== 0){
                        setTonoY(1)
                        setTonoR(0)
                        setTonoG(0)
                    }else{
                        setTonoY(0)                        
                    }                     
                     }}></i>             
                </div>
                <div className="col-5"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5"></div>
                <div className="col-auto green bg-dark pb-3 ">
                <i className="fa-solid fa-circle fa-8x" style={{ color: colorG[tonoG] }} onClick={() =>{
                    if(tonoG== 0){
                        setTonoG(1)
                        setTonoY(0)
                        setTonoR(0)
                    }else{
                        setTonoG(0)                        
                    }                     
                     }}></i>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
    )
}

export default TrafficLight