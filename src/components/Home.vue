<template>
  <div class='home'>
    <div class="home__title">
      Bonjour et bienvenue dans mon portfolio
    </div>
    <div class="home__message">
      Voici mes diverses activités
    </div>
    <div class="mdl-grid">
        <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--6-col-phone">
          <div class="mdl-card__title mdl-card__title--csharp">
            <h2 class="mdl-card__title-text">
              Formation C#
            </h2>
          </div>
          <div class="mdl-card__supporting-text">
           1 semaine de formation au centre Technofuture de Gosslie
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              En savoir plus ?
            </a>
          </div>
        </div>
        <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--6-col-phone">
          <div class="mdl-card__title mdl-card__title--csharp">
            <h2 class="mdl-card__title-text">
              Formation C#
            </h2>
          </div>
          <div class="mdl-card__supporting-text">
           1 semaine de formation au centre Technofuture de Gosslie
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              En savoir plus ?
            </a>
          </div>
        </div>    
    </div>   
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.home{
  &__title{
    font-size: 20px;
    line-height: 20px;
  }
}
.mdl-card{
  margin: 5px;
  &__title{
    height: 200px;   
    &--csharp{
      color :white;
      background-image: url('../assets/images/csharp.jpg');
      background-size : cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>