import persona1 from '../images/girls.png'
import noman from '../images/nomanskycover.jpeg'
import zero from '../images/zero.png'
import dead from '../images/deadbydaylight.png'






export default function DOMpersona1(){

    return (
<>
<div className="mt5 bm5 ma5 pa7 pt7 pb7 blue">.</div>
    <div className="dt dt--fixed w-80 h-70 center mt2 bg-dark-green mt5 br4 br--top">
   
  <div className="dtc v-mid tc w-third h-120 gray br4  br-100 mb3 pa2 pt2 ma2">
  <img className="center cointain" src={persona1} alt="person1"></img>
  </div>
   
  
  <div className="dtc  white pv3 float w-two-third ma3 br4"><div id="purp" className="br4 bg-green pa1 tc ma2 "><h1>Sofie Brahamson</h1></div>
  <div id="purp" className="br4 bg-green pa1 ma2 "><h2>personlighetstyp: INFJ</h2><p> INFJs är kreativa vårdare med en stark känsla av personlig integritet 
    och en strävan att hjälpa andra att förverkliga sin potential.
     De är kreativa och engagerade och har en talang för att hjälpa andra med originella 
     lösningar på sina personliga utmaningar.</p></div>
  </div>
  

 </div>
 <div className="dt dt--fixed w-80 h-40 center bg-dark-green pr2 pl2 mr2 ml2 pb2">
<div className="dtc center w-third"></div>
  <div className="dtc  w-third white bg-black-10 pa5 ma2 pv1 float br4 br--left"><p>ålder:22</p><p>Bor: Sverige</p></div>
  <div className="dtc  w-third white bg-black-10 pa5  ma2  float pv1 br4 br--right"><p>Hobby: datorspel</p><p>Kön: Kvinna</p></div>
</div>
<div className="dt dt--fixed w-80 h-40 mb2 center bg-dark-green pr2 pl2 mr2 ml2 pb2 br4 br--bottom">
<div className="dtc float v-top center w-10 white tc pv1 float br4">
<div id="purp" className="br4 bg-green pa1 ma2 "><h3>favorit spel</h3></div>
</div>
<div className="dtc v-mid float center w-10 tc pv2  center contain float br4">
  <img id="games" className="contain center tc" src={noman} alt="noman"></img>
</div>
<div className="dtc float v-mid center w-10 dark-gray  tc pv1 float br4">
  <img src={zero} alt="zero" id="games" className="contain center ma1 tc"></img>
</div>
<div className="dtc float v-mid contain center w-10 dark-gray  tc pv1 float br4">
  <img src={dead} alt="zero" id="games" className="contain ma1 tc center"></img>
</div>
</div>
</>
    )



}