import { CharacterState } from ".";
import styles from "./styles.module.css";

const idle = (
  <g>
    <path
      d="M80.707 128.16C80.728 127.071 80.5344 125.99 80.1373 124.976C79.7402 123.963 79.1474 123.037 78.3927 122.253C77.638 121.469 76.7362 120.841 75.7387 120.405C74.7413 119.969 73.6678 119.734 72.5796 119.713C71.4913 119.692 70.4095 119.886 69.3961 120.283C68.3826 120.68 67.4573 121.273 66.6729 122.027C65.8886 122.782 65.2605 123.684 64.8247 124.681C64.3889 125.679 64.1538 126.752 64.1328 127.84L72.4199 128L80.707 128.16Z"
      fill="black"
    />
    <path
      d="M80.9279 123.364C82.0731 120.855 82.7129 118.145 82.8108 115.389C82.9087 112.633 82.4628 109.885 81.4985 107.301C80.5343 104.718 79.0706 102.349 77.1911 100.331C75.3115 98.313 73.0528 96.685 70.5441 95.5398L66.184 105.092C67.4384 105.664 68.5677 106.478 69.5075 107.487C70.4473 108.496 71.1792 109.681 71.6613 110.973C72.1434 112.264 72.3663 113.639 72.3174 115.017C72.2684 116.395 71.9485 117.749 71.376 119.004L80.9279 123.364Z"
      fill="#F8B5A0"
    />
    <path
      d="M46.2661 128.16C46.2452 127.071 46.4387 125.99 46.8358 124.976C47.2329 123.963 47.8258 123.037 48.5805 122.253C49.3352 121.469 50.237 120.841 51.2344 120.405C52.2318 119.969 53.3053 119.734 54.3936 119.713C55.4819 119.692 56.5636 119.886 57.5771 120.283C58.5905 120.68 59.5159 121.273 60.3002 122.027C61.0846 122.782 61.7126 123.684 62.1484 124.681C62.5843 125.679 62.8194 126.752 62.8404 127.84L54.5532 128L46.2661 128.16Z"
      fill="black"
    />
    <path
      d="M46.0452 123.364C44.9001 120.855 44.2603 118.145 44.1624 115.389C44.0645 112.633 44.5104 109.885 45.4746 107.301C46.4388 104.718 47.9025 102.349 49.7821 100.331C51.6617 98.313 53.9203 96.685 56.4291 95.5398L60.7891 105.092C59.5347 105.664 58.4054 106.478 57.4656 107.487C56.5258 108.496 55.794 109.681 55.3119 110.973C54.8298 112.264 54.6068 113.639 54.6558 115.017C54.7047 116.395 55.0246 117.749 55.5972 119.004L46.0452 123.364Z"
      fill="#F8B5A0"
    />

    <g className={styles.bounce}>
      <ellipse
        cx="86.6743"
        cy="29.4067"
        rx="13.2007"
        ry="11.8879"
        transform="rotate(-91.9295 86.6743 29.4067)"
        fill="#9C5742"
      />
      <path
        d="M99.7435 76.1258C99.7435 66.1288 98.7931 56.2297 96.9466 46.9937C95.1001 37.7577 92.3936 29.3657 88.9816 22.2967C85.5697 15.2278 81.5191 9.62041 77.0612 5.79473C72.6032 1.96905 67.8253 -6.92839e-08 63 0C58.1748 6.92839e-08 53.3968 1.96905 48.9389 5.79473C44.481 9.62041 40.4304 15.2278 37.0185 22.2967C33.6065 29.3657 30.9 37.7577 29.0535 46.9937C27.2069 56.2297 26.2565 66.1288 26.2565 76.1258H99.7435Z"
        fill="#9C5742"
      />
      <path
        d="M39 76C39 62.7452 49.7452 52 63 52V52C76.2548 52 87 62.7452 87 76V108C87 109.657 85.6569 111 84 111H42C40.3431 111 39 109.657 39 108V76Z"
        fill="#AE0C0C"
      />
      <path
        d="M92.5 34C93.3536 34 94.1988 34.1811 94.9874 34.5328C95.7761 34.8846 96.4926 35.4002 97.0962 36.0503C97.6998 36.7003 98.1786 37.4719 98.5052 38.3212C98.8319 39.1705 99 40.0807 99 41C99 41.9193 98.8319 42.8295 98.5052 43.6788C98.1786 44.5281 97.6998 45.2997 97.0962 45.9497C96.4926 46.5998 95.7761 47.1154 94.9874 47.4672C94.1988 47.8189 93.3536 48 92.5 48L92.5 41L92.5 34Z"
        fill="#F8B5A0"
      />
      <rect x="34" y="3" width="60" height="75" rx="30" fill="#F8B5A0" />
      <path
        d="M35.5 48C34.6464 48 33.8012 47.8189 33.0126 47.4672C32.2239 47.1154 31.5074 46.5998 30.9038 45.9497C30.3002 45.2997 29.8214 44.5281 29.4948 43.6788C29.1681 42.8295 29 41.9193 29 41C29 40.0807 29.1681 39.1705 29.4948 38.3212C29.8214 37.4719 30.3002 36.7003 30.9038 36.0503C31.5074 35.4002 32.2239 34.8846 33.0126 34.5328C33.8012 34.1811 34.6464 34 35.5 34L35.5 41L35.5 48Z"
        fill="#F8B5A0"
      />
      <g>
        <rect x="50" y="34" width="10" height="13" rx="5" fill="white" />
        <rect x="52" y="36" width="6" height="9" rx="3" fill="#9C5742" />
        <rect x="70" y="34" width="10" height="13" rx="5" fill="white" />
        <rect x="72" y="36" width="6" height="9" rx="3" fill="#9C5742" />
        <path
          d="M76 53.5C76 54.6162 75.7284 55.7215 75.2007 56.7528C74.6731 57.7841 73.8996 58.7211 72.9246 59.5104C71.9496 60.2997 70.7921 60.9258 69.5182 61.353C68.2443 61.7801 66.8789 62 65.5 62C64.1211 62 62.7557 61.7801 61.4818 61.353C60.2079 60.9258 59.0504 60.2997 58.0754 59.5104C57.1004 58.7211 56.3269 57.7841 55.7993 56.7528C55.2716 55.7215 55 54.6162 55 53.5L65.5 53.5H76Z"
          fill="#AE0C0C"
        />
        <path
          d="M65 53.5C65 53.8283 64.9224 54.1534 64.7716 54.4567C64.6209 54.76 64.3999 55.0356 64.1213 55.2678C63.8427 55.4999 63.512 55.6841 63.148 55.8097C62.7841 55.9353 62.394 56 62 56C61.606 56 61.2159 55.9353 60.8519 55.8097C60.488 55.6841 60.1573 55.4999 59.8787 55.2678C59.6001 55.0356 59.3791 54.76 59.2284 54.4567C59.0776 54.1534 59 53.8283 59 53.5L62 53.5H65Z"
          fill="white"
        />
        <path
          d="M73 53.5C73 53.8283 72.9224 54.1534 72.7716 54.4567C72.6209 54.76 72.3999 55.0356 72.1213 55.2678C71.8427 55.4999 71.512 55.6841 71.148 55.8097C70.7841 55.9353 70.394 56 70 56C69.606 56 69.2159 55.9353 68.8519 55.8097C68.488 55.6841 68.1573 55.4999 67.8787 55.2678C67.6001 55.0356 67.3791 54.76 67.2284 54.4567C67.0776 54.1534 67 53.8283 67 53.5L70 53.5H73Z"
          fill="white"
        />
      </g>

      <g className={styles.bounce}>
        <path
          d="M44.2074 109.825C41.4572 110.031 38.6936 109.692 36.0744 108.829C33.4551 107.966 31.0314 106.596 28.9417 104.796C26.852 102.997 25.1372 100.803 23.8952 98.3411C22.6532 95.8788 21.9084 93.1961 21.7032 90.4459C21.498 87.6958 21.8366 84.9322 22.6994 82.3129C23.5623 79.6936 24.9326 77.27 26.7322 75.1803C28.5317 73.0906 30.7253 71.3758 33.1875 70.1338C35.6498 68.8918 38.3326 68.147 41.0827 67.9418L41.8638 78.4127C40.4888 78.5153 39.1474 78.8877 37.9163 79.5087C36.6851 80.1297 35.5884 80.9871 34.6886 82.0319C33.7888 83.0768 33.1037 84.2886 32.6722 85.5983C32.2408 86.9079 32.0715 88.2897 32.1741 89.6648C32.2767 91.0398 32.6491 92.3812 33.2701 93.6124C33.8911 94.8435 34.7485 95.9402 35.7933 96.84C36.8382 97.7398 38.05 98.425 39.3597 98.8564C40.6693 99.2878 42.0511 99.4571 43.4262 99.3545L44.2074 109.825Z"
          fill="#DE3030"
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
          fill="#DE3030"
        />
        <circle
          cx="6"
          cy="6"
          r="6"
          transform="matrix(-0.65254 -0.757754 -0.757754 0.65254 89.3442 105.891)"
          fill="#F8B5A0"
        />
      </g>

      <path
        d="M79 2.5C79 3.35359 78.7284 4.19883 78.2007 4.98744C77.6731 5.77606 76.8996 6.49261 75.9246 7.09619C74.9496 7.69977 73.7921 8.17856 72.5182 8.50522C71.2443 8.83187 69.8789 9 68.5 9C67.1211 9 65.7557 8.83187 64.4818 8.50522C63.2079 8.17856 62.0504 7.69977 61.0754 7.09619C60.1004 6.49261 59.3269 5.77606 58.7993 4.98744C58.2716 4.19882 58 3.35359 58 2.5L68.5 2.5L79 2.5Z"
        fill="#9C5742"
      />

      <ellipse
        cx="79.1289"
        cy="14.4947"
        rx="14.7436"
        ry="12.7202"
        transform="rotate(5.84697 79.1289 14.4947)"
        fill="#9C5742"
      />
      <ellipse
        cx="52.3748"
        cy="13.0458"
        rx="18.486"
        ry="12.7202"
        transform="rotate(-9.52861 52.3748 13.0458)"
        fill="#9C5742"
      />
      <ellipse
        cx="38.7306"
        cy="19.7908"
        rx="14.7436"
        ry="7.34086"
        transform="rotate(-73.3346 38.7306 19.7908)"
        fill="#9C5742"
      />
    </g>
  </g>
);

