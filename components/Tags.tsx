import Link from "next/link";
import { Rounded } from "@/components";

export default function Tags({
  item,
  bgcolor,
  className,
}: {
  item: any;
  bgcolor: string;
  className: string;
}) {
  return (
    <div
      className="w-fit rounded-[50px] border border-[#212121] cursor-pointer text-[#212121] hover:text-[#f1f1f1]"
      key={item.id}
    >
      <Link
        className={`small-text font-NeueMontreal uppercase ${className}`}
        href={item.href}
      >
        <Rounded className="py-[2px]" backgroundColor={bgcolor}>
          <p className="text-[14px] z-10 px-[12px] ">{item.title}</p>
        </Rounded>
      </Link>
    </div>
  );
}
