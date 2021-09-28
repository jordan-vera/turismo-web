const UrlGlobal = {
    urlApi: "https://yogoxpress.com:3000/api/",
    urlImage: 'https://yogoxpress.com:3000/static/',
    urlImageCategorias: 'https://yogoxpress.com:3000/static/categorias/',
    urlImageExperiencia: 'https://yogoxpress.com:3000/static/experiencias/',
}

function fechaActual() {
    var date = new Date();
    var anio = date.getFullYear();
    var mes = +date.getMonth() + 1;
    var dia = date.getDate();

    if (mes < 10) {
        if (dia < 10) {
            return anio + '-0' + mes + '-0' + dia;
        } else {
            return anio + '-0' + mes + '-' + dia;
        }
    } else {
        if (dia < 10) {
            return anio + '-' + mes + '-0' + dia;
        } else {
            return anio + '-' + mes + '-' + dia;
        }
    }
}

function horaActual() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

export default { UrlGlobal, fechaActual, horaActual };