import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Maximize } from "react-feather";

interface Props {
    src: string;
    poster: string;
}

export default function VideoPlayer({ src, poster }: Props) {
    const player = useRef<HTMLVideoElement>(null);
    const preview = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        isPlaying ? player?.current?.play() : player?.current?.pause();
    }, [isPlaying, player]);

    return (
        <div className="relative w-full">
            <div className="mb-6 aspect-video max-w-[calc(100vw_-_25px_*_2)] max-h-[calc(100vh_-_80px_-_28px_-_47px)]" />

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden group">
                {/* VIDEO */}
                <div
                    className="absolute top-0 left-0 w-full h-[calc(100%_-_28px)] overflow-hidden cursor-pointer z-0"
                    onClick={togglePlay}>
                    <video
                        ref={player}
                        src={src}
                        poster={poster}
                        className="absolute top-0 left-0 w-full h-full outline-none"
                        width={1920}
                        height={1080} />

                    {!isPlaying && (<div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30 transition-opacity duration-300 pointer-events-none" />)}
                </div>

                {/* CONTROLS */}
                <div className="absolute bottom-0 left-0 w-full h-[70px] bg-[#0b0b0b] translate-y-[42px] group-hover:translate-y-0 transition-transform duration-[600ms] delay-300 z-20">
                    {/* BOTTOM */}
                    <div className="absolute flex justify-between items-stretch bottom-0 left-0 w-full h-[50px]">
                        {/* LEFT */}
                        <div className="flex justify-start items-center">
                            <button className="relative w-[45px] h-full cursor-pointer" onClick={togglePlay}>
                                {isPlaying ?
                                    <span className="absolute top-[calc(50%_-_8px)] left-[15px] w-[16px] h-[16px]">
                                        <span className="left-0 absolute top-0 w-[6px] h-full bg-white" />
                                        <span className="right-0 absolute top-0 w-[6px] h-full bg-white" />
                                    </span>
                                    :
                                    <span className="absolute top-[calc(50%_-_10px)] left-[15px] w-[17px] h-[20px]">
                                        <svg
                                            version="1.1"
                                            id="Calque_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            className="fill-white"
                                            viewBox="0 0 10.5 11.8"
                                            xmlSpace="preserve">
                                            <path
                                                className="st0"
                                                d="M0,1.5c0-1.2,1.3-1.9,2.3-1.3l7.5,4.4c1,0.6,1,2,0,2.6l-7.5,4.4c-1,0.6-2.3-0.1-2.3-1.3V1.5z" />
                                        </svg>
                                    </span>
                                }
                            </button>

                            <span className="relative mr-3 text-lg font-medium whitespace-nowrap cursor-pointer">
                                <span className="inline-block">0:01</span>
                                <span className="inline-block opacity-30 mx-1">/</span>
                                <span className="inline-block opacity-30">420:69</span>
                                <span></span>
                            </span>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-end items-center gap-4">
                            <div className="relative w-[160px] h-full">
                                <button className="flex items-center justify-center w-8 h-full cursor-pointer">
                                    <div className="w-[25px] h-[17px]">
                                        <svg
                                            id="Calque_1"
                                            data-name="Calque 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24.67"
                                            height="16.53"
                                            viewBox="0 0 24.67 16.53"
                                            className="fill-white">
                                            <path
                                                className="wave"
                                                d="M19.37,14.49a1.5,1.5,0,0,1,0-3,2.58,2.58,0,0,0,2.3-2.78,2.57,2.57,0,0,0-2.3-2.77,1.5,1.5,0,1,1,0-3,5.56,5.56,0,0,1,5.3,5.77A5.56,5.56,0,0,1,19.37,14.49Z" />
                                            <path d="M15.09.3A2,2,0,0,0,13.14.22l-6,3c-.07,0-.14.1-.21.15H1.5A1.5,1.5,0,0,0,0,4.91v6.82a1.5,1.5,0,0,0,1.5,1.5H7a1.19,1.19,0,0,0,.23.16l6,2.93A2,2,0,0,0,16,14.53V2A2,2,0,0,0,15.09.3ZM3,6.41H6.07v3.82H3Zm10,6.51L9.11,11V5.64l3.93-2Z" />
                                        </svg>
                                    </div>
                                </button>

                                <div className="absolute top-0 right-0 w-[calc(100%_-_32px)] h-full cursor-pointer">
                                    <div className="absolute top-[calc(50%_-_3px)] left-2 right-3 h-[6px] bg-[#313131] rounded-[3px] overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-[3px] -translate-x-1/2" />
                                    </div>
                                </div>
                            </div>

                            <button className="relative cursor-pointer right-[15px]">
                                <Maximize />
                            </button>
                        </div>
                    </div>

                    {/* SEEKBAR */}
                    <div
                        className="absolute top-0 w-full h-[28px] cursor-pointer"
                        onMouseEnter={() => setShowPreview(true)}
                        onMouseLeave={() => setShowPreview(false)}>
                        <div className="absolute top-[11px] left-[10px] right-[10px] h-[6px] rounded-[3px] bg-[#313131]">
                            {/* PREVIEW */}
                            <div
                                className={classNames("absolute bottom-[calc(100%_+_22px)] left-0 h-[28px] translate-x-[500px]", showPreview ? "opacity-100" : "opacity-0")}
                                ref={preview}>
                                <div className="absolute bottom-0 left-0 min-w-[192px] -translate-x-1/2 bg-primary-500 rounded-[10px] shadow-md pointer-events-none">
                                    <img
                                        src="images/thumbnail.jpg"
                                        className="relative w-full h-[108px] overflow-hidden shadow-sm object-cover rounded-t-[10px]" />

                                    <div className="relative flex min-h-[28px] text-center">
                                        <div className="p-2 w-[calc(100%_-_65px)] leading-5">
                                            First Scene
                                        </div>

                                        <div className="relative w-[65px] h-auto bg-[rgba(0,0,0,0.133)]">
                                            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full">
                                                5:35
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BUFFER INDICATOR */}
                            <canvas
                                className="absolute top-0 left-0 w-full h-full"
                                width={989}
                                height={6} />

                            {/* SEPERATORS */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                <div className="absolute top-0 w-[7px] h-[6px] left-[5%] bg-[url('/images/VideoPlayerSeperator.png')] bg-cover" />
                                <div className="absolute top-0 w-[7px] h-[6px] left-[15%] bg-[url('/images/VideoPlayerSeperator.png')] bg-cover" />
                                <div className="absolute top-0 w-[7px] h-[6px] left-[50%] bg-[url('/images/VideoPlayerSeperator.png')] bg-cover" />
                                <div className="absolute top-0 w-[7px] h-[6px] left-[85%] bg-[url('/images/VideoPlayerSeperator.png')] bg-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOGO */}
                {!isPlaying && (
                    <div className="absolute top-[calc(50%_-_34px_/_1.5)] left-[calc(50%_-_38px_/_2)] w-[34px] h-[38px] pointer-events-none">
                        <svg
                            version="1.1"
                            id="Calque_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            className="fill-white"
                            viewBox="0 0 58.5 66.6"
                            xmlSpace="preserve">
                            <path d="M23.1,55.7l16.1-9.3c0,0,0,0,0,0c1.1-0.7,1.8-1.9,1.8-3.1l0.1-19.1L23.1,34.4V55.7z" />
                            <path d="M21.3,10L2.9,20.5l18,10.2l18.4-10.5c0,0,0,0-0.1,0l-17.4-10C21.7,10.1,21.5,10.1,21.3,10z" />
                            <path />
                            <path d="M56.8,30.4l-11.4-6.6l-0.1,19.2l11.5-6.7c1-0.6,1.7-1.7,1.7-2.9C58.5,32.1,57.9,31,56.8,30.4z" />
                            <path d="M0,50.7v12.6c0,1.2,0.6,2.3,1.7,2.9c0.5,0.3,1.1,0.5,1.7,0.5c0.6,0,1.2-0.2,1.7-0.5l10.4-6L0,50.7z" />
                            <path d="M16.4,7L5.1,0.5c-1-0.6-2.3-0.6-3.4,0C0.6,1.1,0,2.2,0,3.4v13.2L16.4,7z" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}