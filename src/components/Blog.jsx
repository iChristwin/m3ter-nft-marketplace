import PropTypes from "prop-types"
import "../CSS/styles.css";
import Blog1 from "../img/nft/blog/01.jpg";
import Blog2 from "../img/nft/blog/02.jpg";
import Blog3 from "../img/nft/blog/03.jpg";

function Blog(props) {
  return (
    <div className={`pt-4 bg-secondary ${props.className}`}>
      {/* <!-- Blog recent posts--> */}
      <section className="container py-lg-5 py-5">
        <div className="d-flex align-items-center justify-content-between mb-sm-4 mb-2 pb-2">
          <h2 className="h3 mb-0">Resources for getting started</h2>
          <a
            className="btn btn-outline-accent ms-3"
            href="/Switch-NFT-Marketplace-React"
          >
            All articles<i className="ci-arrow-right ms-2"></i>
          </a>
        </div>
        {/* <!-- Blog (carousel)--> */}

        <div
          className="my-5"
          data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
        >
          {/* <!-- Carousel item--> */}

          {/* <!-- Carousel item--> */}
          <div className="row">
            <article className="col col-lg-4 col-sm-12">
              <a className="d-block mb-3" href="/Switch-NFT-Marketplace-React">
                <img className="rounded-3" src={Blog2} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="#flex">
                  by Kathryn Murphy
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#flex">
                  Sep 18
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  A chance to win a variety of common, rare and unique NFTs
                </a>
              </h2>
            </article>

            {/* <!-- Carousel item--> */}
            <article className="col col-lg-4 col-sm-12">
              <a className="d-block mb-3" href="Switch-NFT-Marketplace-React">
                <img className="rounded-3" src={Blog1} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="#flex">
                  by Wade Warren
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#flex">
                  Aug 15
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  The complete guide to NFTs art for creators and investors
                </a>
              </h2>
            </article>

            {/* <!-- Carousel item--> */}
            <article className="col col-lg-4 col-sm-12">
              <a className="d-block mb-3" href="Switch-NFT-Marketplace-React">
                <img className="rounded-3" src={Blog3} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="empty">
                  by Devon Lane
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="empty">
                  Nov 26
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  Exclusive premium events, from exhibitions to unique
                  collectibles
                </a>
              </h2>
            </article>
          </div>
        </div>
      </section>
      {/* <!-- Mail subscription--> */}
    </div>
  );
}

Blog.propTypes = {
    className: PropTypes.string
}

export default Blog;
