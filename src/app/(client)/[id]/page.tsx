import { fetchPage } from "@/api/sanityApi";
import { mapComponent } from "../utils/componentMap";
import Form from "../components/form";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchPage(`${params.id}`);
  console.log(data);
  const formFieldsAr = [ 'name', 'email', 'people', 'date' ];

  return (
    <main>
      {data &&
        // @ts-ignore
        //loops over the data array and renders the component that is mapped to the _type of the data item
        data.map((dataItem) => {
          const Component = mapComponent(dataItem._type);
          if (Component) {
            return <Component key={dataItem._key} content={dataItem} />;
          } else {
            console.log(
              "_type: " +
                dataItem._type +
                " doenst have a component mapped to it, check componentMapping.ts in the Utils folder, nothing is rendered however so you can also just ignore this message if everything functions well"
            );
            return;
          }
        })}
    </main>
  );
};

export default Page;
