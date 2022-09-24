export const ShirtIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg width={width} height={height} className={className} viewBox="0 0 20 20">
        <defs>
            <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                <stop offset="0%" stopColor="#F81212"></stop>
                <stop offset="100%" stopColor="red"></stop>
            </linearGradient>
            <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                <stop offset="0%" stopColor="#00F"></stop>
                <stop offset="100%" stopColor="#0031FF"></stop>
            </linearGradient>
            <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                <stop offset="0%" stopColor="#FFA600"></stop>
                <stop offset="100%" stopColor="orange"></stop>
            </linearGradient>
            <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                <stop offset="0%" stopColor="#13EFEC"></stop>
                <stop offset="100%" stopColor="#00E8DF"></stop>
            </linearGradient>
            <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
            </filter>
            <filter
                id="301mo6jeah"
                width="312.7%"
                height="312.7%"
                x="-106.4%"
                y="-106.4%"
                filterUnits="objectBoundingBox"
            >
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
            </filter>
            <filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
            </filter>
            <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
            </filter>
            <path
                id="qtpqrj1oda"
                d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
            ></path>
            <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
            <path
                id="2eiwxjmc7m"
                d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
            ></path>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(2 3)">
            <mask id="tinejqaasb" fill="#fff">
                <use xlinkHref="#qtpqrj1oda"></use>
            </mask>
            <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
            <g mask="url(#tinejqaasb)">
                <g transform="translate(-2 -3)">
                    <mask id="uf3ckvfvpf" fill="#fff">
                        <use xlinkHref="#jggzvnjgfc"></use>
                    </mask>
                    <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
                    <circle
                        cx="8.9"
                        cy="6.8"
                        r="9"
                        fill="url(#j32lhg93hd)"
                        filter="url(#4a7imk8mze)"
                        mask="url(#uf3ckvfvpf)"
                    ></circle>
                    <circle
                        cx="9.3"
                        cy="13.7"
                        r="5.5"
                        fill="url(#hjoavsus6g)"
                        filter="url(#301mo6jeah)"
                        mask="url(#uf3ckvfvpf)"
                    ></circle>
                    <circle
                        cx="15.9"
                        cy="6.9"
                        r="6"
                        fill="url(#la1y5u3dvi)"
                        filter="url(#b2zvzgq7fj)"
                        mask="url(#uf3ckvfvpf)"
                    ></circle>
                    <circle
                        cx="16.4"
                        cy="17.7"
                        r="7.5"
                        fill="url(#2dsmrlvdik)"
                        filter="url(#a1wq161tvl)"
                        mask="url(#uf3ckvfvpf)"
                    ></circle>
                </g>
            </g>
            <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
        </g>
    </svg>
);

export const UploadIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
    </svg>
);

export const DiamondIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M507.9 196.4l-104-153.8C399.4 35.95 391.1 32 384 32H127.1C120 32 112.6 35.95 108.1 42.56l-103.1 153.8c-6.312 9.297-5.281 21.72 2.406 29.89l231.1 246.2C243.1 477.3 249.4 480 256 480s12.94-2.734 17.47-7.547l232-246.2C513.2 218.1 514.2 205.7 507.9 196.4zM382.5 96.59L446.1 192h-140.1L382.5 96.59zM256 178.9L177.6 80h156.7L256 178.9zM129.5 96.59L205.1 192H65.04L129.5 96.59zM256 421L85.42 240h341.2L256 421z" />
    </svg>
);

export const GearIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
    </svg>
);

export const BanIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
    </svg>
);

export const QualityIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
    >
        <path d="M64 64C28.7 64 0 92.7 0 128v80c26.5 0 48 21.5 48 48s-21.5 48-48 48v80c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V304c-26.5 0-48-21.5-48-48s21.5-48 48-48V128c0-35.3-28.7-64-64-64H64zm64 96l0 192H448V160H128zm-32 0c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
);

export const PlayCircleIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
    </svg>
);

export const ChevronRightIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
    >
        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
);

export const CircleExclamationIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
    </svg>
);
export const PhoneIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
    </svg>
);

export const RectangleADIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
    >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z" />
    </svg>
);

export const FileIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
    >
        <path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z" />
    </svg>
);

export const SecurityIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
    </svg>
);
