// import Image from "next/image";
import Link from "next/link";
export default function Home() {
  // const article: string = "Selecting the right product metrics (KPIs)";
  return (
    <div className="HomePage">
      <p className="text-2xl">This is the landing page.</p>
      <Link href="/blog">Go to blogs here</Link>
    </div>
  );
}
