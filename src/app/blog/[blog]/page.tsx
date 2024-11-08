import classes from "./page.module.css"
export default function BlogPage(){
    return(
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
    )
}