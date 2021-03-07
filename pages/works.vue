<template>
  <div id="work">
    <v-container
    fluid>

      <v-card-title
      class="pa-5 justify-center font-weight-light display-1 mb-15"
      >
          Works
      </v-card-title>
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
                  height="300px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                  <v-card-text v-text="card.skill"></v-card-text>
                </v-img>
              </v-card>
            </v-hover>
          </a>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    head: () =>({
      title: 'WORKS'
    }),
    data: () => ({
      cards: [
        { title: 'Portfolio1', skill: 'skill1', src: '/image/kozu1.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio2', skill: 'skill2', src: '/image/kozu2.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio3', skill: 'skill3', src: '/image/kozu3.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: '/image/tori1.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: '/image/outi2.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: '/image/kozu1.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: '/image/outi3.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'Portfolio4', skill: 'skill4', src: '/image/tori3.jpg' ,flex: {cols: 12, sm: 6, md: 6} },
      ],
    }),
  }
</script>
