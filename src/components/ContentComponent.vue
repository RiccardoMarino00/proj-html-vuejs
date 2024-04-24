<script>
import TodaysC from './TodaysComponent.vue'
import FoodieC from './FoodieComponent.vue'
import SaladC from './SaladComponent.vue'
import CulinaryC from './CulinaryComponent.vue'
import SingaporeC from './SingaporeComponent.vue'
import FeedbackC from './FeedbackComponent.vue'
export default{
    components:{
        TodaysC,
        FoodieC,
        SaladC,
        CulinaryC,
        SingaporeC,
        FeedbackC,
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
        <section>
            <div class="container-md cnt-farm">
                <div class="row">
                    <div class="col-50">
                        <h3 style="margin-bottom: 30px; font-family: Arial, Helvetica, sans-serif;">FARM TO TABLE</h3>
                        <p class="text-line-height text-lightgray" style="font-family: Arial, Helvetica, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, impedit. Eum iusto fugit fugiat quasi, expedita vero.</p>
                    </div>
                    <div class="col-50 cnt-blog">
                        <button class="orange-button">READ OUR BLOG <font-awesome-icon class="book-icon" :icon="['fas', 'book-open-reader']" /></button>
                    </div>
                </div>
            </div>
        </section>
        <SingaporeC />
        <FeedbackC />
        

        
        
    </main>

</template>

<style lang="scss" scoped>
@use '/style/partials/ContentStyle.scss';
.book-icon{
    margin-left: 5px;
    font-size: 12px;
}
</style>