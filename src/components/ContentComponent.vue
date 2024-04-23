<script>
import TodaysC from './TodaysComponent.vue'
import FoodieC from './FoodieComponent.vue'
import SaladC from './SaladComponent.vue'
export default{
    components:{
        TodaysC,
        FoodieC,
        SaladC,
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
        

        
        
    </main>

</template>

<style lang="scss" scoped>
@use '/style/partials/ContentStyle.scss'
</style>