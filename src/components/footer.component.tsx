export default function Footer() {
    return (<footer className="flex flex-col lg:flex-row justify-evenly p-10 lg:p-60 lg:pt-10 lg:pb-10">
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
      </footer>)
}