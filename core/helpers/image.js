/* eslint-disable arrow-body-style */

export const generateThumborUrl = (
    src = '',
    width = 400,
    height = 400,
    enable,
    useHttpsOrHttp,
    thumborUrl,
    quality = 80,
    endpoint,
    blur,
    format = 'webp',
) => {
    // checking for HD size needed based on actual size
    let w = width;
    let h = height;
    if (width <= 350 && height <= 350) {
        w = width * 2;
        h = height * 2;
    }
    if (enable) {
        if (thumborUrl) {
            let source = src;
            const domain = (new URL(thumborUrl)).origin;
            if (source.indexOf(domain) === -1) {
                const thumborEndpoint = endpoint ? `/${endpoint}` : '';
                const thumborBlur = blur ? `:blur(${blur})` : '';
                const params = `/unsafe${thumborEndpoint}/${w}x${h}/filters:format(${format}):quality(${quality})${thumborBlur}/`;

                if (!useHttpsOrHttp) {
                    if (source.includes('http')) {
                        source = source.replace('http://', '');
                    }
                    if (source.includes('https')) {
                        source = source.replace('https://', '');
                    }
                }
                return domain + params + source;
            }
        }

        return src;
    }

    return src;
};

export const getImageFallbackUrl = (src) => {
    return src ? src.replace('webp', 'jpeg') : src;
};

export const generateImageDimensions = (url = '') => {
    const imgDimension = {
        height: 500,
        width: 500,
    };

    if (url !== '') {
        const image = new Image();
        image.src = url;

        imgDimension.width = image.naturalWidth;
        imgDimension.height = image.naturalHeight;
    }

    return imgDimension;
};

export default {
    generateThumborUrl,
    generateImageDimensions,
};
