<script>
export default{
    props: {
        menuItemFooter: {
            type: Object,
            required: true
        }
    }

}
</script>

<template>
        <li class="li-footer"><a href="#">{{ menuItemFooter.text }}</a></li>
</template>

<style lang="scss" scoped>
</style>