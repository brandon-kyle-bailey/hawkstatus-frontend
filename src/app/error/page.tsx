import { heroGradient } from "@/lib/styles/gradients";

export default function Error() {
  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div
        className={
          heroGradient +
          " flex-1 h-screen w-full flex justify-center items-center"
        }
      >
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="font-bold">Oops! Looks like there was an error.</h1>
          <a
            href="/"
            className="m-10 p-6 rounded-md hover:animate-pulse focus:animate-pulse bg-green-500"
          >
            Take me home!
          </a>
        </div>
      </div>
    </main>
  );
}
