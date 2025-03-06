const url = "http://localhost:3000"

const lineMountPoint = document.getElementById("line-mount-point")
const donutMountPoint = document.getElementById("donut-mount-point")
const gauge1MountPoint = document.getElementById("gauge1-mount-point")
const gauge2MountPoint = document.getElementById("gauge2-mount-point")
const currentMountPoint = document.getElementById("current-data-mount-point")


const token = localStorage.getItem("token");

function mountHtml (mountPoint, returnedData) {
    if(returnedData.html) {
        mountPoint.innerHTML = returnedData.html + mountPoint.innerHTML
    } else {
        console.error("Error fetching chart")
    }
    runScript(mountPoint)

}

function runScript(mountPoint){
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

async function fetchGauge (gauge1, gauge2, current) {
    options = {
        headers: {authorization: token}
    }

    const response = await fetch(`${url}/stats/gauge`, options)
    const returnedData = await response.json()

    const gauge1Chart = {}
    const gauge2Chart = {}

    gauge1Chart.html = returnedData.visualisation_guage_day_html
    gauge2Chart.html = returnedData.visualisation_guage_week_html
    currentData = returnedData.visualisation_day_emission

    console.log(currentData);

    mountHtml(gauge1, gauge1Chart)
    mountHtml(gauge2, gauge2Chart)
    
    currentMountPoint.innerHTML = currentData

    //gaugeResize(gauge2)
}

function gaugeResize (gauge) {
    const gaugeDiv = document.querySelector('#gauge2-mount-point .plotly-graph-div')
    gaugeDiv.style.width = "600px";
    gaugeDiv.style.height = "400px";

    runScript(gauge)
}

function fetchAllCharts() {
    fetchChart("line-graph", lineMountPoint)
    fetchChart("donut", donutMountPoint)
    fetchGauge(gauge1MountPoint, gauge2MountPoint, currentMountPoint)
}

window.addEventListener("DOMContentLoaded", fetchAllCharts)