const frozen = (
  <>
    <g clipPath="url(#clip0_26_330)">
      <path
        className={styles.swing}
        d="M93.5957 79.1258C93.5957 69.1288 92.8301 59.2297 91.3428 49.9937C89.8555 40.7577 87.6755 32.3657 84.9273 25.2967C82.1791 18.2278 78.9165 12.6204 75.3258 8.79473C71.7351 4.96905 67.8866 3 64 3C60.1135 3 56.265 4.96905 52.6742 8.79473C49.0835 12.6204 45.8209 18.2278 43.0727 25.2967C40.3245 32.3657 38.1445 40.7577 36.6572 49.9937C35.1699 59.2297 34.4044 69.1288 34.4044 79.1258H93.5957Z"
        fill="#9C5742"
      />

      <path
        d="M46.2661 128.16C46.2452 127.071 46.4387 125.99 46.8358 124.976C47.2329 123.963 47.8258 123.037 48.5805 122.253C49.3352 121.469 50.237 120.841 51.2344 120.405C52.2318 119.969 53.3053 119.734 54.3936 119.713C55.4819 119.692 56.5636 119.886 57.5771 120.283C58.5905 120.68 59.5159 121.273 60.3002 122.027C61.0846 122.782 61.7126 123.684 62.1484 124.681C62.5843 125.679 62.8194 126.752 62.8404 127.84L54.5532 128L46.2661 128.16Z"
        fill="black"
      />
      <path
        d="M46.0452 123.364C44.9001 120.855 44.2603 118.145 44.1624 115.389C44.0645 112.633 44.5104 109.885 45.4746 107.301C46.4388 104.718 47.9025 102.349 49.7821 100.331C51.6617 98.313 53.9203 96.685 56.4291 95.5398L60.7891 105.092C59.5347 105.664 58.4054 106.478 57.4656 107.487C56.5258 108.496 55.794 109.681 55.3119 110.973C54.8298 112.264 54.6068 113.639 54.6558 115.017C54.7047 116.395 55.0246 117.749 55.5972 119.004L46.0452 123.364Z"
        fill="#F8B5A0"
      />

      <path
        d="M80.707 128.16C80.728 127.071 80.5344 125.99 80.1373 124.976C79.7402 123.963 79.1474 123.037 78.3927 122.253C77.638 121.469 76.7362 120.841 75.7387 120.405C74.7413 119.969 73.6678 119.734 72.5796 119.713C71.4913 119.692 70.4095 119.886 69.3961 120.283C68.3826 120.68 67.4573 121.273 66.6729 122.027C65.8886 122.782 65.2605 123.684 64.8247 124.681C64.3889 125.679 64.1538 126.752 64.1328 127.84L72.4199 128L80.707 128.16Z"
        fill="black"
      />
      <path
        d="M80.9279 123.364C82.0731 120.855 82.7129 118.145 82.8108 115.389C82.9087 112.633 82.4628 109.885 81.4985 107.301C80.5343 104.718 79.0706 102.349 77.1911 100.331C75.3115 98.313 73.0528 96.685 70.5441 95.5398L66.184 105.092C67.4384 105.664 68.5677 106.478 69.5075 107.487C70.4473 108.496 71.1792 109.681 71.6613 110.973C72.1434 112.264 72.3663 113.639 72.3174 115.017C72.2684 116.395 71.9485 117.749 71.376 119.004L80.9279 123.364Z"
        fill="#F8B5A0"
      />

      <path
        d="M39 76C39 62.7452 49.7452 52 63 52V52C76.2548 52 87 62.7452 87 76V109C87 110.105 86.1046 111 85 111H41C39.8954 111 39 110.105 39 109V76Z"
        fill="#AE0C0C"
      />
      <g className={styles.swing}>
        <path
          d="M92.5 37C93.3536 37 94.1988 37.1811 94.9874 37.5328C95.7761 37.8846 96.4926 38.4002 97.0962 39.0503C97.6998 39.7003 98.1786 40.4719 98.5052 41.3212C98.8319 42.1705 99 43.0807 99 44C99 44.9193 98.8319 45.8295 98.5052 46.6788C98.1786 47.5281 97.6998 48.2997 97.0962 48.9497C96.4926 49.5998 95.7761 50.1154 94.9874 50.4672C94.1988 50.8189 93.3536 51 92.5 51L92.5 44L92.5 37Z"
          fill="#F8B5A0"
        />
        <rect x="34" y="6" width="60" height="75" rx="30" fill="#F8B5A0" />
        <path
          d="M35.5 51C34.6464 51 33.8012 50.8189 33.0126 50.4672C32.2239 50.1154 31.5074 49.5998 30.9038 48.9497C30.3002 48.2997 29.8214 47.5281 29.4948 46.6788C29.1681 45.8295 29 44.9193 29 44C29 43.0807 29.1681 42.1705 29.4948 41.3212C29.8214 40.4719 30.3002 39.7003 30.9038 39.0502C31.5074 38.4002 32.2239 37.8846 33.0126 37.5328C33.8012 37.1811 34.6464 37 35.5 37L35.5 44L35.5 51Z"
          fill="#F8B5A0"
        />
        <path
          d="M55 68.8704C55 67.7542 55.2716 66.6489 55.7993 65.6176C56.3269 64.5863 57.1004 63.6493 58.0754 62.86C59.0504 62.0707 60.2079 61.4446 61.4818 61.0174C62.7557 60.5903 64.1211 60.3704 65.5 60.3704C66.8789 60.3704 68.2443 60.5903 69.5182 61.0174C70.7921 61.4446 71.9496 62.0707 72.9246 62.86C73.8996 63.6493 74.6731 64.5863 75.2007 65.6176C75.7284 66.6489 76 67.7542 76 68.8704L65.5 68.8704L55 68.8704Z"
          fill="#AE0C0C"
        />
        <path
          d="M63.7093 0.314973C42.1128 0.488932 24.7365 16.9132 24.8983 36.9995C24.9693 45.8094 28.4023 53.8606 34.0567 60.1091C37.3505 55.4765 49.466 51.9646 63.9359 51.848C78.6537 51.7295 90.9926 55.1624 94.1096 59.8632C99.7902 53.4896 103.178 45.2908 103.106 36.3695C102.944 16.2832 85.3058 0.141013 63.7093 0.314973Z"
          fill="#D2741D"
        />
        <path
          d="M65.4339 46.0859C65.957 44.0689 67.3406 42.3632 69.2804 41.3441C71.2201 40.325 73.5571 40.0759 75.7773 40.6517C77.9974 41.2275 79.9189 42.5809 81.1189 44.4143C82.3189 46.2476 82.6992 48.4107 82.1761 50.4277L77.1534 49.1252C77.3627 48.3184 77.2106 47.4531 76.7306 46.7198C76.2506 45.9864 75.482 45.4451 74.5939 45.2148C73.7059 44.9845 72.7711 45.0841 71.9952 45.4917C71.2193 45.8994 70.6658 46.5816 70.4566 47.3884L65.4339 46.0859Z"
          fill="#7D3822"
        />
        <path
          d="M45.2355 50.7253C44.68 48.717 45.0254 46.548 46.1958 44.6956C47.3661 42.8431 49.2654 41.4589 51.476 40.8474C53.6866 40.236 56.0273 40.4474 57.9833 41.4351C59.9392 42.4228 61.3501 44.106 61.9056 46.1143L56.9046 47.4976C56.6824 46.6943 56.118 46.021 55.3356 45.6259C54.5533 45.2308 53.617 45.1463 52.7327 45.3909C51.8485 45.6354 51.0888 46.1891 50.6206 46.9301C50.1525 47.6711 50.0143 48.5387 50.2365 49.342L45.2355 50.7253Z"
          fill="#7D3822"
        />
        <path
          d="M81.0437 31.6032L74.1523 27.3903L69.3587 31.6973L63.7967 27.4737L57.4638 31.7931L53.0913 27.5599L46.3386 31.8828"
          stroke="#7D3822"
          strokeWidth="5"
        />
        <path
          d="M104.101 50.3691C106.288 52.049 108.123 54.1431 109.5 56.532C110.878 58.9209 111.772 61.5578 112.131 64.2922C112.489 67.0265 112.306 69.8047 111.591 72.4682C110.876 75.1316 109.644 77.6282 107.964 79.8153C106.284 82.0024 104.19 83.8373 101.801 85.215C99.4119 86.5928 96.775 87.4866 94.0407 87.8453C91.3064 88.204 88.5281 88.0206 85.8647 87.3057C83.2012 86.5907 80.7047 85.3581 78.5175 83.6783L84.9134 75.351C86.0069 76.1909 87.2552 76.8072 88.5869 77.1647C89.9186 77.5222 91.3078 77.6139 92.6749 77.4345C94.0421 77.2551 95.3605 76.8083 96.555 76.1194C97.7495 75.4305 98.7965 74.5131 99.6364 73.4195C100.476 72.326 101.093 71.0777 101.45 69.7459C101.808 68.4142 101.899 67.0251 101.72 65.6579C101.541 64.2908 101.094 62.9723 100.405 61.7779C99.7159 60.5834 98.7985 59.5363 97.705 58.6964L104.101 50.3691Z"
          fill="#DE3030"
        />
        <circle
          cx="99.3251"
          cy="53.5652"
          r="6"
          transform="rotate(172.526 99.3251 53.5652)"
          fill="#ED997E"
        />
        <path
          d="M27.6113 47.7457C25.0544 48.7789 22.726 50.3056 20.7591 52.2386C18.7922 54.1716 17.2253 56.4731 16.1479 59.0117C15.0704 61.5502 14.5035 64.2762 14.4796 67.0338C14.4556 69.7915 14.9751 72.5269 16.0082 75.0838C17.0414 77.6407 18.5681 79.9691 20.5011 81.936C22.4341 83.9029 24.7356 85.4698 27.2742 86.5472C29.8128 87.6246 32.5387 88.1915 35.2963 88.2155C38.054 88.2394 40.7894 87.72 43.3463 86.6868L39.4125 76.9516C38.1341 77.4681 36.7664 77.7279 35.3876 77.7159C34.0087 77.7039 32.6458 77.4205 31.3765 76.8817C30.1072 76.343 28.9565 75.5596 27.9899 74.5761C27.0234 73.5927 26.2601 72.4285 25.7435 71.15C25.2269 69.8716 24.9672 68.5039 24.9792 67.1251C24.9912 65.7462 25.2746 64.3833 25.8133 63.114C26.352 61.8447 27.1355 60.6939 28.1189 59.7274C29.1024 58.7609 30.2666 57.9976 31.545 57.481L27.6113 47.7457Z"
          fill="#DE3030"
        />
        <circle
          cx="6"
          cy="6"
          r="6"
          transform="matrix(0.92052 0.390695 0.390695 -0.92052 23.49 55.2823)"
          fill="#ED997E"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_26_330">
        <rect width="128" height="128" fill="white" />
      </clipPath>
    </defs>
  </>
);

