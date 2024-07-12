import UserInput from './component/input'
import style from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonContainer from './component/ButtonsContainer'
import { useState } from 'react'

function App() {
  let [calval,setcalval]=useState('');
  const OnButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setcalval('');
    }
    else if(buttonText==="="){
      const result=eval(calval);
      setcalval(result);
    }
    else{
      const newDisplayval=calval + buttonText;
      setcalval(newDisplayval);
    }
  }

  return (
    <div className={style.calculator}>
        
        <UserInput calval={calval}></UserInput>
        <ButtonContainer OnButtonClick={OnButtonClick}></ButtonContainer>
    </div>
  )
}

export default App;
