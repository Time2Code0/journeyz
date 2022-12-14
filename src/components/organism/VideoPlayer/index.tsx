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
    const seekbar = useRef<HTMLDivElement>(null);
    const volume = useRef<HTMLDivElement>(null);
    const volumeProgress = useRef<HTMLDivElement>(null);
    const seekbarProgressCanvas = useRef<HTMLCanvasElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [duration, setDuration] = useState("");
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const [currentPreviewTime, setCurrentPreviewTime] = useState(formatTime(0));

    useEffect(() => {
        const duration = player?.current?.duration;
        if (duration == undefined) {
            return;
        }

        setDuration(formatTime(duration));
    }, [player?.current?.duration]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        isPlaying ? player?.current?.play() : player?.current?.pause();
    }, [isPlaying, player]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        if (player.current != null) {
            player.current.muted = isMuted;
        }
    }, [isMuted, player])

    const timeUpdated = () => {
        const currentTime = player?.current?.currentTime;
        if (currentTime != undefined) {
            setCurrentTime(formatTime(currentTime));
        }
    }

    const movePreview = (clientX: number) => {
        if (seekbar.current != null && preview.current != null && player.current != null) {
            const bounding = seekbar.current.getBoundingClientRect();
            const t = clientX - bounding.left;

            // TODO: Preview should stop at the left and right (so it does not vanish behind overflow hidden)
            preview.current.style.transform = `translateX(${t}px)`;

            // Set Preview Time
            setCurrentPreviewTime(formatTime(Math.min(Math.max(t / bounding.width, 0), 1) * player.current.duration));

            // TODO: Set Preview Secne Title and Image
        }
    }

    const onVolumeMouseMove = (event: any) => {
        setVolumeProgress(event.clientX);
    };

    const setVolumeProgress = (clientX: number) => {
        if (volumeProgress.current != null && volume.current != null && player.current != null) {
            const volumeBounding = volume.current.getBoundingClientRect();

            let t = (clientX - volumeBounding.left) / volumeBounding.width;
            t = Math.min(Math.max(t, 0), 1)
            player.current.volume = t;

            // Move Volume Progressbar
            volumeProgress.current.style.transform = `translateX(${100 * -(1 - t)}%)`
        }
    }

    const updateSeekbarProgressCanvas = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        const duration = player?.current?.duration || 0;

        if (player.current != null && seekbar.current != null && seekbarProgressCanvas.current != null) {
            const seekbarBounding = seekbar.current.getBoundingClientRect();

            const t = player.current.currentTime;
            const i = seekbarBounding.height / 2 * pixelRatio;
            const n = seekbarBounding.width * pixelRatio - 2 * i;

            const seekbarProgressCanvasContext = seekbarProgressCanvas.current.getContext('2d');
            if (seekbarProgressCanvasContext != null) {
                seekbarProgressCanvasContext.clearRect(0, 0, seekbarBounding.width * pixelRatio, seekbarBounding.height * pixelRatio);
                seekbarProgressCanvasContext.lineWidth = seekbarBounding.height * pixelRatio * 2; // 28px * 2
                seekbarProgressCanvasContext.lineCap = "round";
                seekbarProgressCanvasContext.strokeStyle = "#705df2";

                // Draw Buffer
                for (let e = 0; e < player.current.buffered.length; e++) {
                    const bufferStart = player.current.buffered.start(e) / duration;
                    const bufferEnd = player.current.buffered.end(e) / duration;

                    seekbarProgressCanvasContext.beginPath();
                    seekbarProgressCanvasContext.moveTo(i + bufferStart * n, i);
                    seekbarProgressCanvasContext.lineTo(i + bufferEnd * n, i);
                    seekbarProgressCanvasContext.stroke();
                }

                // Draw current Time
                if (!isNaN(player.current.duration) && player.current.duration !== 1 / 0) {
                    seekbarProgressCanvasContext.strokeStyle = "#ffffff";
                    seekbarProgressCanvasContext.beginPath();
                    // seekbarProgressCanvasContext.moveTo(i, i);
                    // seekbarProgressCanvasContext.lineTo(i + n * t / duration, i);
                    seekbarProgressCanvasContext.moveTo(i, i);
                    seekbarProgressCanvasContext.lineTo(i + n * t / duration, i);
                    seekbarProgressCanvasContext.stroke();

                    const e = 1 - player.current.duration / duration;
                    //!isNaN(e) && e > .1 && (this.$disabled.style.width = 100 * e + "%")
                }
            }
        }
    }

    useEffect(() => {
        if (seekbarProgressCanvas.current != null && seekbar.current != null) {
            const seekbarBounding = seekbar.current.getBoundingClientRect();
            const pixelRatio = window.devicePixelRatio || 1;

            seekbarProgressCanvas.current.width = seekbarBounding.width * pixelRatio;
            seekbarProgressCanvas.current.height = seekbarBounding.height * pixelRatio;
        }
    }, []);

    const seekbarSetTime = (e: number) => {
        if (seekbar.current != null && player.current != null) {
            const seekbarBounding = seekbar.current.getBoundingClientRect();

            let t = (e - seekbarBounding.left) / seekbarBounding.width;
            t = Math.min(Math.max(t, 0), 1);
            const i = t * player.current.duration;
            player.current.currentTime = i;
            updateSeekbarProgressCanvas();
        }
    }

    function formatTime(seconds: number) {
        let t = Math.round(seconds);
        const i = Math.floor(seconds / 3600);
        t -= 3600 * i;
        const n = Math.floor(t / 60);
        t -= 60 * n;
        const r = t;
        let s = [];
        return i && s.push(i),
            s.push(n),
            s.push(r),
            s = s.map((e, t) => 0 === t ? String(e) : String(e).padStart(2, "0")),
            s.join(":");
    }

    const seekbarMove = (clientX: number) => {
        seekbarSetTime(clientX);
        movePreview(clientX);
    };

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
                        onTimeUpdate={timeUpdated}
                        onProgress={updateSeekbarProgressCanvas}
                        onLoadedMetadata={() => {
                            updateSeekbarProgressCanvas();

                            // TODO: Get Duration from here instad of ueEffect
                        }}
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
                                <span className="inline-block">{currentTime}</span>
                                <span className="inline-block opacity-30 mx-1">/</span>
                                <span className="inline-block opacity-30">{duration}</span>
                                <span></span>
                            </span>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-end items-center gap-4">
                            <div className="relative w-[160px] h-full">
                                <button
                                    className="flex items-center justify-center w-8 h-full cursor-pointer"
                                    onClick={toggleMute}>
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
                                                className={classNames("transition-opacity", isMuted ? "opacity-30" : "")}
                                                d="M19.37,14.49a1.5,1.5,0,0,1,0-3,2.58,2.58,0,0,0,2.3-2.78,2.57,2.57,0,0,0-2.3-2.77,1.5,1.5,0,1,1,0-3,5.56,5.56,0,0,1,5.3,5.77A5.56,5.56,0,0,1,19.37,14.49Z" />
                                            <path d="M15.09.3A2,2,0,0,0,13.14.22l-6,3c-.07,0-.14.1-.21.15H1.5A1.5,1.5,0,0,0,0,4.91v6.82a1.5,1.5,0,0,0,1.5,1.5H7a1.19,1.19,0,0,0,.23.16l6,2.93A2,2,0,0,0,16,14.53V2A2,2,0,0,0,15.09.3ZM3,6.41H6.07v3.82H3Zm10,6.51L9.11,11V5.64l3.93-2Z" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    ref={volume}
                                    className="absolute top-0 right-0 w-[calc(100%_-_32px)] h-full cursor-pointer"
                                    onMouseDown={(e) => {
                                        setVolumeProgress(e.clientX);
                                        addEventListener("mousemove", onVolumeMouseMove);
                                        addEventListener("mouseup", () => removeEventListener("mousemove", onVolumeMouseMove), { once: !0 })
                                    }}
                                    onTouchMove={(e) => setVolumeProgress(e.touches[0].clientX)}
                                    onTouchStart={(e) => setVolumeProgress(e.touches[0].clientX)}
                                >
                                    <div className="absolute top-[calc(50%_-_3px)] left-2 right-3 h-[6px] bg-[#313131] rounded-[3px] overflow-hidden">
                                        <div ref={volumeProgress} className="absolute top-0 left-0 w-full h-full bg-white rounded-[3px]" />
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
                        ref={seekbar}
                        className="absolute top-0 w-full h-[28px] cursor-pointer"
                        onMouseEnter={() => setShowPreview(true)}
                        onMouseLeave={() => setShowPreview(false)}
                        onMouseDown={(e) => seekbarMove(e.clientX)}
                        onMouseMove={(e) => movePreview(e.clientX)}
                        onTouchMove={(e) => seekbarMove(e.touches[0].clientX)}
                        onTouchStart={(e) => seekbarMove(e.touches[0].clientX)}>
                        <div className="absolute top-[11px] left-[10px] right-[10px] h-[6px] rounded-[3px] bg-[#313131]">
                            {/* PREVIEW */}
                            <div
                                className={classNames("absolute bottom-[calc(100%_+_22px)] left-0 h-[28px]", showPreview ? "opacity-100" : "opacity-0")}
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
                                                {currentPreviewTime}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BUFFER INDICATOR */}
                            <canvas
                                ref={seekbarProgressCanvas}
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