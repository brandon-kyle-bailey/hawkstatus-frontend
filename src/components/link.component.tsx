export default function LinkComponent(props: { text: string; url: string }) {
  return (
    <a
      className="text-base text-blue-600 underline dark:text-blue-500 hover:no-underline"
      href={props.url}
    >
      <p>{props.text}</p>
    </a>
  );
}
