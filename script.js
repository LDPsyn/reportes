// Obtener las referencias a los iframes
const report1Iframe = document.getElementById('report1');
const report2Iframe = document.getElementById('report2');

// Función para recargar los reportes
function reloadReports() {
    report1Iframe.src = report1Iframe.src;
    report2Iframe.src = report2Iframe.src;
}

// Iniciar el bucle de recarga cada
setInterval(reloadReports, 3000000); 
