<script >
// import HelloWorld from './components/HelloWorld.vue'
import HeaderC from './components/HeaderComponent.vue'
import ContentC from './components/ContentComponent.vue'
export default{
    components: {
        HeaderC,
        ContentC,
    },
    

}
</script>

<template>
    <HeaderC />
    <ContentC />

</template>

<style lang="scss" >
@use '/style/general.scss'

</style>
