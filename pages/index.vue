<template lang="pug">
  #release-overlay
    //- #countdown 13 days until release

    .header-container
      .inner-container
        h1 Depictions of Addiction
        h3 Connected Academy
        //- .video-wrapper
          .video-container
            iframe(src="https://youtube.com/embed/Gm6UWOO_SMU?modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&playsinline=1" frameborder='0' allowfullscreen)

    .details-container
      .inner-container
        .box-wrapper
          .box.margin-bottom
            p
              | You are invited to take part in a #[strong free course] exploring how photographers depict addiction.
              | Join a series of rich #[strong online discussions] with world-class photographers and #[strong receive peer feedback] on your own work.
            span - Jonathan Worth
        .box-wrapper
          .box.half
            h2 Connected Learning
            p An opportunity to engage in rich discussion with professional photographers and experts across the globe.
          .box.half
            h2 Peer Feeback
            p Create photographs with respect to the course material and receive feedback from other students.
    
    .preview-container
      .inner-container
        iframe#soundcloud-embed(width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/454540926&color=%23ff5300&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true")

    .people-container
      .inner-container
        .section-header
          h2 Renowned Photographers
          p Take the opportunity to be a part of the conversation with leading photographers.
        .box-wrapper
          .box.third(v-for="p in people" :style="{ 'background-image': `url(${p.photo})` }")
            .text-wraper
              h3(v-text="p.name")
              h4(v-text="p.description")

      #countdown Available {{ releaseTime }}
    //- .platform-container
      .inner-container
        .section-header
          h2 A New Form of Learning
          p Learn through conversation and shared experiences.
        .pure-button.pure-button-info View Course
        //- .video-wrapper
          .video-container
            iframe(src="https://youtube.com/embed/btTHCF4znbo?modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&playsinline=1" frameborder='0' allowfullscreen)


    .class-container
      .inner-container
        .section-header
          h2 Participate in the Course
          p Join us throughout October 2018 to participate in the classes either in Newcastle upon Tyne, UK or online right here.
        .box-wrapper
          .box.date.third
            h2 1. Coming Clean
            p Photographer: Graham Macindoe, Subject: Graham Macindoe, Audience: Susan Stellin, Expert context: Susan Stellin
            h3 2nd October, 19:00
          .box.date.third
            h2 2. Kensington Blues
            p Photographer: Jeffrey Stockbridge, Subject: Krista, Audience: Gemma-Rose Turnbull, Expert context: Dr. Carl Hart
            h3 9th October, 19:00
          .box.date.third
            h2 3. Miss Wish
            p Photographer: Nina Berman, Subject: Kimberly Wish, Audience: Stephen Mayes, Expert context: Mark Kleiman
            h3 16th October, 19:00

    .location-container
      .map-wrapper
        a#map-header(href="https://goo.gl/maps/iQuk1gRFVk52" target="_blank")
          h4 Urban Sciences Building
          p 1 Science Square, Newcastle upon Tyne NE4 5TG
        #map.map

    .footer
      .inner-container
        .box-wrapper
          .box
            h2 Register your interest
            p If you are interested in participating in the course follow our Twitter account and we will tweet to let you know as the content is made available.
            a.pure-button(href="https://twitter.com/ca_addiction" target="_blank")
              | Follow Twitter
            a.pure-button.pure-button-info(href="https://www.eventbrite.com/e/photography-course-depictions-of-addiction-tickets-50533151015?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing" target="_blank")
              | Reserve Ticket
        p This course was produced by #[a(href="https://twitter.com/Jonathan_Worth" target="_blank") Jonathan Worth] at  #[a(href="https://openlab.ncl.ac.uk" target="_blank") Open Lab].

</template>

<script>
import { mapGetters } from 'vuex'
import Moment from 'moment-mini'