const run = (
  <g>
    <g className={`${styles.swing} ${styles.reverse}`}>
      <path
        d="M79.3895 123.575C78.4469 123.031 77.6207 122.306 76.958 121.443C76.2954 120.579 75.8094 119.594 75.5276 118.542C75.2459 117.491 75.174 116.394 75.3161 115.315C75.4582 114.236 75.8114 113.195 76.3557 112.253C76.8999 111.31 77.6245 110.484 78.4881 109.821C79.3516 109.158 80.3372 108.672 81.3886 108.391C82.44 108.109 83.5366 108.037 84.6158 108.179C85.6949 108.321 86.7355 108.675 87.6782 109.219L83.5339 116.397L79.3895 123.575Z"
        fill="black"
      />
      <path
        d="M77.4419 121.645C75.0589 121.645 72.6992 121.176 70.4976 120.264C68.296 119.352 66.2955 118.015 64.6105 116.33C62.9254 114.645 61.5888 112.645 60.6768 110.443C59.7649 108.241 59.2955 105.882 59.2955 103.499L68.3687 103.499C68.3687 104.69 68.6034 105.87 69.0594 106.971C69.5153 108.072 70.1837 109.072 71.0262 109.914C71.8687 110.757 72.8689 111.425 73.9697 111.881C75.0705 112.337 76.2504 112.572 77.4419 112.572L77.4419 121.645Z"
        fill="#F8B5A0"
      />
    </g>
    <g className={`${styles.swing} ${""}`}>
      <path
        d="M32.2524 114.548C34.5025 115.151 36.8493 115.305 39.1589 115.001C41.4684 114.696 43.6955 113.94 45.7128 112.776C47.7302 111.611 49.4985 110.06 50.9166 108.212C52.3347 106.364 53.3749 104.255 53.9778 102.005L45.4106 99.7091C45.1092 100.834 44.5891 101.889 43.88 102.813C43.171 103.737 42.2869 104.512 41.2782 105.095C40.2695 105.677 39.1559 106.055 38.0012 106.207C36.8464 106.359 35.673 106.282 34.5479 105.981L32.2524 114.548Z"
        fill="#F8B5A0"
      />
      <path
        d="M33.6188 106.178C34.163 107.121 34.5163 108.161 34.6584 109.241C34.8004 110.32 34.7286 111.416 34.4468 112.468C34.1651 113.519 33.6791 114.505 33.0165 115.368C32.3538 116.232 31.5276 116.956 30.5849 117.501C29.6423 118.045 28.6017 118.398 27.5225 118.54C26.4433 118.682 25.3467 118.61 24.2954 118.329C23.244 118.047 22.2584 117.561 21.3948 116.898C20.5313 116.236 19.8067 115.41 19.2624 114.467L26.4406 110.323L33.6188 106.178Z"
        fill="black"
      />
    </g>
    <g className={`${styles.swing} ${styles.reverse}`}>
      <path
        d="M19.4523 104.29C17.5022 102.34 15.9554 100.025 14.9 97.4768C13.8447 94.929 13.3015 92.1982 13.3015 89.4405C13.3015 86.6827 13.8447 83.952 14.9 81.4041C15.9554 78.8563 17.5022 76.5413 19.4523 74.5912C21.4023 72.6412 23.7173 71.0944 26.2652 70.039C28.813 68.9837 31.5438 68.4405 34.3015 68.4405C37.0593 68.4405 39.79 68.9837 42.3379 70.039C44.8857 71.0944 47.2007 72.6412 49.1508 74.5912L41.7261 82.0159C40.7511 81.0409 39.5936 80.2674 38.3197 79.7398C37.0458 79.2121 35.6804 78.9405 34.3015 78.9405C32.9226 78.9405 31.5573 79.2121 30.2833 79.7398C29.0094 80.2674 27.8519 81.0409 26.8769 82.0159C25.9019 82.9909 25.1285 84.1484 24.6008 85.4223C24.0731 86.6962 23.8015 88.0616 23.8015 89.4405C23.8015 90.8194 24.0731 92.1847 24.6008 93.4587C25.1285 94.7326 25.9019 95.8901 26.8769 96.8651L19.4523 104.29Z"
        fill="#DE3030"
      />
      <circle cx="24.5815" cy="99.0744" r="6" fill="#F8B5A0" />
    </g>
    <g className={`${styles.swing} ${""}`}>
      <path
        d="M116.873 84.1865C115.494 86.5748 113.658 88.6681 111.471 90.347C109.283 92.0258 106.786 93.2572 104.122 93.971C101.458 94.6847 98.6796 94.8668 95.9455 94.5069C93.2113 94.1469 90.5748 93.2519 88.1865 91.8731C85.7982 90.4942 83.7049 88.6584 82.0261 86.4705C80.3473 84.2826 79.1159 81.7855 78.4021 79.1217C77.6883 76.4579 77.5062 73.6796 77.8662 70.9455C78.2262 68.2113 79.1211 65.5748 80.5 63.1865L89.5933 68.4365C88.9038 69.6307 88.4563 70.9489 88.2764 72.316C88.0964 73.6831 88.1874 75.0722 88.5443 76.4041C88.9012 77.736 89.5169 78.9846 90.3563 80.0785C91.1957 81.1725 92.2424 82.0904 93.4365 82.7798C94.6307 83.4692 95.9489 83.9167 97.316 84.0967C98.6831 84.2767 100.072 84.1856 101.404 83.8288C102.736 83.4719 103.985 82.8562 105.079 82.0167C106.172 81.1773 107.09 80.1307 107.78 78.9365L116.873 84.1865Z"
        fill="#DE3030"
      />
      <circle cx="110.286" cy="81.4489" r="6" fill="#F8B5A0" />
    </g>

    <g className={`${styles.bounce}`}>
      <path
        className={`${styles.bounce}`}
        d="M36.1515 69C36.1515 55.7452 46.8967 45 60.1515 45V45C73.4063 45 84.1515 55.7452 84.1515 69V104H36.1515V69Z"
        fill="#AE0C0C"
      />

      <path
        d="M99.5443 69.5921C99.3757 61.1083 98.2585 52.7263 96.2565 44.9249C94.2546 37.1236 91.407 30.0555 87.8765 24.1243C84.346 18.1931 80.2016 13.5149 75.68 10.3569C71.1584 7.19881 66.3482 5.62275 61.5239 5.71864C56.6997 5.81454 51.9558 7.58052 47.5633 10.9158C43.1708 14.251 39.2156 19.0902 35.9236 25.157C32.6316 31.2238 30.0672 38.3995 28.3768 46.2743C26.6865 54.149 25.9032 62.5687 26.0719 71.0526L62.8081 70.3224L99.5443 69.5921Z"
        fill="#9C5742"
      />
      <ellipse
        cx="91.7143"
        cy="30.8554"
        rx="13.2007"
        ry="11.8879"
        transform="rotate(-91.9295 91.7143 30.8554)"
        fill="#9C5742"
      />
      <path
        d="M96.2143 37.4489C97.0679 37.4489 97.9131 37.63 98.7017 37.9818C99.4904 38.3335 100.207 38.8492 100.81 39.4992C101.414 40.1492 101.893 40.9209 102.22 41.7701C102.546 42.6194 102.714 43.5297 102.714 44.4489C102.714 45.3682 102.546 46.2784 102.22 47.1277C101.893 47.977 101.414 48.7487 100.81 49.3987C100.207 50.0487 99.4904 50.5643 98.7017 50.9161C97.9131 51.2679 97.0679 51.4489 96.2143 51.4489L96.2143 44.4489L96.2143 37.4489Z"
        fill="#F8B5A0"
      />
      <rect
        x="39.7143"
        y="6.44891"
        width="60"
        height="75"
        rx="30"
        fill="#F8B5A0"
      />
      <path
        d="M41.2143 51.4489C40.3607 51.4489 39.5155 51.2679 38.7269 50.9161C37.9382 50.5643 37.2217 50.0487 36.6181 49.3987C36.0145 48.7487 35.5357 47.977 35.2091 47.1277C34.8824 46.2784 34.7143 45.3682 34.7143 44.4489C34.7143 43.5297 34.8824 42.6194 35.2091 41.7701C35.5357 40.9208 36.0145 40.1492 36.6181 39.4992C37.2217 38.8492 37.9382 38.3335 38.7269 37.9818C39.5155 37.63 40.3607 37.4489 41.2143 37.4489L41.2143 44.4489L41.2143 51.4489Z"
        fill="#F8B5A0"
      />
      <g className={`${styles.bounce}`}>
        <rect
          x="67.7143"
          y="36.449"
          width="10"
          height="13"
          rx="5"
          fill="white"
        />
        <rect
          x="70.7143"
          y="38.449"
          width="6"
          height="9"
          rx="3"
          fill="#9C5742"
        />
        <rect
          x="87.7143"
          y="36.449"
          width="10"
          height="13"
          rx="5"
          fill="white"
        />
        <rect
          x="90.7143"
          y="38.449"
          width="6"
          height="9"
          rx="3"
          fill="#9C5742"
        />
        <path
          d="M91.7143 55.949C91.7143 57.0652 91.4427 58.1705 90.915 59.2018C90.3873 60.2331 89.6139 61.1701 88.6389 61.9594C87.6639 62.7487 86.5064 63.3748 85.2324 63.802C83.9585 64.2291 82.5931 64.449 81.2143 64.449C79.8354 64.449 78.47 64.2291 77.1961 63.802C75.9222 63.3748 74.7647 62.7487 73.7896 61.9594C72.8146 61.1701 72.0412 60.2331 71.5135 59.2018C70.9859 58.1705 70.7143 57.0652 70.7143 55.949L81.2143 55.949H91.7143Z"
          fill="#AE0C0C"
        />
        <path
          d="M80.7143 55.949C80.7143 56.2773 80.6367 56.6024 80.4859 56.9057C80.3351 57.209 80.1142 57.4846 79.8356 57.7168C79.557 57.9489 79.2263 58.1331 78.8623 58.2587C78.4983 58.3843 78.1082 58.449 77.7143 58.449C77.3203 58.449 76.9302 58.3843 76.5662 58.2587C76.2022 58.1331 75.8715 57.9489 75.5929 57.7168C75.3144 57.4846 75.0934 57.209 74.9426 56.9057C74.7919 56.6024 74.7143 56.2773 74.7143 55.949L77.7143 55.949H80.7143Z"
          fill="white"
        />
        <path
          d="M88.7143 55.949C88.7143 56.2773 88.6367 56.6024 88.4859 56.9057C88.3351 57.209 88.1142 57.4846 87.8356 57.7168C87.557 57.9489 87.2263 58.1331 86.8623 58.2587C86.4983 58.3843 86.1082 58.449 85.7143 58.449C85.3203 58.449 84.9302 58.3843 84.5662 58.2587C84.2022 58.1331 83.8715 57.9489 83.5929 57.7168C83.3144 57.4846 83.0934 57.209 82.9426 56.9057C82.7919 56.6024 82.7143 56.2773 82.7143 55.949L85.7143 55.949H88.7143Z"
          fill="white"
        />
      </g>
      <ellipse
        cx="48.139"
        cy="27.044"
        rx="14.7436"
        ry="9.48232"
        transform="rotate(-73.3346 48.139 27.044)"
        fill="#9C5742"
      />
      <ellipse
        cx="67.3777"
        cy="15.6048"
        rx="18.486"
        ry="12.7202"
        transform="rotate(-9.52861 67.3777 15.6048)"
        fill="#9C5742"
      />
      <ellipse
        cx="84.8659"
        cy="15.6048"
        rx="14.7436"
        ry="12.7202"
        transform="rotate(5.84697 84.8659 15.6048)"
        fill="#9C5742"
      />
    </g>
  </g>
);

