

document.getElementById("sub1").onclick = () =>{

    let temp;

    if(document.getElementById("ctemp").checked){
        temp = document.getElementById("temp1").value
        temp = getCelcius(temp)
        document.getElementById("myLabel").innerHTML = temp +"°C"
    }
    else if(document.getElementById("ftemp").checked){
        temp = document.getElementById("temp1").value
        temp = getFer(temp)
        document.getElementById("myLabel").innerHTML = temp +"°F"
    }
    else{
        document.getElementById("myLabel").innerHTML  = "Select a converstion unit"
    }
}


function getCelcius(temp){

    return (temp - 32) * (5/9);
}

function getFer(temp){

    return temp * (9/5) + 32
}