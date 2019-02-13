/*DATASTRUKTUR HER! */
var skala = {
    tolv: ["00", "02", "04", "07", "10", "12"],
    tretten: ["03", "05", "06", "07", "08", "09", "10", "11", "13"]
};

var fagmal_fagmal = {
    fagmal1: "Fagmål 1 - løse et mindre problem ved at beskrive problemet, samt designe, realisere og afprøve et it-system gennem brugerorienterede teknikker",
    fagmal2: "Fagmål 2 - behandle problemstillinger i samspil med andre fag",
    fagmal3: "Fagmål 3 - demonstrere viden om fagets identitet og metoder",
    fagmal4: "Fagmål 4 - give eksempler på, hvordan it-systemer har betydning for og påvirker menneskelige aktiviteter",
    fagmal5: "Fagmål 5 - redegøre for beskyttelse af egen digital identitet og egne data på internettet samt redegøre for tekniske og menneskelige aspekter af it-sikkerhed",
    fagmal6: "Fagmål 6 - redegøre for generelle principper bag it-systemers arkitekturer ved udarbejdelse af it-systemer og tilpasning af eksisterende it-systemer",
    fagmal7: "Fagmål 7 - modellere data samt redegøre for udvalgte typer af data og anvende disse i simple it-systemer eller udvidelser af disse",
    fagmal8: "Fagmål 8 - redegøre for hvordan data kan organiseres i databaser og hvordan databaser anvendes i IT-systemer",
    fagmal9: "Fagmål 9 - identificere basale strukturer i programmeringssprog, modellere programmer og anvende programmering til udvikling af simple it-systemer",
    fagmal10: "Fagmål 10 - redegøre for udvalgte elementer i et interaktionsdesign, samt realisere udvalgte interaktionsdesign i et konkret it-system og tilpasse eksisterende design og systemer",
    fagmal11: "Fagmål 11 - redegøre for innovative it-systemer sammenholdt med egne udviklede it-systemer."
};

var fagmal_faerdig = {
    Fagmål1: ["High og low -fidelity prototyper","Tænke-højt metode til brugertestning","Kravsspecifikation","Problemområde","Rige billeder","Har arbejdet med at lave et it-system både som prototype og med kodning"],
    Fagmål2: ["Har været med til et tværfagligt forløb med Informatik og et andet fag","Kan nævne nogle sammenhænge mellem Informatik og et andet fag"],
    Fagmål3: ["Have en generel indsigt i hvad informatik går ud på","Kunne give eksempler på kompetencer som informatik giver"],
    Fagmål4: ["Kunne redegøre for en eller flere danske IT-skandaler","Give eksempler på nye opfindelser og de konsekvenser de kan have","Give eksempler på fordele og ulemper ved udviklingen af internettet"],
    Fagmål5: ["Typer af hacker-angreb og digiale farer", "Typer af beskyttelse imod digitale farer", "CIA-modellen", "Fysisk og logisk sikkerhed"],
    Fagmål6: ["Redegøre for trelags-arkitektur og MVC-modellen", "Bruge trelags-arkitektur som udgangspunkt for en kravsspecifikation", "Vurdere trelags-arkitektur i forhold til klient-server-arkitektur"],
    Fagmål7: ["E/R-diagrammer", "Redegøre for forskellige datatyper", "Kunne ændre datatyper i et databasesystem og i programmering"],
    Fagmål8: ["Have kendskab til databasers plads i trelags-arkitektur", "Have styr på normaliseringsreglerne (normalformer)", "Normalisere database", "Redegøre for brug af databaser i kendte it-systemer - Facebook, Spotify etc."],
    Fagmål9: ["Tre kontrolstrukturer: Løkker, sekvenser, funktioner ", "Variabler, forgreninger", "Arbejdet med pseudo-kode", "Arbejdet med et programmeringssprog - Javascript, Python etc."],
    Fagmål10: ["Lave en papir-prototype til en app", "Lave et it-produkt i HTML og CSS", "Ændre i et eksisterende it-produkt ved hjælp af HTML og CSS", "Redegøre for gestaltlovene", "Redegøre for forskellige principper for interaktionsdesign"],
    Fagmål11: ["4-p innovationsmodellen", "Vurdere egen app i forhold til eksisterende apps"]
};

/*DATASTRUKTUR SLUTTER HER! */

/* DET GLOBALE */
var keyz = [];
var totalFaerdig = [];
var skalaar = [];
var x;
    
for (x in fagmal_faerdig) {
    var xstring = x.toString();
    keyz.push(xstring);
}
//alert(fagmal_faerdig[keyz[5]].length);
for (i=0; i<keyz.length; i++) {
        for (j=0; j<fagmal_faerdig[keyz[i]].length; j++) {
            //alert(fagmal_faerdig[keyz[j]].length);
            totalFaerdig.push(fagmal_faerdig[keyz[i]][j].toString());
        }
}

//alert(totalFaerdig.length);
/* SKALA */
function lavskala() {
    for (x in skala) {
        var xstring = x.toString();
        skalaar.push(xstring);
    }
    //noget er galt
    var skalaTab = document.getElementById("skala");
    
    for (i=0; i< skala[skalaar[0]].length; i++) {
        var skalaKol = document.createElement("TH");
        var skalaKar = skala[skalaar[0]][i].toString();
        skalaKol.innerHTML = skalaKar;
        skalaTab.appendChild(skalaKol);
    }
    topprogressbar();
}


