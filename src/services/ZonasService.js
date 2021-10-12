import Global from "./urlGlobal";
const BASE_URL = Global.UrlGlobal.urlApi;

async function callApi(endpoint, options = {}) {
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const apiLugares = {
    Lugares: {
        destacado() {
            return callApi(`/zonas-destacadas`);
        },
        destacadoReglon(reglon) {
            return callApi(`/zonas-destacadas-reglon/${reglon}`);
        }, 
        recientes() {
            return callApi(`/zonas-recientes`);
        },
        categoriaAll(idcategoria) {
            return callApi(`/zonacategoria/${idcategoria}`);
        },
        one(idzona) {
            return callApi(`/zona/${idzona}`);
        },
    },
};

export default apiLugares;