const url = "http://energywise.ddns.net:3000"

const lineMountPoint = document.getElementById("line-mount-point")
const donutMountPoint = document.getElementById("donut-mount-point")
const gauge1MountPoint = document.getElementById("gauge1-mount-point")
const gauge2MountPoint = document.getElementById("gauge2-mount-point")
const currentMountPoint = document.getElementById("current-mount-point")


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

async function fetchGauge (gauge1, gauge2, current) {
    options = {
        headers: {authorization: token}
    }

    const response = await fetch(`${url}/stats/gauge`, options)
    const returnedData = await response.json()

    gauge1Chart = returnedData.gauge1
    gauge2Chart = returnedData.gauge2
    currentData = returnedData.current 

    mountHtml(gauge1, gauge1Chart)
    mountHtml(gauge2, gauge2Chart)
    
    current.innerHTML = currentData
}

function fetchAllCharts() {
    fetchChart("line-graph", lineMountPoint)
    fetchChart("donut", donutMountPoint)
    fetchGauge(gauge1MountPoint, gauge2MountPoint, currentMountPoint)
}

window.addEventListener("DOMContentLoaded", fetchAllCharts)