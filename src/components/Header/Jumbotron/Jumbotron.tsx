
import { Carousel } from "@material-tailwind/react";


export function CarouselCustomNavigation() {

    return (
        <Carousel
            className=""
            loop={true}
            // autoplay={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src="https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_TloZTearsOfTheKingdom_Gamepage.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}


export function Jumbotron() {
    return (
        <div className="w-full h-[600px]">
            {CarouselCustomNavigation()}
        </div>
    )
}
