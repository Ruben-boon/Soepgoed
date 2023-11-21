
import Hero from "../components/hero";
import TextSingle from "../components/text-single";
import TextAndImage from "../components/text-and-image";
import Feature from "../components/feature";
import Carousel from "../components/carousel";
import TextAndForm from "../components/text-and-form";
import PostsList from "../components/posts-list";
import ImageFull from "../components/image-full";
import TwoColumns from "../components/two-columns";
import ThreeColumns from "../components/three-columns";
import ContactInfo from "../components/contact-info";
import DonateSingle from "../components/donate";
import Donate from "../components/donate";
import HeroText from "../components/heroText";


const componentMapping = {
    hero: Hero,
    textSingle: TextSingle,
    textAndImage: TextAndImage,
    feature: Feature,
    carousel: Carousel,
    textAndForm: TextAndForm,
    postsList: PostsList,
    imageFull: ImageFull,
    twoColumns: TwoColumns,
    threeColumns: ThreeColumns,
    contactInfo: ContactInfo,
    donate: Donate,
    heroText: HeroText
  };
  // @ts-ignore
 export const mapComponent = (type) => componentMapping[type];