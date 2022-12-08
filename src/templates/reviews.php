<div class="grid md:grid-cols-4 grid-cols-1 my-24">
    <div class="col-span-2 flex justify-center items-center font-bold text-4xl text-center pb-4 fade-in-left">
        Nos avis<br> clients
    </div>

    <div class="col-span-2 fade-in-right">

        <div class="swiper review-swiper relative">
            <div class="swiper-wrapper flex items-center py-16">

                <div class="swiper-slide">
                    <div class="flex flex-col px-8 py-4 gap-8">
                        <div><img src="./img/user1.png" alt="image de profil" /></div>
                        <div class="rating flex"><?= showRating(5) ?></div>
                        <div class="text">Vivant en appartement, j’ai découvert cette appli, je peux enfin cultiver mes propres légumes !</div>
                        <div class="name font-bold">- Antoine</div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="flex flex-col px-8 py-4 gap-8">
                        <div><img src="./img/user2.png" alt="image de profil" /></div>
                        <div class="rating flex"><?= showRating(5) ?></div>
                        <div class="text">Vivant en appartement, j’ai découvert cette appli, je peux enfin cultiver mes propres légumes !</div>
                        <div class="name font-bold">- Tom</div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="flex flex-col px-8 py-4 gap-8">
                        <div><img src="./img/user1.png" alt="image de profil" /></div>
                        <div class="rating flex"><?= showRating(5) ?></div>
                        <div class="text">Vivant en appartement, j’ai découvert cette appli, je peux enfin cultiver mes propres légumes !</div>
                        <div class="name font-bold">- Antoine</div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="flex flex-col px-8 py-4 gap-8">
                        <div><img src="./img/user1.png" alt="image de profil" /></div>
                        <div class="rating flex"><?= showRating(5) ?></div>
                        <div class="text">Vivant en appartement, j’ai découvert cette appli, je peux enfin cultiver mes propres légumes !</div>
                        <div class="name font-bold">- Antoine</div>
                    </div>
                </div>

            </div>
            <div class="slider-gradient absolute md:w-2/3 w-full h-full right-0 top-0 bg-slate-400"></div>
        </div>

    </div>

</div>



<?php

function showRating(int $rating)
{

    $stars = '';

    for ($i = 0; $i < $rating; $i++) {
        $stars .= '<img src="./img/star.svg" alt="star" class="w-4" />';
    }

    return $stars;
}

?>