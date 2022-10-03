let modalitiesR = []

let effectifsR = []

let frequency = [
    document.getElementById("frequency0"),
    document.getElementById("frequency1"),
    document.getElementById("frequency2"),
    document.getElementById("frequency3"),
    document.getElementById("frequencyTotal")
]

let modality = []
let effectif = []

function verification()
{
    let run = true
    if(document.getElementById("rows").value > 20)
    {
        document.getElementById('tableComments').innerHTML = '<p style="color:red">Le tableau ne peut générer que 20 modalités.</p>'
        return;
    }
    
    if(document.getElementById("rows").value <= 1)
    {
        document.getElementById('tableComments').innerHTML = '<p style="color:red">Le tableau doit au moins contenir 2 modalités.</p>'
        return;
    }

    for(let i=0; i<document.getElementById("rows").value.length; i++)
    {
        if(document.getElementById("rows").value[i] != '0'
            && document.getElementById("rows").value[i] != '1'
            && document.getElementById("rows").value[i] != '2'
            && document.getElementById("rows").value[i] != '3'
            && document.getElementById("rows").value[i] != '4'
            && document.getElementById("rows").value[i] != '5'
            && document.getElementById("rows").value[i] != '6'
            && document.getElementById("rows").value[i] != '7'
            && document.getElementById("rows").value[i] != '8'
            && document.getElementById("rows").value[i] != '9')
        {
            document.getElementById('tableComments').innerHTML = '<p style="color:red">Vous devez y écrire un nombre.</p>'
            return;
        }
    }
    document.getElementById('tableComments').innerHTML = ''
    createTable()
}


function createTable()
{
    modality = []
    effectif = []
    let rows = document.getElementById("rows").value;

    let table = '<table border="5" cellpadding="10"> <tr> <th><input type="text" size="3" value="Modalité" id="modalityName"></th>';

    for(let i=0; i<rows; i++){
        table += '<td><input type="text" size="1" id="modality'+i+'" value="N°'+(i+1)+'"></td>';
    }

    table += '</tr><tr><th>Effectif</th>';

    for(let i=0; i<rows; i++){
        table += '<td><input type="number" size="1" id="effectif'+i+'" value="4" style="width: 3em"></td>';
    }

    table += '</tr></table><div id="tableSettings"> <p>ECC (Effectif Cumulé Croissant)<input type="checkbox" id="ECCA"></p> <p>ECD (Effectif Cumulé Décroissant)<input type="checkbox" id="ECDA"></p> <p>Fréquence<input type="checkbox" id="frequencyA"></p> <p>Pourcentage<input type="checkbox" id="percentA"></p> <p>PCC (Pourcentage Cumulé Croissant)<input type="checkbox" id="PCCA"></p> <p>PCD (Pourcentage Cumulé Déroissant)<input type="checkbox" id="PCDA"></p> <p>Moyenne des effectifs<input type="checkbox" id="averageA"></p> <p>Mode<input type="checkbox" id="modeA"></p> <p>Médiane<input type="checkbox" id="medianA"></p> </div>'
    table+= '<input type="button" value="Génerer le tableau" id="generate" onclick="generateTable()">'
    document.getElementById("controlTable").innerHTML = table
    assign();
}

function assign()
{
    let rows = document.getElementById("rows").value;

    for(let i=0; i<rows; i++){
        modality[i] = document.getElementById('modality' + i);
        effectif[i] = document.getElementById('effectif' + i);
    }
}

function generateTable()
{
     let rows = modality.length;
     let table = '<table border="5" cellpadding="10"> <tr> <th>'+document.getElementById('modalityName').value+'</th>';


    for(let i=0; i<rows; i++){
        table += '<th id="modalityR'+i+'">...</th>';
    }

    table += '<th>Total</th></tr><tr><th>Effectif</th>';

    for(let i=0; i<rows; i++){
        table += '<td id="effectifR'+i+'">...</td>';
    }

    table += '<td id="effectifRTotal">...</td></tr>'

    if(document.getElementById('ECCA').checked == true){
        table += '<tr><th>Effectif Cumulé Croissant</th>';

        for(let i=0; i<rows; i++){
            
            table += '<td id="ECC'+i+'">...</td>';
        }
        table += '<td>...</td></tr>';
    }

    if(document.getElementById('ECDA').checked == true){
        table += '<tr><th>Effectif Cumulé Décroissant</th>'
        for(let i=0; i<rows; i++){
            table += '<td id="ECD'+i+'">...</td>';
        }
        table += '<td>...</td></tr>'
    }

    if(document.getElementById('frequencyA').checked == true){
        table += '<tr><th>Fréquence</th>';

        for(let i=0; i<rows; i++){
            table += '<td id="frequency'+i+'">...</td>';
        }
        table += '<td id="frequencyTotal">...</td></tr>';
    }

    if(document.getElementById('percentA').checked == true){
        table += '<tr><th>Pourcentage</th>';

        for(let i=0; i<rows; i++){
            table += '<td id="percent'+i+'">...</td>';
        }
        table += '<td id="percentTotal">...</td></tr>';
    }

    if(document.getElementById('PCCA').checked == true){
        table += '<tr><th>Pourcentage Cumulé Croissant</th>';

        for(let i=0; i<rows; i++){
            table += '<td id="PCC'+i+'">...</td>';
        }
        table +='<td>...</td></tr>'
    }

    if(document.getElementById('PCDA').checked == true){
        table += '<tr><th>Pourcentage Cumulé Décroissant</th>';

        for(let i=0; i<rows; i++){
            table += '<td id="PCD'+i+'">...</td>';
        }
        table += '<td>...</td> </tr>';
    }

    if(document.getElementById('averageA').checked == true){
        table += '<tr> <th>Moyenne</th> <td colspan="'+(modality.length+1)+'" style="text-align:center" id="average">...</td> </tr>';
    }

    if(document.getElementById('modeA').checked == true){
        table += '<tr> <th>Mode</th> <td colspan="'+(modality.length+1)+'" style="text-align:center" id="mode">...</td> </tr>';
    }

    if(document.getElementById('medianA').checked == true){
        table += '<tr> <th>Médiane</th> <td colspan="'+(modality.length+1)+'" style="text-align:center" id="median">...</td> </tr>';
    }
    
    table += '</table>';
    document.getElementById('table').innerHTML = table;
    assign2();
    generate();
}

