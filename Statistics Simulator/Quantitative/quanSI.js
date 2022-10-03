let populationB =[
    document.getElementById('serial0'),
    document.getElementById('serial1')
]

let population =[
    document.getElementById('serial0'),
    document.getElementById('serial1')
]
let populations = populationB.length -1
let extraSerial = '';

function addSerial()
{
    extraSerial='';
    populations++;
    for(let i=2; i<populations+1; i++)
    {
        extraSerial += '<input type="number" style="width: 4em;" value="4" id="serial'+i+'">';
        document.getElementById('extraSerial').innerHTML = extraSerial;
        population[i] = document.getElementById('serial'+i);
    }
}

function subSerial()
{
    if(populations>1){
        extraSerial= extraSerial.replace('<input type="number" style="width: 4em;" value="4" id="serial'+populations+'">', '');
        document.getElementById('extraSerial').innerHTML = extraSerial;
        populations--;
        population.pop()
    }
}