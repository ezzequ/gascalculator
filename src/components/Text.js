import moln from '../images/JAAA.png'

export default function DOMText(){
    return(
        Text()
    )
}



function Text(){

return(
<div>
<img id="clouds"className="center contain float" src={moln} alt="moln"></img>
   <view id="texten">
    <div className="center dark-blue shrink" style={{ justifyContent: 'relative', alignItems: 'center', overflow: 'hidden'}}> <h1 id="texten" className="f1-ns" style={{position: 'relative', top:20, left: 0, right:0, bottom:0, justifyContent: 'center', alignItems: 'center'}}
    >räkna ut priset för din bilresa!</h1></div>
   </view>
</div>

)
}
