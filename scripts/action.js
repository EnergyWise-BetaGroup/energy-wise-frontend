const url = "http://energywise.ddns.net:3000"

const tableMountPoint = document.getElementById("table-mount-point")

const token = localStorage.getItem("token");

function mountHtml (mountPoint, returnedData) {
    if(returnedData.html) {
        mountPoint.innerHTML = returnedData.html
    } else {
        console.error("Error fetching chart")
    }

    var scripts = mountPoint.getElementsByTagName("script");
    for(var i=0; i < scripts.length; i++) {
        eval(scripts[i].innerHTML);
    }
}

async function fetchChart(chart ,mountPoint){
    options = {
        headers: {authorization: token}
    }

    const response = await fetch(`${url}/stats/${chart}`, options)
    const returnedData = await response.json()

    mountHtml(mountPoint, returnedData)
}

function fetchAllCharts() {
    fetchChart("table", tableMountPoint)

}

window.addEventListener("DOMContentLoaded", fetchAllCharts)