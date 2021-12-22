import bil from '../images/bil.png'
import train from '../images/thistrain.png'
import plane from '../images/planeblue.png'
import wait from '../images/waitanswer.png'

export default function DOMbild ({sum}){

    return(
        bild(sum)
    )
}


function bild(sum){
    if ( sum >= 1 && sum <= 400) {
    return BILEN
    }
    if ( sum >= 400.01 && sum <= 400.99) {
        return BILEN
        }
    if (sum >= 401 && sum <= 1000){
        return TRAIN
    }
    if (sum >= 1000.01 && sum <= 1000.99){
        return TRAIN
    }
    if (sum >= 1001){
        return PLANE
    }
    else {
        return WAIT
    }

    
       

 
        
    
}

let BILEN = <img id="fordon" alt="bilen" src={bil}></img>
let TRAIN = <img id="train" alt="train" src={train}></img>
let PLANE = <img id="fordon" alt="plane" src={plane}></img>
let WAIT = <img id="fordon" alt="nature" src={wait}></img>