/* RAMMER TIL TOP-PROGRESS-BARS*/


function topprogressbar() {
    var topprogbar = document.getElementById("topprogbar");
    
    var progress = document.createElement("DIV");
    progress.className = "progress";
    var progress_bar = document.createElement("DIV");
    progress_bar.className = "progress-bar";
    progress_bar.setAttribute("id", "topprog");
    progress.appendChild(progress_bar);
    topprogbar.appendChild(progress);
    progressbars();
}

function progressbars() {
    var progresspanel = document.getElementById("progresspanel");
    
    var fagmalKeyz = [];
    for (x in fagmal_fagmal) {
        var xstring = x.toString();
        fagmalKeyz.push(xstring);
    }
    for (i=0; i<fagmalKeyz.length; i++) {
        //lav div'er og progressbar
        var pfagmal = document.createElement("P");
        pfagmal.innerHTML = fagmal_fagmal[fagmalKeyz[i]];
        var progress = document.createElement("DIV");
        progress.className = "progress";
        var progress_bar = document.createElement("DIV");
        progress_bar.className = "progress-bars";
        progress.appendChild(progress_bar);
        progresspanel.appendChild(pfagmal);
        progresspanel.appendChild(progress);
    }
    rammer();
}

/* RAMMER TIL CHECKBOKSE */
function rammer () {
    var doc = document.body;

    var cont = document.createElement("DIV");
    cont.className = "container";
    
    fagmal_row = Math.ceil(Object.keys(fagmal_faerdig).length / 3);
    
    var topKol = document.createElement("P");
    topKol.innerHTML = "Her ses " + totalFaerdig.length + " færdigheder eller begreber, som din underviser vurderer at man skal have eller kunne for at leve op til alle fagets mål.";
    cont.appendChild(topKol);
    
    for (i=0; i <fagmal_row; i++) {
        var row = document.createElement("DIV");
        row.className = "row";
        for (j=0; j<3; j++) {
            var col = document.createElement("DIV");
            col.className = "col-sm-4";
            var pelem = document.createElement("H3");
            pelem.className = "navnFagmal"
            pelem.innerHTML = "loading"
            col.appendChild(pelem);
            row.appendChild(col);
        }
        cont.appendChild(row);
    }

    doc.appendChild(cont);
    checkbokse()
}

/* CHECKBOKSE SORTERET I KOLONNER */
function checkbokse() {
    var pelem = document.getElementsByClassName("navnFagmal");
    var kolonner = document.getElementsByClassName("col-sm-4");
 
    for (i=0; i<pelem.length; i++) {
        pelem[i].innerHTML = keyz[i];
        var form = document.createElement("FORM");
        for (j=0; j<fagmal_faerdig[keyz[i]].length; j++) {
            var formDiv = document.createElement("DIV");
            // Laver ekstra klasse som er navnet på fagmålet
            formDiv.className = "checkbox";
            
            var formDivLabel = document.createElement("LABEL");
            formDivLabel.style.margin = "5px";
            formDivLabel.innerHTML = fagmal_faerdig[keyz[i]][j].toString();
            
            var formDivInput = document.createElement("INPUT");
            formDivInput.className = keyz[i].toString();
            formDivInput.setAttribute("type", "checkbox");
            formDivInput.setAttribute("onclick", "checkBoksCheck(this);")
            formDivInput.style.margin = "5px";
            
            formDivLabel.appendChild(formDivInput);
            formDiv.appendChild(formDivLabel);
            form.appendChild(formDiv);
            kolonner[i].appendChild(form);
        }
    }
}


function checkBoksCheck(tilKlasse) {
    //aktiveres når man trykker på en checkboks
    //totalFaerdig = alle checkbokse
    tilKlasse.classList.toggle("aktiv");
    var aktiveCheck = document.getElementsByClassName("aktiv");
    var checkBeregn = aktiveCheck.length/totalFaerdig.length*100;
    var checkProcent = String(checkBeregn).concat("%");
    document.getElementById("topprog").style.width = checkProcent;
    
    var progress_bars = document.getElementsByClassName("progress-bars");
    
    for (i=0; i<progress_bars.length;i++) {
        var faerdighedFagmal = document.getElementsByClass(keyz[i]).length;
        /*for (x in faerdighedFagmal) {
            if x.classList.contains() 
        }*/
        
        // Hvor mange færdigheder der hører til et givent fagmål fagmal_faerdig[keyz[i]]
        // Hvor mange færdigheder der er aktiverede aktiveCheck
        // Id af færdigheder som hører til givent fagmål document.getElementsByClassName(keyz[0])
        
    }
    
    //Find checkbokse efter input-klasser (fagmal).
    //Find topprogbar efter id.
    //Omregn antal aktiverede checkbokse i sæt til procent af total.
    //Vis procent i topprogbar. Se original pwidg
}

/*Bladre igennem fagmal og kolonner - hver kolonne skal kun have de færdigheder som hører til*/
    
    
    /*for (i in fagmal_faerdig) {
        
    }*/
/* 
Loop gennem object nøgler
var x;
 for (x in fagmal_faerdig) {
        alert(x);
    }
    
var faerdig = Objects.keys(fagmal_faerdig).length;

alert(fagmal_faerdig[xstring][1]);
*/