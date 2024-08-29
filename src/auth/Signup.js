import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from "../img/logo.gif";

const Signup = ({ className }) => {
    const [step, setStep] = useState(1);
    const [animationClass, setAnimationClass] = useState('');

    const handleContinue = () => {
        if (step < 5) {
            setAnimationClass('animate-slide-left');
            setStep(step + 1);
        }
    };

    const handleGoBack = () => {

        setAnimationClass('animate-slide-right');
        setStep(step - 1);

    };
    return (
        <div
            className={`${className} flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center items-start sm:items-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px]`}
            style={{
                opacity: 1,
                transform: "translateY(var(--slide-enter)) scale(var(--scale-enter)) translateZ(0)"
            }}
        >
            <section
                role="dialog"
                tabIndex={-1}
                className="flex bg-white flex-col border min-h-screen rounded relative z-50 w-full bg-content1 mx-1 my-1 sm:mx-6 sm:my-16 max-w-sm rounded-small shadow-small overflow-y-hidden outline-none"
                aria-modal="true"
                aria-labelledby="signup-header"
                aria-describedby="signup-description"
            >
                <Link className='text-dark   absolute text-decoration-none' to='/login' style={{ zIndex: 999 }}>

                    <button
                        aria-label="Close"
                        className=" top-1 text-dark right-1 p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 outline-none text-dark relative"
                        type="button"
                        onClick={() => console.log("Hello")}
                    >
                        <svg
                            aria-hidden="true"
                            fill="none"
                            focusable="false"
                            height="1em"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            width="1em"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </Link>
                <header
                    className="py-4 px-6 relative text-large font-semibold flex flex-col justify-center items-center gap-y-1"
                    id="signup-header"
                >
                    <div
                        className="relative rounded-large"
                        style={{ maxWidth: 150 }}
                    >
                        <img
                            alt="Logo of sukhvivah.com"
                            loading="lazy"
                            width={150}
                            height={100}
                            className="relative z-10 rounded-large"
                            src={logo}
                            style={{ color: "transparent" }}
                        />
                    </div>
                    {step > 1 && (
                        <button
                            className="absolute  left-5 text-[#F80263]"
                            style={{ top: "6em" }}
                            type="button"
                            onClick={handleGoBack}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        </button>
                    )}
                    <h1 className="ml-6 text-center fs-6 font-bold">
                        Welcome To Sukhvivah!
                        <span className="inline-flex text-[#F80263]">
                            <svg
                                stroke="currentColor"
                                fill="red"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 -rotate-[20deg]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                            <svg
                                stroke="currentColor"
                                fill="red"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 -translate-x-2 translate-y-2 rotate-[30deg]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </span>
                    </h1>

                </header>

                <div className="flex   flex-col gap-3 px-6 py-2" id="signup-description">
                    <form className={animationClass}>
                        {step === 1 && (
                            <div className="input-group animate-slide-left">
                                <InputField label="First Name" type="text" placeholder="Enter your First Name" />
                                <InputField label="Middle Name" type="text" placeholder="Enter your Middle Name" />
                                <InputField label="Last Name" type="text" placeholder="Enter your Last Name" />
                                <InputField label="Date of Birth" type="date" />

                            </div>
                        )}

                        {step === 2 && (
                            <div className="input-group animate-slide-left">
                                <InputField label="Gender" type="select" options={["Male", "Female", "Other"]} />

                            </div>
                        )}

                        {step === 3 && (
                            <div className="input-group animate-slide-left">
                                <InputField label="Adhaar Number" type="text" placeholder="Enter your Adhaar Number" />
                                <InputField label="Mobile Number" type="tel" placeholder="Enter your Mobile Number" />
                                <InputField label="Email" type="email" placeholder="Enter your Email" />

                            </div>
                        )}

                        {step === 4 && (
                            <div className="input-group row animate-slide-left">
                                <InputField label="What You Want" type="select" options={["Freelancer", "BFF", "Date", "Shaadi"]} />
                                <br /> <span className='mx-3'></span>
                                <InputField label="Who Are You" type="select" options={["Freelancer", "User", "Staff"]} />

                            </div>
                        )}

                        {step === 5 && (
                            <div className="input-group animate-slide-left">
                                <InputField label="Password" type="password" placeholder="Set your Password" />
                                <InputField label="Confirm Password" type="password" placeholder="Confirm your Password" />
                                <InputField label="Security Question" type="text" placeholder="Enter your security question" />
                                <InputField label="Set MPin" type="password" placeholder="Set a 4-digit MPin" maxLength={4} />

                            </div>
                        )}
                        {step == 5 ? (<button
                            className="relative inline-flex items-center justify-center w-full h-10 text-small font-semibold text-white bg-[#F80263] rounded-small"
                            type="submit"

                        >Signup </button>
                        ) : (
                            <button
                                className="relative rounded inline-flex items-center justify-center w-full h-10 text-small font-semibold text-white bg-[#F80263] rounded-small"
                                type="button"
                                onClick={handleContinue}
                            > Continue</button>

                        )}
                    </form>
                    <div className=" w-full h-fit mt-8 flex justify-center items-center ">
                        Already have account
                        <Link className='text-dark text-decoration-none' to='/login'>
                            <button
                                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 max-h-[4vh] font-bold"
                                type="button"
                            >
                                Login
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                    focusable="false"
                                    tabIndex={-1}
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const InputField = ({ label, type, placeholder, options, maxLength }) => (
    <div className="mb-4 col-12 ">
        <label className="block text-sm font-medium mb-2  text-start mx-2">{label}</label>
        {type === "select" ? (
            <select
                className="w-full p-2  border border-gray-300 rounded"
                aria-label={label}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded"
                maxLength={maxLength}
            />
        )}
    </div>
);

export default Signup;
