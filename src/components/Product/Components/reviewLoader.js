import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ReviewLoader() {
  let arr = [1, 2];
  return (
    <>
      <div className="flex flex-col gap-2">
        {arr.map((_,index) => {
          return (
            <div key={index} className="flex flex-wrap items-center  gap-2">
              <Skeleton circle count={1} height="50px" width="50px" />
              <div className="flex flex-col">
                <Skeleton width={140} />
                <Skeleton width={95} />
              </div>
              <div className="flex min-w-[300px] flex-1 flex-col md:ml-5">
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
