import React, { FC } from 'react';

export const LeftMenu: FC = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p>Job title - Company</p>
      </div>
      <div>
        <img src="./icons/network.png" alt="" />
        <p>Your Network</p>
        <button>
          <img src="./icons/user-plus.png" alt="" />
        </button>
      </div>
      <div>
        <img src="./icons/publications.png" alt="" />
        <p>Your Publications</p>
        <button>
          <img src="./icons/plus.png" alt="" />
        </button>
      </div>
    </div>
  );
};
