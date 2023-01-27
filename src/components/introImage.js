import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { images } from 'next.config';

gsap.registerPlugin(CustomEase);


const Intro = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false)
    gsap.registerPlugin(CustomEase);
    const imageContianer1 = useRef(null);
    const imageRef1 = useRef(null);
    const imageContianer2 = useRef(null);
    const imageRef2 = useRef(null);
    const imageContianer3 = useRef(null);
    const imageRef3 = useRef(null);
    const imageContianer4 = useRef(null);
    const imageRef4 = useRef(null);
    const imageContianer5 = useRef(null);
    const imageRef5 = useRef(null);
    const imageContianer6 = useRef(null);
    const imageRef6 = useRef(null);
    const introContainer = useRef(null);
    const heroContainer = useRef(null);
    const introOverlay = useRef(null);
    const heroImage = useRef(null);

    useEffect(() => {
        console.log(imagesLoaded)
        if (!imagesLoaded) return
        CustomEase.create("custom", "0.9, 0.12, 0.21, 0.9");
        const tl = gsap.timeline();
        //Image one
        tl.fromTo(imageContianer1.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" });
        tl.fromTo(imageRef1.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        //Image two
        tl.fromTo(imageContianer2.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" }, "<-=.5");
        tl.fromTo(imageRef2.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        //Image three
        tl.fromTo(imageContianer3.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" }, "<-=.5");
        tl.fromTo(imageRef3.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        //Image four
        tl.fromTo(imageContianer4.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" }, "<-=.5");
        tl.fromTo(imageRef4.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        //Image five
        tl.fromTo(imageContianer5.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" }, "<-=.5");
        tl.fromTo(imageRef5.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        //Image six
        tl.fromTo(imageContianer6.current, { "clip-path": "inset(100%)" }, { "clip-path": "inset(0%)", duration: 2.5, delay: .5, ease: "power4.out" }, "<-=.5");
        tl.fromTo(imageRef6.current, { scale: 1.8 }, { scale: 1, duration: 1.75, delay: 0, ease: "power4.out" }, "<+=0.25");
        tl.fromTo(introContainer.current, { yPercent: 0 }, { yPercent: -50, duration: 2.5, delay: 0, ease: "power4.inOut" }, "<+=2")
        tl.to(heroContainer.current, { "clip-path": "inset(0% 0px 0px 0px)", duration: 2.5, delay: .5, ease: "power4.inOut" }, "<-=.5");
        tl.to(introOverlay.current, { opacity: 0.75, duration: 2.5, delay: .5, ease: "custom" }, "<-=.5");
        tl.fromTo(heroImage.current, { yPercent: 5 }, { yPercent: -5, duration: 2, delay: 0, ease: "power4.out" }, "<+=1");
        tl.fromTo(heroImage.current, { scale: 2.2 }, { scale: 1.2, duration: 2, delay: 0, ease: "custom" }, "<+=1");
        tl.fromTo("#topText span", { yPercent: 120 }, { yPercent: 0, duration: 2, stagger: 0.2, ease: "power4.inOut" }, "<")
        tl.fromTo("#bottomText span", { yPercent: 120 }, { yPercent: 0, duration: 2, stagger: 0.2, ease: "power4.inOut" }, "<")
    }, [imagesLoaded])
    return (
        <>
            <div ref={introContainer} className={"w-screen h-screen flex items-center justify-center"}>
                <div ref={introOverlay} className={"w-screen h-screen absolute bg-black opacity-0 top-0 left-0 z-[100]"}></div>
                <div className={"relative w-[1400px] h-[1100px] overflow-hidden"}>
                    <article ref={imageContianer1} className={"block w-[350px] h-[500px] absolute top-[15%] left-[40%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image1.jpg"} ref={imageRef1} className={"block w-full h-full object-cover"} />
                        </div>
                    </article>
                    <article ref={imageContianer2} className={"block w-[450px] h-[350px] absolute top-[25%] left-[55%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image2.jpg"} ref={imageRef2} className={"block w-full h-full object-cover"} />
                        </div>
                    </article>
                    <article ref={imageContianer3} className={"block w-[400px] h-[550px] absolute top-[22.5%] left-[12%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image3.jpg"} ref={imageRef3} className={"block w-full h-full object-cover"} />
                        </div>
                    </article>
                    <article ref={imageContianer4} className={"block w-[450px] h-[350px] absolute top-[55%] left-[45%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image4.jpg"} ref={imageRef4} className={"block w-full h-full object-cover"} />
                        </div>
                    </article>
                    <article ref={imageContianer5} className={"block w-[350px] h-[250px] absolute top-[8%] left-[20%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image5.jpg"} ref={imageRef5} className={"block w-full h-full object-cover"} />
                        </div>
                    </article>
                    <article ref={imageContianer6} className={"block w-[450px] h-[350px] absolute top-[45%] left-[30%]"}>
                        <div className={"block w-full h-full overflow-hidden bg-orange-300"}>
                            <img src={"/image6.jpg"} ref={imageRef6} className={"block w-full h-full object-cover"} onLoad={() => setImagesLoaded(true)} />
                        </div>
                    </article>
                </div>
            </div>
            <div className='bg-black w-screen h-screen absolute top-0 left-0 clip overflow-hidden' ref={heroContainer} style={{ clipPath: "inset(100% 0px 0px 0px)" }}>
                <img src={"/image8.jpg"} ref={heroImage} className={"block w-full h-full object-cover"} />
                <h6 className={"absolute top-[20%] left-[50%] translate-x-[-50%] text text-[70px] text-white w-[1100px] text-center leading-none "}>
                    <span className={"block overflow-hidden"} id={"topText"}>
                        <span className={"inline-block"}>MINIMAL&nbsp;</span>
                        <span className={"inline-block"}>FURNITURE </span>
                    </span>
                    <span className={"block overflow-hidden"} id={"bottomText"}>
                        <span className={"inline-block"}>FOR &nbsp;</span>
                        <span className={"inline-block"}>CREATIVE &nbsp;</span>
                        <span className={"inline-block"}>MINDS</span>
                    </span>
                </h6>
            </div>
        </>
    )
}

export default Intro