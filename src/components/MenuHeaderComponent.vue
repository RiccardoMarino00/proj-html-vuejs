<script>
export default{
    props:{
        menuItem: {
            type: Object,
            required: true,
        },
    },

}
</script>

<template>
    <li class="menu-li padding-menu-header line"><a href="#">{{menuItem.text}}</a></li>
    
    <!-- <li class="menu-li"><a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a></li> -->
</template>

<style lang="scss" scoped>

.menu-li{
    margin-top: 40px;
    padding-bottom: 13px;
}

.padding-menu-header{
    padding-right: 70px;
}

.line{
    border-bottom: 3px solid rgb(252, 117, 35);
}
</style>