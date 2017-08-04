<template>
  <div id="app">

    <!--img class="game-logo" src="./assets/hos_logo_m01_sm.png"-->
    <h1>Wellcome, this is Guide about {{ hero.name }}</h1>

    <div class="cont-adv"></div>



    <h2>{{ test }}</h2>

    <div class="heropage" v-if="hero">

    <!--div class="tabs-info">
      <div class="tab tab-gayd">Guide</div>
      <div class="tab tab-about">Basic Info</div>
      <div class="tab tab-reating">Abilities & Skills</div>
    </div-->

    <div class="result-hero-info">
      <div class="titel">Best Guide</div>
      <div class="info info-guid">
        <div class="guid" v-for="guide in hero.guide">
          <div class="level">LEVEL {{ guide.level }}</div>
          <img :src="guide.img" alt="">
          <div class="abil-name">{{ guide.abilname }}</div>
        </div>
      </div>


      <div class="titel">Basic Info</div>   
      <div class="info info-about">

        <div class="left">
          <h2>{{ hero.name | capitalize }}</h2> 
          <img :src="hero.img" alt="">
        </div>

        <div class="right">
          <div class="table">
            <p>{{ hero.about }}</p>
          </div>

          <div class="table">
            <p>Title: {{ hero.title }}</p>
            <p>Role: {{ hero.role }}</p>
            <p>Universe: {{ hero.universe }}</p>
            <p><span>Health</span>: {{ hero.health }}</p>
            <p><span>Regen</span>: {{ hero.regen }}</p>
            <p><span>Mana</span>: {{ hero.mana }}</p>
            <p><span>Mana regen</span>: {{ hero.manaregen }}</p>
            <p><span>Atack speed</span>: {{ hero.atack }}</p>
            <p><span>Damage</span>: {{ hero.damage }}</p>
          </div>
        </div>      
      </div>


      <div class="titel">Abilities & Skills</div>
      <div class="info info-reating">
        <div class="skill" v-for="skill in hero.skill">
          <div class="level">LEVEL {{ skill.level }}</div>
          <img :src="skill.img" alt="">
          <div class="abil-name">{{ skill.abilname }}</div>
        </div>
      </div>
      
    </div>




  </div>



  <div class="cont-adv"></div>

    <div class="back-top">
      <router-link class="back" to="/hots">🡄 Back</router-link>
      <a href="/#app" class="top">🡅 Top</a>
    </div>


</div>
</template>

<script>

  import hotsdb from '../src/db/hotsdb.js'

  export default {
    name: 'app',
    data () {
      return {
        hotsdb: hotsdb,
        hero: null,
        test: null,
        title: 'My Title'
      }
    },
    created: function() {
      var heroId = this.$route.params.Test
      this.hero = this.hotsdb[heroId]
    },
    head: {
      title: function () {
        return {
          inner: this.hero.seotitle,
          separator: ' ',
          complement: ' '
        }
      },
      meta:  function () {
        return [
        { name: 'description', content: this.hero.seodesc },
        { name: 'keywords', content: this.hero.seokey },
        { n: 'twitter:description', c: this.hero.seodesc},
        ]
      }
    }
  }

</script>





<style lang="scss">
  $color: #fff;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color;
    margin-top: 15px;
  }

  #app .game-logo {
    width: 100%;
    max-width: 1100px;
  }


</style>
