const reportContainer = document.getElementById('report-container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let reportUrl;
        switch (index) {
            case 0:
                reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiZjY4M2FlMTgtYjE5Mi00ODY0LTlhMDEtMDliMjFkMmRmZGQ2IiwidCI6IjA2MjE5YTRhLWE4MzUtNDRkNS1hZmFmLTM5MjYzNDNiZmI4OSIsImMiOjh9';
                break;
            case 1:
                reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNjM1NGE3ZTgtMGE0OS00YzI0LTg0MWItMDUwZmU5MzhmNTNkIiwidCI6IjA2MjE5YTRhLWE4MzUtNDRkNS1hZmFmLTM5MjYzNDNiZmI4OSIsImMiOjh9';
                break;
            case 2:
                reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNzkwY2QyZTktYmY1OS00ZTMyLWFmMjEtNjZlNjljZGQwZmMyIiwidCI6IjA2MjE5YTRhLWE4MzUtNDRkNS1hZmFmLTM5MjYzNDNiZmI4OSIsImMiOjh9';
                break;
            default:
                reportUrl = '';
        }
        const iframe = document.createElement('iframe');
        iframe.src = reportUrl;
        iframe.classList.add('report-iframe');
        reportContainer.innerHTML = '';
        reportContainer.appendChild(iframe);
    });
});