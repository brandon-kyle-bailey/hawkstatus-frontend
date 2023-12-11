import Link from "next/link";

export default function LinkComponent(props: { text: string; url: string }) {
  if (props.url.includes("http")) {
    return (
      <Link
        className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
        href={props.url}
        rel={"noreferrer"}
        target={"_blank"}
      >
        <p>{props.text}</p>
      </Link>
    );
  }
  return (
    <Link
      className=" text-blue-600 underline dark:text-blue-500 hover:no-underline"
      href={props.url}
    >
      <p>{props.text}</p>
    </Link>
  );
}
