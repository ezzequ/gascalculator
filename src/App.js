import './index.css'
import './App.css';
import DOMtext from './components/Text'
import DOMsvar from './components/Svar'
import {useState} from 'react'
import Power from './images/blueel.png'
import gas from './images/blue-gas.png'
import distansbild from './images/dis-blue.png'
import DOMbild from './components/Bild'



function App() {
  const [numberOneDis, setNumberOneDis] = useState (0);
  const [numberOneBen, setNumberOneBen] = useState (0);
  const [numberOneFor, setNumberOneFor] = useState (0);



let forbrukning = parseFloat(numberOneFor)
let prisL = numberOneBen
let distans = numberOneDis

let forbrukningrakna = parseFloat((forbrukning / 10))
let bensinforresan = (forbrukningrakna * distans)
let sum = 0 + (bensinforresan * prisL)
sum = (sum).toFixed(2)

 
  
return (


  <>

 <div className= "center ma2">
 <div className="dt dt--fixed w-100 h-90 center pa2">
   <div className="dtc w-100 h-40 title br4 grow  center tc"><DOMtext/></div>
 </div>
 
 
        <div className="dt dt--fixed w-100 h-90 center  pa2">
 <div className="dtc bluebox forb tc bg-navy dib br2 pa2 grow bw5 w-100 h-30 
   shadow-5 w-50s w-50m">
     <h2 className="white tc center pa2 ">Distans</h2>
   <h4 className="white tc center pa2"> hur många kilometer ska du åka?</h4>
<img className="center" id="bilen" src={distansbild} alt="distansbild"></img>
   <div><input className="w-100"type="number"  placeholder={0} min="1"  onChange={event => setNumberOneDis(event.target.value)}/></div>
   <p className="dib white">KILOMETER</p>
 </div>

 <div className="dtc forb tc navy bg-navy dib br2 pa2 grow bw5 w-100 h-30 
   shadow-5 w-80s w-80m">
     <h2 className="white f7s tc center pa2" style={{wordWrap: 'break-word'}}>Förbrukning</h2>
   <h4 className ="white tc center pa2">hur många liter bensin behöver din bil för 1 mil?</h4>
   <img className="center" id="bilen" src={Power} alt="Power"></img>
   <div><input className="w-100 " type="number"  placeholder={0}   onChange={event => setNumberOneFor(event.target.value)}/></div>
   <p className="dib white">LITER/MIL</p>
 </div>

 <div className="dtc forb tc bg-navy dib br2 pa1 grow bw5 w-100 h-30 shadow-5 w-50s w-50m">
     <h2 className="white  tc center pa2">bensin</h2>
   <h4 className="white tc center pa2"> vad är priset för 1 liter bensin?</h4>
   <img className="center" id="bilen" src={gas} alt="gas"></img>
   <div><input className="w-100" type="number" placeholder={0} min="0" onChange={event => setNumberOneBen(event.target.value)}/></div>
   <p className="dib white">KR/LITER</p>
   </div>
 </div>
      
<div className="w-90 h-60 center forb mb1 pb1 bg-navy br4 mb3 pa1 ma1 mb5 grow bw5 shadow-5 center tc ">
   
   <h2 className="svar white" id="pris">pris för din resa: {sum} KR </h2>
   <h4 className="white svar"><DOMsvar sum = {sum}/></h4>
   <div className="white"> <DOMbild sum={sum}/> </div>

 
 </div>
 </div>

 <div className="white bg-light-green green footer w-100 h-3 o-90 center tc"> @Esther Reichmann</div>
  
</>
     
 
   );

   
 
 }

 export default App;



