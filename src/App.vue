<script >
// import HelloWorld from './components/HelloWorld.vue'
import HeaderC from './components/HeaderComponent.vue'
import ContentC from './components/ContentComponent.vue'
import FooterC from './components/FooterComponent.vue'
export default{
    components: {
        HeaderC,
        ContentC,
        FooterC,
    },
    

}
</script>

<template>
    <HeaderC />
    <ContentC />
    <FooterC />

</template>

<style lang="scss" >
@use '/style/general.scss'

</style>
