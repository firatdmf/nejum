// import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const article: string = "Selecting the right product metrics (KPIs)";
  return (
    <div className="HomePage">
      <div className={`${classes.header} bg-[#f1f1f1] shadow-xl `}>
        <div className={classes.left}>
          <div className={classes.logoText}>Nejum</div>
          <p>
            Nejum »{" "}
            <Link rel="stylesheet" href="">
              {article}
            </Link>
          </p>
        </div>
        <div className={classes.right}>
          <Link rel="stylesheet" href="">
            All Articles
          </Link>
          <Link rel="stylesheet" href="">
            Author
          </Link>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.blog}>
          <div className={classes.readTime}>
            July 16, 2023 <br />
            Reading time: 12 min <br />
            PDF Logo Printable PDF <br />
          </div>
          <article>
            <h1>Selecting the right product metrics (KPIs)</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex
              sunt! Eos nihil aspernatur, numquam ullam ipsam accusamus deleniti
              incidunt minima alias in sequi earum dolorem aliquam consequatur
              modi libero?
            </p>
            <h2>title 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quam mollitia assumenda. Iure commodi hic quis. Debitis beatae
              voluptates quo dolores corporis aspernatur maxime iusto reiciendis
              eos, minima, nam recusandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quam mollitia assumenda. Iure commodi hic quis. Debitis beatae
              voluptates quo dolores corporis aspernatur maxime iusto reiciendis
              eos, minima, nam recusandae!
            </p>
          </article>
        </div>
        <div className={classes.share}>Hello</div>
      </div>
    </div>
  );
}
