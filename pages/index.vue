<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="mt-16"
    ></v-carousel-item>
    <v-row>
      <v-col
        v-for="(card) in cards"
        :key="card.index"
        :cols="card.flex.cols"
        :sm="card.flex.sm"
        :md="card.flex.md"
        class="pa-10"
      >
      <a :href="card.redirect_url">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
          :elevation="hover ? 16 : 2"
          >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text v-text="card.skill"></v-card-text>
            </v-img>
          </v-card>
        </v-hover>
      </a>
      </v-col>
    </v-row>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: "/image/hakura2.jpg"
          },
          {
            src: "/image/reki3.jpg"
          },
          {
            src: "/image/kaso1.jpg"
          },
          {
            src: "/image/tiki3.jpg"
          },
          {
            src: "/image/kaso2.jpg"
          },
        ],
        cards: [
        { title: 'Portfolio1', skill: 'skill1', src: 'https://placeimg.com/640/480/any', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6}},
        { title: 'Portfolio2', skill: 'skill2', src: 'https://placeimg.com/640/480/any', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio3', skill: 'skill3', src: 'https://placeimg.com/640/480/any', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: 'https://placeimg.com/640/480/any', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
      ],
      }
    },
  }
</script>
