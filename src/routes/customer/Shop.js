import React from "react";
import { Breadcrumb } from "../../components/UI";
import { Controls, Title, ShopProducts } from "../../components/Shop";
export default function Shop() {
  return (
    <>
      <Breadcrumb />
      <section className="container py-5">
        <Title />
        <Controls />
        <ShopProducts />
      </section>
    </>
  );
}
