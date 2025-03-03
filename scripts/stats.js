const url = "http://energywise.ddns.net:3000"

const lineMountPoint = document.getElementById("line-mount-point")

const token = localStorage.getItem("token");

function mountChart(htmlData) {
    mountPoint.innerHTML = htmlData
}

async function fetchChart(){
    options = {
        headers: {authorization: token}
    }

    const response = await fetch(`${url}/stats`, options)
    const returnedData = await response.json()

    mountChart(returnedData.html)

    var scripts = mountPoint.getElementsByTagName("script");
    for(var i=0; i < scripts.length; i++) {
        eval(scripts[i].innerHTML);
    }
}

window.addEventListener("DOMContentLoaded", fetchChart)