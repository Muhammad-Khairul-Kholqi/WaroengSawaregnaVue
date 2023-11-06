<template>
    <div>
        <div class="section">
            <div class="section-left">
                <span class="head-title">{{ data.title.split(' ')[0] }}</span>
                <br>
                <span class="red-text">{{ data.title.split(' ')[1] }}</span>
                <span class="black-text1">{{ data.title.split(' ')[2] }}</span>
                <br>
                <span class="black-text2">{{ data.title.split(' ').slice(3).join(' ') }}</span>
                <br>
                <p>{{ data.description }}</p>
            </div>
            <div class="section-right">
                <img :src="data.file" :alt="data.file">
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>
/* open sans */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
/* poppins */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Poppins:wght@600&display=swap');
/* nunito */
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.section {
    margin: 0;
    margin-top: -40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 10%;
}

.section-right img {
    width: 400px;
}

.section-left {
    width: 45%;
}


.head-title {
    color: #000;
    font-weight: bold;
    font-size: 70px;
    font-family: 'Open Sans', sans-serif;
}

.red-text {
    color: red;
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    position: relative;
    top: -15px;
    letter-spacing: 5px;
}

.black-text1 {
    color: black;
    margin-left: 9px;
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    position: relative;
    top: -15px;
}

.black-text2 {
    font-family: 'Nunito', sans-serif;
    font-size: 50px;
    position: relative;
    top: -30px;
    letter-spacing: 5px;
}

.section-left p {
    position: relative;
    top: -15px;
    font-size: 18px;
}

@media screen and (max-width: 1200px) {
    .black-text2 {
        font-size: 45px;
    }

}

@media screen and (max-width: 1105px) {
    .section-right img {
        width: 350px;
    }

    .black-text2 {
        font-size: 40px;
    }

}

@media screen and (max-width: 1070px) {
    .section-left p {
        font-size: 15px;
    }

}

@media screen and (max-width: 1005px) {

    .section-right img {
        width: 330px;
    }

    .head-title {
        font-size: 60px;
    }

    .red-text {
        font-size: 50px;
    }

    .black-text1 {
        font-size: 50px;
    }

    .black-text2 {
        font-size: 35px;
    }

    .section-right img {
        margin-top: -20px;
    }

}

@media screen and (max-width: 905px) {
    .section-right img {
        width: 290px;
    }

    .head-title {
        font-size: 50px;
    }

    .red-text {
        font-size: 40px;
    }

    .black-text1 {
        font-size: 40px;
    }

    .black-text2 {
        font-size: 30px;
    }
}

@media screen and (max-width: 805px) {
    .section-right img {
        width: 270px;
    }

    .red-text {
        font-size: 35px;
    }

    .black-text1 {
        font-size: 35px;
    }

    .black-text2 {
        font-size: 25px;
    }
}

@media screen and (max-width:715px) {
    .section-right img {
        width: 250px;
    }

    .head-title {
        font-size: 40px;
    }

    .red-text {
        font-size: 30px;
    }

    .black-text1 {
        font-size: 30px;
    }

    .black-text2 {
        font-size: 20px;
    }

    .section-left p {
        font-size: 10px;
    }
}

@media screen and (max-width: 580px) {
    .section {
        flex-direction: column;
    }

    .section-right {
        margin-top: -20px;
    }

    .section-right img {
        max-width: 100%;
    }

    .section-left {
        margin-top: -30px;
    }

    .head-title {
        font-size: 50px;
    }

    .red-text {
        font-size: 40px;
    }

    .black-text1 {
        font-size: 40px;
    }

    .black-text2 {
        font-size: 30px;
    }

    .section-left p {
        font-size: 15px;
    }

    .section-left,
    .section-right {
        width: 100%;
        text-align: center;
    }

    .section-right {
        order: -1;
    }

    .head-title,
    .red-text,
    .black-text1,
    .black-text2 {
        text-align: center;
    }
}
</style>