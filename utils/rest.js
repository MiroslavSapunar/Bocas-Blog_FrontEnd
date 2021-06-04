const strapi_url = process.env.NEXT_PUBLIC_URL_STRAPI
const strapi_url_image = process.env.NEXT_PUBLIC_URL_STRAPI_IMAGE
const strapi_url_build = process.env.STRAPI_URL_BUILD
const strapi_key = process.env.STRAPI_API_KEY
const ig_test_token = process.env.IG_TEST_TOKEN
const app_client_token = process.env.APP_CLIENT_TOKEN
const gtag_id = process.env.GOOGLE_TAG

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

export const tokens = {
    google_tag: gtag_id,
    instagram_test_token: ig_test_token,
    intagram_app_token: app_client_token,
    instagram_media: `https://graph.instagram.com/me/media?fields=media_url,permalink&limit=6&access_token=${ig_test_token}`
}

export const url = {
    strapi_url_base: strapi_url,
    strapi_url_base_server_image: strapi_url_image,

    strapi_url_posts: `${strapi_url}/posts?_sort=fecha:DESC`,
    strapi_url_posts_count: `${strapi_url}/posts/count`,

    strapi_url_destacados: `${strapi_url}/posts?destacado=true&_sort=fecha:DESC`,
    strapi_url_noticias: `${strapi_url}/posts?_sort=fecha:DESC&_limit=5`,
    strapi_url_trending: `${strapi_url}/posts?_sort=vistas:DESC&_limit=5`,
    strapi_url_busqueda_email: (email = "") => `${strapi_url}/emails/count/?email=${email}`,
}

export const url_build = {
    strapi_url_base: strapi_url_build,

    strapi_url_posts: `${strapi_url_build}/posts?_sort=fecha:DESC`,
    strapi_url_posts_count: `${strapi_url_build}/posts/count`,

    strapi_url_biblioteca: `${strapi_url_build}/biblioteca`,
    strapi_url_destacados: `${strapi_url_build}/posts?destacado=true&_sort=fecha:DESC&_limit=5`,
    strapi_url_nutricion: `${strapi_url_build}/categorias?url=nutricion`,
    strapi_url_recetas: `${strapi_url_build}/categorias?url=recetas`,
    strapi_url_ecologia: `${strapi_url_build}/categorias?url=ecologia`,
    strapi_url_autores: `${strapi_url_build}/autors`,
    strapi_url_trending: `${strapi_url_build}/posts?_sort=vistas:DESC&_limit=6`,
    strapi_url_top_trending: `${strapi_url_build}/posts?_sort=vistas:DESC&_limit=3`,
    strapi_url_noticias: `${strapi_url_build}/posts?_sort=fecha:DESC&_limit=3`,
}