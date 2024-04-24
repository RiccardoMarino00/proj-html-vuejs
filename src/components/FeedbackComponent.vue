<script>
export default{

}
</script>

<template>
    <div class="container-md">
        <div class="row">
            <div class="col-75">
                

                <div class="text-center col-50">
                    <img class="img-toast" src="/src/assets/fi-korean-food-400x263.jpg" alt="">
                    <p class="card-text">Roundup: My New Favourite<br>Recipes For Healthy Living</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>

                <div class="text-center col-50 ">
                    <img class="img-toast" src="/src/assets/fi-toasts-400x263.jpg" alt="">
                    <p class="card-text">Meal Prep: Korean Bibimbap <br> with Kimchi</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>

                <div class="text-center col-50">
                    <img class="img-toast" src="/src/assets/fi-street-food-400x263.jpg" alt="">
                    <p class="card-text">Why These Toasts with Tea are<br> My New Favorite</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>

                <div class="text-center col-50 ">
                    <img class="img-toast" src="/src/assets/fi-organic-breakfast-400x263.jpg" alt="">
                    <p class="card-text">Exploring Street Food in <br> Bangkok</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>

                <div class="text-center col-50">
                    <img class="img-toast" src="/src/assets/fi-water-side-rest-400x263.jpg" alt="">
                    <p class="card-text">Organic Choices For Healthier <br> Living</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>

                <div class="text-center col-50 ">
                    <img class="img-toast" src="/src/assets/fi-roundup-400x263.jpg" alt="">
                    <p class="card-text">5 Waterside Restaurants in <br> Istanbul for Special Events</p>
                    <p class="text-lightgray admin-month">By Admin | March 25th, 2019</p>
                </div>
                <div class="load-post">
                <!-- <p class="load-post">LOAD MORE POSTS</p> -->
            </div>
            </div>
            
            
            

            <div class="col-25">
                <div class="div-input">
                    <input class="input-search" type="text" placeholder="Search...">
                    <font-awesome-icon class="icon-glass" :icon="['fas', 'magnifying-glass']" />
                </div>
                <p class="follow-us">Follow us</p>
                <ul class="ul-social">
                    <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col" :icon="['fab', 'facebook-f']" /></a></li>
                    <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col" :icon="['fab', 'instagram']" /></a></li>
                    <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col" :icon="['fab', 'twitter']" /></a></li>
                    <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col" :icon="['fab', 'youtube']" /></a></li>
                    <li class="li-social"><a href="#"><font-awesome-icon class="icon-social-col" :icon="['fab', 'pinterest-p']" /></a></li>
                </ul>
                <div class="popular-recent">
                    <p class="popular">Popular</p>
                    <p class="recent">Recent</p>
                </div>
                <div class="popular-link text-lightgray">
                    <ul>
                        <li class="li-popular">
                            <div class="row">
                                <div>
                                    <img class="rounded-img" src="/src/assets/single-post-img3-66x66.jpg" alt="">
                                </div>
                                <div class="text-link">
                                    <p>Food Corner: Top Japanese Restaurants for sushi</p>
                                    <p>March 25th, 2019</p>
                                </div>

                            </div>
                        </li>

                        <li class="li-popular">
                            <div class="row">
                                <div>
                                    <img class="rounded-img" src="/src/assets/singapore-featured-image-66x66.jpg" alt="">
                                </div>
                                <div class="text-link">
                                    <p>City Guide: Singapore</p>
                                    <p>February 27th, 2019</p>
                                </div>

                            </div>
                        </li>

                        <li class="li-popular">
                            <div class="row">
                                <div>
                                    <img class="rounded-img" src="/src/assets/slide1-bg-66x66.jpg" alt="">
                                </div>
                                <div class="text-link">
                                    <p>6 Nutritional Tips to Help Burn Body Fat</p>
                                    <p>February 28th, 2019</p>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
                <div class="container-tweet">
                    <div class="row row-user-tweet">
                        <div class=" m-b-2">
                            <span class="text-tweet m-r">Tweets</span>
                            <span class="text-lightgray m-r">by</span>
                            <span class="user-link"><a href="#">@Theme_Fusion</a></span>
                        </div>
                        <!-- <div class="icon-info">i</div> -->
                        <font-awesome-icon class="icon-info-bird" :icon="['fas', 'circle-info']" />
                    </div>
                    <div class="row row-user-tweet">
                        <div class="row">
                            <div class="row m-b">
                                <div>
                                    <img class="rounded-img img-twitterpart" src="/src/assets/Twitterpart.png" alt="">
                                </div>
                                <div class="text-link">
                                    <p>ThemeFusion</p>
                                    <p class="text-lightgray">@Theme_Fusion</p>
                                </div>
                            </div>
                        </div>
                        <font-awesome-icon class="icon-info-bird" :icon="['fab', 'twitter']" />
                    </div>
                    <div class="paragraph-tweet">
                        <p >Do you need sublime WordPress hosting for your next website? Take advatage of exclusive partner offers that we have secured just for you, & launch your site in seconds #avada on WP Engine hosting & get 30% Off this Black Friday <br> <a href="#">bit.ly/3kjLLE2 #BlackFriday2020</a></p>
                        <img class="img-sconto" src="/src/assets/sconto.jpeg" alt="">
                    </div>
                    <div class="row row-like">
                        <div>
                            <font-awesome-icon class="icon-heart" :icon="['far', 'heart']" />
                            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
                        </div>
                        <div>21h</div>

                    </div>
                    
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-wrap: nowrap;
}

