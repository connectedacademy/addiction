<template lang="pug">
.map-wrapper
  a#map-header(href="https://goo.gl/maps/iQuk1gRFVk52" target="_blank")
    h4 Urban Sciences Building
    p 1 Science Square, Newcastle upon Tyne NE4 5TG
  #map.map
</template>

<script>
export default {
  name: 'location-map',
  mounted () {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRqZW5raW5zIiwiYSI6ImNqZjlnNzdvbjJ6MTgzM3BkNTU5aGN6aGQifQ.RmhYrmk1kXV6PHrHVsFITQ'
    window.map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/dark-v9',
      // style: 'mapbox://styles/mapbox/streets-v9',
      style: 'mapbox://styles/edjenkins/cjmag45h8gblw2rniw8fze1cy',
      center: [-1.625197, 54.973631],
      zoom: 13,
      minZoom: 5,
      maxZoom: 18,
      dragPan: false,
      scrollZoom: { around: 'center' },
      padding: {
        bottom: 200
      }
    })

    window.map.on('load', () => {
      map.addLayer({
        'id': 'location',
        'type': 'circle',
        "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "properties": {
                      "description": "<strong>Urban Sciences Building</strong><p>This is where the live classes will be held.</p>",
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-1.625197, 54.973631]
                  }
              }]
            }
          },
          'paint': {
              'circle-radius': 10,
              'circle-color': '#0A38EF',
              'circle-stroke-color': 'white',
              'circle-stroke-width': 2,
              'circle-stroke-opacity': 1

          }
      })
    })
  }
}
</script>

<style lang="stylus">
@import '../../../app/src/assets/stylus/shared'
.map-wrapper
  position relative
  width 100%
  #map-header
    animate()
    radius(10px)
    background-color white
    display block
    margin 0 auto -85px auto
    max-width calc(100% - 80px)
    padding 12px 15px
    position relative
    text-decoration none
    width 340px
    z-index 99
    &:hover
      cursor pointer
    h4
      reset()
      display block
      color $color-primary
      font-size .9em
    p
      reset()
      color $color-primary
      font-size .9em
      margin-top 0px

  #map
    outline 0
    position relative
    left 0
    right 0
    width 100%
    height 420px
    .mapboxgl-canvas
      outline 0
      left 0
</style>