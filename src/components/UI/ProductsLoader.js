import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeaturedProdLoader() {
  let arr = [1,2,3,4];
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between px-6 gap-2 mt-12">
        {arr.map((_,index) => {
          return (
            <div key={index} className="flex flex-col items-center  gap-2">
              <Skeleton circle count={1} height="200px" width="200px" />
              <div className="flex flex-col items-center">
                <Skeleton width={140} />
                <Skeleton width={140} />
                <Skeleton width={140} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