export default {
  name: 'release-overlay',
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
      scrollZoom: false, // { around: 'center' },
      padding: {
        bottom: 200
      }
    })

    window.map.on('load', () => {
      map.addControl(new mapboxgl.NavigationControl())
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
  },
  computed: {
    releaseTime() {
      return Moment(this.release, 'DD-MM-YY HH:mm').fromNow()
    }
  },
  data() {
    return {
      release: '02-10-18 19:00',
      people: [
        {
          name: 'Graham Macindoe',
          description: 'New York based photographer and an adjunct professor at Parsons The New School.',
          photo: 'https://github.com/connectedacademy/addiction/raw/master/media/Graham_cropped.jpg'
        },
        {
          name: 'Jeffrey Stockbridge',
          description: 'Philadelphia based photographer featured in The New York Times Magazine.',
          photo: 'https://github.com/connectedacademy/addiction/raw/master/media/jeffrey.jpg'
        },
        {
          name: 'Nina Berman',
          description: 'A documentary photographer, author and educator with a focus on the American political and social landscape.',
          photo: 'https://github.com/connectedacademy/addiction/raw/master/media/nina.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../../../app/src/assets/stylus/shared'

$color-header = lighten($color-primary, 10%)

#countdown
  radius(10px)
  background-color $color-info
  color white
  display inline-block
  font-size 1.1em
  font-weight bold
  line-height 40px
  margin 0 auto
  padding 0 25px
  position relative
  transform translateY(20px)
  z-index 999

.preview-container
  background-color $color-primary
  .inner-container
    max-width 820px !important
    padding 20px 20px

#soundcloud-embed
  radius(10px)
  overflow hidden
  // padding 10px

#release-overlay
  background-color white
  text-align center
  .header-container
    reset()
    background-color $color-header
    padding 20px 10px 40px 10px
    h1, h2, h3
      reset()
      color white
    h1
      font-weight bold
      margin-top 30px
      @media(max-width: 700px)
        font-size 1.6em
    h3
      font-weight normal

  .video-wrapper
    .loading-wrapper
      background-color white
      margin-bottom 20px
      padding 58px 20px
      text-align center
    .video-container
      background-color black
      margin-bottom 20px
      position relative
      padding-bottom 56.25%
      height 0
      overflow hidden
      max-width 100%

      iframe, object, embed
        position absolute
        top 0
        left 0
        width 100%
        height 100%

  .section-header
    padding 20px 0
    h2
      font-weight normal
      margin 20px 0 0 0
    p
      margin 0 auto 10px auto
      max-width 600px

  .platform-container
    background-color $color-primary
    .section-header
      color white

  .details-container
    vertical-gradient($color-header, $color-primary)
    .inner-container
      padding 0 10px 20px 10px
      max-width 840px
      @media(max-width: 700px)
        padding-bottom 10px
      .box-wrapper
        .box
          background-color alpha(white, 0.05)
          &.half
            background-color alpha(white, 0.1)
          h2, p, span
            color white
          &.primary
            background-color $color-info
            font-size .8em
            font-weight bold
            padding 10px

  .inner-container
    padding-top 10px
    margin 0 auto
    max-width 840px
    text-align center

  .box-wrapper
    display flex
    flex-wrap wrap

  .box
    radius(10px)
    background-color white
    box-sizing border-box
    margin 10px
    padding 20px
    flex-basis 100%
    h2
      font-weight normal
      margin 10px 0
    p
      margin 0 0 15px 0
    input
      radius(5px)
      border $color-border 1px solid
      padding 10px 20px
      text-align center
    &.half
      flex-basis calc(50% - 20px)
    &.third
      flex-basis calc(33.33333% - 20px)
    @media(max-width: 700px)
      flex-wrap wrap
      flex-basis 100% !important

  .people-container
    background-color white
    .inner-container
      padding 20px 10px 60px 10px
      @media(max-width: 700px)
        padding-bottom 10px
      .box-wrapper .box
        background-image()
        overflow hidden
        position relative
        text-align left
        padding-top 280px
        .text-wraper
          pinned()
          padding 20px
          top auto
          position absolute
          h3, h4, h5
            reset()
            color white
          h2
            font-weight normal
          h3
            font-size 1.4em
          h4
            font-size 1em
            font-weight normal
        &:before
          animate()
          pinned()
          vertical-gradient(alpha(black, 0), alpha(black, 1))
          content ''
          position absolute
          top auto
          height 120px
          z-index 0

  .class-container
    background-color #e1e1e1
    padding-bottom 80px
    position relative
    .inner-container
      padding 10px
    .box-wrapper
      flex-wrap wrap
      justify-content flex-start
      .box
        // box-shadow()
        flex-basis calc(50% - 20px)
        padding 20px 30px
        text-align left
        h2
          reset()
          font-size 1.4em
          font-weight normal
        h3
          reset()
          color $color-text-grey
          color $color-success
          font-size 1em
          font-weight bold
        p
          color $color-text-grey
        &:first-child
          flex-basis calc(100% - 20px)

  .location-container
    background-color #e1e1e1
    padding-bottom 0
    position relative
    .inner-container
      padding 10px

  .footer
    background-color $color-primary
    padding 0 10px 40px 10px
    position relative
    z-index 99
    .inner-container
      p
        color alpha(white, 0.4)
      a
        color alpha(white, 0.5)
      .box-wrapper
        margin-bottom 40px
        .box
          // box-shadow()
          background-color transparent
          padding 20px 30px
          h2
            color white
          p
            color white
            margin 0 auto 15px auto
            max-width 600px
          a.pure-button
            radius(10px)
            background-color $color-info
            color white
            display inline-block
            padding 10px 20px
            text-decoration none
            &.pure-button-info
              background-color $color-warning
            &:last-child
              margin-left 10px

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
