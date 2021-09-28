import Global from "./urlGlobal";
const BASE_URL = Global.UrlGlobal.urlApi;

async function callApi(endpoint, options = {}) {
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const apiCategoria = {
    Categoria: {
        all() {
            return callApi(`/categorias`);
        },
        one(idcategoria) {
            return callApi(`/categoria/${idcategoria}`);
        },
        aumentarVisitas(idcategoria) {
            return callApi(`/categoriavisita`, {
                method: 'PUT',
                body: JSON.stringify({ "idcategoria": idcategoria }),
            });
        },
    },
};

export default apiCategoria;