import { useState, useEffect } from 'react'
import Papa from 'papaparse';
 
import { Header } from "./components/header/Header"
import { Navigation } from "./components/navigation/Navigation"
import { About } from "./components/about/About"
import { Footer } from "./components/footer/Footer"


//fetches the full id
async function fetchCsv(url, callback) {
  const response = await fetch(`data/${url}.csv`);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result.value);
  const results = Papa.parse(csv, {header: true})
  //console.log(results)

  //callback so it doesn't return a promise
  callback(results.data)
}

function App() { 

  //some tests
  //STATES: HI, MS, CA, CO
  //OV412, IM407


  const [ currentState, setCurrentState ] = useState('CO') //you can change this to ca, co, hi 
  const [ activeId, setActiveId ] = useState('IM407') //test this w OV412 or IM407
  const [ labelData, setLabelData ] = useState([]) //fetches full csv
  const [ costData, setCostData ] = useState([]) //fetches full csv
  const [ activeCost, setActiveCost ] = useState('') //empty in beginng
  const [ activeLabel, setActiveLabel ] = useState('')

  //loading all the data in
  //set the data of the page based on the ID
  //right now, i'm looping through the data to find it, but with an API, DB could be structured better and wouldn't need to do that: 
  //could have something that returns data by slug or state or id and don't need to fetch entire thing
  useEffect(() => {

    //set data for labels
    fetchCsv('labels', (data) => {
      setLabelData(data)
    })

    //set data for cost
    fetchCsv('cost', (data) => {
      setCostData(data)
    })

  }, [])

  //set the label data for the current id
  useEffect(() => {
    for (const data of labelData) {
      if (data.id === activeId) {
        setActiveLabel(data)
        break;
      }
    }
  }, [labelData, activeId]) //have this fire if labelData or activeId change

  //set the cost data for the current id and state
  useEffect(() => {
    for (const data of costData) {
      if (data.id === activeId && data.geo_level === currentState) {
        setActiveCost(data)
      }
    }
  }, [costData, activeId, currentState]) //if costData, activeId, or currentState change


  //*********** data to pass into each component */
  const navigationOptions = {
    currentState,
    setCurrentState,
  }

  const headerOptions = {
    activeLabel
  }

  const aboutOptions = {
    currentState,
    activeCost
  }

  return ( 
    <div className="medicalContainer">
      <Navigation options={navigationOptions}/> {/* would need state, id */}
      <Header options={headerOptions}/> {/* would need text and label */}
      <About options={aboutOptions}/> {/* would need state, id, avgerage, low, med, high */}
      <Footer/>
    </div>
  )
}

export default App