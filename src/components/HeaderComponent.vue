<script>
export default{
    
}
</script>

<template>
    <section class="header-sec">
        <div class="container-md">
            <div class="row">
                <div>
                    <ul class="header-download">
                        <li class="li-download"><a href="#">Download App</a> <span class="iOS">iOS</span></li>
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
                <li class="menu-li padding-menu-header line"><a href="#">Home</a></li>
                <li class="menu-li padding-menu-header"><a href="#">Recipes</a></li>
                <li class="menu-li padding-menu-header"><a href="#">Places</a></li>
                <li class="menu-li padding-menu-header"><a href="#">Blog</a></li>
                <li class="menu-li padding-menu-header"><a href="#">About</a></li>
                <li class="menu-li padding-menu-header"><a href="#">Contact</a></li>
                <li class="menu-li"><a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a></li>
            </ul>
            <div class="cover"></div>
        </div>


    </section>

</template>

<style lang="scss" scoped>
 @use '/style/partials/HeaderStyle.scss'
</style>