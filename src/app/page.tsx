
import TestComp from "./components/test-comp";
import Hero from "./components/hero";
import TextSingle from "./components/text-single";
import TextAndImage from "./components/text-and-image";
import Feature from "./components/feature";
import { fetchPage } from "@/api/sanityApi";

const componentMapping = {
  textWithIllustration: TestComp,
  hero: Hero,
  textSingle: TextSingle,
  textAndImage: TextAndImage,
  feature: Feature
};
// @ts-ignore
const mapComponent = (type) => componentMapping[type];

const Home: React.FC = async () => {
  const data = await fetchPage("Home");

  return (
    <main>
      {data &&
        // @ts-ignore
        data.map((dataItem) => {
          const Component = mapComponent(dataItem._type);
          if (Component) {
            return <Component key={dataItem._key} content={dataItem} />;
          } else {
            console.log(
              "_type: " +
                dataItem._type +
                " doenst have a component mapped to it, check componentMapping in index.tsx, nothing is rendered however so you can also just ignore this message if everything functions well"
            );
            return;
          }
        })}
      {/*
      {hp_content.carousel && <Carousel content={hp_content.carousel} />} */}
    </main>
  );
};

export default Home;
