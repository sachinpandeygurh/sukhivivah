import React from 'react'
import yahoo from "../img/yahoo.webp"
import logo from "../img/logo.gif"
import {Link} from "react-router-dom"
const Login = ({className}) => {
    return (
        <div
            className={`${className} flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center items-start sm:items-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px]`}
            data-slot="wrapper"
            style={{
                opacity: 1,
                transform:
                    "translateY(var(--slide-enter)) scale(var(--scale-enter)) translateZ(0)"
            }}
        >
            <section
                role="dialog"
                tabIndex={-1}
                className="flex bg-white flex-col relative md:top-40 md:border min-h-screen rounded z-50 w-full box-border bg-content1 outline-none mx-1 my-1 sm:mx-6 sm:my-16 max-w-sm rounded-small shadow-small overflow-y-hidden !outline-none"
                id=":ri:"
                data-open="true"
                aria-modal="true"
                aria-labelledby=":rj:"
                aria-describedby=":rk:"
            >
                <div
                    style={{
                        border: 0,
                        clip: "rect(0px, 0px, 0px, 0px)",
                        clipPath: "inset(50%)",
                        height: 1,
                        margin: "-1px",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        width: 1,
                        whiteSpace: "nowrap"
                    }}
                >
                    <button
                        id="react-aria3331944935-:rn:"
                        aria-label="Dismiss"
                        tabIndex={-1}
                        style={{ width: 1, height: 1 }}
                    />
                </div>
                <Link className='text-white text-decoration-none' to='/'>
                <button
                    role="button"
                    aria-label="Close"
                    className="absolute text-dark appearance-none select-none top-1 right-1 rtl:left-1 rtl:right-[unset] p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        fill="none"
                        focusable="false"
                        height="1em"
                        role="presentation"
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
                    className="py-4 px-6 flex-initial text-large font-semibold flex flex-col justify-center items-center gap-y-1"
                    id=":rj:"
                >
                    <div
                        className="relative shadow-black/5 shadow-none rounded-large"
                        style={{ maxWidth: 150 }}
                    >
                        {" "}
                        <img
                            alt="logo of sukhvivah.com"
                            loading="lazy"
                            width={150}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                            srcSet={logo}
                            src={logo}
                            style={{ color: "transparent" }}
                            data-loaded="true"
                        />
                    </div>
                    <h1 className=" ml-6 fs-5 text-center raleway fw-bold">
                        Welcome To Sukhvivah!{" "}
                        <span className=" inline-flex text-[#F80263] ">
                            <svg
                                stroke="currentColor"
                                fill="red"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className=" w-6 h-6 -rotate-[20deg] "
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
                                className=" w-4 h-4 -translate-x-2 translate-y-2 rotate-[30deg] "
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </span>
                    </h1>
                </header>
                <div className="flex flex-1 flex-col gap-3 px-6 py-2" id=":rk:">
                    <form>
                        <div
                            className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                            data-slot="base"
                            data-filled="true"
                            data-filled-within="true"
                            data-required="true"
                            data-has-elements="true"
                            data-has-label="true"
                        >
                            <div data-slot="main-wrapper" className="h-full flex flex-col">
                                <div
                                    data-slot="input-wrapper"
                                    className="relative w-full inline-flex items-center shadow-sm px-3 gap-3 border border-default-200 hover:border-default-400 focus-within:border-default-foreground min-h-10 rounded transition-colors duration-150"
                                    style={{ cursor: "text" }}
                                >
                                    <label
                                        data-slot="label"
                                        className="absolute pointer-events-none text-foreground-500 after:content-['*'] after:text-danger after:ml-0.5 pb-0 z-20 top-1/2 -translate-y-1/2 left-3 text-sm max-w-full overflow-hidden"
                                        htmlFor="password-input"
                                        style={{    marginTop: "-2.5em", marginLeft:"-.7em"}}
                                    >
                                        Mobile No. / Email Id
                                    </label>
                                    <div
                                        data-slot="inner-wrapper"
                                        className="inline-flex w-full items-center h-full box-border"
                                    >
                                        <input
                                            data-slot="input"
                                            className="w-full bg-transparent outline-none placeholder:text-foreground-500 text-sm h-full px-1.5"
                                            aria-label="email"
                                            aria-required="true"
                                            placeholder="Enter your Mobile No. / Email Id"
                                            id="email-input"
                                            type="email"
                                        />
                                        <button
                                            className="relative inline-flex items-center justify-center w-8 h-8 text-tiny bg-transparent text-default-foreground hover:bg-default/40 rounded transition-transform duration-150"
                                            type="button"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={1}
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width={20} height={16} x={2} y={4} rx={2} />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span
                            aria-hidden="true"
                            className="w-px h-px block my-3"
                            style={{ marginLeft: "0.25rem", }}
                        />
                        <div
                            className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                            data-slot="base"
                            data-filled="true"
                            data-filled-within="true"
                            data-required="true"
                            data-has-elements="true"
                            data-has-label="true"
                        >
                            <div data-slot="main-wrapper" className="h-full flex flex-col">
                                <div
                                    data-slot="input-wrapper"
                                    className="relative w-full inline-flex items-center shadow-sm px-3 gap-3 border border-default-200 hover:border-default-400 focus-within:border-default-foreground min-h-10 rounded transition-colors duration-150"
                                    style={{ cursor: "text" }}
                                >
                                    <label
                                        data-slot="label"
                                        className="absolute pointer-events-none text-foreground-500 after:content-['*'] after:text-danger after:ml-0.5 pb-0 z-20 top-1/2 -translate-y-1/2 left-3 text-sm max-w-full overflow-hidden"
                                        htmlFor="password-input"
                                        style={{    marginTop: "-2.5em", marginLeft:"-.7em"}}
                                    >
                                        Password
                                    </label>
                                    <div
                                        data-slot="inner-wrapper"
                                        className="inline-flex w-full items-center h-full box-border"
                                    >
                                        <input
                                            data-slot="input"
                                            className="w-full bg-transparent outline-none placeholder:text-foreground-500 text-sm h-full px-1.5"
                                            aria-label="Password"
                                            aria-required="true"
                                            placeholder="Enter your Password"
                                            id="password-input"
                                            type="password"
                                        />
                                        <button
                                            className="relative inline-flex items-center justify-center w-8 h-8 text-tiny bg-transparent text-default-foreground hover:bg-default/40 rounded transition-transform duration-150 "
                                            type="button"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={1}
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
                                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                <line x1={2} x2={22} y1={2} y2={22} />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex py-2 px-1 justify-between">
                            <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                <span
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-label="Remember me"
                                        aria-labelledby=":r12:"
                                        type="checkbox"
                                        defaultValue=""
                                    />
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset] rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                                >
                                    <svg
                                        aria-hidden="true"
                                        role="presentation"
                                        viewBox="0 0 17 18"
                                        className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none"
                                    >
                                        <polyline
                                            fill="none"
                                            points="1 9 7 14 15 4"
                                            stroke="currentColor"
                                            strokeDasharray={22}
                                            strokeDashoffset={66}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </span>
                                <span
                                    id=":r12:"
                                    className="relative text-foreground select-none transition-colors-opacity before:transition-width motion-reduce:transition-none text-small"
                                >
                                    Remember me
                                </span>
                            </label>
                            <a
                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                                href="#"
                                tabIndex={0}
                                role="link"
                            >
                                Forgot password?
                            </a>
                        </div>
                       
                        <button
                            className="z-0 group rounded relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 h-8 gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover min-w-[10rem] mt-0 sm:mt-[1.35rem] bg-[#F80263] text-white font-semibold text-base"
                            type="button"
                        >
                            Login
                        </button>
                        <p className=" w-full max-w-full h-fit flex items-center justify-center text-[#A1A1A7] text-sm my-2  ">
                            OR
                        </p>
                        <div className=" flex w-full max-w-full items-center justify-center gap-3 ">
                            <button
                                className="group relative inline-flex items-center justify-center 
             box-border appearance-none select-none font-normal 
             subpixel-antialiased overflow-hidden outline-none 
             border-[#F80263] border-2 text-small gap-2 rounded-small 
             transition-transform-colors-opacity bg-transparent 
             min-w-10 w-10 h-10 p-2 rounded"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={2443}
                                    height={2500}
                                    preserveAspectRatio="xMidYMid"
                                    viewBox="0 0 256 262"
                                    id="google"
                                    aria-hidden="true"
                                    focusable="false"
                                    tabIndex={-1}
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                    />
                                    <path
                                        fill="#EB4335"
                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                    />
                                </svg>
                            </button>
                            <button
                                className="group relative inline-flex items-center justify-center 
             box-border appearance-none select-none font-normal 
             subpixel-antialiased overflow-hidden outline-none 
             border-[#F80263] border-2 text-small gap-2 rounded-small 
             transition-transform-colors-opacity bg-transparent 
             min-w-10 w-10 h-10 p-2 rounded"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    viewBox="0 0 24 24"
                                    id="facebook-logo"
                                    aria-hidden="true"
                                    focusable="false"
                                    tabIndex={-1}
                                >
                                    <path
                                        fill="#3b5999"
                                        d="m21 0h-18c-1.655 0-3 1.345-3 3v18c0 1.654 1.345 3 3 3h18c1.654 0 3-1.346 3-3v-18c0-1.655-1.346-3-3-3z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="m16.5 12v-3c0-.828.672-.75 1.5-.75h1.5v-3.75h-3c-2.486 0-4.5 2.014-4.5 4.5v3h-3v3.75h3v8.25h4.5v-8.25h2.25l1.5-3.75z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="group relative inline-flex items-center justify-center 
             box-border appearance-none select-none font-normal 
             subpixel-antialiased overflow-hidden outline-none 
             border-[#F80263] border-2 text-small gap-2 rounded-small 
             transition-transform-colors-opacity bg-transparent 
             min-w-10 w-10 h-10 p-2 rounded"
                                type="button"
                            >
                                <img
                                    alt="yahoo Logo"
                                    loading="lazy"
                                    decoding="async"
                                    className="object-cover"
                                    src={yahoo}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </button>

                            <span
                                aria-hidden="true"
                                className="w-px h-px block"
                                style={{ marginLeft: "0.25rem", marginTop: "3rem" }}
                            />
                        </div>
                    </form>
                    <p className=" w-full max-w-full  flex items-center justify-center text-[#A1A1A7] text-sm leading-4  my-0">
                        OR
                    </p>
                    <button
                        className="z-0 group rounded relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 h-8 gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover min-w-[10rem] mt-0 sm:mt-[1.35rem] bg-[#F80263] text-white font-semibold text-base w-25 mx-auto"
                        type="button"
                    >
                        Login with OTP
                    </button>
                    <div className=" w-full h-fit mt-8 flex justify-center items-center ">
                        New to Sukhvivah{" "}
                        <Link className='text-dark text-decoration-none' to='/signup'>
                        <button
                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 max-h-[4vh] font-bold"
                            type="button"
                        >
                            Sign Up
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
                <div
                    style={{
                        border: 0,
                        clip: "rect(0px, 0px, 0px, 0px)",
                        clipPath: "inset(50%)",
                        height: 1,
                        margin: "-1px",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        width: 1,
                        whiteSpace: "nowrap"
                    }}
                >
                    <button
                        id="react-aria3331944935-:r13:"
                        aria-label="Dismiss"
                        tabIndex={-1}
                        style={{ width: 1, height: 1 }}
                    />
                </div>
            </section>
        </div>

    )
}

export default Login