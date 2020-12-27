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

var myIndex = 0;
document.getElementById(' ').innerHTML = new slides();
function slides() {
    var i;
    var x = document.getElementsByClassName("images");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;}
        x[myIndex-1].style.display = "block";
        setTimeout(slides, 60000);
}

function myfunc(){
    if (document.getElementById('months').value === ''){
        swal("Προσοχή!","Δεν επιλέχθηκαν μήνες εργασίας.","warning");
        return false;
    }
    
    if (document.getElementById('children').value === ''){
        swal("Προσοχή!","Δεν επιλέχθηκε αριθμός τέκνων.","warning");
        return false;
    }
    else 
         window.location.href="calculate.html";
}

       