<template>
  <div id="app">
    <img class="game-logo" src="http://matzle.de/wp-content/uploads/2014/05/HOS_Logo_m01_sm-e1400881212390.png">
    <h1>Welcome to Hots gayds!</h1> 
    <section class="filter">
      <h2>Filter</h2>
      <div class="filters">

        <div class="filter-universe">
          <caption>Universe</caption>
          <div class="group-familly">
            <div class="group">
              <label for="universe">Diablo</label>
              <input @change="onChange('diablo')" class="option-input" type="checkbox":checked="true" name="diablo">  
            </div>
            <div class="group">
              <label for="universe">StarCraft</label>
              <input @change="onChange('starcraft')" class="option-input" type="checkbox":checked="true" name="starcraft"> 
            </div>
            <div class="group">
              <label for="universe">Warcraft</label>
              <input @change="onChange('warcraft')" class="option-input" type="checkbox":checked="true" name="warcraft">  
            </div>
            <div class="group">
              <label for="universe">Overwatch</label>
              <input @change="onChange('overwatch')" class="option-input" type="checkbox":checked="true" name="overwatch">  
            </div>
          </div> 
        </div>

        <div class="filter-roles">
          <caption>Role</caption>
          <div class="group-familly">
            <div class="group">
              <label for="classes">Warrior</label>
              <input @change="onChange('warrior')" class="option-input" type="checkbox":checked="true" name="warrior">
            </div>
            <div class="group">
              <label for="classes">Support</label>
              <input @change="onChange('support')" class="option-input" type="checkbox":checked="true" name="support">
            </div>
            <div class="group">
              <label for="classes">Assasin</label>
              <input  @change="onChange('assasin')" class="option-input" type="checkbox":checked="true" name="assasin">
            </div>
            <div class="group">
              <label for="classes">Specialist</label>
              <input @change="onChange('specialist')" class="option-input" type="checkbox":checked="true" name="specialist"> 
            </div>
          </div>
        </div>

        <div class="filter-name">
          <caption>Search Name</caption>
          <input v-model="searchString" type="text" placeholder="search">
        </div>

      </div>  
    </section>

    <div class="cont-adv"></div>


    <section class="all-heroes">

      <div class="heroes">

    <!--div class="hero" v-for="(hero, index) in filterBy(hotsdb, userInput)" :key="hero.heroid" -->
    <div  
    v-for="(hero, index) in filteredArticles" 
    :key="hero.heroid" class="hero" 
    v-bind:class="[hero.role, hero.universe]">
          <router-link :to="{ name: 'hero', params: { HeroId: hero.name, Id: index, Test: hero.heroid } }">
            <img :src="hero.img" alt="">
            <div class="name">{{ hero.name | capitalize }}<!--  -- {{ index }} -- {{ hero.heroid }} --></div>
            <div class="role">{{ hero.role }}</div>
            <div class="universe">{{ hero.universe }}</div>
          </router-link>
        </div>

      </div>


    </section>

    <div class="cont-adv"></div>

    <div class="back-top">
      <a class="back" @click="back">🡄 Back</a>
      <a href="#" v-scroll-to="'h1'">🡅 Top</a>
    </div>



  </div>
</template>




<script>

  import hotsdb from '../src/db/hotsdb.js'

//export default {
//  name: 'app',
//  data () {
//    return {
//      hotsdb: hotsdb
//    }
//  } 
//}



export default {
  name: 'app',
  data () {
    return {
      searchString: '',
      userInput: '',
      hotsdb: hotsdb,
      isStar: null,
      back:()=>history.back()
    }
  },
  computed: {
       filteredArticles: function () {
           var hotsdb_array = this.hotsdb,
               searchString = this.searchString;
           if(!searchString){
               return hotsdb_array;
           }
           searchString = searchString.trim().toLowerCase();
           hotsdb_array = hotsdb_array.filter(function(item){
               if(item.name.toLowerCase().indexOf(searchString) !== -1){
                   return item;
               }
           })
           // Return an array with the filtered data.
           return hotsdb_array;
       }
   },
  methods:{
    onChange(val){
       var specialist = document.querySelectorAll('.'+val);
       specialist.forEach( function(el, ind) {
       		el.classList.toggle('none'+val);
       });
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

  .filter {
    margin: 0px 35px;
  }

  .filter h2 {
    text-align: left;
  }


  .filters {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-top: 20px;
  }


  .filters caption {
    font-size: 22px;
    display: block;
    text-align: left;
    margin-bottom: 10px;
  }

  .filter-universe, .filter-roles, .filter-name {
    display: block;
    width: 33%;
    text-align: left;  
  }


  .filters .group-familly {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .group {
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .group label {
    vertical-align: super;
    padding-right: 3px;
  }

  .filter-name input {
    font-size: 18px;
    padding: 5px 5px 5px 5px;
    -webkit-appearance: none;
    display: block;
    background: #fafafa;
    color: #636363;
    width: 95%;
    max-width: 325px;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #cacaca;
    border-radius: 2px;
  }

.nonesupport, .noneoverwatch, .nonestarcraft, .noneassasin, .nonewarcraft, .nonespecialist, .nonediablo, .nonewarrior {
  display: none
}
  
  @media only screen and (max-width: 745px){


    .filters {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column-reverse;
      -moz-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
      -o-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .filter-universe, .filter-roles, .filter-name {
      width: 100%;
      border-bottom: 2px solid #fff;
      padding: 10px 0px;
    }

    .filters .group-familly {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }



  }


</style>


