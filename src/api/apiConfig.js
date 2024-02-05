const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fd430c34ec42665a78bde443a107a0b8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;