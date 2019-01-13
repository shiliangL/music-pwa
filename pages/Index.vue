 <template>
  <v-container grid-list-md text-xs-center>
    <!-- {{ hotList }} xxx -->
    <v-layout row wrap>
      <v-carousel hide-controls hide-delimiters id="home-carousel">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>

      <v-flex xs12 v-for="(item, index) in hotList" :key="index">
        <v-card hover @click.native="goTo(item)">
          <v-card-text class="px-0">{{item.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { fetchList } from "@/api/index.js";

function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "音乐",
    showMenu: true,
    showBack: false,
    showLogo: false,
    actions: [
      {
        icon: "search",
        route: "/search"
      }
    ]
  });
}

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  data() {
    return {
      items: [
        {
          src:
            "http://p1.music.126.net/V6e0BbL2EKafjWofYp4QgA==/109951163788872941.jpg"
        },
        {
          src:
            "http://p1.music.126.net/SyB8pMthQGJB2rc2ULiTig==/109951163788863443.jpg"
        },
        {
          src:
            "http://p1.music.126.net/-mWvzDn1xhZofXckeFZaHw==/109951163790807661.jpg"
        },
        {
          src:
            "http://p1.music.126.net/5LepP6gvdGETW8kZnGPnwA==/109951163786241534.jpg"
        }
      ]
    };
  },
  async asyncData({ store, route }) {
    const data = await fetchList();
    store.dispatch("home/index/setHotList", data.tags || []);
    setState(store);
  },
  activated() {
    setState(this.$store);
  },
  computed: {
    ...mapState("home/index", {
      hotList: state => state.hotList
    })
  },
  methods: {
    goTo(item) {
       this.$router.push(`tags/${item.id}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;

  h2 {
    font-size: 46px;
    font-weight: 500;
  }
}
</style>

<style>
#home-carousel {
  height: 14.375rem
}
</style>
