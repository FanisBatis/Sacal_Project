function saveFile() {
    const today = new Date().toLocaleDateString();
    const total = document.getElementById('total');
    const months = localStorage.getItem('months');
    const children = localStorage.getItem('children');
    const foreas = localStorage.getItem('foreas');
    const apasxolisi = localStorage.getItem('apasxolisi');
    const kratiseis = total.value * 0.18;
    const foros = kratiseis*0.12;
    const apodoxes = total.value - kratiseis - foros;
    let data = 'Ημερομηνία: ' + today + '\r' + '\r' +
            'Σύνολο αποδοχών: ' + total.value + ' €' + '\r' +
            'Μήνες εργασίας: ' + months + '\r' +
            'Αριθμός τέκνων: ' + children + '\r' + 
            'Ασφαλιστικός φορέας: ' + foreas + '\r' +
            'Είδος απασχόλησης: ' + apasxolisi + '\r' +
            'Καθαρές αποδοχές: ' + apodoxes + ' €' +  '\r' +
            'Κρατήσεις: ' + kratiseis + ' €' +  '\r' + 
            'Φόρος: ' + foros.toFixed(2) + ' €'
            ;
            
   
    const textToBLOB = new Blob([data], {type: 'text/plain'});
    const sFileName = 'Sacal File.txt';
    localStorage.clear();
    
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL !== null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
    
    swal("Το αρχείο έχει κατέβει επιτυχώς!", "","success");
}

function mydate(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML = h + ":" + m + ":" + s;
    setTimeout(mydate, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i;}
  return i;
}

