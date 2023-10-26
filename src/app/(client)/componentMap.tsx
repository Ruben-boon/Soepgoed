
import TestComp from "./components/test-comp";
import Hero from "./components/hero";
import TextSingle from "./components/text-single";
import TextAndImage from "./components/text-and-image";
import Feature from "./components/feature";
import Carousel from "./components/carousel";

const componentMapping = {
    textWithIllustration: TestComp,
    hero: Hero,
    textSingle: TextSingle,
    textAndImage: TextAndImage,
    feature: Feature,
    carousel: Carousel,
  };
  // @ts-ignore
 export const mapComponent = (type) => componentMapping[type];