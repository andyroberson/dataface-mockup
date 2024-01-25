import './about.scss'
import { useState, useEffect } from 'react' 

import Locator from '../icons/Locator'

export const About = ({ options }) => {
  
  const {
    currentState,
    activeCost
  } = options

  const [ upperLimit, setUpperLimit ] = useState(0)
  const [ percent25, setPercent25 ] = useState(0)
  const [ percent50, setPercent50 ] = useState(0)
  const [ percent75, setPercent75 ] = useState(0)


  //setting an arbitrary max because we dont know the upper range
  useEffect(() => {
    setUpperLimit(activeCost.percent75 / 0.95)

    //setting positions on the chart
    setPercent25(activeCost.percent25 / upperLimit * 100)
    setPercent50(activeCost.percent50 / upperLimit * 100)
    setPercent75(activeCost.percent75 / upperLimit * 100)
  }, [activeCost, currentState])

  return (
    <div className="medicalAbout">
      <div className='description'>
        <h2>How much does it cost?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>


      <div className="chartGroup">
        <div className="box about">
            <h3>Average Price</h3>
            <span className='bigNumber'>${Math.round(activeCost.percent50)}</span>
            <span className='stateLabel'><Locator fillColor='#89DCFF'/> {activeCost.geo_level}</span>
        </div>

        <div className="box range">
            <h3>Average Price</h3>

            <div className="boxChart">
                <div className="line">
                </div>

                <div className="dotGroup">
                  
                  <div className='dot' style={{left: `${percent25}%`}}>
                  </div>
                  
                  <div className='dot' style={{left: `${percent50}%`}}>
                  </div>
                  
                  <div className='dot' style={{left: `${percent75}%`}}>
                  </div>
                
                </div>

                <div className="labelGroup">
                  <div className='label' style={{left: `${percent25}%`}}>
                    <span>${Math.round(activeCost.percent25)}</span>
                    <span>Low</span>
                  </div>
                  
                  <div className='label' style={{left: `${percent50}%`}}>
                    <span>${Math.round(activeCost.percent50)}</span>
                    <span>Average</span>
                  </div>
                  
                  <div className='label' style={{left: `${percent75}%`}}>
                    <span>${Math.round(activeCost.percent75)}</span>
                    <span>High</span>
                  </div>
                </div>


              
            </div>

            <span className='stateLabel'><Locator fillColor='#89DCFF'/> {activeCost.geo_level}</span>
        </div>
      </div>
    </div>
  )
}
