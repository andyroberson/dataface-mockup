import './navigation.scss'
import Locator from '../icons/Locator'


export const Navigation = ({ options }) => {

  const { currentState, setCurrentState} = options

  //didn't mess with setCurrentState for now, but in future probably want 
  //this to be a dropdown so people can navigate to other states
  //will need this to be setstate then
  return (
    <div className='navBar'>

      <div className="pageTitle">
        <div>Medical Costs</div>
        <span>Lorem ipsum dolor</span>
      </div>

      <div className="currentState">
        <Locator fillColor='#89DCFF'/>
        <span>{currentState}</span>
      </div>

    </div>
  )
}
