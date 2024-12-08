import Link from "next/link";
import classes from "./page.module.css";
import { IoSearchSharp } from "react-icons/io5";
export default function Blog() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={`${classes.headline} text-3xl font-bold"`}>
            Welcome to Nejum
          </h1>
          <p className={`${classes.littleTitle} "italic"`}>
            Articles on Leveraging Technology for Smarter Business Operations
          </p>
          <div className={classes.sort_and_search_bar}>
            <div className={classes.sort}>
              <p>Sort By:</p>
              <button>Popularity</button>
              <button>Newest</button>
            </div>
            <div className={classes.search}>
              <div className={classes.search_icon}>
              <IoSearchSharp />
              </div>
              <input
                type="text"
                maxLength={64}
                aria-label="Search"
                placeholder="Search"
                id="search_input"
              />
            </div>
          </div>
          <div className={classes.blog_grid_container}>
            <div className={classes.blog_grid_item}>
              <Link href="/blogs/article_title">
                <div className={classes.blog_grid_item_image}>
                  <img
                    src="https://longform.asmartbear.com/product-market-fit-formula/thumbnail-1200w_huc583e90880d0798f52d60c98903e3979_137961_360x0_resize_q75_h3_mitchellnetravali_3.webp"
                    alt=""
                  />
                </div>
                <div className={classes.blog_grid_item_title}>
                  <p>The roadmap to Product/Market Fit (PMF)… maybe</p>
                </div>
                <div className={classes.blog_grid_item_summary}>
                  <p>
                    This eight-step process brought WP Engine from an idea to a
                    Unicorn. While there are other roads to Product/Market Fit,
                    consider copying some of these ideas.
                    <span className="date">—December 2023</span>
                    <span className="date">| 6,700 words.</span>
                  </p>
                </div>
              </Link>
            </div>
            <div className={classes.blog_grid_item}>
              <Link href="/blogs/article_title">
                <div className={classes.blog_grid_item_image}>
                  <img
                    src="https://longform.asmartbear.com/problem/thumbnail-1200w_hu959ef7dc51c83d24d3771e11fce8f8bc_412484_360x0_resize_q75_h3_mitchellnetravali_3.webp"
                    alt=""
                  />
                </div>
                <div className={classes.blog_grid_item_title}>
                  <p>The roadmap to Product/Market Fit (PMF)… maybe</p>
                </div>
                <div className={classes.blog_grid_item_summary}>
                  <p>
                    This eight-step process brought WP Engine from an idea to a
                    Unicorn. While there are other roads to Product/Market Fit,
                    consider copying some of these ideas.
                    <span className="date">—December 2023</span>
                    <span className="date">| 6,700 words.</span>
                  </p>
                </div>
              </Link>
            </div>
            <div className={classes.blog_grid_item}>
              <Link href="/blogs/article_title">
                <div className={classes.blog_grid_item_image}>
                  <img
                    src="https://longform.asmartbear.com/product-market-fit-formula/thumbnail-1200w_huc583e90880d0798f52d60c98903e3979_137961_360x0_resize_q75_h3_mitchellnetravali_3.webp"
                    alt=""
                  />
                </div>
                <div className={classes.blog_grid_item_title}>
                  <p>The roadmap to Product/Market Fit (PMF)… maybe</p>
                </div>
                <div className={classes.blog_grid_item_summary}>
                  <p>
                    This eight-step process brought WP Engine from an idea to a
                    Unicorn. While there are other roads to Product/Market Fit,
                    consider copying some of these ideas.
                    <span className="date">—December 2023</span>
                    <span className="date">| 6,700 words.</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <p>Don&apost;miss the next article.</p>
          <label htmlFor="email_subscribe">Subscribe to our newsletter</label>
          <br />
          <input
            type="text"
            name="email_subscribe"
            id="email_subscribe"
            placeholder="Email Address"
          />
          <br />
          <div className={classes.button}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
