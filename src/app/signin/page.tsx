import Footer from "@/components/footer.component";
import GenericNavigationBar from "@/components/new/generic-navigation-bar.component";
import SigninFormComponent from "@/components/signin-form.component";
import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <GenericNavigationBar />
      <main className="flex flex-col align-middle justify-center items-center">
        <p className="text-xl">Please login to you account</p>
        <SigninFormComponent />
        <div>
          <Link
            className="text-blue-500 underline hover:no-underline"
            href="/forgot-password"
          >
            <p>Forgot your password?</p>
          </Link>
          <Link
            className="text-blue-500 underline hover:no-underline"
            href="/signup"
          >
            <p>{"Don't have an account? Click here"}</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
