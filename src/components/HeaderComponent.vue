<script>
import MenuHeaderC from './MenuHeaderComponent.vue'
import store from '../store.js'

export default{
    
    created(){
    },
    components: {
        MenuHeaderC,
    },
    data(){
        return{
            store
        }
    }
    
}
</script>

<template>
    <section class="header-sec">
        <div class="container-md">
            <div class="row">
                <div>
                    <ul class="header-download">
                        <li class="li-download"><a href="#">Download App</a> <span class="badge-ios">iOS</span></li>
                        <li class="li-advertise"><a href="#">Advertise with us</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="header-social">
                        <li class="brand padding-brand"><a href="#"><font-awesome-icon :icon="['fab', 'facebook']" class="logo-brand" /></a></li>
                        <li class="brand padding-brand"><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="logo-brand" /></a></li>
                        <li class="brand padding-brand"><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="logo-brand" /></a></li>
                        <li class="brand"><a href="#"><font-awesome-icon :icon="['fab', 'youtube']" class="logo-brand" /></a></li>
                    </ul>
                </div>
            </div>
            <div class="logo-container">
                <img class="logo-avada-header" src="/src/assets/avada-food-logo-2x.png" alt="">
            </div>
        </div>
        <div class="container-sm">
            <ul class="header-menu">
                <MenuHeaderC v-for="item in store.headerMenu" :key="item" :menuItem="item" />
            </ul>
            <hr class="orange-line">

            <div class="cover"></div>
            <a href="#"><span class="float-badge-sale"><span class="price">39</span> <br> On Sale</span></a>
            <a href="#"><span class="float-badge-demos"><font-awesome-icon style="font-size: 17px;" :icon="['fas', 'info']" /> <br> <span class="demos">Demos</span></span></a>

            <span class="dollar">$</span>

        </div>


    </section>

</template>

<style lang="scss" scoped>
 @use '/style/partials/HeaderStyle.scss';

 .float-badge-demos{
    position: absolute;
    right: 15px;
    top: 160px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    aspect-ratio: 1/1;
    padding: 5px;
    width:  45px;
    text-align: center;
    font-size: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    line-height: 16px;
    
 }

 .float-badge-sale{
    position: absolute;
   
    right: 15px;
    top: 220px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    aspect-ratio: 1/1;
    padding: 5px;
    // width: 40px;
    text-align: center;
    font-size: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    line-height: 16px;
    
 }

 .price{
    font-weight: 700;
    font-size: 20px;
    color: #66bc7b;
 }

 .dollar{
    color: #66bc7b;
    font-weight: 700;
    position: absolute;
    top: 220px;
    right: 50px;
    font-size: 12px;
 }



//  .badge-ios{
//     padding: 10px;
//     font-size: 10px;
// }
</style>