import Footer from "@/components/footer.component";
import GenericNavigationBar from "@/components/new/generic-navigation-bar.component";
import SignupFormComponent from "@/components/signup-form.component";
import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <GenericNavigationBar />
      <main className="flex flex-col align-middle justify-center items-center">
        <p className="text-xl">Create a new account</p>
        <SignupFormComponent />
        <div>
          <Link
            className="text-blue-500 underline hover:no-underline"
            href="/signin"
          >
            <p>Already have an account? Click here</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
