import propTypes from "prop-types"
import { useContext, useState } from "react";
import "../CSS/styles.css";
import MyCard from "../common/MyCard";
import ConnectButton from "../common/ConnectBtn"
import Avatar13 from "../img/nft/catalog/avatars/13.png";
import SwitchLg from "../img/Switch/switch.jpg";
import { Link } from "react-router-dom";
import MetaData from "./MetaData";
import Asset from "./Asset";
import Revenue from "./Revenue";
import Details from "./Details";
import Provenance from "./Provenance";
import { M3terHead } from "m3ters";
import Loader from "../components/Loader"
import useListings from "../web3/hooks/useListings"
import Web3Context from "../contexts/Web3Context";
//import Example from "../JSX/OrderModal"

function SinglebuyBody({meter, index}) {
  const { account, currency } = useContext(Web3Context)
  const {purchaseMeter, listingsLoading, listingsStatus} = useListings()
  let formattedPrice = Number(meter?.price)
  let formattedPriceEth = formattedPrice / 10**18;

  const nums = [11, 12, 15, 16];
  const CardElement = nums.map((num) => {
    return (
      <MyCard
        className={"col py-3 mx-2"}
        artClass={"card h-100 border-0 shadow"}
        key={num}
        id={num}
        img={num}
        lg={"../img/Switch/switch.jpg"}
      />
    );
  });

  console.log(typeof meter)
  const [activeTab, setActiveTab] = useState("metadata");
  const theTab = function () {
    if (activeTab === "metadata") return <MetaData />;
    else if (activeTab === "asset") return <Asset />;
    else if (activeTab === "revenue") return <Revenue />;
    else if (activeTab === "details") return <Details />;
    else if (activeTab === "provenance") return <Provenance />;
  };

  function handleClick(e) {
    setActiveTab((PreActiveTab) => {
      if (e.myTab === 1) {
        return "metadata";
      } else if (e.myTab === 2) {
        return "asset";
      } else if (e.myTab === 3) {
        return "revenue";
      } else if (e.myTab === 4) {
        return "details";
      } else if (e.myTab === 5) {
        return "provenance";
      } else return { ...PreActiveTab };
    });
  }

  function handlePurchase(){
    purchaseMeter(meter?.price, index)
  }

  return (
    <div>
      {/* <Example></Example> */}
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to="/">
                    <i className="ci-home"></i>Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <Link to="marketplace">Marketplace</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Solar Project
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">
              Solar Project - Buy/Invest Now
            </h1>
          </div>
        </div>
      </div>
      <section className="container pb-md-4">
        {/* <!-- Product--> */}
        <div className="bg-light shadow-lg rounded-3 px-4 py-lg-4 py-3 mb-5">
          <div className="py-lg-3 py-2 px-lg-3">
            {
              listingsLoading
              ?
              <div> <Loader color="blue" /> </div>
              :
              listingsStatus.error
              ?
              <div> {listingsStatus.message} </div>
              :
              <div className="row">
                {/* <!-- Product image--> */}
                <div className="col-lg-6">
                  <div className="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
                    <M3terHead seed={meter?.tokenId} />
                    <div className="image-zoom-pane"></div>
                  </div>
                  <div className="pt-2 text-lg-start text-center">
                    <button
                      className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Favorites"
                    >
                      <i className="ci-heart"></i>
                    </button>
                    <button
                      className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Share"
                    >
                      <i className="ci-share-alt"></i>
                    </button>
                    <button
                      className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Flag"
                    >
                      <i className="ci-flag"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- Product details--> */}
                <div className="col-lg-6">
                  <div className="ps-xl-5 ps-lg-3">
                    {/* <!-- Meta--> */}
                    <h2 className="h3 mb-3">M3TER {Number(meter?.tokenId)}</h2>
                    <div className="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm">
                      <div className="mb-2 me-sm-3 me-2 text-muted">
                        Minted on Oct 17, 2022
                      </div>
                      <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                        <i className="ci-eye me-1 fs-base mt-n1 align-middle"></i>
                        15 views
                      </div>
                      <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                        <i className="ci-heart me-1 fs-base mt-n1 align-middle"></i>
                        4 favorite
                      </div>
                    </div>
                    <div className="row row-cols-sm-3 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                      {/* <!-- Current price--> */}
                      <div className="col">
                        <div className="pb-md-2">
                          <h3 className="h6 mb-2 fs-sm text-muted">
                            Current price
                          </h3>
                          <h2 className="h3 mb-1">{formattedPriceEth} {currency}</h2>
                          <span className="fs-sm text-muted">(≈ $ 795.48)</span>
                        </div>
                      </div>
                      {/* <!-- Creator--> */}
                      <div className="col">
                        <div className="card position-relative h-100">
                          <div className="card-body p-3">
                            <h3 className="h6 mb-2 fs-sm text-muted">
                              Project Developer
                            </h3>
                            <div className="d-flex align-items-center">
                              <img
                                className="rounded-circle me-2"
                                src={SwitchLg}
                                width="32"
                                alt="Avatar"
                              />
                              <Link
                                className="nav-link-style stretched-link fs-sm"
                                to="project-developer"
                              >
                                {meter?.owner.slice(0, 3)}...{meter?.owner.slice(meter?.owner.length - 4)}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Collection--> */}
                      <div className="col">
                        <div className="card position-relative h-100">
                          <div className="card-body p-3">
                            <h3 className="h6 mb-2 fs-sm text-muted">
                              Project Location
                            </h3>
                            <div className="d-flex align-items-center">
                              <img
                                className="rounded-circle me-2"
                                src={Avatar13}
                                width="32"
                                alt="Avatar"
                              />
                              <Link
                                className="nav-link-style stretched-link fs-sm"
                                to="single-buy"
                              >
                                Enugu, Nigeria
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      {
                        account
                        ?
                        <button
                          className="btn btn-lg btn-accent d-block w-100"
                          onClick={handlePurchase}
                        >
                          Purchase NFT
                        </button>
                        :
                        <ConnectButton />
                      }
                    </div>
                    {/* <!-- Product info--> */}
                    <div className="pt-3">
                      {/* <!-- Nav tabs--> */}
                      <div className="mb-3" style={{ overflowX: "auto" }}>
                        <ul
                          className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-1"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <div
                              id="metadata"
                              className="nav-link "
                              onClick={() => handleClick({ myTab: 1 })}
                              data-bs-toggle="tab"
                              role="tab"
                            >
                              Metadata
                            </div>
                          </li>
                          <li className="nav-item">
                            <div
                              id="asset"
                              className="nav-link"
                              onClick={() => handleClick({ myTab: 2 })}
                              data-bs-toggle="tab"
                              role="tab"
                            >
                              Asset
                            </div>
                          </li>
                          <li className="nav-item">
                            <div
                              id="revenues"
                              className="nav-link"
                              onClick={() => handleClick({ myTab: 3 })}
                              data-bs-toggle="tab"
                              role="tab"
                            >
                              Revenues
                            </div>
                          </li>
                          <li className="nav-item">
                            <div
                              onClick={() => handleClick({ myTab: 4 })}
                              id="details"
                              className="nav-link"
                              data-bs-toggle="tab"
                              role="tab"
                            >
                              Details
                            </div>
                          </li>
                          <li className="nav-item">
                            <div
                              id="provenance"
                              className="nav-link"
                              onClick={() => handleClick({ myTab: 5 })}
                              data-bs-toggle="tab"
                              role="tab"
                            >
                              Provenance
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Tabs content--> */}
                      <div
                        className="tab-pane fade show active"
                        id="properties"
                        role="tabpanel"
                      >
                        <div className="row ">
                          <div className="card">
                            <div className="card-body">
                              <div className="tab-content">{theTab()}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
      <section className="container mb-5 pb-md-4">
        <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-sm-between mb-sm-4 mb-3">
          <h2 className="h3 mb-sm-0">More from this Location</h2>
          <Link
            className="btn btn-outline-accent ms-sm-3"
            to="single-buy"
          >
            View collection<i className="ci-arrow-right ms-2"></i>
          </Link>
        </div>
        {/* <!-- Product carousel--> */}
        <div className=" tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0 ">
          <div
            className=" row gx-xl-0 gx-3 mx-0"
            data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
          >
            {/* <!-- Product item--> */}
            {CardElement}
          </div>
        </div>
      </section>
    </div>
  );
}

SinglebuyBody.propTypes = {
  meter: propTypes.object.isRequired,
  index: propTypes.number.isRequired
}

export default SinglebuyBody;
