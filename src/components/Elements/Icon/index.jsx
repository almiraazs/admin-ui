const IconWrapper = ({ children }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
  
  const OverviewIcon = () => (
    <IconWrapper>
      <path
        d="M21 14H14V21H21V14Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14H3V21H10V14Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 3H14V10H21V3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 3H3V10H10V3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
  
  const BalanceIcon = () => (
    <IconWrapper>
      <path
        d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );
  
  const TransactionIcon = () => (
    <IconWrapper>
      <path
        d="M17 11L21 7L17 3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 7H9"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 21L3 17L7 13"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 17H3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </IconWrapper>
  );

  const BillIcon = () => (
    <IconWrapper>
      <path d="M9.50001 10.5001H12C12.2652 10.5001 12.5196 10.3947 12.7071 10.2072C12.8947 10.0196 13 9.76528 13 9.50007C13 9.23485 12.8947 8.9805 12.7071 8.79296C12.5196 8.60543 12.2652 8.50007 12 8.50007H11V8.00007C11 7.73485 10.8947 7.4805 10.7071 7.29296C10.5196 7.10543 10.2652 7.00007 10 7.00007C9.73479 7.00007 9.48044 7.10543 9.2929 7.29296C9.10537 7.4805 9.00001 7.73485 9.00001 8.00007V8.55007C8.39243 8.67344 7.85237 9.01817 7.48466 9.51733C7.11696 10.0165 6.94785 10.6345 7.01015 11.2513C7.07246 11.8682 7.36174 12.4398 7.82184 12.8554C8.28194 13.2709 8.88003 13.5007 9.50001 13.5001H10.5C10.6326 13.5001 10.7598 13.5527 10.8536 13.6465C10.9473 13.7403 11 13.8675 11 14.0001C11 14.1327 10.9473 14.2599 10.8536 14.3536C10.7598 14.4474 10.6326 14.5001 10.5 14.5001H8.00001C7.73479 14.5001 7.48044 14.6054 7.2929 14.793C7.10537 14.9805 7.00001 15.2349 7.00001 15.5001C7.00001 15.7653 7.10537 16.0196 7.2929 16.2072C7.48044 16.3947 7.73479 16.5001 8.00001 16.5001H9.00001V17.0001C9.00001 17.2653 9.10537 17.5196 9.2929 17.7072C9.48044 17.8947 9.73479 18.0001 10 18.0001C10.2652 18.0001 10.5196 17.8947 10.7071 17.7072C10.8947 17.5196 11 17.2653 11 17.0001V16.4501C11.6076 16.3267 12.1476 15.982 12.5154 15.4828C12.8831 14.9836 13.0522 14.3657 12.9899 13.7488C12.9276 13.132 12.6383 12.5603 12.1782 12.1448C11.7181 11.7292 11.12 11.4994 10.5 11.5001H9.50001C9.3674 11.5001 9.24022 11.4474 9.14645 11.3536C9.05269 11.2599 9.00001 11.1327 9.00001 11.0001C9.00001 10.8675 9.05269 10.7403 9.14645 10.6465C9.24022 10.5527 9.3674 10.5001 9.50001 10.5001ZM21 12.0001H18V3.00007C18.0007 2.82386 17.9548 2.65059 17.867 2.49781C17.7792 2.34504 17.6526 2.21817 17.5 2.13007C17.348 2.0423 17.1755 1.99609 17 1.99609C16.8245 1.99609 16.652 2.0423 16.5 2.13007L13.5 3.85007L10.5 2.13007C10.348 2.0423 10.1755 1.99609 10 1.99609C9.82447 1.99609 9.65203 2.0423 9.50001 2.13007L6.50001 3.85007L3.50001 2.13007C3.34799 2.0423 3.17554 1.99609 3.00001 1.99609C2.82447 1.99609 2.65203 2.0423 2.50001 2.13007C2.3474 2.21817 2.22079 2.34504 2.13299 2.49781C2.04518 2.65059 1.99931 2.82386 2.00001 3.00007V19.0001C2.00001 19.7957 2.31608 20.5588 2.87869 21.1214C3.4413 21.684 4.20436 22.0001 5.00001 22.0001H19C19.7957 22.0001 20.5587 21.684 21.1213 21.1214C21.6839 20.5588 22 19.7957 22 19.0001V13.0001C22 12.7349 21.8947 12.4805 21.7071 12.293C21.5196 12.1054 21.2652 12.0001 21 12.0001ZM5.00001 20.0001C4.73479 20.0001 4.48044 19.8947 4.2929 19.7072C4.10536 19.5196 4.00001 19.2653 4.00001 19.0001V4.73007L6.00001 5.87007C6.15435 5.95068 6.32589 5.99278 6.50001 5.99278C6.67413 5.99278 6.84567 5.95068 7.00001 5.87007L10 4.15007L13 5.87007C13.1543 5.95068 13.3259 5.99278 13.5 5.99278C13.6741 5.99278 13.8457 5.95068 14 5.87007L16 4.73007V19.0001C16.0027 19.3412 16.0636 19.6794 16.18 20.0001H5.00001ZM20 19.0001C20 19.2653 19.8947 19.5196 19.7071 19.7072C19.5196 19.8947 19.2652 20.0001 19 20.0001C18.7348 20.0001 18.4804 19.8947 18.2929 19.7072C18.1054 19.5196 18 19.2653 18 19.0001V14.0001H20V19.0001Z" fill="white"/>
    </IconWrapper>
  );

  const ExpensesIcon = () => (
    <IconWrapper>
        <path d="M15.5 17H21.5M21.5 17L19 19.5M21.5 17L19 14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.5 13V5C21.5 4.60218 21.342 4.22064 21.0607 3.93934C20.7794 3.65804 20.3978 3.5 20 3.5H4C3.60218 3.5 3.22064 3.65804 2.93934 3.93934C2.65804 4.22064 2.5 4.60218 2.5 5V19C2.5 19.3978 2.65804 19.7794 2.93934 20.0607C3.22064 20.342 3.60218 20.5 4 20.5H14.235" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 8.5H8.75C8.28587 8.5 7.84075 8.68437 7.51256 9.01256C7.18437 9.34075 7 9.78587 7 10.25C7 10.7141 7.18437 11.1592 7.51256 11.4874C7.84075 11.8156 8.28587 12 8.75 12H11.25C11.7141 12 12.1592 12.1844 12.4874 12.5126C12.8156 12.8408 13 13.2859 13 13.75C13 14.2141 12.8156 14.6592 12.4874 14.9874C12.1592 15.3156 11.7141 15.5 11.25 15.5H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </IconWrapper>
  );

  const GoalsIcon = () => (
    <IconWrapper>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 12H2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 6V2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </IconWrapper>
  );

  const SettingsIcon = () => (
    <IconWrapper>
        <path d="M11.9999 14.3465C13.2959 14.3465 14.3465 13.2959 14.3465 11.9999C14.3465 10.7039 13.2959 9.65332 11.9999 9.65332C10.7039 9.65332 9.65332 10.7039 9.65332 11.9999C9.65332 13.2959 10.7039 14.3465 11.9999 14.3465Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0545 14.4545C17.9456 14.7013 17.9131 14.9751 17.9613 15.2405C18.0094 15.5059 18.1359 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9757 18.5258 18.1562 18.3736 18.3082C18.2217 18.4603 18.0412 18.581 17.8425 18.6634C17.6439 18.7457 17.431 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2102 18.4603 16.0582 18.3082L16.0091 18.2591C15.8163 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9263 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9157 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2152 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.79969 18.1481 9.54545 18.0545C9.29868 17.9456 9.02493 17.9131 8.75952 17.9613C8.4941 18.0094 8.24919 18.1359 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.84379 18.5258 5.69182 18.3736C5.53967 18.2217 5.41898 18.0412 5.33663 17.8425C5.25428 17.6439 5.21189 17.431 5.21189 17.2159C5.21189 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53967 16.2102 5.69182 16.0582L5.74091 16.0091C5.92953 15.8163 6.05606 15.5714 6.10419 15.3059C6.15231 15.0405 6.11982 14.7668 6.01091 14.52C5.90719 14.278 5.73498 14.0716 5.51547 13.9263C5.29596 13.7809 5.03873 13.7029 4.77545 13.7018H4.63636C4.20237 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9157 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2152 3.47928 10.9084C3.78616 10.6015 4.20237 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24346 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.79969 5.94545 9.54545C6.05437 9.29868 6.08686 9.02493 6.03873 8.75952C5.99061 8.4941 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27118 7.47617C5.18883 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18883 6.42157 5.27118 6.22292C5.35352 6.02426 5.47422 5.84379 5.62636 5.69182C5.77834 5.53967 5.95881 5.41898 6.15746 5.33663C6.35611 5.25428 6.56905 5.21189 6.78409 5.21189C6.99913 5.21189 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53967 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10419C8.95948 6.15231 9.23322 6.11982 9.48 6.01091H9.54545C9.78745 5.90719 9.99383 5.73498 10.1392 5.51547C10.2846 5.29596 10.3626 5.03873 10.3636 4.77545V4.63636C10.3636 4.20237 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20237 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2126 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08686 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27118C16.7225 5.18883 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18883 17.7771 5.27118C17.9757 5.35352 18.1562 5.47422 18.3082 5.62636C18.4603 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35611 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4603 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3305 14.0062 18.1583 14.2126 18.0545 14.4545V14.4545Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </IconWrapper>
  );

  const LogoutIcon = () => (
    <IconWrapper>
        <path d="M8.3335 14.1663L12.5002 9.99967L8.3335 5.83301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </IconWrapper>
  );

  const KebabMenuIcon = () => (
    <IconWrapper>
        <circle cx="2" cy="2" r="2" fill="currentColor"/>
        <circle cx="2" cy="10" r="2" fill="currentColor"/>
        <circle cx="2" cy="18" r="2" fill="currentColor"/>
    </IconWrapper>
  );

  const ShoppingIcon = () => (
    <IconWrapper>
      <path d="M14 30C13.45 30 12.979 29.804 12.587 29.412C12.195 29.02 11.9993 28.5493 12 28V16C12 15.45 12.196 14.979 12.588 14.587C12.98 14.195 13.4507 13.9993 14 14H16C16 12.9 16.3917 11.9583 17.175 11.175C17.9583 10.3917 18.9 10 20 10C21.1 10 22.0417 10.3917 22.825 11.175C23.6083 11.9583 24 12.9 24 14H26C26.55 14 27.021 14.196 27.413 14.588C27.805 14.98 28.0007 15.4507 28 16V28C28 28.55 27.804 29.021 27.412 29.413C27.02 29.805 26.5493 30.0007 26 30H14ZM14 28H26V16H24V18C24 18.2833 23.904 18.521 23.712 18.713C23.52 18.905 23.2827 19.0007 23 19C22.7167 19 22.479 18.904 22.287 18.712C22.095 18.52 21.9993 18.2827 22 18V16H18V18C18 18.2833 17.904 18.521 17.712 18.713C17.52 18.905 17.2827 19.0007 17 19C16.7167 19 16.479 18.904 16.287 18.712C16.095 18.52 15.9993 18.2827 16 18V16H14V28ZM18 14H22C22 13.45 21.804 12.979 21.412 12.587C21.02 12.195 20.5493 11.9993 20 12C19.45 12 18.979 12.196 18.587 12.588C18.195 12.98 17.9993 13.4507 18 14Z" fill="#666666"/>
    </IconWrapper>
  );

  const FoodIcon = () => (
    <IconWrapper>
      <path d="M20 12.7778L26.75 17.7778V27.7778H13.25V17.7778L20 12.7778ZM20 10L11 16.6667V30H29V16.6667L20 10ZM19.4375 17.2222V20.5556H18.875V17.2222H17.75V20.5556H17.1875V17.2222H16.0625V20.5556C16.0625 21.4778 16.8162 22.2222 17.75 22.2222V26.6667H18.875V22.2222C19.8088 22.2222 20.5625 21.4778 20.5625 20.5556V17.2222H19.4375ZM21.125 19.4444V22.7778H22.25V26.6667H23.375V17.2222C22.1375 17.2222 21.125 18.2222 21.125 19.4444Z" fill="#666666"/>
    </IconWrapper>
  );

  const TransportationIcon = () => (
    <IconWrapper>
      <path d="M18 30V23.65L19.625 19H28.375L30 23.65V30H28V28.5H20V30H18ZM20 22.5H28L27.3 20.5H20.7L20 22.5ZM21 26.5C21.2833 26.5 21.521 26.404 21.713 26.212C21.9043 26.0207 22 25.7833 22 25.5C22 25.2167 21.9043 24.9793 21.713 24.788C21.521 24.596 21.2833 24.5 21 24.5C20.7167 24.5 20.4793 24.596 20.288 24.788C20.096 24.9793 20 25.2167 20 25.5C20 25.7833 20.096 26.0207 20.288 26.212C20.4793 26.404 20.7167 26.5 21 26.5ZM27 26.5C27.2833 26.5 27.5207 26.404 27.712 26.212C27.904 26.0207 28 25.7833 28 25.5C28 25.2167 27.904 24.9793 27.712 24.788C27.5207 24.596 27.2833 24.5 27 24.5C26.7167 24.5 26.4793 24.596 26.288 24.788C26.096 24.9793 26 25.2167 26 25.5C26 25.7833 26.096 26.0207 26.288 26.212C26.4793 26.404 26.7167 26.5 27 26.5ZM14 22V20H16V22H14ZM19 16V14H21V16H19ZM14 26V24H16V26H14ZM14 30V28H16V30H14ZM10 30V16H15V10H25V17H23V12H17V18H12V30H10ZM19.5 27H28.5V24H19.5V27Z" fill="#666666"/>
    </IconWrapper>
  );

  const OthersIcon = () => (
    <IconWrapper>
      <path d="M21 25V19H29V25H21ZM11 29V19H19V29H11ZM21 37V27H29V37H21ZM11 37V31H19V37H11ZM13 27H17V21H13V27ZM23 35H27V29H23V35ZM23 23H27V21H23V23ZM13 35H17V33H13V35Z" fill="#878787"/>
    </IconWrapper>
  );

  const EntertaimentIcon = () => (
    <IconWrapper>
       <path d="M22.75 23.46L20 19.93L21.97 19.54L24.71 23.07L22.75 23.46ZM29.62 22.1L28.84 18.18L24.91 18.96L27.65 22.5L29.62 22.1ZM19.81 24.05L17.07 20.5L15.1 20.91L17.85 24.44L19.81 24.05ZM12.16 21.5L11.18 21.69C10.9224 21.7408 10.6774 21.8419 10.4589 21.9876C10.2405 22.1333 10.053 22.3207 9.90713 22.539C9.76127 22.7574 9.65994 23.0023 9.60896 23.2599C9.55797 23.5175 9.55833 23.7826 9.61001 24.04L10 26L14.9 25.03L12.16 21.5ZM12 36V28H28V29.09C28.72 29.21 29.39 29.46 30 29.81V26H10V36C10 36.5304 10.2107 37.0391 10.5858 37.4142C10.9609 37.7893 11.4696 38 12 38H21.81C21.46 37.39 21.22 36.72 21.09 36H12ZM29.34 31.84L25.75 35.43L24.16 33.84L23 35L25.75 38L30.5 33.25L29.34 31.84Z" fill="#878787"/>
    </IconWrapper>
  );

  const HousingIcon = () => (
    <IconWrapper>
      <path d="M18.3333 21V22.7842L20 23.8342V22.5789H28.3333V34.4211H24.1667V36H30V21H18.3333ZM16.25 23.3684L10 27.3158V36H22.5V27.3158L16.25 23.3684ZM21.6667 24.1579V24.8921L23.0083 25.7368H23.3333V24.1579H21.6667ZM25 24.1579V25.7368H26.6667V24.1579H25ZM16.25 25.3421L20.8333 28.1053V34.4211H18.3333V29.6842H14.1667V34.4211H11.6667V28.1053L16.25 25.3421ZM25 27.3158V28.8947H26.6667V27.3158H25ZM25 30.4737V32.0526H26.6667V30.4737H25Z" fill="#878787"/>
    </IconWrapper>
  );

  const ArrowUpIcon = () => (
    <IconWrapper>
      <path d="M8 12.6667V3.33334" stroke="#E73D1C" stroke-width="1.5" strokelinecap="round" strokeLinejoin="round"/>
      <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="#E73D1C" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
  );

  const ArrowDownIcon = () => (
    <IconWrapper>
      <path d="M8 2.33325V11.6666" stroke="#4DAF6E" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6666 7L7.99992 11.6667L3.33325 7" stroke="#4DAF6E" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
  );

  const ArrowRightIcon = () => (
    <IconWrapper>
      <path d="M3 12L22 12" stroke="#9F9F9F" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 5L22 12L15 19" stroke="#9F9F9F" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
  ); 
  
  export const Icon = {
    Overview: OverviewIcon,
    Balance: BalanceIcon,
    Transaction: TransactionIcon,
    Bill: BillIcon,
    Expenses: ExpensesIcon,
    Goals: GoalsIcon,
    Settings: SettingsIcon,
    Logout: LogoutIcon,
    KebabMenu: KebabMenuIcon,
    Shopping: ShoppingIcon,
    Food: FoodIcon,
    Transportation: TransportationIcon, 
    Others: OthersIcon,
    Entertaiment: EntertaimentIcon,
    Housing: HousingIcon,
    ArrowUp: ArrowUpIcon, 
    ArrowDown: ArrowDownIcon, 
    ArrowRight: ArrowRightIcon,
  };
  