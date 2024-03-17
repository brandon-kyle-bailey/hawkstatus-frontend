

export default async function LandingPage() {
  return (
    <>
      <nav className="p-10 lg:p-60 lg:pt-10 lg:pb-20 invisible lg:visible">
        <ul className="flex flex-row justify-between">
          <li>
            <a className="text-2xl font-bold text-orange-500" href="#">HawkStatus</a>
          </li>
          <li >
            <ul className="flex flex-row justify-center space-x-8">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#">Book a Demo</a>
              </li>
            </ul>
          </li>
          <li>
          <a className="p-4" href="#">Sign In</a>
          <a className="p-4 rounded-lg border bg-blue-500 text-white" href="#">Get started for free</a>
          </li>
        </ul>
      </nav>
      <main className="p-10 lg:p-60 lg:pt-10 lg:pb-10 flex lg:flex-row flex-col-reverse">
        <section className="w-1/2 flex flex-col justify-center space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold">Uptime Observability, like a hawk.</h1>
        <ul className="flex flex-col justify-center space-y-4 pt-10 pb-10">
        <li className="flex flex-row justify-start space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1 text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
          <p>
            <span className="font-bold">Reliable </span>Monitoring across your services.
            </p>
        </li>
        <li className="flex flex-row justify-start space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1 text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>
          <p>
            <span className="font-bold">Simple </span>Setup in as little as two clicks.
            </p>
          </li>
        <li className="flex flex-row justify-start space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1 text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
          <p>
            <span className="font-bold">Real-time </span>Status and incident reporting.
            </p>
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-1 lg:space-x-4">
          <a className="p-4 rounded-lg border bg-blue-500 text-white" href="#">Get started for free</a>
          <a className="p-4 rounded-lg border border-blue-500 text-blue-500" href="#">Book a Demo</a>
        </div>
        <div className="pt-10 flex flex-col justify-evenly space-y-8">
          <p>Trusted by 1,000+ of companies worldwide</p>
          <div className="flex flex-col space-y-4 invisible">
            <div className="flex flex-row space-x-4">
              <p>Company One</p>
              <p>Company Two</p>
              <p>Company Three</p>
            </div>
            <div className="flex flex-row space-x-4">
              <p>Company Four</p>
              <p>Company Five</p>
              <p>Company Six</p>
            </div>
          </div>
        </div>
        </section>
        <section className="w-1/2">
          <svg className="w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1119.60911 699" xmlnsXlink="http://www.w3.org/1999/xlink"><title>server down</title><circle cx="292.60911" cy="213" r="213" fill="#f2f2f2"/><path d="M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819" transform="translate(-31.39089 -100.5)" fill="#2f2e41"/><path d="M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356" transform="translate(-31.39089 -100.5)" fill="#f97316"/><path d="M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288" transform="translate(-31.39089 -100.5)" fill="#f97316"/><path d="M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788" transform="translate(-31.39089 -100.5)" fill="#2f2e41"/><path d="M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z" transform="translate(-31.39089 -100.5)" fill="#a8a8a8"/><path d="M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z" transform="translate(-31.39089 -100.5)" opacity="0.2"/><ellipse cx="198.60911" cy="424.5" rx="187" ry="25.43993" fill="#3f3d56"/><ellipse cx="198.60911" cy="424.5" rx="157" ry="21.35866" opacity="0.1"/><ellipse cx="836.60911" cy="660.5" rx="283" ry="38.5" fill="#3f3d56"/><ellipse cx="310.60911" cy="645.5" rx="170" ry="23.12721" fill="#3f3d56"/><path d="M494,726.5c90,23,263-30,282-90" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" strokeMiterlimit="10" strokeWidth="2"/><path d="M341,359.5s130-36,138,80-107,149-17,172" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" strokeMiterlimit="10" strokeWidth="2"/><path d="M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" strokeMiterlimit="10" strokeWidth="2"/><path d="M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41"/><path d="M785.21906,734.69812c6.193-5.51039,16.9989-11.252,16.9989-11.252l7.87756-50.2952,113.9216.10717,7.87756,49.582c9.185,5.08711,14.8749,8.987,18.20362,11.97818,5.05882-1.15422,10.58716-5.44353-18.20362-21.38921l-7.87756-52.719-113.9216,3.02983L802.218,714.03506S769.62985,731.34968,785.21906,734.69812Z" transform="translate(-31.39089 -100.5)" opacity="0.1"/><rect x="578.43291" y="212.68859" width="513.25314" height="357.51989" rx="18.04568" fill="#2f2e41"/><rect x="595.70294" y="231.77652" width="478.71308" height="267.83694" fill="#3f3d56"/><circle cx="835.05948" cy="223.29299" r="3.02983" fill="#f2f2f2"/><path d="M1123.07694,621.32226V652.6628a18.04341,18.04341,0,0,1-18.04568,18.04568H627.86949A18.04341,18.04341,0,0,1,609.8238,652.6628V621.32226Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41"/><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466" fill="#2f2e41"/><path d="M1125.828,762.03359c-.59383,2.539-2.83591,5.21743-7.90178,7.75032-18.179,9.08949-55.1429-2.42386-55.1429-2.42386s-28.4804-4.84773-28.4804-17.573a22.72457,22.72457,0,0,1,2.49658-1.48459c7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41"/><path d="M1125.828,762.03359c-22.251,8.526-42.0843,9.1622-62.43871-4.975-10.26507-7.12617-19.59089-8.88955-26.58979-8.75618,7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" opacity="0.1"/><ellipse cx="1066.53846" cy="654.13477" rx="7.87756" ry="2.42386" fill="#f2f2f2"/><circle cx="835.05948" cy="545.66686" r="11.51335" fill="#f2f2f2"/><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466" opacity="0.1"/><rect x="108.60911" y="159" width="208" height="242" fill="#2f2e41"/><rect x="87.60911" y="135" width="250" height="86" fill="#3f3d56"/><rect x="87.60911" y="237" width="250" height="86" fill="#3f3d56"/><rect x="87.60911" y="339" width="250" height="86" fill="#3f3d56"/><rect x="271.60911" y="150" width="16" height="16" fill="#f97316" opacity="0.4"/><rect x="294.60911" y="150" width="16" height="16" fill="#f97316" opacity="0.8"/><rect x="317.60911" y="150" width="16" height="16" fill="#f97316"/><rect x="271.60911" y="251" width="16" height="16" fill="#f97316" opacity="0.4"/><rect x="294.60911" y="251" width="16" height="16" fill="#f97316" opacity="0.8"/><rect x="317.60911" y="251" width="16" height="16" fill="#f97316"/><rect x="271.60911" y="352" width="16" height="16" fill="#f97316" opacity="0.4"/><rect x="294.60911" y="352" width="16" height="16" fill="#f97316" opacity="0.8"/><rect x="317.60911" y="352" width="16" height="16" fill="#f97316"/><circle cx="316.60911" cy="538" r="79" fill="#2f2e41"/><rect x="280.60911" y="600" width="24" height="43" fill="#2f2e41"/><rect x="328.60911" y="600" width="24" height="43" fill="#2f2e41"/><ellipse cx="300.60911" cy="643.5" rx="20" ry="7.5" fill="#2f2e41"/><ellipse cx="348.60911" cy="642.5" rx="20" ry="7.5" fill="#2f2e41"/><circle cx="318.60911" cy="518" r="27" fill="#fff"/><circle cx="318.60911" cy="518" r="9" fill="#3f3d56"/><path d="M271.36733,565.03228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S277.74622,593.59986,271.36733,565.03228Z" transform="translate(-31.39089 -100.5)" fill="#f97316"/><ellipse cx="417.21511" cy="611.34365" rx="39.5" ry="12.40027" transform="translate(-238.28665 112.98044) rotate(-23.17116)" fill="#2f2e41"/><ellipse cx="269.21511" cy="664.34365" rx="39.5" ry="12.40027" transform="translate(-271.07969 59.02084) rotate(-23.17116)" fill="#2f2e41"/><path d="M394,661.5c0,7.732-19.90861,23-42,23s-43-14.268-43-22,20.90861-6,43-6S394,653.768,394,661.5Z" transform="translate(-31.39089 -100.5)" fill="#fff"/></svg>
        </section>
      </main>
      <section id="features" className="p-10 lg:p-60 lg:pt-10 lg:pb-10 flex flex-col-reverse lg:flex-row">
        <section className="w-1/2 flex flex-col justify-center space-y-4">
          <p className="text-orange-500 font-bold">Monitoring</p>
          <h1 className="font-bold text-4xl">Real-time Observability</h1>
          <p><span className="font-bold text-orange-500">HawkStatus</span> offers real-time observability, providing you with instant insights into the availability and performance of your online services. With customizable alerts and an intuitive dashboard, <span className="font-bold text-orange-500">HawkStatus</span> enables you to monitor service health with precision and take proactive measures to ensure uninterrupted uptime.</p>
          <a className="flex flex-row text-blue-500" href="">
          <p>Get started for free</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
          </a>
        </section>
        <section className="w-1/2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816.22047 640.5" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="e5b01265-0b4f-4d57-a9fa-5bd80347d7aa-248" data-name="Path 133" d="M762.25077,420.88246a363.96429,363.96429,0,0,1-17.004,100.61107c-.2298.75594-.48484,1.50053-.733,2.25647h-63.4504c.06662-.67782.13555-1.43391.20224-2.25647,4.23034-48.63622-19.93841-341.12194-49.10262-391.74353C634.71807,133.85636,767.17043,266.34315,762.25077,420.88246Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path id="ffdef3f3-76d4-4555-b476-c3b551816dea-249" data-name="Path 134" d="M757.48951,521.49353c-.53077.75594-1.0823,1.512-1.64758,2.25647H708.23978c.36079-.64346.77894-1.39941,1.26378-2.25647C717.36678,507.302,740.64164,464.87,762.246,420.88246c23.20824-47.27131,44.51843-96.33487,42.7238-114.09253C805.526,310.79264,821.59242,432.8864,757.48951,521.49353Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path d="M985.61024,770.25h-586a22.52538,22.52538,0,0,1-22.5-22.5v-284a22.52538,22.52538,0,0,1,22.5-22.5h586a22.52539,22.52539,0,0,1,22.5,22.5v284A22.52539,22.52539,0,0,1,985.61024,770.25Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/><rect x="280.76315" y="475" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="515" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="555" width="438.80322" height="2" fill="#f0f0f0"/><g opacity="0.2"><path d="M911.08863,588.46325c-13.02531-14.08411-34.78828-16.73186-53.491-12.46224s-35.4938,14.2598-52.88364,22.36-36.69793,14.48845-55.53654,10.86521c-18.19153-3.49879-33.21915-15.73208-48.82139-25.71924s-34.61163-18.21645-52.25377-12.56592c-21.83727,6.99417-31.899,31.44059-47.58489,48.166a80.69368,80.69368,0,0,1-123.922-7.46944v74.73907H909.9443Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/></g><rect x="280.76315" y="395" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="435" width="438.80322" height="2" fill="#f0f0f0"/><path d="M475.3002,612.39473c18.69218,25.24477,51.00673,38.20993,81.91642,32.13314a83.66152,83.66152,0,0,0,41.43178-21.4017c10.37985-9.93025,17.51826-22.58477,26.71895-33.5128,4.456-5.29256,9.44009-10.24715,15.444-13.7671a38.96534,38.96534,0,0,1,22.68776-5.127c17.6886,1.28417,32.88145,11.83908,47.13862,21.41117,13.85552,9.30242,28.43661,18.34568,45.52434,19.49492,17.97776,1.20911,35.45823-5.381,51.42117-12.96311,16.33694-7.75978,32.26307-16.99608,50.03455-21.12675,14.47872-3.36532,30.94947-2.72871,43.94441,5.10867a39.85343,39.85343,0,0,1,8.46574,6.87971c1.32523,1.40959,3.44364-.71482,2.12132-2.12132-10.0399-10.679-24.81637-14.95133-39.16035-14.75588-16.73777.22807-32.44429,6.64492-47.30789,13.80359-16.52119,7.957-32.74531,17.10177-50.90124,20.79388a64.41483,64.41483,0,0,1-27.34329.08117c-8.27178-1.91726-15.945-5.67444-23.19837-10.00887-14.59194-8.71977-27.79349-19.75586-43.88756-25.75194-14.79108-5.51063-30.96071-5.6-44.22038,3.73271-11.41534,8.03462-19.01775,20.179-27.21628,31.20075a107.14393,107.14393,0,0,1-14.42552,16.38866,80.33259,80.33259,0,0,1-20.6072,13.23893,78.78048,78.78048,0,0,1-47.362,5.48566,81.16879,81.16879,0,0,1-40.95277-21.85489,77.57829,77.57829,0,0,1-7.67587-8.87578c-1.13629-1.53463-3.7413-.04019-2.59041,1.51415Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/><circle cx="468.97579" cy="440.28027" r="10" fill="#f97316"/><circle cx="678.97579" cy="443.28027" r="10" fill="#f97316"/><circle cx="355.97579" cy="514.28027" r="10" fill="#f97316"/><path d="M333.18292,343.24581a9.377,9.377,0,0,0-4.285,13.72513l-28.3436,40.49362,8.8891,10.03176,33.02879-47.99312a9.42779,9.42779,0,0,0-9.28933-16.25739Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><polygon points="162.359 627.135 150.099 627.135 144.267 579.847 162.361 579.848 162.359 627.135" fill="#ffb6b6"/><path d="M357.37525,768.76933l-39.53076-.00147v-.5A15.3873,15.3873,0,0,1,333.231,752.88163h.001l24.144.001Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M212.85862,764.63491l-1-.23Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M213.51862,764.76491l-.49-.07.54.1Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M199.20862,759.05489Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M199.22863,759.0649Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M213.02862,764.6949h0Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><polygon points="131.019 453 143.811 614.39 165.536 614.39 171.531 453 131.019 453" fill="#cacaca"/><polygon points="165.019 285.745 156.362 281.373 126.599 279.435 129.729 264.568 106.249 264.568 97.206 295.765 152.179 305.89 165.019 285.745" fill="#cacaca"/><circle cx="180.89385" cy="237.89146" r="28.93994" fill="#2f2e41"/><ellipse cx="343.84367" cy="345.68703" rx="11.97515" ry="8.98136" transform="translate(-335.61792 214.63358) rotate(-45)" fill="#2f2e41"/><ellipse cx="391.93423" cy="338.14341" rx="8.98136" ry="11.97515" transform="translate(-264.87845 435.98973) rotate(-66.86956)" fill="#2f2e41"/><circle cx="181.81169" cy="244.80009" r="24.56103" fill="#ffb6b6"/><path d="M347.89354,359.10128a33.40487,33.40487,0,0,0,19.09068,5.89985,20.47079,20.47079,0,0,1-8.11361,3.338,67.35875,67.35875,0,0,0,27.514.1546,17.80758,17.80758,0,0,0,5.75978-1.97823,7.28923,7.28923,0,0,0,3.55521-4.75471c.60365-3.44852-2.08348-6.58157-4.876-8.69308a35.96737,35.96737,0,0,0-30.22447-6.03968c-3.37626.87272-6.75852,2.34726-8.9515,5.05866s-2.84257,6.8915-.75322,9.68353Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><polygon points="149.723 534.457 143.168 544.817 100.088 524.463 109.763 509.173 149.723 534.457" fill="#ffb6b6"/><path d="M353.32738,667.91881l-21.1365,33.40553-.42254-.26732a15.3873,15.3873,0,0,1-4.776-21.229l.00052-.00083,12.90953-20.40292Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M406.28476,402.44857l-58.03335,8.6745-9.97279,23.03184s-22.2116,10.27226-7.44,34.93367l-17.22,62.45624s-80.556,40.875-79.03217,68.2901S318.63862,672.347,318.63862,672.347l11.56862-18.71338-47.67857-47.22867,44.64-14.215,35.21,1.665s38.2542-29.91508,15.49291-79.76l15.69709-46.00081Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M363.59182,544.1951a9.377,9.377,0,0,0,8.81471-11.35962l40.71618-28.02294-4.81907-12.50716-47.72842,33.41015a9.42779,9.42779,0,0,0,3.0166,18.47957Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><path d="M393.36863,411.82874l11.91613-9.38017s15.78611,11.94506,15.80579,20.87325,2.64274,79.78251,2.64274,79.78251L402.44951,518.3499l-19.90088-12.07577,13.68-17.44925-6.45042-40.71268Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M573.88976,769.75h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/></svg>
        </section>
      </section>
      <section className="p-10 lg:p-60 lg:pt-10 lg:pb-10 flex flex-col-reverse lg:flex-row lg:space-x-8">
        <section className="w-1/2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816.22047 640.5" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="e5b01265-0b4f-4d57-a9fa-5bd80347d7aa-248" data-name="Path 133" d="M762.25077,420.88246a363.96429,363.96429,0,0,1-17.004,100.61107c-.2298.75594-.48484,1.50053-.733,2.25647h-63.4504c.06662-.67782.13555-1.43391.20224-2.25647,4.23034-48.63622-19.93841-341.12194-49.10262-391.74353C634.71807,133.85636,767.17043,266.34315,762.25077,420.88246Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path id="ffdef3f3-76d4-4555-b476-c3b551816dea-249" data-name="Path 134" d="M757.48951,521.49353c-.53077.75594-1.0823,1.512-1.64758,2.25647H708.23978c.36079-.64346.77894-1.39941,1.26378-2.25647C717.36678,507.302,740.64164,464.87,762.246,420.88246c23.20824-47.27131,44.51843-96.33487,42.7238-114.09253C805.526,310.79264,821.59242,432.8864,757.48951,521.49353Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path d="M985.61024,770.25h-586a22.52538,22.52538,0,0,1-22.5-22.5v-284a22.52538,22.52538,0,0,1,22.5-22.5h586a22.52539,22.52539,0,0,1,22.5,22.5v284A22.52539,22.52539,0,0,1,985.61024,770.25Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/><rect x="280.76315" y="475" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="515" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="555" width="438.80322" height="2" fill="#f0f0f0"/><g opacity="0.2"><path d="M911.08863,588.46325c-13.02531-14.08411-34.78828-16.73186-53.491-12.46224s-35.4938,14.2598-52.88364,22.36-36.69793,14.48845-55.53654,10.86521c-18.19153-3.49879-33.21915-15.73208-48.82139-25.71924s-34.61163-18.21645-52.25377-12.56592c-21.83727,6.99417-31.899,31.44059-47.58489,48.166a80.69368,80.69368,0,0,1-123.922-7.46944v74.73907H909.9443Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/></g><rect x="280.76315" y="395" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="435" width="438.80322" height="2" fill="#f0f0f0"/><path d="M475.3002,612.39473c18.69218,25.24477,51.00673,38.20993,81.91642,32.13314a83.66152,83.66152,0,0,0,41.43178-21.4017c10.37985-9.93025,17.51826-22.58477,26.71895-33.5128,4.456-5.29256,9.44009-10.24715,15.444-13.7671a38.96534,38.96534,0,0,1,22.68776-5.127c17.6886,1.28417,32.88145,11.83908,47.13862,21.41117,13.85552,9.30242,28.43661,18.34568,45.52434,19.49492,17.97776,1.20911,35.45823-5.381,51.42117-12.96311,16.33694-7.75978,32.26307-16.99608,50.03455-21.12675,14.47872-3.36532,30.94947-2.72871,43.94441,5.10867a39.85343,39.85343,0,0,1,8.46574,6.87971c1.32523,1.40959,3.44364-.71482,2.12132-2.12132-10.0399-10.679-24.81637-14.95133-39.16035-14.75588-16.73777.22807-32.44429,6.64492-47.30789,13.80359-16.52119,7.957-32.74531,17.10177-50.90124,20.79388a64.41483,64.41483,0,0,1-27.34329.08117c-8.27178-1.91726-15.945-5.67444-23.19837-10.00887-14.59194-8.71977-27.79349-19.75586-43.88756-25.75194-14.79108-5.51063-30.96071-5.6-44.22038,3.73271-11.41534,8.03462-19.01775,20.179-27.21628,31.20075a107.14393,107.14393,0,0,1-14.42552,16.38866,80.33259,80.33259,0,0,1-20.6072,13.23893,78.78048,78.78048,0,0,1-47.362,5.48566,81.16879,81.16879,0,0,1-40.95277-21.85489,77.57829,77.57829,0,0,1-7.67587-8.87578c-1.13629-1.53463-3.7413-.04019-2.59041,1.51415Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/><circle cx="468.97579" cy="440.28027" r="10" fill="#f97316"/><circle cx="678.97579" cy="443.28027" r="10" fill="#f97316"/><circle cx="355.97579" cy="514.28027" r="10" fill="#f97316"/><path d="M333.18292,343.24581a9.377,9.377,0,0,0-4.285,13.72513l-28.3436,40.49362,8.8891,10.03176,33.02879-47.99312a9.42779,9.42779,0,0,0-9.28933-16.25739Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><polygon points="162.359 627.135 150.099 627.135 144.267 579.847 162.361 579.848 162.359 627.135" fill="#ffb6b6"/><path d="M357.37525,768.76933l-39.53076-.00147v-.5A15.3873,15.3873,0,0,1,333.231,752.88163h.001l24.144.001Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M212.85862,764.63491l-1-.23Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M213.51862,764.76491l-.49-.07.54.1Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M199.20862,759.05489Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M199.22863,759.0649Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M213.02862,764.6949h0Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><polygon points="131.019 453 143.811 614.39 165.536 614.39 171.531 453 131.019 453" fill="#cacaca"/><polygon points="165.019 285.745 156.362 281.373 126.599 279.435 129.729 264.568 106.249 264.568 97.206 295.765 152.179 305.89 165.019 285.745" fill="#cacaca"/><circle cx="180.89385" cy="237.89146" r="28.93994" fill="#2f2e41"/><ellipse cx="343.84367" cy="345.68703" rx="11.97515" ry="8.98136" transform="translate(-335.61792 214.63358) rotate(-45)" fill="#2f2e41"/><ellipse cx="391.93423" cy="338.14341" rx="8.98136" ry="11.97515" transform="translate(-264.87845 435.98973) rotate(-66.86956)" fill="#2f2e41"/><circle cx="181.81169" cy="244.80009" r="24.56103" fill="#ffb6b6"/><path d="M347.89354,359.10128a33.40487,33.40487,0,0,0,19.09068,5.89985,20.47079,20.47079,0,0,1-8.11361,3.338,67.35875,67.35875,0,0,0,27.514.1546,17.80758,17.80758,0,0,0,5.75978-1.97823,7.28923,7.28923,0,0,0,3.55521-4.75471c.60365-3.44852-2.08348-6.58157-4.876-8.69308a35.96737,35.96737,0,0,0-30.22447-6.03968c-3.37626.87272-6.75852,2.34726-8.9515,5.05866s-2.84257,6.8915-.75322,9.68353Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><polygon points="149.723 534.457 143.168 544.817 100.088 524.463 109.763 509.173 149.723 534.457" fill="#ffb6b6"/><path d="M353.32738,667.91881l-21.1365,33.40553-.42254-.26732a15.3873,15.3873,0,0,1-4.776-21.229l.00052-.00083,12.90953-20.40292Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M406.28476,402.44857l-58.03335,8.6745-9.97279,23.03184s-22.2116,10.27226-7.44,34.93367l-17.22,62.45624s-80.556,40.875-79.03217,68.2901S318.63862,672.347,318.63862,672.347l11.56862-18.71338-47.67857-47.22867,44.64-14.215,35.21,1.665s38.2542-29.91508,15.49291-79.76l15.69709-46.00081Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M363.59182,544.1951a9.377,9.377,0,0,0,8.81471-11.35962l40.71618-28.02294-4.81907-12.50716-47.72842,33.41015a9.42779,9.42779,0,0,0,3.0166,18.47957Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><path d="M393.36863,411.82874l11.91613-9.38017s15.78611,11.94506,15.80579,20.87325,2.64274,79.78251,2.64274,79.78251L402.44951,518.3499l-19.90088-12.07577,13.68-17.44925-6.45042-40.71268Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M573.88976,769.75h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/></svg>
        </section>
        <section className="w-1/2 flex flex-col justify-center space-y-4">
          <p className="text-orange-500 font-bold">Analytics</p>
          <h1 className="font-bold text-4xl">Historical Data</h1>
          <p><span className="font-bold text-orange-500">HawkStatus</span> also provides powerful historical analytics, allowing you to track and analyze service uptime and performance trends over time. With access to historical data, you can identify patterns, pinpoint recurring issues, and make informed decisions to optimize your online presence.</p>
          <a className="flex flex-row text-blue-500" href="">
          <p>Get started for free</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
          </a>
        </section>
      </section>
      <section className="p-10 lg:p-60 lg:pt-10 lg:pb-10 flex flex-col items-center">
        <section className="lg:w-1/2 flex flex-col justify-center text-center lg:space-y-4">
          <p className="text-orange-500 font-bold">Incident alerts</p>
          <h1 className="font-bold text-4xl">Integrations</h1>
          <p><span className="font-bold text-orange-500">HawkStatus</span> offers seamless integrations for incident notifications, allowing you to connect with your preferred communication channels such as email, SMS, Slack, and more. By integrating with these platforms, <span className="font-bold text-orange-500">HawkStatus</span> ensures that you receive timely alerts about service downtime or performance issues, enabling swift response and resolution.</p>
          <a className="flex flex-row  justify-center text-blue-500" href="">
          <p>Get started for free</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
          </a>
        </section>
        <section className="w-1/2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816.22047 640.5" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="e5b01265-0b4f-4d57-a9fa-5bd80347d7aa-248" data-name="Path 133" d="M762.25077,420.88246a363.96429,363.96429,0,0,1-17.004,100.61107c-.2298.75594-.48484,1.50053-.733,2.25647h-63.4504c.06662-.67782.13555-1.43391.20224-2.25647,4.23034-48.63622-19.93841-341.12194-49.10262-391.74353C634.71807,133.85636,767.17043,266.34315,762.25077,420.88246Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path id="ffdef3f3-76d4-4555-b476-c3b551816dea-249" data-name="Path 134" d="M757.48951,521.49353c-.53077.75594-1.0823,1.512-1.64758,2.25647H708.23978c.36079-.64346.77894-1.39941,1.26378-2.25647C717.36678,507.302,740.64164,464.87,762.246,420.88246c23.20824-47.27131,44.51843-96.33487,42.7238-114.09253C805.526,310.79264,821.59242,432.8864,757.48951,521.49353Z" transform="translate(-191.88976 -129.75)" fill="#f0f0f0"/><path d="M985.61024,770.25h-586a22.52538,22.52538,0,0,1-22.5-22.5v-284a22.52538,22.52538,0,0,1,22.5-22.5h586a22.52539,22.52539,0,0,1,22.5,22.5v284A22.52539,22.52539,0,0,1,985.61024,770.25Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/><rect x="280.76315" y="475" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="515" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="555" width="438.80322" height="2" fill="#f0f0f0"/><g opacity="0.2"><path d="M911.08863,588.46325c-13.02531-14.08411-34.78828-16.73186-53.491-12.46224s-35.4938,14.2598-52.88364,22.36-36.69793,14.48845-55.53654,10.86521c-18.19153-3.49879-33.21915-15.73208-48.82139-25.71924s-34.61163-18.21645-52.25377-12.56592c-21.83727,6.99417-31.899,31.44059-47.58489,48.166a80.69368,80.69368,0,0,1-123.922-7.46944v74.73907H909.9443Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/></g><rect x="280.76315" y="395" width="438.80322" height="2" fill="#f0f0f0"/><rect x="280.76315" y="435" width="438.80322" height="2" fill="#f0f0f0"/><path d="M475.3002,612.39473c18.69218,25.24477,51.00673,38.20993,81.91642,32.13314a83.66152,83.66152,0,0,0,41.43178-21.4017c10.37985-9.93025,17.51826-22.58477,26.71895-33.5128,4.456-5.29256,9.44009-10.24715,15.444-13.7671a38.96534,38.96534,0,0,1,22.68776-5.127c17.6886,1.28417,32.88145,11.83908,47.13862,21.41117,13.85552,9.30242,28.43661,18.34568,45.52434,19.49492,17.97776,1.20911,35.45823-5.381,51.42117-12.96311,16.33694-7.75978,32.26307-16.99608,50.03455-21.12675,14.47872-3.36532,30.94947-2.72871,43.94441,5.10867a39.85343,39.85343,0,0,1,8.46574,6.87971c1.32523,1.40959,3.44364-.71482,2.12132-2.12132-10.0399-10.679-24.81637-14.95133-39.16035-14.75588-16.73777.22807-32.44429,6.64492-47.30789,13.80359-16.52119,7.957-32.74531,17.10177-50.90124,20.79388a64.41483,64.41483,0,0,1-27.34329.08117c-8.27178-1.91726-15.945-5.67444-23.19837-10.00887-14.59194-8.71977-27.79349-19.75586-43.88756-25.75194-14.79108-5.51063-30.96071-5.6-44.22038,3.73271-11.41534,8.03462-19.01775,20.179-27.21628,31.20075a107.14393,107.14393,0,0,1-14.42552,16.38866,80.33259,80.33259,0,0,1-20.6072,13.23893,78.78048,78.78048,0,0,1-47.362,5.48566,81.16879,81.16879,0,0,1-40.95277-21.85489,77.57829,77.57829,0,0,1-7.67587-8.87578c-1.13629-1.53463-3.7413-.04019-2.59041,1.51415Z" transform="translate(-191.88976 -129.75)" fill="#f97316"/><circle cx="468.97579" cy="440.28027" r="10" fill="#f97316"/><circle cx="678.97579" cy="443.28027" r="10" fill="#f97316"/><circle cx="355.97579" cy="514.28027" r="10" fill="#f97316"/><path d="M333.18292,343.24581a9.377,9.377,0,0,0-4.285,13.72513l-28.3436,40.49362,8.8891,10.03176,33.02879-47.99312a9.42779,9.42779,0,0,0-9.28933-16.25739Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><polygon points="162.359 627.135 150.099 627.135 144.267 579.847 162.361 579.848 162.359 627.135" fill="#ffb6b6"/><path d="M357.37525,768.76933l-39.53076-.00147v-.5A15.3873,15.3873,0,0,1,333.231,752.88163h.001l24.144.001Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M212.85862,764.63491l-1-.23Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M213.51862,764.76491l-.49-.07.54.1Z" transform="translate(-191.88976 -129.75)" opacity="0.1" /><path d="M199.20862,759.05489Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M199.22863,759.0649Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><path d="M213.02862,764.6949h0Z" transform="translate(-191.88976 -129.75)" opacity="0.1"/><polygon points="131.019 453 143.811 614.39 165.536 614.39 171.531 453 131.019 453" fill="#cacaca"/><polygon points="165.019 285.745 156.362 281.373 126.599 279.435 129.729 264.568 106.249 264.568 97.206 295.765 152.179 305.89 165.019 285.745" fill="#cacaca"/><circle cx="180.89385" cy="237.89146" r="28.93994" fill="#2f2e41"/><ellipse cx="343.84367" cy="345.68703" rx="11.97515" ry="8.98136" transform="translate(-335.61792 214.63358) rotate(-45)" fill="#2f2e41"/><ellipse cx="391.93423" cy="338.14341" rx="8.98136" ry="11.97515" transform="translate(-264.87845 435.98973) rotate(-66.86956)" fill="#2f2e41"/><circle cx="181.81169" cy="244.80009" r="24.56103" fill="#ffb6b6"/><path d="M347.89354,359.10128a33.40487,33.40487,0,0,0,19.09068,5.89985,20.47079,20.47079,0,0,1-8.11361,3.338,67.35875,67.35875,0,0,0,27.514.1546,17.80758,17.80758,0,0,0,5.75978-1.97823,7.28923,7.28923,0,0,0,3.55521-4.75471c.60365-3.44852-2.08348-6.58157-4.876-8.69308a35.96737,35.96737,0,0,0-30.22447-6.03968c-3.37626.87272-6.75852,2.34726-8.9515,5.05866s-2.84257,6.8915-.75322,9.68353Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><polygon points="149.723 534.457 143.168 544.817 100.088 524.463 109.763 509.173 149.723 534.457" fill="#ffb6b6"/><path d="M353.32738,667.91881l-21.1365,33.40553-.42254-.26732a15.3873,15.3873,0,0,1-4.776-21.229l.00052-.00083,12.90953-20.40292Z" transform="translate(-191.88976 -129.75)" fill="#2f2e41"/><path d="M406.28476,402.44857l-58.03335,8.6745-9.97279,23.03184s-22.2116,10.27226-7.44,34.93367l-17.22,62.45624s-80.556,40.875-79.03217,68.2901S318.63862,672.347,318.63862,672.347l11.56862-18.71338-47.67857-47.22867,44.64-14.215,35.21,1.665s38.2542-29.91508,15.49291-79.76l15.69709-46.00081Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M363.59182,544.1951a9.377,9.377,0,0,0,8.81471-11.35962l40.71618-28.02294-4.81907-12.50716-47.72842,33.41015a9.42779,9.42779,0,0,0,3.0166,18.47957Z" transform="translate(-191.88976 -129.75)" fill="#ffb6b6"/><path d="M393.36863,411.82874l11.91613-9.38017s15.78611,11.94506,15.80579,20.87325,2.64274,79.78251,2.64274,79.78251L402.44951,518.3499l-19.90088-12.07577,13.68-17.44925-6.45042-40.71268Z" transform="translate(-191.88976 -129.75)" fill="#cacaca"/><path d="M573.88976,769.75h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-191.88976 -129.75)" fill="#3f3d56"/></svg>
        </section>
      </section>
      <section className="p-10 lg:p-60 lg:pt-10 lg:pb-10 flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="pl-40 pr-40 text-5xl font-bold">Ready to ensure uninterrupted service uptime and reliability?</h1>
          <p>
          Start monitoring with <span className="font-bold text-orange-500">HawkStatus</span> today and experience the peace of mind that comes with reliable uptime monitoring.
          </p>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-1">
          <a className="p-4 rounded-lg border bg-blue-500 text-white" href="#">Get started for free</a>
          <a className="p-4 rounded-lg border border-blue-500 text-blue-500" href="#">Book a Demo</a>
        </div>
      </section>
      <section id="pricing" className="flex flex-col items-center space-y-8 p-10 lg:p-80 lg:pt-10 lg:pb-10">
          <p className="text-orange-500 font-bold">Pricing</p>
          <h1 className="text-4xl text-center font-bold">
            Pricing plans that match any use case.
          </h1>
          <p>Pricing models starting from Personal to Enterprise that suit your needs.</p>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-8 lg:space-y-1">
            <div className="flex flex-col space-y-8 rounded-3xl p-10 text border border-gray-300">
              <h2 className="font-bold">Personal</h2>
              <p>For personal projects</p>
              <p>
                <span className="text-4xl font-bold">$0</span>USD/month
              </p>
              <a
                className="self-center rounded-lg pt-2 pb-2 p-5 w-full text-center border border-blue-500 text-blue-500"
                href="/signup"
              >
                Get started
              </a>
              <ul className="flex flex-col space-y-8">
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Checks every 2 minutes</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Up to 5 checks</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Email Notifications</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Webhook Integration</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-8 rounded-3xl p-10 text border border-gray-300">
              <h2 className="font-bold">Consultant</h2>
              <p>For those jack-of-all trades</p>
              <p>
                <span className="text-4xl font-bold">$9.99</span>USD/month
              </p>
              <a
                className="self-center rounded-lg pt-2 pb-2 p-5 w-full text-center border border-blue-500 text-blue-500"
                href="/signup"
              >
                Get started for free
              </a>
              <ul className="flex flex-col space-y-8">
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>
                    All features in <span className="font-bold">Personal</span>
                  </p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Checks every minute</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Up to 50 checks</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Slack Integration</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-8 rounded-3xl p-10 text-left border-blue-500 border-2 scale-105">
              <h2 className="font-bold text-blue-500">Startup</h2>
              <p>For awesome startup teams</p>
              <p>
                <span className="text-4xl font-bold">$24.99</span>USD/month
              </p>
              <a
                className="self-center rounded-lg pt-2 pb-2 p-5 w-full text-center bg-blue-500 text-white"
                href="/signup"
              >
                Get started for free
              </a>
              <ul className="flex flex-col space-y-8">
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>
                    All features in{" "}
                    <span className="font-bold">Consultant</span>
                  </p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Checks every 30 seconds</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Up to 100 checks</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>1 Status page</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Up to 5 seats</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>On-call Support</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-8 rounded-3xl p-10 text border border-gray-300">
              <h2 className="font-bold">Enterprise</h2>
              <p>For large scale business</p>
              <p>
                <span className="text-4xl font-bold">$199.99</span>USD/month
              </p>
              <a
                className="self-center rounded-lg pt-2 pb-2 p-5 w-full text-center border border-blue-500 text-blue-500"
                href="/signup"
              >
                Get started for free
              </a>
              <ul className="flex flex-col space-y-8">
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>
                    All features in <span className="font-bold">Startup</span>
                  </p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Unlimited checks</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Unlimited seats</p>
                </li>
                <li className="flex flex-row justify-start">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pt-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  <p>Personalised Support</p>
                </li>
              </ul>
            </div>
          </div>
      </section>
      <footer className="flex flex-col lg:flex-row justify-evenly p-10 lg:p-60 lg:pt-10 lg:pb-10">
        <div className="w-full lg:w-1/3 flex flex-col space-y-8">
          <p>
            <span className="font-bold text-orange-500">HawkStatus</span> is a comprehensive
            uptime monitoring tool that provides real-time monitoring, alerting,
            and performance insights to ensure your services are always
            available.
          </p>
          <div className="flex flex-row justify-start space-x-2">
          <p>Made with</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 pt-1 text-red-500">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
<p>By <a className="text-blue-500" href="https://twitter.com/brandonkpbailey">@brandonkpbailey</a></p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 justify-evenly">
          <div className="flex flex-col space-y-8">
            <h3 className="font-bold">Product</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="font-bold">Support</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/book-a-demo">Book a Demo</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="font-bold">Company</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
