import { fetchPage } from "@/api/sanityApi";
import { mapComponent } from "../componentMap";
import Form from "../components/form";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchPage(`${params.id}`);

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
      <Form></Form>
    </main>
  );
};

export default Page;
