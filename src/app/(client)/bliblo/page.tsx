import { mapComponent } from "../componentMap";

const Page = ({params}: {params: {id:string}}) => { 
    //@ts-ignore
    const data = [];

    return (
        <main>
            <p>id: {params.id}</p>
            {/* @ts-ignore */}
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
        </main>
      );
}


export default Page;