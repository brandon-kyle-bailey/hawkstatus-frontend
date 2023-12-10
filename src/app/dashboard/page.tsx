import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sigin");
  }
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
