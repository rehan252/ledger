import React from 'react'
import "./fruitAnimation.scss";

export function FruitAnimation() {
    return (
        <div className="container">
        <div className="pineapple">
          <div className="head-p">
           <div className="eye eye-l"></div>
            <div className="eye eye-r"></div>
            <div className="blush blush-l"></div>
             <div className="blush blush-r"></div>
            <div className="mouth">
              <div className="mouth-pair"></div>
              <div className="mouth-smile">
                <div className="tongue"></div>
              </div>
            </div>
          </div>
            <div className="leaf-g">
              <div className="leaf leaf-1"></div>
              <div className=" leaf leaf-2"></div>
               <div className="leaf leaf-3"></div>
               <div className="leaf leaf-4"></div>
          </div>
        </div>
        <div className="watermelon">
          <div className="hide-w"></div>
          <div className="watermelon-head">
            <div className="watermelon-white">
              <div className="watermelon-red">
                <div className="eye-watermelon eye-w-l"></div>
                 <div className="eye-watermelon eye-w-r"></div>
                <div className="blush-w blush-w-l"></div>
                  <div className="blush-w blush-w-r"></div>
                  <div className="mouth-w-1">
                    <div className="hide-red"></div>
                    <div className="mouth-w-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
}
