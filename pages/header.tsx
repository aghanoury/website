import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Research", href: "/research", current: true },
  { name: "Blog", href: "/blog", current: true },
  { name: "Photos", href: "/photos", current: true },
];

// working on a dark mode toggle
function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? "bg-light_blue" : "bg-orange"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </button>
      )}
    </Switch>
  );
}

export default function Header() {
  return (
    <Menu as="nav" className={`relative p-0 m-0 z-50`}>
      {({ open }) => (
        <>
          <div className="flex items-center mx-0">
            <div className="flex flex-1 items-center justify-between space-x-10 m-0 h-16 px-0">
              {/* standard menu bar */}
              <Link className="text-2xl max-sm:text-lg" href="/">
                Pooya Aghanoury
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
                {/* <Toggle /> */}
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
            <div className="bg-dark_blue dark:bg-pink absolute sm:hidden text-white dark:text-dark_blue rounded-2xl right-0 bg-black shadow-2xl shadow-dark_blue origin-top-right">
              <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  <Link
                    className="block px-10 py-2 rounded-lg
                  hover:bg-blue hover:text-white "
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
