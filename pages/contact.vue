<template>
  <div id="contact">
    <v-container
    fluid>
      <v-card
      width="100vw"
      >
      <!-- お問い合わせフォーム読み込み（srcだけ変数をバインディングした） -->
      <iframe
        :src="src"
        width="100%"
        height="750px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >読み込んでいます…
        </iframe>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
    head: () =>({
        title: 'CONTACT'
    }),
    data: () => ({
              src:
      "https://docs.google.com/forms/d/1tIt9Y69ha68cCT7IYrMuX0lp9gydAecSl564rhLjA48/edit"
    }),

};
</script>
