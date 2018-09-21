module.exports = {
  head: {
    titleTemplate: 'Depictions of Addiction',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Depictions of Addiction explores how photographers represent addiction through visual work.' }
    ],
    metaInfo: {
      link: [
        { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css' },
        { rel: 'script', src: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js' },
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
      ]
    }
  },
  generate: {
    dir: 'docs'
  }
}