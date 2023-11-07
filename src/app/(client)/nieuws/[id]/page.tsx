import { fetchPostSingle } from "@/api/sanityApi";
import { PortableText } from "@portabletext/react";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchPostSingle(`${params.id}`);
  console.log(data);

  return (
    <main>
      <h2>Hi im the single post:{params.id}</h2>
      <p>
        And to prove that i have content:{" "}
       {data && <PortableText value={data.content} /> }
      </p>
    </main>
  );
};

export default Page;
