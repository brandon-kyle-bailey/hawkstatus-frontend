import ApiChecksTableComponent from "@/components/new/api-checks-table.component";
import PageContextProviderComponent from "@/components/new/page-context-provider.component";

export default function Dashboard() {
  return (
    <PageContextProviderComponent breadcrumb={"Dashboard"}>
      <ApiChecksTableComponent />
    </PageContextProviderComponent>
  );
}
