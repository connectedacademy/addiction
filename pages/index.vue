<template lang="pug">
  #release-overlay
    .header-container
      .inner-container
        h1 Depictions of Addiction
        h3 Connected Academy

        .video-wrapper
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
            p This course realises a new type of connected learning, giving students the opportunity to share knowledge and experience with peers, photographers and experts across the globe.
          .box.half
            h2 Peer Feeback
            p During the course there will be opportunities to create photographs with respect to the course material and receive feedback from other students to help develop your work.

    .people-container
      .inner-container
        .section-header
          h2 Renowned Photographers
          p Take the opportunity to engage in conversation with leading photographers.
        .box-wrapper
          .box.third(v-for="p in people" :style="{ 'background-image': `url(${p.photo})` }")
            .text-wraper
              h3(v-text="p.name")
              h4(v-text="p.description")

    .class-container
      .inner-container
        .section-header
          h2 Live Classes
          p Engage in a live conversation at the start of each week in October.
        .box-wrapper
          .box.date.third
            h2 1. Coming Clean
            p Photographer: Graham Macindoe, Subject: Graham Macindoe, Audience: Susan Stellin, Expert context: Susan Stellin
            h3 Available on 2nd October
          .box.date.third
            h2 2. Kensington Blues
            p Photographer: Jeffrey Stockbridge, Subject: Krista, Audience: Gemma-Rose Turnbull, Expert context: Susan Stellin
            h3 Available on 9th October
          .box.date.third
            h2 3. Miss Wish
            p An Autobiography of Miss Wish - Photographer: Nina Berman, Subject: Kimberly Wish, Audience: Stephen Mayes, Expert context: Dr Carl Hart
            h3 Available on 16th October

    .footer
      .inner-container
        .box-wrapper
          .box
            h2 Register your interest
            p If you are interested in participating in the course follow our Twitter account and we will tweet to let you know as the content is made available.
            a.pure-button(href="https://twitter.com/ca_addiction" target="_blank")
              | Follow our Twitter
        p This course was produced by #[a(href="https://twitter.com/Jonathan_Worth" target="_blank") Jonathan Worth] at  #[a(href="https://openlab.ncl.ac.uk" target="_blank") Open Lab].

</template>

<script>
import { mapGetters } from 'vuex'
import Moment from 'moment-mini'

export default {
  name: 'release-overlay',
  computed: {
    releaseTime() {
      return Moment(this.release, 'DD-MM-YY').fromNow()
    }
  },
  data() {
    return {
      release: '02-10-18',
      people: [
        {
          name: 'Graham Macindoe',
          description: 'New York based photographer and an adjunct professor at Parsons The New School.',
          photo: 'https://github.com/connectedacademy/addiction/raw/master/media/Graham_cropped.jpg'
        },
        {
          name: 'Jeffery Stockbridge',
          description: 'Philadelphia based photographer featured in The New York Times Magazine.',
          photo: 'https://www.honeygrow.com/sites/default/files/styles/2560wide/public/blog_headline/20160831-11_blogsize.jpg?itok=ySbXNyOx'
        },
        {
          name: 'Nina Berman',
          description: 'A documentary photographer, author and educator with a focus on the American political and social landscape.',
          photo: 'https://www.worldpressphoto.org/sites/default/files/styles/carousal/public/photographers/Nina%20Berman%20self-portrait.jpg?itok=BFRsK6Kc'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../../../app/src/assets/stylus/shared'

#countdown-banner
  background-color $color-info
  color white
  display none
  padding 10px

#release-overlay
  background-color white
  text-align center
  .header-container
    reset()
    background-color black
    padding-bottom 10px
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
      margin 0 0 10px 0

  .details-container
    vertical-gradient(black, lighten($color-primary, 15%))
    .inner-container
      padding 0 10px 60px 10px
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
    // vertical-gradient(#e1e1e1, white)
    background-color #e1e1e1
    padding-bottom 60px
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

  .footer
    background-color $color-primary
    padding 0 10px 40px 10px
    .inner-container
      p
        color alpha(white, 0.4)
      a
        color alpha(white, 0.5)
      .box-wrapper
        margin-bottom 40px
        margin-top -80px
        .box
          // box-shadow()
          padding 20px 30px
          p
            color $color-text-grey
            margin 0 auto 15px auto
            max-width 600px
          a.pure-button
            radius(10px)
            background-color $color-info
            color white
            display inline-block
            padding 10px 20px
            text-decoration none
</style>