.img-toast{
    width: 100%;
}

.card-text{
    font-size: 24px;
    margin-top: 25px ;
}

.col-75{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.pr{
    margin-right: 40px;
}

.col-50{
    margin-top: 40px ;
    background-color: white;
    width: 390px;

}



.admin-month{
    margin-top: 10px;
    margin-bottom: 20px;
}

.input-search{
    padding: 16px;
    width: 330px;
    padding-left: 50px;
    color: #9c9894;
    border: 2px solid #cdcbc8 ;
    border-radius: 5px;
    background-color: white;


}

.div-input{
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 30px;
    margin-top: 30px;

}

.icon-glass{
    position: absolute;
    left: 3%;
    top: 34%;
    color: #9c9894;
    

}

.follow-us{
    margin-left: 30px;
    margin-top: 40px;
    color: rgb(252, 117, 35);
    font-size: 18px;

}

.ul-social{
    display: flex;
    margin-left: 30px;
    margin-top: 15px;

}

.icon-social-col{
    color: #525251;
    padding: 8px;
    width: 25px;
    text-align: center;
    padding-top: 10px;
    font-size: 20px;



}

.li-social{
    background-color: #e6e5e3;
    border-radius: 5px;
    margin-right: 8px;
    margin-top: 20px;
    aspect-ratio: 1/1;
}

.popular-recent{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-left: 30px;
    margin-top: 60px;
    font-size: 18px;
}

.popular{
    background-color: white;
    border: 1px thin lightgray;
    padding: 16px;

}

.recent{
    border: 1px solid lightgray;
    padding: 16px;


}

.popular-link{
    margin-left: 30px;
    line-height: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    margin-top: 50px;

}

.rounded-img{
    border-radius: 50%;
}

.li-popular{
    width: 100%;
    margin-bottom: 30px;
}

.text-link{
    margin-left: 5px;
}

.container-tweet{
    margin-left: 30px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    margin-top: 60px;
}

.text-tweet{
    font-size: 24px;
    color: rgb(50, 48, 48);
}

.user-link{
    color: rgb(92, 92, 233);
}

.m-r{
    margin-right: 5px;
}

.m-b{
    margin-bottom: 8px;
}

.m-b-2{
    margin-bottom: 17px;
}

.row-user-tweet{
    justify-content: space-between;
    align-items: center;
}

.icon-info-bird{
    color: #cdcbc8;
    font-size: 15px;
}

.img-twitterpart{
    width: 30px;
}

.paragraph-tweet{
    margin-left: 35px;
}

.img-sconto{
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
}

.row-like{
    margin-left: 35px;
    justify-content: space-between;
    color: #9c9894;
    margin-top: 10px;
}

.icon-heart{
    margin-right: 25px;
}




// .load-post{
//     display: grid;
//     grid-template-areas: ;
//     text-align: center;
//     wid
// }


</style>