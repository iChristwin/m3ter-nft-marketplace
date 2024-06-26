import "../CSS/theme.min.css";
import MyCard from "../common/MyCard"
import { Link } from "react-router-dom";

function ProductCarousel() {
  const nums = [1, 2, 3, 4];
  const CardElement = nums.map((num) => {
    return (
      <MyCard
        className={"col py-3"}
        artClass={"card h-100 border-0 shadow"}
        key={num}
        id={num}
        img={`product_${num}`}
        lg={"../img/Switch/switch.jpg"}
      />
    );
  });

  return (
    <section className="mb-4 py-5 bg-secondary">
      <div className="container py-lg-4">
        <div className="d-flex flex-wrap mb-3">
          <h2 className="h3 mb-0">Trending Solar Projects</h2>
        </div>
        {/* <!-- Product carousel--> */}
        <div className=" mx-xl-n4 mx-n2 px-xl-4 px-0">
          <div
            className=" row gx-xl-4 gx-3 mx-0"
            data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
          >
            {/* <!-- Product item--> */}
            {CardElement}
          </div>
        </div>
        <div className="d-flex flex-sm-row flex-column justify-content-center pt-4">
          <Link
            className="btn btn-outline-accent"
            to="/marketplace"
          >
            Browse marketplace
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
