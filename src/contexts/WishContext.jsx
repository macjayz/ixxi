import { createContext, useState } from "react";

const WishContext = createContext();
const { Provider } = WishContext;

const WishProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      name: "Product 1",
      preview:
        "https://images.asos-media.com/products/asos-design-lace-up-boot-in-black-faux-suede-with-padded-cuff-detail/200931673-1-black?$n_960w$&wid=952&fit=constrain",
      discount: 25,
      original_price: 38.0,
      product_color: "Black",
      product_sizes: ["Size 1", "Size 2", "Size 3"],
    },
    {
      id: 2,
      name: "Product 2",
      preview:
        "https://images.asos-media.com/products/asos-design-desert-boots-in-stone-suede-with-leather-detail/202294196-1-stone?$n_960w$&wid=952&fit=constrain",
      discount: "",
      original_price: 30.0,
      product_color: "Black",
      product_sizes: ["Size 1", "Size 2", "Size 3", "Size 4"],
    },
    {
      id: 3,
      name: "Product 3",
      preview:
        "https://images.asos-media.com/products/asos-design-oxford-brogue-shoes-in-tan-leather/202611089-1-tan?$n_960w$&wid=952&fit=constrain",
      discount: 24,
      original_price: 75.0,
      product_color: "Black",
      product_sizes: ["Size 1", "Size 2", "Size 3"],
    },
    {
      id: 4,
      name: "Product 4",
      // preview:
      //   "https://images.asos-media.com/products/office-cleated-chelsea-boots-in-brown-suede/203080942-1-brown?$n_320w$&wid=317&fit=constrain",
      preview:
        "https://lp2.hm.com/hmgoepprod?set=source[/68/e7/68e73128488478b914e01cd70b407eab132d452c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]",
      original_price: 100,
      product_color: "Black",
      product_sizes: ["Size 1", "Size 2", "Size 3"],
    },
  ]);

  return <Provider value={{ savedItems, setSavedItems }}>{children}</Provider>;
};

export { WishContext, WishProvider };
