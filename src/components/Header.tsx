import Link from "next/link";
import classes from "./Header.module.css";
export default function Header() {
  // const article: string = "Selecting the right product metrics (KPIs)";

  return (
    <div className={classes.HeaderComponent}>
      <div className={classes.topLine}></div>
      {/* <div className={`${classes.header} bg-[#f1f1f1] shadow-xl `}> */}
      <div className={`${classes.header}  bg-[#F3ECE7] `}>
        <div className={classes.left}>
          <Link href="/">
            <div className={classes.logoText}>Nejum</div>
          </Link>
        </div>
        <div className={classes.middle}>
          <div>
            <ul>
              {/* <li>
                <Link href="/">
                  <div className={classes.logoText}>Nejum</div>
                </Link>
              </li> */}
              <li>
                <Link href="/blog">Product</Link>
              </li>
              <li>
                <Link href="/blog">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/blog">Resources</Link>
              </li>
              <li>
                <Link href="/blog">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.right}>
          <Link href="">All Articles</Link>
          <Link href="">Author</Link>
        </div>
      </div>
    </div>
  );
}
