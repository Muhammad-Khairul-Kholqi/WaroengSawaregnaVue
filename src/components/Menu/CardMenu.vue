<template>
    <div class="card" style="width: 18rem;">
      <img :src="menu.file" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ menu.title }}</h4>
        <p class="card-text">{{ menu.description }}</p>
      </div>
    </div>
</template>



<script>
export default {
    props: ['menu']
}
</script>

<style>
.card-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 10%;
    margin-bottom: 200px;
}

.card {
    margin-bottom: 50px;
}

</style>
