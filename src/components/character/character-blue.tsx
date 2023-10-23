import { CharacterState } from ".";
import styles from "./styles.module.css";

export const CharacterBlue = ({ state }: { state: CharacterState }) => {
  if (state === "stand") {
    return (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect x="39" y="52" width="48" height="59" rx="24" fill="#2128BE" />
          <g className={styles.bounce}>
            <rect x="33" width="62" height="69" rx="31" fill="#3037DE" />
            <path
              d="M92.5 34C93.3536 34 94.1988 34.1811 94.9874 34.5328C95.7761 34.8846 96.4926 35.4002 97.0962 36.0503C97.6998 36.7003 98.1786 37.4719 98.5052 38.3212C98.8319 39.1705 99 40.0807 99 41C99 41.9193 98.8319 42.8295 98.5052 43.6788C98.1786 44.5281 97.6998 45.2997 97.0962 45.9497C96.4926 46.5998 95.7761 47.1154 94.9874 47.4672C94.1988 47.8189 93.3536 48 92.5 48L92.5 41L92.5 34Z"
              fill="#F8B5A0"
            />
            <rect x="34" y="3" width="60" height="75" rx="30" fill="#F8B5A0" />
            <path
              d="M35.5 48C34.6464 48 33.8012 47.8189 33.0126 47.4672C32.2239 47.1154 31.5074 46.5998 30.9038 45.9497C30.3002 45.2997 29.8214 44.5281 29.4948 43.6788C29.1681 42.8295 29 41.9193 29 41C29 40.0807 29.1681 39.1705 29.4948 38.3212C29.8214 37.4719 30.3002 36.7003 30.9038 36.0503C31.5074 35.4002 32.2239 34.8846 33.0126 34.5328C33.8012 34.1811 34.6464 34 35.5 34L35.5 41L35.5 48Z"
              fill="#F8B5A0"
            />
            <rect x="50" y="34" width="10" height="13" rx="5" fill="white" />
            <rect x="52" y="36" width="6" height="9" rx="3" fill="#3037DE" />
            <rect x="70" y="34" width="10" height="13" rx="5" fill="white" />
            <rect x="72" y="36" width="6" height="9" rx="3" fill="#3037DE" />
            <path
              d="M76 53.5C76 54.6162 75.7284 55.7215 75.2007 56.7528C74.6731 57.7841 73.8996 58.7211 72.9246 59.5104C71.9496 60.2997 70.7921 60.9258 69.5182 61.353C68.2443 61.7801 66.8789 62 65.5 62C64.1211 62 62.7557 61.7801 61.4818 61.353C60.2079 60.9258 59.0504 60.2997 58.0754 59.5104C57.1004 58.7211 56.3269 57.7841 55.7993 56.7528C55.2716 55.7215 55 54.6162 55 53.5L65.5 53.5H76Z"
              fill="#9C5742"
            />
            <path
              d="M65 53.5C65 53.8283 64.9224 54.1534 64.7716 54.4567C64.6209 54.76 64.3999 55.0356 64.1213 55.2678C63.8427 55.4999 63.512 55.6841 63.148 55.8097C62.7841 55.9353 62.394 56 62 56C61.606 56 61.2159 55.9353 60.8519 55.8097C60.488 55.6841 60.1573 55.4999 59.8787 55.2678C59.6001 55.0356 59.3791 54.76 59.2284 54.4567C59.0776 54.1534 59 53.8283 59 53.5L62 53.5H65Z"
              fill="white"
            />
            <path
              d="M73 53.5C73 53.8283 72.9224 54.1534 72.7716 54.4567C72.6209 54.76 72.3999 55.0356 72.1213 55.2678C71.8427 55.4999 71.512 55.6841 71.148 55.8097C70.7841 55.9353 70.394 56 70 56C69.606 56 69.2159 55.9353 68.8519 55.8097C68.488 55.6841 68.1573 55.4999 67.8787 55.2678C67.6001 55.0356 67.3791 54.76 67.2284 54.4567C67.0776 54.1534 67 53.8283 67 53.5L70 53.5H73Z"
              fill="white"
            />
            <path
              d="M79 2.5C79 3.35359 78.7284 4.19883 78.2007 4.98744C77.6731 5.77606 76.8996 6.49261 75.9246 7.09619C74.9496 7.69977 73.7921 8.17856 72.5182 8.50522C71.2443 8.83187 69.8789 9 68.5 9C67.1211 9 65.7557 8.83187 64.4818 8.50522C63.2079 8.17856 62.0504 7.69977 61.0754 7.09619C60.1004 6.49261 59.3269 5.77606 58.7993 4.98744C58.2716 4.19882 58 3.35359 58 2.5L68.5 2.5L79 2.5Z"
              fill="#9C5742"
            />
          </g>
          <path
            d="M46.2661 128.16C46.2452 127.071 46.4387 125.99 46.8358 124.976C47.2329 123.963 47.8258 123.037 48.5805 122.253C49.3352 121.469 50.237 120.841 51.2344 120.405C52.2318 119.969 53.3053 119.734 54.3936 119.713C55.4819 119.692 56.5636 119.886 57.5771 120.283C58.5905 120.68 59.5159 121.273 60.3002 122.027C61.0846 122.782 61.7126 123.684 62.1484 124.681C62.5843 125.679 62.8194 126.752 62.8404 127.84L54.5532 128L46.2661 128.16Z"
            fill="black"
          />
          <path
            d="M46.0452 123.364C44.9001 120.855 44.2603 118.145 44.1624 115.389C44.0645 112.633 44.5104 109.885 45.4746 107.301C46.4388 104.718 47.9025 102.349 49.7821 100.331C51.6617 98.313 53.9203 96.685 56.4291 95.5398L60.7891 105.092C59.5347 105.664 58.4054 106.478 57.4656 107.487C56.5258 108.496 55.794 109.681 55.3119 110.973C54.8298 112.264 54.6068 113.639 54.6558 115.017C54.7047 116.395 55.0246 117.749 55.5972 119.004L46.0452 123.364Z"
            fill="#2128BE"
          />
          <path
            d="M80.707 128.16C80.728 127.071 80.5344 125.99 80.1373 124.976C79.7402 123.963 79.1474 123.037 78.3927 122.253C77.638 121.469 76.7362 120.841 75.7387 120.405C74.7413 119.969 73.6678 119.734 72.5796 119.713C71.4913 119.692 70.4095 119.886 69.3961 120.283C68.3826 120.68 67.4573 121.273 66.6729 122.027C65.8886 122.782 65.2605 123.684 64.8247 124.681C64.3889 125.679 64.1538 126.752 64.1328 127.84L72.4199 128L80.707 128.16Z"
            fill="black"
          />
          <path
            d="M80.9279 123.364C82.0731 120.855 82.7129 118.145 82.8108 115.389C82.9087 112.633 82.4628 109.885 81.4985 107.301C80.5343 104.718 79.0706 102.349 77.1911 100.331C75.3115 98.313 73.0528 96.685 70.5441 95.5398L66.184 105.092C67.4384 105.664 68.5677 106.478 69.5075 107.487C70.4473 108.496 71.1792 109.681 71.6613 110.973C72.1434 112.264 72.3663 113.639 72.3174 115.017C72.2684 116.395 71.9485 117.749 71.376 119.004L80.9279 123.364Z"
            fill="#2128BE"
          />
          <g className={styles.bounce}>
            <path
              d="M44.2074 109.825C41.4572 110.031 38.6936 109.692 36.0744 108.829C33.4551 107.966 31.0314 106.596 28.9417 104.796C26.852 102.997 25.1372 100.803 23.8952 98.3411C22.6532 95.8788 21.9084 93.1961 21.7032 90.4459C21.498 87.6958 21.8366 84.9322 22.6994 82.3129C23.5623 79.6936 24.9326 77.27 26.7322 75.1803C28.5317 73.0906 30.7253 71.3758 33.1875 70.1338C35.6498 68.8918 38.3326 68.147 41.0827 67.9418L41.8638 78.4127C40.4888 78.5153 39.1474 78.8877 37.9163 79.5087C36.6851 80.1297 35.5884 80.9871 34.6886 82.0319C33.7888 83.0768 33.1037 84.2886 32.6722 85.5983C32.2408 86.9079 32.0715 88.2897 32.1741 89.6648C32.2767 91.0398 32.6491 92.3812 33.2701 93.6124C33.8911 94.8435 34.7485 95.9402 35.7933 96.84C36.8382 97.7398 38.05 98.425 39.3597 98.8564C40.6693 99.2878 42.0511 99.4571 43.4262 99.3545L44.2074 109.825Z"
              fill="#3037DE"
            />
            <circle
              cx="45.6379"
              cy="104.26"
              r="6"
              transform="rotate(-49.2666 45.6379 104.26)"
              fill="#F8B5A0"
            />
            <path
              d="M82.313 110.825C85.0631 111.031 87.8267 110.692 90.446 109.829C93.0653 108.966 95.4889 107.596 97.5787 105.796C99.6684 103.997 101.383 101.803 102.625 99.3411C103.867 96.8788 104.612 94.1961 104.817 91.4459C105.022 88.6958 104.684 85.9322 103.821 83.3129C102.958 80.6936 101.588 78.27 99.7881 76.1803C97.9886 74.0906 95.7951 72.3758 93.3328 71.1338C90.8705 69.8918 88.1878 69.147 85.4376 68.9418L84.6565 79.4127C86.0315 79.5153 87.3729 79.8877 88.6041 80.5087C89.8352 81.1297 90.9319 81.9871 91.8317 83.0319C92.7315 84.0768 93.4167 85.2886 93.8481 86.5983C94.2795 87.9079 94.4488 89.2897 94.3462 90.6648C94.2436 92.0398 93.8712 93.3812 93.2502 94.6124C92.6292 95.8435 91.7718 96.9402 90.727 97.84C89.6821 98.7398 88.4703 99.425 87.1606 99.8564C85.851 100.288 84.4692 100.457 83.0941 100.355L82.313 110.825Z"
              fill="#3037DE"
            />
            <circle
              cx="6"
              cy="6"
              r="6"
              transform="matrix(-0.65254 -0.757754 -0.757754 0.65254 89.3442 105.891)"
              fill="#F8B5A0"
            />
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g className={`${styles.swing} ${styles.reverse}`}>
          <path
            d="M116.873 84.1865C115.494 86.5748 113.658 88.6681 111.471 90.347C109.283 92.0258 106.786 93.2572 104.122 93.971C101.458 94.6847 98.6796 94.8668 95.9455 94.5069C93.2113 94.1469 90.5748 93.2519 88.1865 91.8731C85.7982 90.4942 83.7049 88.6584 82.0261 86.4705C80.3473 84.2826 79.1159 81.7855 78.4021 79.1217C77.6883 76.4579 77.5062 73.6796 77.8662 70.9455C78.2262 68.2113 79.1211 65.5748 80.5 63.1865L89.5933 68.4365C88.9038 69.6307 88.4563 70.9489 88.2764 72.316C88.0964 73.6831 88.1874 75.0722 88.5443 76.4041C88.9012 77.736 89.5169 78.9846 90.3563 80.0785C91.1957 81.1725 92.2424 82.0904 93.4365 82.7798C94.6307 83.4692 95.9489 83.9167 97.316 84.0967C98.6831 84.2767 100.072 84.1856 101.404 83.8288C102.736 83.4719 103.985 82.8562 105.079 82.0167C106.172 81.1773 107.09 80.1307 107.78 78.9365L116.873 84.1865Z"
            fill="#3037DE"
          />
          <circle cx="113" cy="80" r="6" fill="#F8B5A0" />
        </g>

        <rect x="36" y="52" width="48" height="59" rx="24" fill="#2128BE" />

        <g className={styles.bounce}>
          <rect x="29" y="1" width="62" height="69" rx="31" fill="#3037DE" />
          <path
            d="M95.5 34C96.3536 34 97.1988 34.1811 97.9874 34.5328C98.7761 34.8846 99.4926 35.4002 100.096 36.0503C100.7 36.7003 101.179 37.4719 101.505 38.3212C101.832 39.1705 102 40.0807 102 41C102 41.9193 101.832 42.8295 101.505 43.6788C101.179 44.5281 100.7 45.2997 100.096 45.9497C99.4926 46.5998 98.7761 47.1154 97.9874 47.4672C97.1988 47.8189 96.3536 48 95.5 48L95.5 41L95.5 34Z"
            fill="#F8B5A0"
          />
          <rect x="39" y="3" width="60" height="75" rx="30" fill="#F8B5A0" />
          <path
            d="M40.5 48C39.6464 48 38.8012 47.8189 38.0126 47.4672C37.2239 47.1154 36.5074 46.5998 35.9038 45.9497C35.3002 45.2997 34.8214 44.5281 34.4948 43.6788C34.1681 42.8295 34 41.9193 34 41C34 40.0807 34.1681 39.1705 34.4948 38.3212C34.8214 37.4719 35.3002 36.7003 35.9038 36.0503C36.5074 35.4002 37.2239 34.8846 38.0126 34.5328C38.8012 34.1811 39.6464 34 40.5 34L40.5 41L40.5 48Z"
            fill="#F8B5A0"
          />
          <g className={`${styles.bounce} ${""}`}>
            <rect x="67" y="34" width="10" height="13" rx="5" fill="white" />
            <rect x="70" y="36" width="6" height="9" rx="3" fill="#3037DE" />
            <rect x="87" y="34" width="10" height="13" rx="5" fill="white" />
            <rect x="90" y="36" width="6" height="9" rx="3" fill="#3037DE" />
            <g>
              <path
                d="M91 53.5C91 54.6162 90.7284 55.7215 90.2007 56.7528C89.6731 57.7841 88.8996 58.7211 87.9246 59.5104C86.9496 60.2997 85.7921 60.9258 84.5182 61.353C83.2443 61.7801 81.8789 62 80.5 62C79.1211 62 77.7557 61.7801 76.4818 61.353C75.2079 60.9258 74.0504 60.2997 73.0754 59.5104C72.1004 58.7211 71.3269 57.7841 70.7993 56.7528C70.2716 55.7215 70 54.6162 70 53.5L80.5 53.5H91Z"
                fill="#9C5742"
              />
              <path
                d="M80 53.5C80 53.8283 79.9224 54.1534 79.7716 54.4567C79.6209 54.76 79.3999 55.0356 79.1213 55.2678C78.8427 55.4999 78.512 55.6841 78.148 55.8097C77.7841 55.9353 77.394 56 77 56C76.606 56 76.2159 55.9353 75.8519 55.8097C75.488 55.6841 75.1573 55.4999 74.8787 55.2678C74.6001 55.0356 74.3791 54.76 74.2284 54.4567C74.0776 54.1534 74 53.8283 74 53.5L77 53.5H80Z"
                fill="white"
              />
              <path
                d="M88 53.5C88 53.8283 87.9224 54.1534 87.7716 54.4567C87.6209 54.76 87.3999 55.0356 87.1213 55.2678C86.8427 55.4999 86.512 55.6841 86.148 55.8097C85.7841 55.9353 85.394 56 85 56C84.606 56 84.2159 55.9353 83.8519 55.8097C83.488 55.6841 83.1573 55.4999 82.8787 55.2678C82.6001 55.0356 82.3791 54.76 82.2284 54.4567C82.0776 54.1534 82 53.8283 82 53.5L85 53.5H88Z"
                fill="white"
              />
            </g>
          </g>
          {/* mouth */}

          <path
            d="M87 2.5C87 3.35359 86.7284 4.19883 86.2007 4.98744C85.6731 5.77606 84.8996 6.49261 83.9246 7.09619C82.9496 7.69977 81.7921 8.17856 80.5182 8.50522C79.2443 8.83187 77.8789 9 76.5 9C75.1211 9 73.7557 8.83187 72.4818 8.50522C71.2079 8.17856 70.0504 7.69977 69.0754 7.09619C68.1004 6.49261 67.3269 5.77606 66.7993 4.98744C66.2716 4.19882 66 3.35359 66 2.5L76.5 2.5L87 2.5Z"
            fill="#9C5742"
          />
        </g>
        <g className={styles.swing}>
          <path
            d="M35.5007 102.178C36.0449 103.121 36.3982 104.161 36.5403 105.241C36.6823 106.32 36.6105 107.416 36.3287 108.468C36.047 109.519 35.561 110.505 34.8983 111.368C34.2357 112.232 33.4095 112.956 32.4668 113.501C31.5242 114.045 30.4836 114.398 29.4044 114.54C28.3252 114.682 27.2286 114.61 26.1773 114.329C25.1259 114.047 24.1403 113.561 23.2767 112.898C22.4131 112.236 21.6886 111.41 21.1443 110.467L28.3225 106.323L35.5007 102.178Z"
            fill="black"
          />
          <path
            d="M34.2845 113.004C36.9483 113.718 39.7265 113.9 42.4607 113.54C45.1949 113.18 47.8314 112.285 50.2197 110.906C52.608 109.527 54.7013 107.692 56.3801 105.504C58.0589 103.316 59.2903 100.819 60.0041 98.1548L49.8619 95.4372C49.505 96.7691 48.8893 98.0177 48.0499 99.1116C47.2105 100.206 46.1638 101.123 44.9697 101.813C43.7755 102.502 42.4573 102.95 41.0902 103.13C39.7231 103.31 38.334 103.219 37.0021 102.862L34.2845 113.004Z"
            fill="#2128BE"
          />
        </g>

        <g className={`${styles.swing} ${""}`}>
          <path
            d="M18.8492 101.548C16.8992 99.5977 15.3524 97.2827 14.297 94.7348C13.2417 92.187 12.6985 89.4562 12.6985 86.6985C12.6985 83.9407 13.2417 81.21 14.297 78.6621C15.3524 76.1143 16.8992 73.7993 18.8492 71.8492C20.7993 69.8992 23.1143 68.3524 25.6621 67.297C28.21 66.2417 30.9407 65.6985 33.6985 65.6985C36.4562 65.6985 39.187 66.2417 41.7348 67.297C44.2827 68.3524 46.5977 69.8992 48.5477 71.8492L41.1231 79.2739C40.1481 78.2989 38.9906 77.5254 37.7167 76.9978C36.4427 76.4701 35.0774 76.1985 33.6985 76.1985C32.3196 76.1985 30.9542 76.4701 29.6803 76.9978C28.4064 77.5254 27.2489 78.2988 26.2739 79.2739C25.2989 80.2489 24.5254 81.4064 23.9978 82.6803C23.4701 83.9542 23.1985 85.3196 23.1985 86.6985C23.1985 88.0774 23.4701 89.4427 23.9978 90.7167C24.5254 91.9906 25.2989 93.1481 26.2739 94.1231L18.8492 101.548Z"
            fill="#3037DE"
          />
          <circle cx="24" cy="99" r="6" fill="#F8B5A0" />
        </g>

        <g className={`${styles.swing} ${styles.reverse}`}>
          <path
            d="M82.0062 126.158C80.9548 125.876 79.9692 125.39 79.1057 124.727C78.2421 124.065 77.5175 123.238 76.9733 122.296C76.4291 121.353 76.0758 120.313 75.9337 119.233C75.7917 118.154 75.8635 117.058 76.1453 116.006C76.427 114.955 76.913 113.969 77.5757 113.106C78.2383 112.242 79.0645 111.518 80.0072 110.973C80.9498 110.429 81.9904 110.076 83.0696 109.934C84.1488 109.792 85.2454 109.864 86.2968 110.145L84.1515 118.151L82.0062 126.158Z"
            fill="black"
          />
          <path
            d="M78 123C75.2422 123 72.5115 122.457 69.9636 121.401C67.4158 120.346 65.1008 118.799 63.1508 116.849C61.2007 114.899 59.6539 112.584 58.5985 110.036C57.5432 107.489 57 104.758 57 102L67.5 102C67.5 103.379 67.7716 104.744 68.2993 106.018C68.8269 107.292 69.6004 108.45 70.5754 109.425C71.5504 110.4 72.7079 111.173 73.9818 111.701C75.2557 112.228 76.6211 112.5 78 112.5L78 123Z"
            fill="#2128BE"
          />
        </g>
      </g>
    </svg>
  );
};
