import ApiChecksTableComponent from "@/components/new/api-checks-table.component";
import PageContextProviderComponent from "@/components/new/page-context-provider.component";

export default function Dashboard() {
  return (
    <PageContextProviderComponent breadcrumb={"Dashboard"}>
      <div className="w-full flex flex-col space-y-4">
        <h1>Some Active API Checks</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          numquam laudantium libero ratione, voluptas, dolorem error, recusandae
          sequi nisi nesciunt molestias dolores quidem ipsum consequuntur?
          Magnam deserunt aperiam quia minus!
        </p>
        <ApiChecksTableComponent />
      </div>
    </PageContextProviderComponent>
  );
}
