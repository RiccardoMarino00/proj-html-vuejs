<script>
import TodaysC from './TodaysComponent.vue'
import FoodieC from './FoodieComponent.vue'
import SaladC from './SaladComponent.vue'
import CulinaryC from './CulinaryComponent.vue'
export default{
    components:{
        TodaysC,
        FoodieC,
        SaladC,
        CulinaryC,
    }


}
</script>

<template>
    <main >
        <TodaysC />
        <FoodieC />
        <div class="container-sm text-center popular">
            <h3 style="margin-bottom: 30px;">POPULAR RECIPES</h3>
            <p class="text-lightgray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, commodi nostrum<br> omnis saepe distinctio repellendus quo deserunt.</p>
        </div>
        <SaladC />
        <div class="container-sm text-center popular">
            <h3 style="margin-bottom: 30px;">CULINARY COLLECTION</h3>
            <p class="text-lightgray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum libero hic <br> dolorem maiores atque officiis, repellendus odio.</p>
        </div>
        <CulinaryC />

        

        
        
    </main>

</template>

<style lang="scss" scoped>
@use '/style/partials/ContentStyle.scss'
</style>