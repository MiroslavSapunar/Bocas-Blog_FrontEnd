const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL
const strapi_url_build = process.env.STRAPI_URL_BUILD
const strapi_key = process.env.STRAPI_API_KEY

export const options = {
    strapi: {
        GET: {
            method: 'GET',
            headers: {
                'Api-Key': strapi_key
            }
        },
        POST: data => ({
            method: 'POST',
            headers: {
                'api-key': strapi_key,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },

    general: {
        GET: {
            method: 'GET'
        },
        POST: (body, headers) => ({
            method: 'POST',
            headers,
            body
        })
    }
}

export const url = {
    strapi_url_base: strapi_url,

    //Ejemplos varios
    strapi_url_productos: `${strapi_url}/productos`,
    strapi_url_productos_count: `${strapi_url}/productos/count`,
    strapi_url_productos_id: (id) => `${strapi_url}/productos/${id}`,
    strapi_url_productos_seo_url: (seo_url) => `${strapi_url}/productos/seo/${seo_url}`,
    strapi_url_productos_estados_anio: (seo_url) => `${strapi_url}/estados-semanales/?producto.seo_url=${seo_url}&_limit=52`,


    //Ejemplos funciones
    strapi_url_registro_productores_productos_inmediatos_busqueda: (nombre = "", razon_social = "", provincia = "", limit = 65536, start = 0) =>
        `${strapi_url}/productores/productos/inmediatos?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}&_limit=${limit}&_start=${start}`,
    strapi_url_registro_productores_productos_inmediatos_busqueda_cuenta: (nombre = "", razon_social = "", provincia = "") =>
        `${strapi_url}/productores/productos/inmediatos/count?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}`,
}

export const url_build = {
    strapi_url_base: strapi_url_build,

    //Ejemplos varios
    strapi_url_productos: `${strapi_url}/productos`,
    strapi_url_productos_count: `${strapi_url}/productos/count`,
    strapi_url_productos_id: (id) => `${strapi_url}/productos/${id}`,
    strapi_url_productos_seo_url: (seo_url) => `${strapi_url}/productos/seo/${seo_url}`,
    strapi_url_productos_estados_anio: (seo_url) => `${strapi_url}/estados-semanales/?producto.seo_url=${seo_url}&_limit=52`,


    //Ejemplos funciones
    strapi_url_registro_productores_productos_inmediatos_busqueda: (nombre = "", razon_social = "", provincia = "", limit = 65536, start = 0) =>
        `${strapi_url}/productores/productos/inmediatos?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}&_limit=${limit}&_start=${start}`,
    strapi_url_registro_productores_productos_inmediatos_busqueda_cuenta: (nombre = "", razon_social = "", provincia = "") =>
        `${strapi_url}/productores/productos/inmediatos/count?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}`,
}