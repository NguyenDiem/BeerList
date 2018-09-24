<template>
<!-- 
  <div id="beer">
    <h1 class="title">{{message}}</h1><hr>
    <div v-if="beer" class="content">
      <div class="beer-image">
        <img :src="beer.image_url" :alt="beer.name">
      </div>
      <div class="beer-detail">
        <h3>Id: {{beer.id}}</h3>
        <h3>Name: {{beer.name}}</h3>
        <h3>Tag line: {{beer.tagline}}</h3>
      </div>
    </div>
    <div v-else class="no-content">
      No item selected.
    </div>
  </div> -->

  <div>
    <p>Look, there's a slot below me!</p>
    
    <slot name="nameSlotText" :text="nameSlottext">
        
    </slot>

    <slot name="nameSlotText2" :text="nameSlotText2">

    </slot>

    <slot :text="defaultSlotText">

    </slot>
  </div>
  
</template>

<script>
export default {
  props: {
    beer: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      message: "BEER'S DETAILS",
      defaultSlotText: "Default slot text from children.",
      nameSlottext: "Name slot text from children.",
      nameSlotText2: "Name slot text 2 from children."
    };
  }
};
</script>

<style scoped>
#beer {
  border: 1px solid black;
  margin-left: 20px;
}

.title {
  padding: 10px 20px 10px 20px;
}

.content {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #f8fafc;
  height: auto;
  max-height: 100%;
}

.beer-image {
  height: 200px;
  width: 200px;
  border: 1px black solid;
  margin-left: 40px;
  display: flex;
  justify-content: center;
}

.beer-image img {
  max-width: 100%;
  max-height: 100%;
}

.beer-detail {
  padding: 20px 10px 20px 10px;
  margin-left: 40px;
}

hr {
  border: solid black 2px;
}

.no-content {
  padding: 10px 20px 10px 20px;
}
</style>

