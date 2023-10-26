import { TILE_SIZE_VW } from "../../engine";

import styles from "./styles.module.css";

export const Explosive = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: `${1 * TILE_SIZE_VW}vw`,
        height: `${1 * TILE_SIZE_VW}vw`,
        bottom: `${TILE_SIZE_VW * 0.0625}vw`,
      }}
      className={[styles.hot, styles.container, styles.blow].join(" ")}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.jelly}
      >
        <ellipse cx="32" cy="33.747" rx="31.2467" ry="29.0618" fill="#ff8c00" />
        <path
          d="M30.5308 35.611C30.0817 37.2871 28.9181 38.6981 27.296 39.5337C25.6739 40.3694 23.7261 40.5611 21.8812 40.0668C20.0363 39.5724 18.4454 38.4325 17.4584 36.8978C16.4714 35.363 16.1692 33.5592 16.6184 31.8831L20.7921 33.0015C20.6125 33.6719 20.7333 34.3934 21.1281 35.0073C21.5229 35.6212 22.1593 36.0772 22.8972 36.2749C23.6352 36.4727 24.4143 36.396 25.0632 36.0617C25.712 35.7275 26.1774 35.163 26.3571 34.4926L30.5308 35.611Z"
          fill="currentColor"
        />
        <path
          d="M47.3817 31.8831C47.8308 33.5592 47.5286 35.363 46.5416 36.8978C45.5546 38.4325 43.9637 39.5724 42.1188 40.0668C40.2739 40.5611 38.3261 40.3694 36.704 39.5338C35.0819 38.6981 33.9183 37.2871 33.4692 35.611L37.6429 34.4926C37.8226 35.163 38.288 35.7275 38.9369 36.0617C39.5857 36.396 40.3648 36.4727 41.1028 36.2749C41.8407 36.0772 42.4771 35.6212 42.8719 35.0073C43.2667 34.3934 43.3876 33.6719 43.2079 33.0015L47.3817 31.8831Z"
          fill="currentColor"
        />
        <path
          d="M17.435 47.5663L23.1454 51.1208L27.166 47.5663L31.7693 51.1208L37.0718 47.5663L40.6845 51.1208L46.3367 47.5663"
          stroke="currentColor"
          strokeWidth="5"
        />
        <ellipse cx="32" cy="14.3511" rx="14.3367" ry="9.023" fill="#ff8c00" />
        <ellipse
          cx="32.0001"
          cy="16.6835"
          rx="9.88331"
          ry="6.22021"
          fill="currentColor"
        />
        <g className={styles.knot}>
          <path
            d="M28.4402 11.8646C28.4402 10.2078 29.7834 8.86462 31.4402 8.86462H32.5598C34.2166 8.86462 35.5598 10.2078 35.5598 11.8646V20.9037C35.5598 22.0083 34.6643 22.9037 33.5598 22.9037H30.4402C29.3356 22.9037 28.4402 22.0083 28.4402 20.9037V11.8646Z"
            fill="url(#paint0_linear_4_162)"
          />
          <ellipse
            cx="32"
            cy="10.3208"
            rx="2.45079"
            ry="1.14935"
            fill="white"
          />
          <ellipse
            cx="32"
            cy="5.31714"
            rx="2.61351"
            ry="5.31714"
            fill="#FFEC3D"
          />
          <ellipse cx="32" cy="8.35526" rx="1.3266" ry="2.69894" fill="white" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_4_162"
            x1="32"
            y1="8.86462"
            x2="32"
            y2="22.9037"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CDCDCD" />
            <stop offset="1" stopColor="#CDCDCD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
