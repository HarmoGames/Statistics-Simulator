let modalities = [
    document.getElementById("modality0"),
    document.getElementById("modality1"),
    document.getElementById("modality2"),
    document.getElementById("modality3"),
]

let effectifs = [
    document.getElementById("effectif0"),
    document.getElementById("effectif1"),
    document.getElementById("effectif2"),
    document.getElementById("effectif3"),
    document.getElementById("effectifTotal")
]

let modalitiesR = [
    document.getElementById("modalityR0"),
    document.getElementById("modalityR1"),
    document.getElementById("modalityR2"),
    document.getElementById("modalityR3"),
    document.getElementById("modalityRTotal")
]

let effectifsR = [
    document.getElementById("effectifR0"),
    document.getElementById("effectifR1"),
    document.getElementById("effectifR2"),
    document.getElementById("effectifR3"),
    document.getElementById("effectifRTotal")
]

let frequency = [
    document.getElementById("frequency0"),
    document.getElementById("frequency1"),
    document.getElementById("frequency2"),
    document.getElementById("frequency3"),
    document.getElementById("frequencyTotal")
]

function Generate(){
    let nE = 0
    for(let i=0; i<modalities.length+1; i++)
    {
        if(i==modalities.length)
        {
            document.getElementById("effectifRTotal").innerHTML = nE
        }
        else{
            nE += parseInt(effectifs[i].value);
            document.getElementById("ECC" + i).innerHTML = nE
        }
    }

    let nEx = 0
    for(let i=modalities.length-1; i>-1; i--)
    {
        nEx += parseInt(effectifs[i].value);
        document.getElementById("ECD" + i).innerHTML = nEx;
    }

    for(let i=0; i<4; i++)
    {
        modalitiesR[i].innerHTML = modalities[i].value;
        effectifsR[i].innerHTML = effectifs[i].value;

        let f = parseInt(effectifs[i].value)/nE;
        frequency[i].innerHTML = f;

        document.getElementById("percent" + i).innerHTML = parseInt(f*100) + "%";
    }

    let nP = 0
    for(let i=0; i<modalities.length; i++)
    {
        nP += parseFloat(frequency[i].innerHTML)*100;
        document.getElementById("PCC" + i).innerHTML = parseInt(nP) + "%"
    }
    
    let nPx = 0
    for(let i=modalities.length-1; i>-1; i--)
    {
        nPx += parseFloat(frequency[i].innerHTML)*100;
        document.getElementById("PCD" + i).innerHTML = parseInt(nPx) + "%";
    }

    let median = nE/2
    for(let i=0; i<modalities.length; i++)
    {
        if(median <= document.getElementById("ECC" + i).innerHTML)
        {
            document.getElementById("median").innerHTML = document.getElementById("modalityR" + i).innerHTML
            break;
        }
    }

    document.getElementById("average").innerHTML = nE/modalities.length;
    document.getElementById("frequencyTotal").innerHTML = 1;
    document.getElementById("percentTotal").innerHTML = "100%";
}