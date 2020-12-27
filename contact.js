function send(){
        
    if (document.contact.name.value === ''){
        swal("","Σημειώστε το όνομά σας.","warning");
        return false;
    }
    
    if (document.contact.email.value === ''){
        swal("","Σημειώστε το email σας.","warning");
        return false;
    }
    
    if (document.contact.message.value === ''){
        swal("","Για αποστολή μηνύματος σημειώστε στην κατάλληλη περιοχή.","warning");
        return false;
    }
    else  swal("","Το μήνυμά σας καταχωρήθηκε επιτυχώς!","success");  
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