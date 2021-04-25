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

    strapi_url_compromiso_fechas: `${strapi_url}/fecha-precios`,
    strapi_url_compromiso_bases: `${strapi_url}/bases-y-condiciones`,

    //Productos
    strapi_url_productos: `${strapi_url}/productos`,
    strapi_url_productos_count: `${strapi_url}/productos/count`,
    strapi_url_productos_id: (id) => `${strapi_url}/productos/${id}`,
    strapi_url_productos_seo_url: (seo_url) => `${strapi_url}/productos/seo/${seo_url}`,
    strapi_url_productos_estados_anio: (seo_url) => `${strapi_url}/estados-semanales/?producto.seo_url=${seo_url}&_limit=52`,


    //Operadores
    strapi_url_operadores: `${strapi_url}/operadores`,
    strapi_url_operadores_count: `${strapi_url}/operadores/count`,
    strapi_url_operadores_id: (id) => `${strapi_url}/operadores/${id}`,
    strapi_url_operadores_seo_url: (seo_url) => `${strapi_url}/operadores/seo/${seo_url}`,

    //Comercios
    strapi_url_comercios: `${strapi_url}/comercios`,
    strapi_url_comercios_count: `${strapi_url}/comercios/count`,
    strapi_url_comercios_id: (id) => `${strapi_url}/comercios/${id}`,
    strapi_url_comercios_localidad: (localidad) => `${strapi_url}/comercios?localidad=${localidad}`,

    //Registro de Productores
    strapi_url_registro_productores: `${strapi_url}/productores`,
    strapi_url_registro_productores_productos_permanentes_busqueda: (nombre = "", razon_social = "", provincia = "", limit = 65536, start = 0) =>
        `${strapi_url}/productores/productos/permanentes?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}&_limit=${limit}&_start=${start}`,
    strapi_url_registro_productores_productos_inmediatos_busqueda: (nombre = "", razon_social = "", provincia = "", limit = 65536, start = 0) =>
        `${strapi_url}/productores/productos/inmediatos?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}&_limit=${limit}&_start=${start}`,
    strapi_url_registro_productores_productos_permanentes_busqueda_cuenta: (nombre = "", razon_social = "", provincia = "") =>
        `${strapi_url}/productores/productos/permanentes/count?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}`,
    strapi_url_registro_productores_productos_inmediatos_busqueda_cuenta: (nombre = "", razon_social = "", provincia = "") =>
        `${strapi_url}/productores/productos/inmediatos/count?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}`,
}

export const url_build = {
    strapi_url_base: strapi_url_build,

    strapi_url_compromiso_fechas: `${strapi_url_build}/fecha-precios`,
    strapi_url_compromiso_bases: `${strapi_url_build}/bases-y-condiciones`,


    //Global
    strapi_url_global: `${strapi_url_build}/global`,

    //Informaciones sobre el Compromiso
    strapi_url_informaciones: `${strapi_url_build}/informaciones`,
    strapi_url_informaciones_seo_url_list: `${strapi_url_build}/informaciones/seo?_sort=indice:ASC`,
    strapi_url_informaciones_seo_url: (seo_url) => `${strapi_url_build}/informaciones/seo/${seo_url}`,

    //Acuerdo Carnes
    strapi_url_acuerdo_carnes: `${strapi_url_build}/acuerdo-carnes`,

    //Feria El Reloj
    strapi_url_feria_el_reloj: `${strapi_url_build}/feria-el-reloj`,

    //Productos
    strapi_url_productos: `${strapi_url_build}/productos`,
    strapi_url_productos_seo_url_list: `${strapi_url_build}/productos/seo`,
    strapi_url_productos_count: `${strapi_url_build}/productos/count`,
    strapi_url_productos_id: (id) => `${strapi_url_build}/productos/${id}`,
    strapi_url_productos_seo_url: (seo_url) => `${strapi_url_build}/productos/seo/${seo_url}`,
    strapi_url_productos_estados_anio: (seo_url) => `${strapi_url_build}/estados-semanales/?producto.seo_url=${seo_url}&_sort=fecha:DESC&_limit=52`,

    //Operadores
    strapi_url_operadores: `${strapi_url_build}/operadores`,
    strapi_url_operadores_seo_url_list: `${strapi_url_build}/operadores/seo`,
    strapi_url_operadores_count: `${strapi_url_build}/operadores/count`,
    strapi_url_operadores_id: (id) => `${strapi_url_build}/operadores/${id}`,
    strapi_url_operadores_seo_url: (seo_url) => `${strapi_url_build}/operadores/seo/${seo_url}`,

    //Comercios
    strapi_url_comercios: `${strapi_url_build}/comercios`,
    strapi_url_comercios_count: `${strapi_url_build}/comercios/count`,
    strapi_url_comercios_id: (id) => `${strapi_url_build}/comercios/${id}`,
    strapi_url_comercios_localidad: (localidad) => `${strapi_url_build}/comercios?localidad=${localidad}`,

    //Consumidores
    strapi_url_consumidores: `${strapi_url_build}/consumidores`,
    strapi_url_consumidores_count: `${strapi_url_build}/consumidores/count`,

    //Productores
    strapi_url_productores: `${strapi_url_build}/productores`,
    strapi_url_productores_count: `${strapi_url_build}/productores/count`,
}