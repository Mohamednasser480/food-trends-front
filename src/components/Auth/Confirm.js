import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Loader } from "../../components/UI";
import { verifySelector, verifyUser } from "../../store/slices/auth.js";
import cookies from "../../services/cookie";
import { BsCheckCircle } from "react-icons/bs";
import Welcome from "./Welcome";
export default function Confirm() {
  const dispatch = useDispatch();
  const token = cookies.getCookie("token");
  const { status, error } = useSelector(verifySelector);
  function focusCode() {
    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }
  useEffect(() => {
    focusCode();
  }, []);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();

  const handleOnClick = () => {
    const code = "".concat(
      input1.current.value,
      input2.current.value,
      input3.current.value,
      input4.current.value,
      input5.current.value
    );
    dispatch(verifyUser({ code: code, token: token }));

    input1.current.value = "";
    input3.current.value = "";
    input4.current.value = "";
    input2.current.value = "";
    input5.current.value = "";
  };
  return (
    <>
      {status == "loading" ? (
        <Loader />
      ) : status == "succeeded" ? (
        <Welcome />
      ) : (
        <div className=" mx-auto">
          <div className="mx-auto max-w-sm md:max-w-lg">
            <div className="flex w-full flex-col items-center">
              <div className="flex animate-pulse justify-center">
                <BsCheckCircle size={120} className="text-primary" />
              </div>
              <div className="h-64 rounded bg-white py-3 text-center">
                <h1 className="text-2xl font-bold">User Verification</h1>
                <div className="mt-4 flex flex-col">
                  <span>
                    Enter the Confirmation Code you received at your email
                  </span>
                  <span className="font-bold">{}</span>
                </div>

                <div
                  id="otp"
                  className="mt-5 flex w-full flex-row flex-wrap justify-center px-2 text-center"
                >
                  <input
                    className="form-control m-2 h-10 w-10 rounded border text-center"
                    type="text"
                    id="first"
                    maxLength="1"
                    autoFocus={true}
                    ref={input1}
                  />
                  <input
                    className="form-control m-2 h-10 w-10 rounded border text-center"
                    type="text"
                    id="second"
                    maxLength="1"
                    ref={input2}
                  />
                  <input
                    className="form-control m-2 h-10 w-10 rounded border text-center"
                    type="text"
                    id="third"
                    maxLength="1"
                    ref={input3}
                  />
                  <input
                    className="form-control m-2 h-10 w-10 rounded border text-center"
                    type="text"
                    id="fourth"
                    maxLength="1"
                    ref={input4}
                  />
                  <input
                    className="form-control m-2 h-10 w-10 rounded border text-center"
                    type="text"
                    id="fifth"
                    maxLength="1"
                    ref={input5}
                  />
                </div>
                <p className="mt-3 px-2 text-center text-lg font-medium capitalize text-red-600 md:px-10">
                  {error}
                </p>
              </div>

              <Button variant="primary" onClick={handleOnClick}>
                Verify now.
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
