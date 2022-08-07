import React from "react";
import { ProductRating } from "../../UI";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default function ReviewItem(props) {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 border-b-[1px] py-3 lg:flex-row md:gap-2">
      <div className="flex  items-center gap-3 mr-4  min-w-[200px]">
        <div className="overflow-hidden rounded-full">
          <img src={props.image} width={"50px"} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider">
            {props.userName}
          </span>
          <span>
            <ProductRating rating={props.rating} className="gap-0.5" />
          </span>
        </div>
      </div>
      <div className="ml-2 flex  flex-col gap-1 lg:ml-0 lg:flex-1 ">
        <div className="text-md flex flex-wrap items-center justify-between font-semibold uppercase tracking-wider">
          <span className="break-words">
          {props.reviewTitle}
          </span>
          <span className="text-sm font-medium text-base-400">
            <ReactTimeAgo date={props.date} locale="en-US" timeStyle="round-minute"/>
          </span>
        </div>
        <p className="text-base-400 w-full break-words">{props.reviewBody}</p>
      </div>
    </div>
  );
}
