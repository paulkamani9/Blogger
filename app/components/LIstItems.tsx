import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Meta;
};
function LIstItems({ post }: Props) {
  const { id, title, date } = post;
  const FormattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link className="underline hover:text-white" href={`posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{FormattedDate}</p>
    </li>
  );
}
export default LIstItems;
