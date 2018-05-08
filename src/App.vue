<template>
  <v-app>
    <div>
      <v-toolbar color="blue">
        <v-toolbar-side-icon@click="drawer = true"></v-toolbar-side-icon>
        <v-toolbar-title>Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/" flat>Accueil</v-btn>
          <v-btn to="/CV" flat>CV</v-btn>
          <v-btn to="/who" flat>Qui suis-je ?</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div>
        <span>Portfolio</span>
        <v-navigation-drawer
         v-model="drawer"
         temporary
         absolute
        >
          <v-list>
            <v-list-tile @click="$router.push({path: '/'})">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Accueil</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="$router.push({path: '/CV'})">
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>CV</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="$router.push({path: '/who'})">
              <v-list-tile-action>
                <v-icon>person</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Qui suis-je ?</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </div>
      <main>
        <router-view></router-view>
      </main>
    </div>    
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss">
@import url('http://fonts.googleapis.com/css?family=Roboto:300,400,500,70');

body {
  margin: 0;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
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
