export default function GenericNavigationBar(props: {
  children?: React.ReactNode;
}) {
  return (
    <nav className="p-10 lg:p-60 lg:pt-10 lg:pb-20 invisible lg:visible">
      <ul className="flex flex-row justify-between">
        <li>
          <a className="text-2xl font-bold text-orange-500" href="/">
            HawkStatus
          </a>
        </li>
        {props.children}
        <li>
          <a className="p-4" href="/signin">
            Sign In
          </a>
          <a
            className="p-4 rounded-lg border bg-blue-500 text-white"
            href="/signup"
          >
            Get started for free
          </a>
        </li>
      </ul>
    </nav>
  );
}
