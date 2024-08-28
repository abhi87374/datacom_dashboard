"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
const SidenavItems = () => {
  const activeLinkClasses = classNames(
    "text-xl",
    "font-bold",
    "bg-black",
    "text-white",
    "cursor-pointer",
    "rounded-3xl",
    "p-2",
    "m-2",
    "transition",
    "duration-200",
    "ease-in-out",
    "transform",
    "hover:scale-110",
    "hover:shadow-2xl",
    "hover:border-2",
    "hover:border-white",
    "hover:border-opacity-100",
    "hover:border-solid",
    "hover:border-amber-300",
    "bg-amber-300",
    "text-white",
    "border-2",
    "border-white",
    "border-opacity-100",
    "border-solid",
    "border-amber-300"
  );

  const classes = classNames(
    "text-xl",
    "font-bold",
    "hover:bg-amber-300",
    "hover:text-white",
    "cursor-pointer",
    "rounded-3xl",
    "p-2",
    "m-2",
    "transition",
    "duration-200",
    "ease-in-out",
    "transform",
    "hover:scale-110",
    "hover:shadow-2xl",
    "hover:border-2",
    "hover:border-white",
    "hover:border-opacity-100",
    "hover:border-solid",
    "hover:border-amber-300",
    "dark:bg-amber-950",
  );


  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === "/";
  const isCustomers = pathname === "/customers";
  const isProducts = pathname === "/products";
  const isMarketing = pathname === "/marketing";
  const isDiscounts = pathname === "/discounts";

    

  return (
    <div className="mt-4">
      <div>
        <Link href="./">
          <h1 className={isHome ?activeLinkClasses:classes}>Orders</h1>
        </Link>
      </div>
      <div>
        <Link href="./customers">
          <h1 className={isCustomers ?activeLinkClasses:classes}>Customers</h1>
        </Link>
      </div>
      <div>
        <Link href="./products">
        <h1 className={isProducts ?activeLinkClasses:classes}>Products</h1>
        </Link>
      </div>
      <div>
        <Link href="./marketing">
        <h1 className={isMarketing ?activeLinkClasses:classes}>Marketing</h1>
        </Link>
      </div>
      <div>
        <Link href="./discounts">
        <h1 className={isDiscounts ?activeLinkClasses:classes}>Discounts</h1>
        </Link>
      </div>
    </div>
  );
};

export default SidenavItems;
