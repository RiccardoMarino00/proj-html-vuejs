<script>
export default{

}
</script>

<template>
    <section>
        <div class="container-md">
            <div class="row">
                <div class="col-50 card">
                    <img src="/src/assets/Yogurt-Nan-600x395.jpg" alt="">
                    <div class="body-card">
                        <p class="size-font">Lunch Favourite with Salad, Naan And Beans</p>
                        <p class="text-lightgray bakery-card">Bakery,  Featured,  Healthy,  Latest Recipes,  Staff Picks</p>
                        <hr style="margin-bottom: 20px; border-color: lightgray; border-style: dashed;">
                        <p class="text-lightgray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi quos nostrum libero fugit doloribus nemo atque omnis, delectus ipsam officia sed. Maxime ducimus nostrum natus delectus culpa corrupti? Maiores provident quam dolores minus repellendus accusamus laborum aliquid fugit et quaerat quo, tempora iure similique voluptates! Saepe distinctio animi harum.</p>
                        <button class="orange-button">LEARN MORE</button>
                    </div>
                    
                </div>
                <div class="col-50 list-img">
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/Mixed-fruits-460x295.jpg" alt="">
                    </div>
                    <div class="col-50" >
                        <img class="img-popular"   src="/src/assets/r-rachel-park-366508-unsplash-min-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/r-michelle-tsang-500721-unsplash-min-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/quick-summer-drink-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/fi2x-6-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/fi2x-6-460x295.jpg" alt="">
                    </div>
                    <div class="col-50">
                        <img class="img-popular"  src="/src/assets/r-brooke-lark-96398-unsplash-min-460x295.jpg" alt="">
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped> 

.col-50{
    width: calc(100% / 2);
}

.body-card{
   margin: 30px;
}

.card{
    background-color: white;
    height: 725px;
}

.bakery-card{
    margin-bottom: 20px;
    margin-top: 8px;
    white-space: pre;

}

.orange-button{
    background-color: rgb(252, 117, 35);
    color: white;
    padding: 12px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.list-img{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
    margin-left: 20px;
}

.img-popular{
    width: 280px;
    padding: 10px;
    padding-top: 0;
    padding-bottom: 15px;
}

.container-md{
    margin-top: 60px;
}

</style>