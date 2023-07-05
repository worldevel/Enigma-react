import {
  Dropzone,
  PreviewComponent,
  Preview,
  Lucide,
} from "@/base-components";
import { useEffect, useRef, useState } from "react";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import classNames from "classnames";

function Main() {

  const dropzoneSingleRef = useRef();

  const [step, setStep] = useState(1);

  const transition_step = (step) => {
    setStep(step + 1)
  }

  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");

    const elDropzoneSingleRef = dropzoneSingleRef.current;
    elDropzoneSingleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneSingleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });

  }, []);

  return (
    <>
      <div>
        <DarkModeSwitcher />
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Register Info */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <a href="" className="-intro-x flex items-center pt-5">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="text-white text-lg ml-3"> Enigma </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src={illustrationUrl}
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to <br />
                  sign up to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Sign Up
                </h2>
                <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                {/*Begin:  step 1 register */}
                <div className={classNames(`sign_up_step_1`, {
                  'hidden': step !== 1
                })}>
                  <div className="intro-x mt-8">
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={() => transition_step(1)}>
                      Next Step &nbsp;<Lucide icon="ArrowRight" className="w-4 h-4 mr-2"></Lucide>
                    </button>
                  </div>
                </div>
                {/* End step 2 register */}
                <div className={classNames(`sign_up_step_2`, {
                  'hidden': step !== 2
                })}>
                  <div className="intro-x mt-8">
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block"
                      placeholder="Shop Name"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Industry"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Working days"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Instagram Link"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Facebook Link"
                    />
                    <input
                      type="text"
                      className="intro-x login__input form-control py-3 px-4 block mt-4"
                      placeholder="Twitter Link"
                    />
                  </div>
                  <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={() => transition_step(2)}>
                      Next Step &nbsp;<Lucide icon="ArrowRight" className="w-4 h-4 mr-2"></Lucide>
                    </button>
                  </div>
                </div>
                <div className={classNames(`sign_up_step_3`, {
                  'hidden': step !== 3
                })}>
                  <PreviewComponent className="intro-y box mt-5">
                    {({ toggle }) => (
                      <>
                        <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                          <h2 className="font-medium text-base mr-auto">
                            Shop Image Upload
                          </h2>
                        </div>
                        <div className="p-5">
                          <Preview>
                            <Dropzone
                            key={new Date()}
                              getRef={(el) => {
                                dropzoneSingleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                maxFiles: 1,
                                headers: { "My-Awesome-Header": "header value" },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop file here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                This is just a demo dropzone. Selected file is actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                        </div>
                      </>
                    )}
                  </PreviewComponent>
                  <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button className="btn btn-primary py-2 px-4 my-2 w-full xl:mr-3 align-top">
                      <img src="src/assets/images/google_icon.svg" className="h-6 px-2" alt="google_icon" /> Sign in with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Register Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
