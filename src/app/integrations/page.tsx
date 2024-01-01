import LinkComponent from "@/components/link.component";
import NavigationLeftComponent from "@/components/navigation-left.component";
import NavigationTopComponent from "@/components/navigation-top.component";
import { authOptions } from "@/lib/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Integrations() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="flex flex-row justify-evenly text-gray-900">
      <NavigationLeftComponent />
      <div className="flex-auto w-full h-max flex flex-col justify-evenly">
        <NavigationTopComponent />
        <div className="flex-auto h-screen w-full bg-gray-200 p-10 space-y-4">
          <div>
            <h2 className="text-2xl">Integrations</h2>
          </div>
          <div className="relative flex flex-row space-x-6 align-middle justify-between">
            <div className="flex flex-col p-6 justify-center align-middle bg-white w-full rounded-lg space-y-4">
              <div className="text-center flex flex-row justify-between">
                <svg
                  className="w-28 h-28"
                  viewBox="-2.45 0 2452.5 2452.5"
                  enableBackground="new 0 0 2447.6 2452.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path
                      d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                      fill="#36c5f0"
                    />
                    <path
                      d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                      fill="#2eb67d"
                    />
                    <path
                      d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                      fill="#ecb22e"
                    />
                    <path
                      d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                      fill="#e01e5a"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl">Slack</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, maiores voluptates? Commodi, voluptatibus? Earum
                vitae est harum nesciunt obcaecati, impedit esse aliquid ipsum
                accusantium necessitatibus. Deleniti reprehenderit quaerat
                dignissimos maxime.
              </p>
              <LinkComponent text="Learn more" url="/integrations/slack" />
              <button className="p-4 rounded-md hover:animate-pulse focus:animate-pulse bg-gray-900 text-white w-1/3">
                Get Started
              </button>
            </div>
            <div className="flex flex-col p-6 justify-center align-middle bg-white w-full rounded-lg space-y-4">
              <div className="text-center flex flex-row justify-between">
                <svg
                  className="w-28 h-28"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="512" cy="512" r="512" fill="#5865f2" />
                  <path
                    d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
                    fill="#fff"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl">Discord</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, maiores voluptates? Commodi, voluptatibus? Earum
                vitae est harum nesciunt obcaecati, impedit esse aliquid ipsum
                accusantium necessitatibus. Deleniti reprehenderit quaerat
                dignissimos maxime.
              </p>
              <LinkComponent text="Learn more" url="/integrations/discord" />
              <button className="p-4 rounded-md hover:animate-pulse focus:animate-pulse bg-gray-900 text-white w-1/3">
                Get Started
              </button>
            </div>
            <div className="flex flex-col p-6 justify-center align-middle bg-white w-full rounded-lg space-y-4">
              <div className="text-center flex flex-row justify-between">
                <svg
                  className="w-28 h-28"
                  viewBox="0 -8.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M119.540432,100.502743 C108.930124,118.338815 98.7646301,135.611455 88.3876025,152.753617 C85.7226696,157.154315 84.4040417,160.738531 86.5332204,166.333309 C92.4107024,181.787152 84.1193605,196.825836 68.5350381,200.908244 C53.8383677,204.759349 39.5192953,195.099955 36.6032893,179.365384 C34.0194114,165.437749 44.8274148,151.78491 60.1824106,149.608284 C61.4694072,149.424428 62.7821041,149.402681 64.944891,149.240571 C72.469175,136.623655 80.1773157,123.700312 88.3025935,110.073173 C73.611854,95.4654658 64.8677898,78.3885437 66.803227,57.2292132 C68.1712787,42.2715849 74.0527146,29.3462646 84.8033863,18.7517722 C105.393354,-1.53572199 136.805164,-4.82141828 161.048542,10.7510424 C184.333097,25.7086706 194.996783,54.8450075 185.906752,79.7822957 C179.052655,77.9239597 172.151111,76.049808 164.563565,73.9917997 C167.418285,60.1274266 165.306899,47.6765751 155.95591,37.0109123 C149.777932,29.9690049 141.850349,26.2780332 132.835442,24.9178894 C114.764113,22.1877169 97.0209573,33.7983633 91.7563309,51.5355878 C85.7800012,71.6669027 94.8245623,88.1111998 119.540432,100.502743 L119.540432,100.502743 Z"
                      fill="#C73A63"
                    ></path>
                    <path
                      d="M149.841194,79.4106285 C157.316054,92.5969067 164.905578,105.982857 172.427885,119.246236 C210.44865,107.483365 239.114472,128.530009 249.398582,151.063322 C261.81978,178.282014 253.328765,210.520191 228.933162,227.312431 C203.893073,244.551464 172.226236,241.605803 150.040866,219.46195 C155.694953,214.729124 161.376716,209.974552 167.44794,204.895759 C189.360489,219.088306 208.525074,218.420096 222.753207,201.614016 C234.885769,187.277151 234.622834,165.900356 222.138374,151.863988 C207.730339,135.66681 188.431321,135.172572 165.103273,150.721309 C155.426087,133.553447 145.58086,116.521995 136.210101,99.2295848 C133.05093,93.4015266 129.561608,90.0209366 122.440622,88.7873178 C110.547271,86.7253555 102.868785,76.5124151 102.408155,65.0698097 C101.955433,53.7537294 108.621719,43.5249733 119.04224,39.5394355 C129.363912,35.5914599 141.476705,38.7783085 148.419765,47.554004 C154.093621,54.7244134 155.896602,62.7943365 152.911402,71.6372484 C152.081082,74.1025091 151.00562,76.4886916 149.841194,79.4106285 L149.841194,79.4106285 Z"
                      fill="#4B4B4B"
                    ></path>
                    <path
                      d="M167.706921,187.209935 L121.936499,187.209935 C117.54964,205.253587 108.074103,219.821756 91.7464461,229.085759 C79.0544063,236.285822 65.3738898,238.72736 50.8136292,236.376762 C24.0061432,232.053165 2.08568567,207.920497 0.156179306,180.745298 C-2.02835403,149.962159 19.1309765,122.599149 47.3341915,116.452801 C49.2814904,123.524363 51.2485589,130.663141 53.1958579,137.716911 C27.3195169,150.919004 18.3639187,167.553089 25.6054984,188.352614 C31.9811726,206.657224 50.0900643,216.690262 69.7528413,212.809503 C89.8327554,208.847688 99.9567329,192.160226 98.7211371,165.37844 C117.75722,165.37844 136.809118,165.180745 155.847178,165.475311 C163.280522,165.591951 169.019617,164.820939 174.620326,158.267339 C183.840836,147.48306 200.811003,148.455721 210.741239,158.640984 C220.88894,169.049642 220.402609,185.79839 209.663799,195.768166 C199.302587,205.38802 182.933414,204.874012 173.240413,194.508846 C171.247644,192.37176 169.677943,189.835329 167.706921,187.209935 L167.706921,187.209935 Z"
                      fill="#4A4A4A"
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl">Webhook</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, maiores voluptates? Commodi, voluptatibus? Earum
                vitae est harum nesciunt obcaecati, impedit esse aliquid ipsum
                accusantium necessitatibus. Deleniti reprehenderit quaerat
                dignissimos maxime.
              </p>
              <LinkComponent text="Learn more" url="/integrations/webhook" />
              <button className="p-4 rounded-md hover:animate-pulse focus:animate-pulse bg-gray-900 text-white w-1/3">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
