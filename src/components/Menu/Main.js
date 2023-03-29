import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import MegaMenu from "./MegaMenu";
import "../../asset/css/menustyles.css";

export default function Main() {
  return (
    <div className="overall">
      <div className="container topmenu1">
        <Link to="/" className="innermenu">
          Marketplace
        </Link>
        <Link to="/" className="innermenu">
          Help & FAQs
        </Link>
        <Link to="/" className="innermenu">
          location icon
        </Link>
      </div>
      <div className="topmenu2">
        <div className="left">
          <Link to="/" className="logo">
            i X X i
          </Link>
          <Link to="women" className="women">
            WOMEN
          </Link>
          <Link to="men" className="men">
            MEN
          </Link>
          <Link to="kid" className="women">
            KIDDIES
          </Link>
          <Link to="fitness" className="men">
            iXXiFITNESS
          </Link>
        </div>
        <div className="center">
          <form className="d-flex search">
            <div className="input-group searchBox">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"></input>
              <button className="btn btn-light" type="submit">
                <Icon className="searchicon" icon="mdi:cloud-search" />
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          {/* start modal */}
          <div type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
            <Icon className="usericon " icon="mdi:user-convert" />
          </div>

          <div className="offcanvas offcanvas-top" id="demo">
            <div className="mycanvas">
              <div className="offcanvas-header">
                <div className="myAuth">
                  <Link to="/signIn" className="auth">
                    Sign In
                  </Link>
                  <Link to="/signUp" className="auth">
                    Join Now
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body">
                <div className="myAcount">
                  <Link to="signIn" className="account">
                    <Icon icon="icon-park-solid:order" className="icon" />
                    <h4>My Order</h4>
                  </Link>
                  <Link to="/my-account" className="account">
                    <Icon
                      icon="material-symbols:account-circle-off-rounded"
                      className="icon"
                    />
                    <h4>My Account</h4>
                  </Link>
                </div>

                <div className="myAcount">
                  <Link to="signIn" className="account">
                    <Icon icon="icon-park-solid:order" className="icon" />
                    <h4>Retunds & FAQs</h4>
                  </Link>
                  <Link to="signUp" className="account">
                    <Icon
                      icon="material-symbols:account-circle-off-rounded"
                      className="icon"
                    />
                    <h4>Contact preferences</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end of modal */}

          <Link to="/wishlist" className="wishlist1">
            <Icon className="usericon" icon="ri:heart-add-fill" />
          </Link>
          <Link to="/cart" className="cart1">
            <Icon className="usericon" icon="ph:bag-fill" />
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light topmost">
        <div className="container-fluid">
          <button
            className="navbar-toggler order-lg-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="mainlogo">i X X i</Link>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="sidebar"
            aria-labelledby="sidebarLabel">
            <div className="offcanvas-header">
              <Link to={"/"} className="offcanvas-title minilogo" id="sidebarLabel">
                i X X i Menu
              </Link>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
              <ul className="navbar-nav megainner1">
                <div className="topmenu3">
                  <div className="left">
                    <Link to="women" className="women">
                      WOMEN
                    </Link>
                    <Link to="men" className="men">
                      MEN
                    </Link>
                    <Link to="kid" className="women">
                      KIDDIES
                    </Link>
                    <Link to="fitness" className="men">
                      iXXiFITNESS
                    </Link>
                  </div>
                  <div className="right">
                    {/* start modal */}
                    <div
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal">
                      <Icon className="usericon " icon="mdi:user-convert" />
                    </div>

                    <div className="offcanvas offcanvas-top" id="demo">
                      <div className="mycanvas">
                        <div className="offcanvas-header">
                          <div className="myAuth">
                            <Link to="signIn" className="auth">
                              Sign In
                            </Link>
                            <Link to="signUp" className="auth">
                              Join Now
                            </Link>
                          </div>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                          <div className="myAcount">
                            <Link to="signIn" className="account">
                              <Icon
                                icon="icon-park-solid:order"
                                className="icon"
                              />
                              <h4>My Order</h4>
                            </Link>
                            <Link to="/my-account" className="account">
                              <Icon
                                icon="material-symbols:account-circle-off-rounded"
                                className="icon"
                              />
                              <h4>My Account</h4>
                            </Link>
                          </div>

                          <div className="myAcount">
                            <Link to="signIn" className="account">
                              <Icon
                                icon="icon-park-solid:order"
                                className="icon"
                              />
                              <h4>Retunds & FAQs</h4>
                            </Link>
                            <Link to="signUp" className="account">
                              <Icon
                                icon="material-symbols:account-circle-off-rounded"
                                className="icon"
                              />
                              <h4>Contact preferences</h4>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end of modal */}
                    <Link to="/wishlist" className="wishlist1">
                      <Icon className="usericon" icon="ri:heart-add-fill" />
                    </Link>
                    <Link to="/cart" className="cart1">
                      <Icon className="usericon" icon="ph:bag-fill" />
                    </Link>
                  </div>
                </div>

                <MegaMenu />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
