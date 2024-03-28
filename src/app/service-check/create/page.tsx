import PageContextProviderComponent from "@/components/new/page-context-provider.component";

export default function Page() {
  return (
    <PageContextProviderComponent breadcrumb={"Create an API Check"}>
      <div className="w-full flex flex-col space-y-4">
        <h1>Create an Api Check</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          numquam laudantium libero ratione, voluptas, dolorem error, recusandae
          sequi nisi nesciunt molestias dolores quidem ipsum consequuntur?
          Magnam deserunt aperiam quia minus!
        </p>
      </div>
    </PageContextProviderComponent>
  );
}
