<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Portfolio</span>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link to="/" class="mdl-navigation__link">Accueil</router-link>
            <router-link to="/CV" class="mdl-navigation__link">CV</router-link>
            <router-link to="/" class="mdl-navigation__link">Link</router-link>
            <router-link to="/" class="mdl-navigation__link">Link</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Portfolio</span>
        <nav class="mdl-navigation">
          <router-link to="/" class="mdl-navigation__link">Accueil</router-link>
          <router-link to="/CV" class="mdl-navigation__link">CV</router-link>
          <router-link to="/" class="mdl-navigation__link">Link</router-link>
          <router-link to="/" class="mdl-navigation__link">Link</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <router-view></router-view>
      </main>
    </div>    
  </div>
</template>

<script>
import 'material-design-lite'
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
@import url('http://fonts.googleapis.com/css?family=Roboto:300,400,500,70');

body {
  margin: 0;
}
.mdl-layout{
  &__content{
    background-color: white;
  }
  &-title{
    padding: 0;
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