function assign2()
{
    for(let i=0; i<modality.length; i++){
        modalitiesR[i] = document.getElementById('modalityR' + i);
        effectifsR[i] = document.getElementById('effectifR' + i);
        if(document.getElementById('frequencyA').checked == true){
            frequency[i] = document.getElementById("frequency" + i);
        }
    }
}

function generate(){
    let nE = 0
    for(let i=0; i<modality.length+1; i++)
    {
        if(i==modality.length)
        {
            document.getElementById("effectifRTotal").innerHTML = nE;
        }
        else{
            nE += parseInt(effectif[i].value);
            if(document.getElementById('ECCA').checked == true){
                document.getElementById("ECC" + i).innerHTML = nE
            }
        }
    }

    let nEx = 0
    for(let i=modality.length-1; i>-1; i--)
    {
        nEx += parseInt(effectif[i].value);
        if(document.getElementById('ECDA').checked == true){
            document.getElementById("ECD" + i).innerHTML = nEx;
        }
    }

    let f = []
    let p = []

    for(let i=0; i<modality.length; i++)
    {
        modalitiesR[i].innerHTML = modality[i].value;
        effectifsR[i].innerHTML = effectif[i].value;

        f[i] = effectif[i].value/nE;
        if(document.getElementById('frequencyA').checked == true){
            frequency[i].innerHTML = parseFloat((effectif[i].value)/nE).toFixed(2);
        }

        p[i] = f[i]*100
        if(document.getElementById('percentA').checked == true){
            document.getElementById("percent" + i).innerHTML = parseInt(p[i]) + "%";
        }
    }

    let nP = 0
    for(let i=0; i<modality.length; i++)
    {
        if(document.getElementById('PCCA').checked == true){
            nP += f[i]*100; 
            document.getElementById("PCC" + i).innerHTML = parseInt(nP) + "%"
            if(nP > 99)
            {
                document.getElementById("PCC" + i).innerHTML = 100 + "%"
            }
        }
    }
    
    let nPx = 0
    for(let i=modality.length-1; i>-1; i--)
    {
        if(document.getElementById('PCDA').checked == true){
            nPx += f[i]*100;
            document.getElementById("PCD" + i).innerHTML = parseInt(nPx) + "%";
            if(nPx > 99)
            {
                document.getElementById("PCD" + i).innerHTML = 100 + "%"
            }
        }
    }

    let median = nE/2
    if(document.getElementById('ECCA').checked == true && document.getElementById('medianA').checked == true){
        for(let i=0; i<modality.length; i++)
        {
            if(median <= document.getElementById("ECC" + i).innerHTML)
            {
                document.getElementById("median").innerHTML = document.getElementById("modalityR" + i).innerHTML
                break;
            }
        }
    }
    else{
        if(document.getElementById('medianA').checked == true){
            document.getElementById("median").innerHTML = "Vous devez d'abord activer l'ECC";
        }
    }

    let mode = 0
    let nMode = 0
    for(let i=0; i<modality.length; i++)
    {
        if(effectif[i].value > nMode)
        {
            nMode = effectif[i].value;
            mode = i;
        }
    }

    if(document.getElementById('modeA').checked == true){
        document.getElementById('mode').innerHTML = modality[mode].value;
    }

    if(document.getElementById('averageA').checked == true){
        if(parseFloat(nE/modality.length).toFixed(3) == parseInt(nE/modality.length)){
            document.getElementById("average").innerHTML = parseInt(nE/modality.length);
        }
        else
        {
            document.getElementById("average").innerHTML = parseFloat(nE/modality.length).toFixed(3);
        }
    }

    if(document.getElementById('frequencyA').checked == true){
        document.getElementById("frequencyTotal").innerHTML = 1;
    }

    if(document.getElementById('percentA').checked == true){
        document.getElementById("percentTotal").innerHTML = "100%";
    }
}