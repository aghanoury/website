import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Research", href: "/research", current: true },
  { name: "Blog", href: "/blog", current: true },
  { name: "Photos", href: "/photos", current: true },
];

// toggle dark/light mode
function Toggle(props) {
  if (props.enabled) {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }
  return (
    <Switch checked={props.enabled} onChange={props.setEnabled} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? "bg-light" : "bg-dark"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
          onClick={() => {
            checked
              ? document.documentElement.classList.remove("dark")
              : document.documentElement.classList.add("dark");
          }}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-black transition`}
          />
        </button>
      )}
    </Switch>
  );
}

export default function Header() {
  // if (typeof window !== "undefined") {
  // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [enabled, setEnabled] = useState(false);

  const current_route = useRouter();
  console.log(current_route.route);
  // simple useEffect to set the initial state of the theme toggle
  let didset = 0;
  useEffect(() => {
    didset = 1;
    setEnabled(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [didset]);

  return (
    <Menu as="nav" className={`relative p-0 z-50`}>
      {({ open }) => (
        <>
          <div className="flex items-center mx-0">
            <div className="flex flex-1 items-center justify-between space-x-10 m-0 h-16 px-0">
              {/* standard menu bar */}
              <Link className="text-2xl max-sm:text-lg" href="/">
                Pooya Aghanoury
              </Link>
              <div className="flex items-center justify-between space-x-3 max-sm:hidden">
                <Toggle enabled={enabled} setEnabled={setEnabled} />
                {navigation.map((item) => (
                  <div key={item.name} className="">
                    <Link
                      className={`relative rounded-lg p-1 px-1.5 inset-0 ${
                        current_route.route === item.href
                          ? "bg-light dark:bg-dark"
                          : ""
                      }
                      `}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="sm:hidden flex space-x-5">
                <Toggle enabled={enabled} setEnabled={setEnabled} />
                <Menu.Button className="">
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 focus:outline-none"></XMarkIcon>
                  ) : (
                    <Bars3Icon className="block h-6 w-6 focus:outline-none"></Bars3Icon>
                  )}
                </Menu.Button>
              </div>
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
            <div className="bg-dark dark:bg-light absolute sm:hidden text-white dark:text-black rounded-2xl right-0 shadow-2xl origin-top-right">
              <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  <Link
                    className="block px-10 py-2 rounded-lg
                  hover:bg-medium hover:text-white"
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
