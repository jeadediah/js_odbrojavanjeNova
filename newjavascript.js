
/*Preostalo vreme do Nove godine: 00d 00s 00m 00s
 
 Ukoliko je vreme isteklo ispisati: Vreme je isteklo*/
var divdisplay = document.querySelector("#display");

var loop = setInterval(function display() {
    console.clear();
    var today = new Date;
    var nova = new Date(today.getFullYear(), 11, 31);

    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDay();
    var hour = today.getHours();

    var danMs = 1000 * 60 * 60 * 24;
    var satMs = 1000 * 60 * 60;
    var minMs = 60 * 1000;

    if (month === 12 && day >= 31) {
        var year = setFullYear(today.getFullYear() + 1);
    }

    var preostaloDana = Math.ceil((nova - today) / danMs);
    //var preostaloSati = Math.ceil((nova - today) / satMs);
    //var preostaloMinuta = Math.ceil((nova - today) / minMs);
    //var preostaloSekundi = Math.ceil((nova - today) / 1000);

    var restdana = (nova - today) % danMs;
    var preostaloSati = Math.floor(restdana / satMs);
    var restsati = restdana % satMs;
    var preostaloMinuta = Math.floor(restsati / minMs);
    var restmsec = restsati % minMs;
    var preostaloSekundi = Math.floor(restmsec / 1000);

    var text = `PREOSTALO VREME DO NOVE GODINE:
${preostaloDana} dana,
${preostaloSati} h,
${preostaloMinuta} min,
${preostaloSekundi} s
`;
    divdisplay.innerHTML= text;

    //console.log(preostaloDana + "dana " + preostaloSati + "sati " + preostaloMinuta + "min " + preostaloSekundi + "s");


}, 1000);



/*Napiši JavaScript program koji će u konzuli prikazati preostalo vreme do Nove godine.
 U ovakvom formatu: 113 preostalo dana do Nove godine!
 
 
 danas=new Date();
 var novagodina=new Date(danas.getFullYear(), 12);
 
 console.log(novagodina);
 
 if (danas.getMonth()===12 && danas.getDate()>31)
 {
 novagodina.setFullYear(novagodina.getFullYear()+1);
 }
 var one_day=1000*60*60*24;
 console.log(Math.ceil((novagodina.getTime()-danas.getTime())/(one_day))+
 " preostalo dana do Nove godine!");
 
 
 */




