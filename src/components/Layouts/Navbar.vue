<template>
    <div>
        <div class="topnav container" :class="{ responsive: navbarActive }">
            <div class="logo">
                <div><img src="@/assets/img/logo.png" alt="logo"></div>
                <a class="icon">
                    <img src="@/assets/img/hamburger.svg" @click="navbar" alt="hamburger">
                </a>
            </div>
            <div class="menu">
                <a href="/">Home</a>
                <a href="/menus">Menu</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navbarActive: false
        }
    },
    methods: {
        navbar() {
            if (this.navbarActive) {
                this.navbarActive = false;
            } else {
                this.navbarActive = true;
            }
        }
    }
}
</script>
<style scoped>
.topnav {
    overflow: hidden;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.topnav a {
    float: left;
    color: black;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
    font-size: 17px;
}

.topnav .menu a:hover {
    background-image: linear-gradient(to right, red, orange);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.topnav .menu a:after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-image: linear-gradient(to right, red, orange);
    transform: scaleX(0);
    transition: 0.2s linear;
}

.topnav .menu a:hover::after {
    transform: scaleX(0.7);
}

.logo img {
    width: 50px;
}

.topnav .icon {
    display: none;
}

.logo {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 10px;
}

@media screen and (max-width: 600px) {
    .topnav {
        display: block;
        padding: 0;
    }

    .topnav .menu a:hover::after {
        transform: scaleX(0.1);
    }

    .topnav .menu a {
        display: none;
        text-align: center;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }

    .topnav.responsive {
        position: relative;
        display: block;
        text-align: center; 
    }

    .topnav.responsive .menu a {
        float: none;
        display: block;
        text-align: center; 
    }
}

</style>