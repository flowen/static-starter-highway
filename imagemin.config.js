module.exports = {
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
  mozjpeg: { progressive: true, quality: 65 },
  pngquant: { quality: 65 },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: 65 },
}
