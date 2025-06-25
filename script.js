document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("btn-download-pdf");

    button.addEventListener("click", function () {
        const element = document.querySelector(".container-lg");

        // Obtener dimensiones del elemento
        const rect = element.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const marginTop = 40; // margen superior en px

        const opt = {
            margin:       0,
            filename:     'hoja-de-vida.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  {
                scale: 2,
                scrollX: 0,
                scrollY: 0,
                windowWidth: document.documentElement.scrollWidth,
                windowHeight: document.documentElement.scrollHeight
            },
            jsPDF:        {
                unit: 'px',
                format: [width, height + marginTop],
                orientation: 'portrait'
            },
            pagebreak:    { mode: ['avoid-all'] }
        };

        html2pdf().set(opt).from(element).save();
    });
});
