<template>
    <div>
        <div class="container_all_footer">
            <br><br>
            <div class="container_footer">
                <div class="bag_kiri">
                    <div class="kata_foto_footer">
                        <div class="logo_footer">
                            <img src="@/assets/img/logo.png" alt="logo">
                        </div>
                        <div class="kata_footer_kiri">
                            <p>Chickengi Fire</p>
                        </div>
                    </div>
                    <div class="alamat_footer">
                        <p>Jl. Siliwangi, Benda,<br>Kec. Cicurug, Kabupaten<br>Sukabumi, Jawa Barat.</p>
                    </div>
                </div>
                <div class="bag_tengah">
                    <div class="title_tengah">
                        <p>Kontak Kami</p>
                        <hr color="#F79327" size="3" width="150px">
                    </div>
                    <div class="telepon_tengah">
                        <p><img src="foto/telephone.png"></p>
                        <p>Telepon<br>-</p>
                    </div>
                    <div class="whatsapp_tengah">
                        <p><img src="foto/whatsapp.png"></p>
                        <p>whatsapp<br>-</p>
                    </div>
                </div>
                <div class="bag_kanan">
                    <div class="title_kanan">
                        <p>Media Sosial</p>
                        <hr color="#F79327" size="3" width="160px">
                    </div>
                    <div class="pembungkus_ig_fb">
                        <div class="instagram">
                            <a href="https://www.instagram.com/smpnegeri_2_cicurug/"><img src="foto/instagram.png"></a>
                            <p><a href="https://www.instagram.com/smpnegeri_2_cicurug/">instagram</a></p>
                        </div>
                        <div class="facebook">
                            <a href="https://www.facebook.com/profile.php?id=100064772691499&locale=ms_MY"><img
                                    src="foto/facebook.png"></a>
                            <p><a href="https://www.facebook.com/profile.php?id=100064772691499&locale=ms_MY">Facebook</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
        </div>
        <!-- copyright -->
        <div class="penutupan">
            <br>
            <center>
                <div class="title_penutup">
                    <p>2023 - Chicken Fire</p>
                </div>
            </center>
            <br>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Roboto+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Inter:wght@500&family=Roboto+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Inter:wght@500&family=Roboto+Slab:wght@500&family=Rowdies:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Kanit&display=swap');

.container_all_footer {
    background-color: #272727;
}

.container_footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 12%;
}

.bag_kiri {
    display: block;
}

.kata_foto_footer {
    display: flex;
}

.logo_footer img {
    width: 80px;
    margin-bottom: 30px;
}

.kata_footer_kiri p {
    font-size: 25px;
    margin-left: 10px;
    font-family: ''Inter', sans-serif';
    font-weight: bold;
    color: #ffffff;
    margin-top: 30px;
}

.alamat_footer p {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: #ffffff;
    margin-left: 10px;
}

.bag_tengah {
    display: block;
}

.title_tengah p {
    font-family: 'Inter', sans-serif;
    font-size: 23px;
    color: #ffffff;
}

.telepon_tengah {
    display: flex;
    flex-wrap: wrap;
}

.telepon_tengah img {
    width: 30px;
}

.telepon_tengah p {
    color: #ffffff;
    margin-left: 15px;
    line-height: 1.4;
}

.whatsapp_tengah {
    display: flex;
    flex-wrap: wrap;
}

.whatsapp_tengah img {
    width: 35px;
}

.whatsapp_tengah p {
    color: #ffffff;
    margin-left: 15px;
    line-height: 1.4;
}

.bag_kanan {
    display: block;
}

.title_kanan p {
    font-family: 'Inter', sans-serif;
    font-size: 23px;
    color: #ffffff;
}

.instagram {
    display: flex;
    flex-wrap: wrap;
    line-height: 3;
}

.instagram p {
    margin-top: -10px;
}

.instagram p a {
    margin-left: 10px;
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
}

.instagram img {
    width: 40px;
}

.facebook {
    display: flex;
    flex-wrap: wrap;
}

.facebook img {
    width: 40px;
}

.facebook p a {
    margin-left: 10px;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
}

.pembungkus_ig_fb {
    margin-top: 20px;
}

/* copyright */
.penutupan {
    background-color: #000;
}

.title_penutup p {
    color: #ffffff;
    font-size: 20px;
}
</style>