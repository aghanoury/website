import { Fragment } from "react";
import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Resume", href: "/contact", current: true },
  { name: "Photos", href: "/photos", current: true },
  { name: "Contact", href: "/contact", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ title }) {
  return (
    <Menu as="nav" className={`relative p-0 m-0 z-50`}>
      {({ open }) => (
        <>
          <div className="flex items-center mx-0">
            <div className="flex flex-1 items-center justify-between space-x-10 m-0 h-12 px-0">
              {/* standard menu bar */}
              <Link className="text-2xl max-sm:text-lg" href="/">
                {title}
              </Link>
              <div className="flex items-center justify-between space-x-5">
                {navigation.map((item) => (
                  <Link
                    className="max-sm:hidden"
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Menu.Button className="sm:hidden">
                <span className="sr-only">Open Menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6"></XMarkIcon>
                ) : (
                  <Bars3Icon className="block h-6 w-6"></Bars3Icon>
                )}
              </Menu.Button>
            </div>
          </div>
          {/* DROP DOWN MENU */}
          <Transition
            enter="transition ease duration-300 transform"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-300 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            <div className="absolute sm:hidden text-white rounded-md right-0 bg-black shadow-xl origin-top-right">
              <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  <Link
                    className="block px-10 py-2 rounded-lg
                  hover:bg-gray-700 hover:text-white "
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">

//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* Full menu bar */}
//               <div className="flex flex-1">
//                 <div className="flex flex-shrink-0 items-center justify-end">
//                   <img
//                     className="h-8 w-auto lg:block"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'px-3 py-2 rounded-md text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden absolute">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block px-3 py-2 rounded-md text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }
