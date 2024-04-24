<script> 
export default{

}
</script>


<template>

    <section class="today-section">
        <div class="container-sm">
            <p class="todays-pick">Food corner: Top Japanase <br>Restaurants for sushi</p>
            <p class="month text-lightgray">March 25, 2019</p>
            <span class="todays-badge badge">TODAY'S PICK</span>
        </div>
    </section>

</template>

<style lang="scss" scoped>

.today-section{
    background: url(/src/assets/bg-sushi1200.jpg);
    background-size: cover;
    height: 660px;
    position: relative;
    margin-top: 12px;
}



.todays-pick{
    background-color: white;
    border-radius: 8px;
    height: 225px;
    width: 700px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}

.month{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.todays-badge{
    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
}
</style>