import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../asset/css/product.css";

import Banner from "../men/Banner.js";

export default function ProductFilters() {
  return (
    <>
      <Banner />

      <nav className="myProdNav">
        <div class="filter-dropdown">
          <button class="filter-dropdown__button">SORT</button>
          <ul class="filter-dropdown__list">
            <li>
              <Link className="Link" to="/">
                Recommmended
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Whats New
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price High To Low
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price Low To High
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Link 1
              </Link>
            </li>
          </ul>
        </div>

        <div class="filter-dropdown">
          <button class="filter-dropdown__button">SORT</button>
          <ul class="filter-dropdown__list">
            <div>
              <small className="select" >
                0 selected
              </small>

              <Link to='/' className="all">
                <BiCheck size={20}/> All
              </Link>
            </div>
            <li>
              <Link className="Link" to="/">
                Recommmended
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Whats New
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price High To Low
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price Low To High
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Link 1
              </Link>
            </li>
          </ul>
        </div>

        <div class="filter-dropdown">
          <button class="filter-dropdown__button">SORT</button>
          <ul class="filter-dropdown__list">
            <li>
              <Link className="Link" to="/">
                Recommmended
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Whats New
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price High To Low
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Price Low To High
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Link 1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
