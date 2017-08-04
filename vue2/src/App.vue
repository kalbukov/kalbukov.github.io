<template>
  <div id="app">



<carousel-3d :autoplay="true" :autoplay-timeout="3000" :controls-visible="true" :width="700" :space="300" :height="450">
  <slide :index="0">
    <img src="https://i.ytimg.com/vi/Kuj2BNeoJoU/maxresdefault.jpg" alt="">
    <p>Read all best guides <a href="/hots">NOW!</a></p>
  </slide>
  <slide :index="1">
    <img src="https://static.levelcamp.com/assets/article/2017/02/04/HOTS-Lucio-Main-Image_feature.jpg">
    <p>Heroes of the Storm's next character is...Overwatch's Lucio!</p>
    <center><a href="/hots-lucio-0">READ NOW!</a></center>
  </slide>
  <slide :index="2">
    <img src="http://media.blizzard.com/heroes/images/icons/heroes-facebook-preview.jpg">
    <p>Read all best guides <a href="/hots">NOW!</a></p>
  </slide>
  <slide :index="3">
    <img src="http://assets.razerzone.com/eeimages/razer_pages/26526/projvalerie-og-1200x630-v1.png" alt="">
    <p>Chose best in <a href="/">RAZER</a></p>
  </slide>
  <slide :index="4">
    <img src="http://bnetcmsus-a.akamaihd.net/cms/blog_header/ue/UESXSG7YL5FT1487903430966.jpg" alt="">
    <h3>Heroes Brawl Of The Week, July 28, 2017: Braxis Outpost</h3>
    <p>This week’s Heroes Brawl takes you back to Braxis Outpost! This brawl is a single-lane battleground set in the Koprulu Sector. It's up to your team to survive in the lane and take down the enemy core, without the aid of Hearthstone or their Hall of Storms. To learn more check out the official release below.</p>
  </slide>
  <slide :index="5">
    <h3>Guide of the Week: Artanis - Playmaker, Bruiser, Sololaner. In-depth Comprehensive guide.</h3>
    <img src="https://www.heroesfire.com/images/news/gotw0801artanis.jpg" alt="">
    <p>Our featured guide this week is Santy's "Artanis - Playmaker, Bruiser, Sololaner. In-depth Comprehensive guide." guide for  	Artanis, the Hierarch of the Daelaam.
Below we've showcased some chapters from Santy's guide that has been recently updated for the latest patch. Make sure to check it out for yourself to not miss on any useful information on how to properly play  	Artanis!</p>
  </slide>
</carousel-3d>





  </div>
</template>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss">
$color: red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.carousel-3d-slide {
    background: #1b1a1f;
    border-bottom: 2px solid #f51d46;
    box-shadow: 1px 6px 18px #000;
}

</style>