const win = (
  <g>
    <g className={`${styles.bounce}  ${styles.reverse}`}>
      <path
        d="M13.1882 55.5C11.8094 57.8883 10.9144 60.5248 10.5544 63.2589C10.1945 65.9931 10.3766 68.7714 11.0903 71.4352C11.8041 74.099 13.0355 76.5961 14.7144 78.784C16.3932 80.9719 18.4865 82.8076 20.8748 84.1865C23.2631 85.5654 25.8996 86.4604 28.6337 86.8203C31.3679 87.1803 34.1462 86.9982 36.81 86.2844C39.4738 85.5707 41.9709 84.3392 44.1588 82.6604C46.3466 80.9816 48.1824 78.8883 49.5613 76.5L40.468 71.25C39.7786 72.4441 38.8607 73.4908 37.7668 74.3302C36.6728 75.1696 35.4243 75.7853 34.0924 76.1422C32.7605 76.4991 31.3713 76.5901 30.0043 76.4102C28.6372 76.2302 27.3189 75.7827 26.1248 75.0933C24.9306 74.4038 23.884 73.4859 23.0446 72.392C22.2052 71.2981 21.5894 70.0495 21.2326 68.7176C20.8757 67.3857 20.7846 65.9966 20.9646 64.6295C21.1446 63.2624 21.5921 61.9441 22.2815 60.75L13.1882 55.5Z"
        fill="#DE3030"
      />
      <circle
        cx="6"
        cy="6"
        r="6"
        transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 14.5803 63.9763)"
        fill="#F8B5A0"
      />
      <path
        d="M114.187 55.5C115.565 57.8883 116.46 60.5248 116.82 63.2589C117.18 65.9931 116.998 68.7714 116.284 71.4352C115.571 74.099 114.339 76.5961 112.66 78.784C110.982 80.9719 108.888 82.8077 106.5 84.1865C104.112 85.5654 101.475 86.4604 98.7411 86.8203C96.0069 87.1803 93.2286 86.9982 90.5648 86.2844C87.901 85.5707 85.4039 84.3392 83.216 82.6604C81.0281 80.9816 79.1924 78.8883 77.8135 76.5L86.9067 71.25C87.5962 72.4441 88.5141 73.4908 89.608 74.3302C90.7019 75.1696 91.9505 75.7853 93.2824 76.1422C94.6143 76.4991 96.0034 76.5901 97.3705 76.4102C98.7376 76.2302 100.056 75.7827 101.25 75.0933C102.444 74.4038 103.491 73.4859 104.33 72.392C105.17 71.2981 105.785 70.0495 106.142 68.7176C106.499 67.3857 106.59 65.9966 106.41 64.6295C106.23 63.2624 105.783 61.9441 105.093 60.75L114.187 55.5Z"
        fill="#DE3030"
      />
      <circle
        cx="108.552"
        cy="56.6278"
        r="6"
        transform="rotate(-165 108.552 56.6278)"
        fill="#F8B5A0"
      />
    </g>
    <path
      d="M80.707 128.16C80.728 127.071 80.5344 125.99 80.1373 124.976C79.7402 123.963 79.1474 123.037 78.3927 122.253C77.638 121.469 76.7362 120.841 75.7387 120.405C74.7413 119.969 73.6678 119.734 72.5796 119.713C71.4913 119.692 70.4095 119.886 69.3961 120.283C68.3826 120.68 67.4573 121.273 66.6729 122.027C65.8886 122.782 65.2605 123.684 64.8247 124.681C64.3889 125.679 64.1538 126.752 64.1328 127.84L72.4199 128L80.707 128.16Z"
      fill="black"
    />
    <path
      d="M80.9279 123.364C82.0731 120.855 82.7129 118.145 82.8108 115.389C82.9087 112.633 82.4628 109.885 81.4985 107.301C80.5343 104.718 79.0706 102.349 77.1911 100.331C75.3115 98.313 73.0528 96.685 70.5441 95.5398L66.184 105.092C67.4384 105.664 68.5677 106.478 69.5075 107.487C70.4473 108.496 71.1792 109.681 71.6613 110.973C72.1434 112.264 72.3663 113.639 72.3174 115.017C72.2684 116.395 71.9485 117.749 71.376 119.004L80.9279 123.364Z"
      fill="#F8B5A0"
    />
    <path
      d="M46.2661 128.16C46.2452 127.071 46.4387 125.99 46.8358 124.976C47.2329 123.963 47.8258 123.037 48.5805 122.253C49.3352 121.469 50.237 120.841 51.2344 120.405C52.2318 119.969 53.3053 119.734 54.3936 119.713C55.4819 119.692 56.5636 119.886 57.5771 120.283C58.5905 120.68 59.5159 121.273 60.3002 122.027C61.0846 122.782 61.7126 123.684 62.1484 124.681C62.5843 125.679 62.8194 126.752 62.8404 127.84L54.5532 128L46.2661 128.16Z"
      fill="black"
    />
    <path
      d="M46.0452 123.364C44.9001 120.855 44.2603 118.145 44.1624 115.389C44.0645 112.633 44.5104 109.885 45.4746 107.301C46.4388 104.718 47.9025 102.349 49.7821 100.331C51.6617 98.313 53.9203 96.685 56.4291 95.5398L60.7891 105.092C59.5347 105.664 58.4054 106.478 57.4656 107.487C56.5258 108.496 55.794 109.681 55.3119 110.973C54.8298 112.264 54.6068 113.639 54.6558 115.017C54.7047 116.395 55.0246 117.749 55.5972 119.004L46.0452 123.364Z"
      fill="#F8B5A0"
    />
    <g className={`${styles.bounce}`}>
      <path
        d="M99.7435 76.1258C99.7435 66.1288 98.7931 56.2297 96.9466 46.9937C95.1001 37.7577 92.3936 29.3657 88.9816 22.2967C85.5697 15.2278 81.5191 9.62041 77.0612 5.79473C72.6032 1.96905 67.8253 -6.92839e-08 63 0C58.1748 6.92839e-08 53.3968 1.96905 48.9389 5.79473C44.481 9.62041 40.4304 15.2278 37.0185 22.2967C33.6065 29.3657 30.9 37.7577 29.0535 46.9937C27.2069 56.2297 26.2565 66.1288 26.2565 76.1258H99.7435Z"
        fill="#9C5742"
      />
      <path
        d="M86.2299 16.2135C92.7917 15.9924 98.3101 21.72 98.5555 29.0064C98.801 36.2928 93.6806 42.3789 87.1188 42.5999C80.557 42.821 75.0386 37.0934 74.7931 29.807C74.5476 22.5205 79.6681 16.4345 86.2299 16.2135Z"
        fill="#9C5742"
      />
    </g>

    <path
      d="M39 76C39 62.7452 49.7452 52 63 52V52C76.2548 52 87 62.7452 87 76V108C87 109.657 85.6569 111 84 111H42C40.3431 111 39 109.657 39 108V76Z"
      fill="#AE0C0C"
    />
    <g className={`${styles.bounce}`}>
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
      <rect x="52" y="36" width="6" height="9" rx="3" fill="#7D3822" />
      <rect x="70" y="34" width="10" height="13" rx="5" fill="white" />
      <rect x="72" y="36" width="6" height="9" rx="3" fill="#7D3822" />
      <path
        d="M76 53.5C76 54.6162 75.7284 55.7215 75.2007 56.7528C74.6731 57.7841 73.8996 58.7211 72.9246 59.5104C71.9496 60.2997 70.7921 60.9258 69.5182 61.353C68.2443 61.7801 66.8789 62 65.5 62C64.1211 62 62.7557 61.7801 61.4818 61.353C60.2079 60.9258 59.0504 60.2997 58.0754 59.5104C57.1004 58.7211 56.3269 57.7841 55.7993 56.7528C55.2716 55.7215 55 54.6162 55 53.5L65.5 53.5H76Z"
        fill="#AE0C0C"
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
      <path
        d="M93.7958 15.9966C93.0802 22.9852 85.9334 27.9781 77.8331 27.1486C69.7328 26.3191 63.7463 19.9813 64.462 12.9927C65.1777 6.00411 72.3244 1.01118 80.4247 1.84069C88.5251 2.67019 94.5115 9.00802 93.7958 15.9966Z"
        fill="#9C5742"
      />
      <path
        d="M70.6057 9.98561C71.7686 16.9138 64.5491 23.9003 54.4805 25.5904C44.4118 27.2805 35.3068 23.0342 34.1439 16.1059C32.9809 9.17772 40.2004 2.1912 50.2691 0.50112C60.3377 -1.18896 69.4427 3.05738 70.6057 9.98561Z"
        fill="#9C5742"
      />
      <path
        d="M42.9587 5.66651C46.8427 6.82919 48.0982 14.0954 45.7631 21.896C43.4279 29.6967 38.3863 35.0778 34.5023 33.9151C30.6184 32.7525 29.3629 25.4862 31.698 17.6856C34.0332 9.88495 39.0748 4.50382 42.9587 5.66651Z"
        fill="#9C5742"
      />
    </g>
  </g>
);

const STATE_TO_ANIMATION = {
  idle: idle,
  run: run,
  freeze: frozen,
  win: win,
};

export const CharacterRed = ({ state }: { state?: CharacterState }) => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {STATE_TO_ANIMATION[state ?? "idle"]}
    </svg>
  );
};
