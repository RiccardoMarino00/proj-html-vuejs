<script>
export default{

}
</script>


<template>
    <section>
        <div class="container-md">
            <div class="row text-center">
                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/drinks-recipes.png" alt="">
                        <span class="name-img-culinary">DRINKS</span>
                    </div>
                </a>
                
                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/soups-recipes.png" alt="">
                        <span class="name-img-culinary">SOUPS</span>
                    </div>
                </a>

                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/baking-recipes.png" alt="">   
                        <span class="name-img-culinary">BAKERY</span>
                    </div>
                </a>

                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/dinner-recipes.png" alt="">
                        <span class="name-img-culinary">DINNER</span>
                    </div>
                </a>
                
                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/healthy-recipes.png" alt="">
                        <span class="name-img-culinary">HEALTHY</span>
                    </div>
                </a>
                
                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/staff-picks.png" alt=""> 
                        <span class="name-img-culinary">STAFF PICKS</span>
                    </div>
                </a>
                
                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/premium-recipes.png" alt="">
                        <span class="name-img-culinary">APPETISERS</span>
                    </div>
                </a>

                <a href="#">
                    <div class="bg-white">
                        <img class="img-culinary" src="../assets/quick-easy-recipes.png" alt="">
                        <span class="name-img-culinary">QUICK AND EASY</span>
                    </div>
                </a>
                
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>

.row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.img-culinary{
    padding: 50px;
    width: 240px;
    height: 210px;
    background-size: contain;
}

.bg-white{
    margin-right: 25px;
    margin-top:  25px;
}

.name-img-culinary{
    position: relative;
    bottom: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

.container-md{
    margin-top: 30px;
}


</style>