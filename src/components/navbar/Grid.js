import React from 'react'
import './Grid.css'
import elements from './GridElemets'
import { useState } from 'react';

function Grid() {
    
    function show(id){
        let element = document.getElementById(id);
        element.childNodes[1].style.opacity = 0.5;
    }
    return (
        
        <div className="container">
            
            {elements.map((item,i)=>{
                return(
                    <div id={item.id} onClick={()=>show(i)} className="item-container">
                        <p>{item.title}</p>
                        <img src = {item.img_src}  width='100%' alt="aa"></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid