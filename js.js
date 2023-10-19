window.onload = () => {
    refreshOutput();
}

function refreshOutput(){
    let outDiv = document.getElementById("out");
    let storedData;
    if(localStorage.length > 0){
        storedData = localStorage.getItem(localStorage.key(0));
    } else if(sessionStorage.length > 0) {
        storedData = sessionStorage.getItem(sessionStorage.key(0));
    }  else {
        storedData = "nincs tárolt adat! :("
    }
    outDiv.innerHTML = storedData;
}


function saveToStorage(){
    let storageType = (document.getElementById("storagetype").value == "true");
    let inputKey = document.querySelector("input[name=key]").value;
    let inputValue = document.querySelector("input[name=value]").value
    console.log(storageType + ": " + typeof(storageType))
    if(storageType){
        localStorage.setItem(inputKey,inputValue);
    } else {
        sessionStorage.setItem(inputKey,inputValue);
    }
    alert("adatok elmentve!")
    refreshOutput();
}

function clearLocal(){
    localStorage.clear();
    alert("localStorage törölve!")
}

function clearSession(){
    sessionStorage.clear();
    alert("sessionStorage törölve!")
}