<template>
  <div class="beer container mx-auto px-4">
    <div class="beer-search">
      <BeerList @sendBeer="sendBeer"></BeerList>
    </div>
    <div class="beer-detail">
      <BeerDetails :beer="beer">
        <template slot-scope="defaultSlotText">
          {{defaultSlotText.text}}
        </template>
        <template slot="nameSlotText2" slot-scope="nameSlotText2">
          {{nameSlotText2.text}}
        </template>
      </BeerDetails>
    </div>
  </div>
</template>

<script>
import BeerList from "@/components/BeerList";
import BeerDetails from "@/components/BeerDetails";

export default {
  name: "HelloWorld",
  components: {
    BeerList,
    BeerDetails
  },

  data() {
    return {
      beer: null,
      myVariable: "I'm just a lonely old variable."
    };
  },

  async created() {
    if (this.$route.params.id) {
      var beer = await axios.get(
        "https://api.punkapi.com/v2/beers/" + this.$route.params.id
      );
      this.beer = beer.data[0];
    }
  },

  methods: {
    sendBeer(beer) {
      this.beer = beer;
    }
  },

  watch: {
    async $route(to, from) {
      if (to.params.id) {
        var beer = await axios.get(
          "https://api.punkapi.com/v2/beers/" + to.params.id
        );
        this.beer = beer.data[0];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beer-search {
  display: inline-block;
  vertical-align: top;
  width: 400px;
}

.beer-detail {
  display: inline-block;
}
</style>
