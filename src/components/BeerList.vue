<template>
  <div id="beer-list">
      <div id="search" class="bg-grey-light">
          <input type="text" placeholder="Search..." v-model="search" id="search-bar">
          <div id="search-icon"><i class="fas fa-search"></i></div>
      </div>
      <h1 id="beerlist-title" class="bg-grey-dark">{{ loadIndicator }}</h1>
      <div id="search-result">
          <div v-for="beer in beers" :key="beer.id" :id="beer.id" class="tag bg-grey-lighter" @mouseover="mouseOver(beer.id)">
            <div class="image">
              <img :src="beer.image_url" :alt="beer.name">
            </div>
            <div class="item">
              <router-link :to="{ name: 'beers', params: { id: beer.id } }">{{ beer.name }}</router-link>
            </div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      beers: [],
      search: "",
      isLoading: false
    };
  },

  async created() {
    try {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers");
      this.beers = data;
    } catch (error) {
      console.log(error);
    }
  },

  watch: {
    search(val) {
      this.isLoading = true;
      this.searchBeer(val);
    }
  },

  methods: {
    passBeer(beer) {
      this.$emit("sendBeer", beer);
    },
    mouseOver(id) {
      console.log(this.$refs);
    },
    searchBeer(val) {
      setTimeout(async () => {
        try {
          var url = "https://api.punkapi.com/v2/beers?";
          if (this.search) {
            var searchVar = val.replace(" ", "_");
            url = url + "beer_name=" + searchVar;
          }
          const { data } = await axios.get(url);
          this.beers = data;
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      }, 500);
    }
  },

  computed: {
    loadIndicator: function() {
      if (this.isLoading == true) {
        return "Loading...";
      } else {
        return "Done.";
      }
    }
  }
};
</script>

<style scoped>
#search {
  font-size: 20px;
  padding: 10px 20px 10px 30px;
}

#search-bar {
  font-size: 20px;
  border-radius: 20px;
  width: 100%;
  padding: 10px 10px 10px 40px;
  position: relative;
}

#beerlist-title {
  padding: 10px 20px 10px 30px;
  color: white;
}

.tag {
  font-size: 20px;
  border-radius: 10px;
  padding: 15px 20px 15px 30px;
  border-bottom: solid 3px#8795A1;
  border-right: solid 3px #8795a1;
  border-top: solid 3px white;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item {
  padding: 5px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.image {
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
}

#search-icon {
  position: absolute;
  top: 20px;
  padding-left: 10px;
}
</style>


