<template>
    <div>
        <div class="title-desc">
            <h1>Menu list page</h1>
            <p>Here there are various kinds of chicken menu</p>
        </div>
        <div class="button-category">
            <span v-for="category in DataCategories" @click="filter(category.id)">{{ category.title }}</span>
        </div>
        <div class="card-menu">
            <Card v-for="item in DateMenu" :menu="item"></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Menu/CardMenu.vue';
import { Get } from '@/Api/index.js';

export default {
    components: {
        Card
    },

    methods: {
        async filter(id) {
            const response = await Get('http://127.0.0.1:5000/api/menus?category_id=' + id);
            this.DateMenu = response.data.data;
        }
    },

    data() {
        return {
            DateMenu: [],
            DataCategories: []
        }
    },

    async mounted() {
        const response = await Get('http://127.0.0.1:5000/api/menus');
        this.DateMenu = response.data.data;

        const responseCategoris = await Get('http://127.0.0.1:5000/api/categories');
        this.DataCategories = responseCategoris.data;
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');


.title-desc {
    text-align: center;
    margin-top: 20px;
}

.title-desc h1 {
    font-family: 'Roboto Slab', serif;
    color: red;
    font-size: 48px;
}

.title-desc p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #FF6C22;
}

.button-category {
    justify-content: center;
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
}

.button-category span {
    background-color: #bdcdff;
    padding: 10px 15px;
    font-weight: 500;
    border-radius: 10px;
    margin: 8px;
    cursor: pointer;
}

</style>