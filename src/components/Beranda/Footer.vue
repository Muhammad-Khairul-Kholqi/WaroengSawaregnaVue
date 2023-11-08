<template>
    <div class="all-footer">
        <div class="footer-top">
            <div class="logo">
                <img src="@/assets/img/logo.png">
            </div>
            <div class="title">
                <p>Chicken Fire</p>
            </div>
        </div>
        <hr>
        <div class="footer-bottom">
            <div class="menu">
                <p>Service</p>
                <p>Support</p>
                <p>Category</p>
                <p>Join Us</p>
            </div>
            <div class="sosmed">
                <img src="@/assets/img/facebook.png">
                <img src="@/assets/img/instagram.png">
                <img src="@/assets/img/github.png">
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>© Chicken Fire - 2023 by Khairul Kholqi</p>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap');

template {
    margin: 0;
    padding: 0;
}

.all-footer {
    background-color: #EEEFF1;
    display: block;
}

.footer-top {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.logo img {
    width: 60px;
}

.title p {
    margin-top: 20px;
    margin-left: 20px;
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
}

.menu {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.menu p {
    padding: 0 50px 0 50px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.menu p:hover {
    text-decoration: underline;
}

.sosmed {
    display: flex;
    justify-content: center;
}

.sosmed img {
    cursor: pointer;
    width: 30px;
    margin: 30px 50px 30px 50px;
}

hr {
    width: 400px;
    height: 1px;
    opacity: 100%;
    margin: 0 auto;
    margin-top: 20px;
}

.copyright {
    background-color: #273443;
}

.copyright p {
    text-align: center;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    padding: 10px 0 10px 0;
    margin-bottom: 0;
}

.sosmed img:hover {
    filter: drop-shadow(0px 0px 2px #000);
}

@media screen and (max-width: 630px) {
    .menu p{
        padding: 0 30px 0 30px;
    }

    .logo img {
        width: 50px;
    }
    
    .title p {
        font-size: 17px;
    }
}

@media screen and (max-width: 475px) {
    .menu p{
        padding: 0 20px 0 20px;
    }
}

@media screen and (max-width: 390px) {
    .menu p{
        padding: 0 10px 0 10px;
        font-size: 12px;
    }

    .sosmed img {
        width: 25px;
        margin: 20px 10px 20px 10px;
    }

     hr {
        width: 200px;
    }
}

@media screen and (max-width: 490px) {
    hr {
        width: 200px;
    }
}
</style>