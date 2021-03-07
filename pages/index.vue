<template>
  <div class="mt-16">
    <!-- スライダー部分はいったん保留 -->
    <v-carousel hide-delimiters cycle class="mb-16">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        class="mt-16"
      ></v-carousel-item>
    </v-carousel>
        <v-row
        justify="space-around"
        align-content="center"
        style="height:100%"
        >
        <!-- <v-avatar
        tile
        size="300"
        >
        <img
          src="/image/etigo3.jpg"
          alt="PROFILE"
          style="object-fit: cover;"
        >
        </v-avatar> -->
        <p class="subtitle-1 mb-5 mt-10 p-4 text--primary">
          タテモノトカは人や場所に寄り添い、物語をあらゆるものから引き出すことで、建築を形作っていきます。<br>
          タテモノトカと一緒にたてものとか、いろんなものを作ってみませんか。
        </p>
        </v-row>
      </v-col>
    <p class="display-1 text-center mt-16 font-weight-light">Works</p>
    <v-row text-align: center>
      <v-col
        v-for="(card) in cards"
        :key="card.index"
        :cols="12"
        :sm="6"
        :md="6"
        class="pa-10 mt-5"
      >
        <v-card
        class="mx-auto"
        max-width="374"
        >
          <v-img
            height="250"
            :src="card.src"
          ></v-img>
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-text v-html="card.description"></v-card-text>
        </v-card>
      </v-col>
      <v-row class="button mb-10">
        <v-col>
          <v-btn
          class="ma-2"
          outlined
          color="gray"
          to="/works"
          nuxt
          >
            More WORKS
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: 'TOP'
      }
    },
    data () {
      return {
        items: [
          {
            src: "/image/top1.jpg"
          },
          {
            src: "/image/top2.jpg"
          },
          {
            src: "/image/top3.jpg"
          },
          {
            src: "/image/top4.jpg"
          },
          {
            src: "/image/top5.jpg"
          },
        ],
        cards: [
        { title: 'ハクラ', description: "新潟県新発田市の長徳寺の境内に位置する合葬墓です。<br/>グッドデザイン賞受賞作品。<br/>&copy;東京藝術大学ヨコミゾマコト研究室", src: '/image/hakura1.jpg', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: '波の椅子', description: "HAPPY TURN／神津島の拠点、なみすけの椅子です。<br/><br/>地元の方々とワークショップを行い、みんなで作成しました。", src: '/image/kozu3.jpg', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'おうちさよなら会', description: "長く住人を支え続けたおうちを労わり、おうちが家の最高潮のときのような賑わいを取り戻す会を行いました。<br/>", src: '/image/outi3.jpg', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        { title: 'おうちこんにちは会', description: "新おうちのお披露目と、この敷地の小さな歴史を展示する「おうちこんにちは会」を行いました。<br/>新おうちは棚瀬建築設計事務所による設計です。", src: '/image/kon1.jpg', redirect_url: '#' ,flex: {cols: 12, sm: 6, md: 6} },
        ],
      }
    },
  }
</script>
<style lang="css">
.button {
  text-align: center
}
</style>
