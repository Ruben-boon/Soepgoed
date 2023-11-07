
import Hero from "../components/hero";
import TextSingle from "../components/text-single";
import TextAndImage from "../components/text-and-image";
import Feature from "../components/feature";
import Carousel from "../components/carousel";
import TextAndForm from "../components/text-and-form";
import PostsList from "../components/posts-list";


const componentMapping = {
    hero: Hero,
    textSingle: TextSingle,
    textAndImage: TextAndImage,
    feature: Feature,
    carousel: Carousel,
    textAndForm: TextAndForm,
    postsList: PostsList
  };
  // @ts-ignore
 export const mapComponent = (type) => componentMapping[type];