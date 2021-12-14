<template>
  <div class="card">
    <div class="top">
      <p>{{ data.name }}</p>
      <span class="iconbg" :style="{ backgroundColor: iconBg }"
        ><img width="" :src="require(`../assets/c-${data.name}.svg`)" alt=""
      /></span>
    </div>
    <div class="bottom">
      <p>{{ data.count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { data: Object },
  computed: {
    iconBg() {
      let colors = {
        vehicles: "#f0d83c33",
        species: "#645ad033",
        people: "#635AD033",
        starships: "#2170FF33",
        films: "#03D4B633",
      };
      return colors[this.data.name];
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.bottom {
  display: flex;
  justify-content: flex-start;
}
.card {
  padding: 20px 20px 40px;
  width: 250px;
  background: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 70px;
}
.iconbg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 45px;
  border-radius: 11px;
}
.iconbgimg {
  opacity: 1;
  color: #645ad033;
}
</style>
