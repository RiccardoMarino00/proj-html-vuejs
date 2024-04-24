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
        <li class="li-footer">{{ menuItemFooter.text }}</li>
</template>

<style lang="scss" scoped>
</style>