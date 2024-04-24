<script>
export default{

}
</script>

<template>
    <section>
        <div class="container-md">
            <div class="row">
                <div class="col-75">
                    <img class="img-single" style="width: 100%;" src="/src/assets/single-post-img3-800x527.jpg" alt="">
                    <div class="body-card">
                        <h2>Food corner: Top Japanase Restaurants for sushi</h2>
                        <p class="text-lightgray bakery-card">By Admin | March 25th, 2019</p>
                        <hr style="margin-bottom: 20px; border-color: lightgray; border-style: dashed;">
                        <p class="text-lightgray text-line-height">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi quos nostrum libero fugit doloribus nemo atque omnis, delectus ipsam officia sed. Maxime ducimus nostrum natus delectus culpa corrupti? Maiores provident quam dolores minus repellendus accusamus laborum aliquid fugit et quaerat quo, tempora iure similique voluptates! Saepe distinctio animi harum.</p>
                        <div class="row read-comment">
                            <button class="btn-read">Read more ></button>
                            <a href="#"><font-awesome-icon class="comments-icon" :icon="['far', 'comments']" /> 0</a>
                        </div>                        
                    </div>
                </div>
                <div class="col-25">
                    <div style="margin-right: 27px;" class="div-view">
                        <!-- <img style="max-width: 100%;" src="../assets/ad-bg.jpg" alt=""> -->
                        <span class="view-span ">VIEW OUR <br> LATEST <br>RECIPES</span>
                    </div>
                    <div class="div-singapore">
                        <span class="span-singa">City Guide: Singapore</span>
                    </div>
                    <div class="view-city">View all city guides</div>
    
                    <hr style="margin-top: 50px; width: 330px; border-color: lightgray; margin-left: 3px; ">
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

.body-card{
   margin: 30px;
}

.bakery-card{
    margin-bottom: 20px;
    margin-top: 8px;
    white-space: pre;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;

}

.col-75{
    background-color: white;
    margin-right: 30px;
}

.span-singa{
    background-color: rgba(0, 0, 0, 0.779);
    color: white;
    position: absolute;
    top: 55%;
    padding: 14px;
    font-size: 23px;
    font-family: Arial, Helvetica, sans-serif;
}

.view-span{
    position: absolute;
    top: 50%;
    left: 50% ;
    transform: translate(-50%, -50%);
    text-align: center;
    margin-left: 7px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: rgb(92, 88, 88);

}

.view-city{
    background-color: rgb(252, 117, 35);
    color: white;
    text-align: center;
    width: 330px;
    margin-left: 3px;
    padding: 8px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

.view-city:hover {
    background-color: rgb(237, 95, 6);

}

.div-singapore{
    width: 330px;
    background-image: url(/src/assets/singapore-featured-image-600x395.jpg);
    background-size: cover;
    height: 250px;
    margin-left: 3px;
    margin-top: 50px;
    position: relative;


}

.div-view{
    background-image: url(/src/assets/ad-bg.jpg);
    background-size: cover;
    height: 460px;
    width: 330px;
    position: relative;
    margin: 0 auto;

}

.btn-read{
    border: none;
    background-color: white;
    color: #9c9894;
    margin-top: 40px;
    text-align: center;
    cursor: pointer;

}

.btn-read:hover {
    color: rgb(88, 86, 86);
}

.container-md{
    margin-top: 45px;
}

.read-comment{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.comments-icon{
    color: black;
    margin-top: 40px;
}

</style>