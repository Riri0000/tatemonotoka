<template>
  <div id="profile">
    <v-container
    fluid>
      <p class="display-1 text-center mt-16 font-weight-light mb-16 grey--text text--darken-1">About</p>
      <v-row
      justify="center"
      align-content="center"
      >
        <v-col
          cols="12"
          sm="5"
          md="5"
          align="center"
        >
          <v-row
          justify="space-around"
          align-content="center"
          style="height:100%"
          >
          <v-avatar
          tile
          size="250"
          >
          <img
            src="/image/profile.png"
            alt="PROFILE"
            style="object-fit: cover;"
          >
          </v-avatar>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-list>
            <v-card-text class="font-weight-light headline">杉山 由香</v-card-text>
            <v-list-item
            v-for="profile in profiles"
            :key="profile.content"
            >
              <v-list-item-content>
                <v-list-item-title class="text-wrap">{{ profile.content }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          sm="11"
          md="11"
          align="left"
        >
          <v-list>
            <v-card-text class="font-weight-light headline mb-5 grey--text text--darken-1">タテモノトカ</v-card-text>
            <v-list-item
            v-for="address in addresses"
            :key="address.content"
            >
              <v-list-item-content>
                <v-list-item-title class="text-wrap">{{ address.content }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          sm="11"
          md="11"
          align="left"
        >
          <v-list>
            <v-card-text class="font-weight-light display-1 mb-5 grey--text text--darken-1">Aword</v-card-text>
            <v-list-item
            v-for="aword in awords"
            :key="aword.content"
            >
              <v-list-item-content>
                <v-list-item-title class="text-wrap">{{ aword.content }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: 'ABOUT'
      }
    },
    data: () => ({
      profiles: [
        { content: '2014　東京電機大学建築学科卒業'},
        { content: '2016　東京藝術大学大学院建築科修了'},
        { content: '2016-19　伊東豊雄建築設計事務所勤務'},
        { content: '2019　タテモノトカ設立'},
      ],
      addresses: [
        { content: '一級建築士事務所　東京都知事登録第●●号' },
        { content: '建築・インテリアの企画・設計及び監理'},
        { content: 'プロダクトやイベントの企画・デザイン'}
      ],
      awords: [
        { content: '2010　サスティナブルデザインアイデアコンペ最優秀賞' },
        { content: '2010　サスティナブルデザイン国際会議登壇' },
        { content: '2013　卒業制作　JIA全国卒業設計コンクール金賞' },
        { content: '2014　全国卒業設計コンクール金賞受賞'},
        { content: '2014　ポラス主催学生建築デザインコンペティション最優秀賞' },
        { content: '2015　スターマイカ主催リノベーションコンテスト奨励賞' },
        { content: '2015　シェルター主催シェルターインターナショナル学生設計競技奨励賞' },
        { content: '2016　修士制作　吉田五十八賞・匠美賞' },
        { content: '2017　グッドデザイン賞　※東京藝術大学ヨコミゾマコト研究室として' },
        { content: '2019　大地の芸術祭　出展　※伊東豊雄建築設計事務所作品として' },
        { content: '2020　guesthouse campus 観光庁宿泊施設アドバイザー派遣事業採択' },
      ],
    }),
  }
</script>
<style lang="css">
  .v-list-item {
    text-overflow: inherit;
    white-space: unset;
  }
</style>

