import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Button } from "../UI";

export default function RegisterError({ error }) {
  let errorMessage = "";
  switch (error) {
    case `E11000 duplicate key error collection: food-trends.users index: email_1 dup key: { email: "modymeky@gmail.com" }`:
      errorMessage="Email is registered before, Please Login!"
      break;

    default:
      break;
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex justify-center">
        <BiErrorCircle size={120} className="text-secondary-400" />
      </div>
      <h1 className="text-lg font-medium">{errorMessage}</h1>
      <Button
        variant={"secondary"}
        type="submit"
        className="mt-5"
        onClick={() => window.location.reload(false)}
      >
        Refresh!
      </Button>
    </div>
  );
}
