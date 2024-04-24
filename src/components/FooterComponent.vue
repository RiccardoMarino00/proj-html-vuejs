<script>
import store from '/src/store.js'
import menuFooter from './MenuFooterComponent.vue'
export default{
    data(){
        return{
            store
        }
    },
    components:{
        menuFooter,
    }

}

</script>

<template>
    <section>
        <div class="container-md text-center">
            <div class="grid">
                <div class="col-25 br text-left">
                    <img  src="/src/assets/avada-food-logo-mob-2x-200x87.png" alt="">
                    <ul class="flex">
                        <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col text-lightgray" :icon="['fab', 'facebook-f']" /></a></li>
                        <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col text-lightgray" :icon="['fab', 'instagram']" /></a></li>
                        <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col text-lightgray" :icon="['fab', 'twitter']" /></a></li>
                        <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col text-lightgray" :icon="['fab', 'youtube']" /></a></li>
                    </ul>
                </div>
                <div class="col-25 br text-left">
                    <ul class="ul-footer">
                        <menuFooter v-for="item in store.footerMenu" :key="item" :menuItemFooter="item" />
                    </ul>
                </div>
                <div class="col-25 br text-left">
                    <p class="color-orange mb">CONTACT</p>
                    <div class="row">
                        <font-awesome-icon class="icon-footer text-lightgray" :icon="['fas', 'location-dot']" />
                        <p class="text-lightgray mb location"> 775 New York Ave, <br> Brooklyn, Kings, New <br> York 11203</p>
                    </div>
                    <p class="text-lightgray mb"><font-awesome-icon class="icon-footer" :icon="['fas', 'phone']" /> + 0100-505-0000</p>
                    <p class="text-lightgray mb"><font-awesome-icon class="icon-footer" :icon="['fas', 'envelope']" /> info@your-domain.com</p>
                </div>
                <div class="col-25 text-left">
                    <p class="color-orange" style="width: 200px;">GET OUR APP</p>
                    <a href="#"><img class="android-dw" src="/src/assets/download-android.png" alt=""></a>
                    <a href="#"><img class="ios-dw" src="/src/assets/download-app-store.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="text-center bg">
            <p class="text-lightgray"><font-awesome-icon :icon="['far', 'copyright']" />Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPRess</p>

        </div>
    </section>

</template>

<style lang="scss" scoped>

.container-md{
    margin-top: 70px;
    margin-bottom: 70px;
}


.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-family: Arial, Helvetica, sans-serif;

}

.br{
    border-right: 1px dotted lightgray;
}

.row{
    display: flex;
}
.col-25{
    width: 100%;
    padding-left: 50px;

}

.flex{
    display: flex;
    margin-top: 30px;
}

.li-social{
    margin-right: 10px;

}

.ul-footer{
    text-align: left;
}

.li-footer{
    margin-bottom: 25px;
}

.android-dw{
    margin-top: 25px;
    width: 200px;
}

.ios-dw{
    margin-top: 10px;
    width: 200px;
}

.mb{
    margin-bottom: 20px;
}

.icon-footer{
    margin-right: 10px;
}

.location{
    margin-left: 10px;
}

.bg{
    background-color: #f5f5f1;
    padding: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
}

</style>