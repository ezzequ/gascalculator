


export default function DOMsvar ({sum}){
    return(
        Svar(sum)
    )
}


function Svar(sum){
    if (sum >= 1 &&  sum <= 400) {
    return resonabel
    }
    if (sum >= 400.01 && sum <= 400.99){
        return resonabel
    }
    if (sum >= 401 && sum <= 1000){
        return tag
    }
    if (sum >= 1000.01 && sum <= 1000.99){
        return tag
    }
   else if (sum >= 1001){
        return flyg
    }
    else {
        return o
    }

    
       

 
        
    
}

const resonabel = <h2>resonabel resa med bil</h2>
const tag = <h2>har du funderat på att åka tåg?</h2>
const flyg = <h2>har du funderat på att flyga?</h2>
const o = <h2>fyll i de tre fälten ovan för att få ett pris på din resa</h2>