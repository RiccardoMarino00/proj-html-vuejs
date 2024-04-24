<script>
export default{

}
</script>

<template>
    <section class="freebok-section">
        <div class="container-sm text-center">
            <p class="size-font2">Subscribe <span style="color: rgb(252, 117, 35);">& </span> Receive A Free eBook</p>
            <p class="paragraph-margin text-lightgray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium ducimus, perferendis esse minima officiis distinctio omnis, possimus rem, illo consequatur magnam.</p>
            <div class="form-email">
                <input type="email" placeholder="Insert your email...*" class="input-email">
                <button class="orange-button">SUBSCRIBE  </button>
            </div>
            <p class="paragraph-margin text-lightgray lorem5">Lorem ipsum dolor sit amet.</p>
            
        </div>
        <div class="bg-white">
                <img class="img" src="/src/assets/Yogurt-Nan-400x263.jpg" alt="">
                <img class="img" src="/src/assets/Mixed-fruits-400x263.jpg" alt="">
                <img class="img" src="/src/assets/r-rachel-park-366508-unsplash-min-400x263.jpg" alt="">
                <img class="img" src="/src/assets/r-michelle-tsang-500721-unsplash-min-400x263.jpg" alt="">
        </div>
        
    </section>

</template>


<style lang="scss" scoped>

.freebok-section{
    background-color: white;
    background-image: url(/src/assets/subscribe-sec-bg.png);
    margin-top: 120px;
}

.container-sm{
    padding-top: 110px;
}

.orange-button{
    font-size: 15px;
    padding: 10px;
    width: 30%;
    height: 47px;
    margin-left: 25px;
    font-weight: 600;
}

.input-email{
    width: 66%;
    padding: 14px;
    padding-left: 20px;
    color: #9c9894;
    border: 2px solid #cdcbc8 ;
    border-radius: 5px;
    background-color: white;
}

.form-email{
    padding: 0 60px ;
}

.paragraph-margin{
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: Arial, Helvetica, sans-serif;
}

.lorem5{
    padding-bottom: 110px;
}

.img {
  width: 368px;
}
</style>