import React from "react";

function Sidebar() {
  return (
    <div className="sidebar bg-gray-800 p-4">
      <ul className="sidebar-nav">
        <li className=" text-white dark:text-blue-500">
          <a href="/">Bang Dien</a>
        </li>
        <li className=" text-white">
          <a href="buy-sell">Buy Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
