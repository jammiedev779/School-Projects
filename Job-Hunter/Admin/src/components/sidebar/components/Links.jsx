/* eslint-disable */
import React, { useState } from "react";
import { Link, redirect, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();
  
  const { routes } = props;
 
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  const createLinks = (routes) => {

    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        const [isShow,setShow] = useState(false);
        const showHandler=()=>{
          setShow(!isShow);
        }
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className={`relative w-full ${!route.list&&'mb-3'} ${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  } flex hover:cursor-pointer`} onClick={showHandler}>
              <li
                className="my-[3px] px-6 flex cursor-pointer w-full items-center"
                key={index}
              >
                <span
                  className={``}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {!route.list&&activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            {route.list&&
              <div className="mr-2">
                {isShow?<ExpandMoreIcon />:<ChevronRightIcon/>}
              </div>
              
            }
            </div>
            {
              route.list&&
              <div className={`px-16 flex mb-3 flex-col transition-all ${!isShow&&'h-0'} text-gray-600 overflow-y-hidden`}>
                {route.list.map(child=><Link to={child.path} className={`${
                    activeRoute(child.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}>{child.name}</Link>)}
              </div>
            }
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
