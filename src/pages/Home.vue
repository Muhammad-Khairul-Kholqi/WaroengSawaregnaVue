<template>
    <div>
        <Beranda :data="TampilanBeranda"></Beranda>
    </div>
</template>

<script>
    import Navbar from '@/components/Layouts/Navbar.vue';
    import Beranda from '@/components/Beranda/Beranda.vue';
    import Footer from '@/components/Beranda/Footer.vue';
    import { Get } from '@/Api/index.js';

    export default {
        components: {
            Navbar,
            Beranda,
            Footer
        },

        data() {
            return {
                TampilanBeranda: [],
            }
        },

        async created() {
            const response = await Get('http://127.0.0.1:5000/api/home');
            this.TampilanBeranda = response.data;
        }
    }
</script>