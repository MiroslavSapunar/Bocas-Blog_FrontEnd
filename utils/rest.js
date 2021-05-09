const strapi_url = process.env.NEXT_PUBLIC_URL_STRAPI
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

    strapi_url_posts: `${strapi_url}/posts?_sort=published_at:DESC`,
    strapi_url_posts_count: `${strapi_url}/posts/count`,

    strapi_url_destacados: `${strapi_url}/posts?destacado=true&_sort=published_at:DESC`,
    strapi_url_noticias: `${strapi_url}/posts?_sort=published_at:DESC&_limit=5`,
    strapi_url_trending: `${strapi_url}/posts?_sort=vistas:DESC&_limit=5`,
}

export const url_build = {
    strapi_url_base: strapi_url_build,

    strapi_url_posts: `${strapi_url_build}/posts?_sort=published_at:DESC`,
    strapi_url_posts_count: `${strapi_url_build}/posts/count`,

    strapi_url_destacados: `${strapi_url_build}/posts?destacado=true&_sort=published_at:DESC&_limit=5`,
    strapi_url_novedades: `${strapi_url_build}/categorias/1`,
    strapi_url_nutricion: `${strapi_url_build}/categorias/2`,
    strapi_url_recetas: `${strapi_url_build}/categorias/3`,
    strapi_url_habitos: `${strapi_url_build}/categorias/4`,
    strapi_url_trending: `${strapi_url_build}/posts?_sort=vistas:DESC&_limit=6`,
    strapi_url_top_trending: `${strapi_url_build}/posts?_sort=vistas:DESC&_limit=3`,
    strapi_url_noticias: `${strapi_url_build}/posts?_sort=published_at:DESC&_limit=3`,
    
    strapi_url_productos_id: (id) => `${strapi_url_build}/productos/${id}`,
    strapi_url_productos_seo_url: (seo_url) => `${strapi_url_build}/productos/seo/${seo_url}`,
    strapi_url_productos_estados_anio: (seo_url) => `${strapi_url_build}/estados-semanales/?producto.seo_url=${seo_url}&_limit=52`,

    //Ejemplos funciones
    strapi_url_registro_productores_productos_inmediatos_busqueda: (nombre = "", razon_social = "", provincia = "", limit = 65536, start = 0) =>
        `${strapi_url_build}/productores/productos/inmediatos?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}&_limit=${limit}&_start=${start}`,
    strapi_url_registro_productores_productos_inmediatos_busqueda_cuenta: (nombre = "", razon_social = "", provincia = "") =>
        `${strapi_url_build}/productores/productos/inmediatos/count?nombre=${nombre}&razon_social=${razon_social}&provincia=${provincia}`,
}