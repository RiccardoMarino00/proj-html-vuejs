<script>
export default{

}
</script>

<template>
    <section>
        <div class="container-md">
            <div class="foodie">
                <hr class="hr-left">
                <hr class="hr-right">
                <h3 class="text-foodie">FOODIE JOURNAL</h3> 
                <div class="imgs-foodie">
                    <div>
                        <img class="img-foodie" src="/src/assets/single-post-img3-200x132.jpg" alt="">
                        <p class="card-text">Food corner: Top Japanase<br> Restaurants for sushi</p>
                        <p class="text-lightgray">By Admin | March 25th, 2019</p>
                    </div>
                    <div>
                        <img class="img-foodie" src="/src/assets/fi-roundup-200x132.jpg" alt="">
                        <p class="card-text">Roundup: My New Favourite<br> Recipes For Healthy Living</p>
                        <p class="text-lightgray">By Admin | March 25th, 2019</p>
                    </div>
                    <div>
                        <img class="img-toast" src="/src/assets/fi-toasts-200x132.jpg" alt="">
                        <p class="card-text">Why These Toasts with Tea are<br> My New Favorite</p>
                        <p class="text-lightgray">By Admin | March 25th, 2019</p>
                    </div>
                </div>  
            </div>   
        </div>
    </section>

</template>

<style lang="scss" scoped>

.container-md{
    text-align: center;
}

.foodie{
    background-color: white;
    padding: 7px;
    position: relative;
    bottom: 65px;
}

.hr-left{
    border-color: #d8d5d296;
    border-style: dashed;
    border-width: thin;
    width: 420px;
    position: absolute;
    top: 10%;
    left: 3%;
}

.hr-right{
    border-color: #d8d5d29c;
    border-style: dashed;
    width: 410px;
    position: absolute;
    top: 10%;
    right: 5%;
}

.text-foodie{
    margin-top: 28px;
    font-family: Arial, Helvetica, sans-serif;
}

.img-foodie{
    margin-right: 30px;
    width: 350px;
}



.img-toast{
    width: 350px;
}

.imgs-foodie{
    padding: 28px;
    text-align: center;
    display: flex;
    
}

.card-text{
    font-size: 24px;
    margin-top: 25px ;
}

.text-lightgray{
    margin-top: 13px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
}
</style>