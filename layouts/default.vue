<template>
  <v-app dark>
    <header>
      <v-app-bar
        color="white"
        flat
        app
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>タテモノトカ</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary>
        <v-list nav>
          <v-list-item-group>
            <nuxt-link to="/">
              <v-list-item>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/works">
              <v-list-item>
                <v-list-item-title>Works</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/about">
              <v-list-item>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/contact">
              <v-list-item>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="font-weight-light"
    >
      <span>&copy; {{ new Date().getFullYear() }} タテモノトカ</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      title: 'タテモノトカ'
    }
  }
}
</script>
