import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#">
      <div className="font-handwriting text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Miłosz Karwacki
      </div>
    </Link>
  );
}
