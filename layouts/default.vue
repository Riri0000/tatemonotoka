<template>
  <v-app dark>
    <header>
      <v-app-bar
        color="white"
        flat
        app
      >
        <v-avatar
          tile
          size="34"
        >
        <img
          src="/image/logo.jpg"
          alt="LOGO"
        >
        </v-avatar>
        <v-toolbar-title class="subtitle-1 ml-3">タテモノトカ</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down mr-10">
            <v-btn
              text
              class="ml-2 font-weight-bold"
              color="black"
              to="/"
              nuxt>
                TOP
            </v-btn>
            <v-btn
              text
              class="ml-2 font-weight-bold"
              color="black"
              to="/works"
              nuxt>
                Works
            </v-btn>
            <v-btn
              text
              class="ml-2 font-weight-bold"
              color="black"
              to="/about"
              nuxt>
                About
            </v-btn>
            <v-btn
              text
              class="ml-2 font-weight-bold"
              color="black"
              to="/vision"
              nuxt>
                vision
            </v-btn>
            <v-btn
              text
              class="ml-2 font-weight-bold"
              color="black"
              to="/contact"
              nuxt>
                Contact
            </v-btn>
          </v-toolbar-items>
        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        right
        fixed
        temporary
      >
        <v-list nav>
          <v-list-item-group>
            <nuxt-link class="text-decoration-none" to="/">
              <v-list-item>
                <v-list-item-title>TOP</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link class="text-decoration-none" to="/works">
              <v-list-item>
                <v-list-item-title>Works</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link class="text-decoration-none" to="/about">
              <v-list-item>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link class="text-decoration-none" to="/vision">
              <v-list-item>
                <v-list-item-title>Vision</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link class="text-decoration-none" to="/contact">
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
<style>
html {
  font-family: "Source Sans Pro", 游ゴシック体,
   'Yu Gothic', YuGothic,
   'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, sans-serif;
}
</style>
