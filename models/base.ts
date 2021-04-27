export type StrapiBase = {
    id: number,
    created_at: string,
    updated_at: string
}

export type StrapiBasePublish = StrapiBase & {
    published_at: string,
}

export type StrapiFile = StrapiBase & {
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string,
    provider: string,
    provider_metadata: string
}

type StrapiImgFormat = {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    size: number,
    width: number,
    height: number
}

export type StrapiImg = StrapiBase & StrapiFile & {
    formats: {
        thumbnail?: StrapiImgFormat,
        small?: StrapiImgFormat,
        medium?: StrapiImgFormat,
        large?: StrapiImgFormat
    }
}

export type StrapiComponent = {
    id: number
}

export type StrapiError = {
    statusCode: number,
    error: string,
    message: string
}