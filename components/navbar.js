import React from "react";
import { useRouter } from "next/router";
// import { Transitions } from "react-transition-group";
import Link from "next/link";
// import "./styles.css"


function Navbar() {
    const router = useRouter();

    return (
        <div className="navbar">
            <div className="navbar-items">
                <Link className="navbar-item" href="/" >Home</Link>
                <Link className="navbar-item" href="/about">About</Link>
                <Link className="navbar-item" href="/photos">Photos</Link>
                <Link className="navbar-item" href="/contact">Resume</Link>
            </div>
        </div>
    );
}


// function Navbar() {
//   function Header() {
//       if (props.header) {
//         return <h1 className="header">{props.header}</h1>;
//       } else {
//         return <span />;
//       }
//     }
//   return (
//     <div>
//         <nav className="navbar">
//             <Header />
//             <ul>
//                 {NavbarItems.map((item, index) => {
//                     return (
//                         <Link
//                             key={index}
//                             to={item.url}
//                             className={
//                                 location === item.url ? "navbar-item-selected" : "navbar-item"
//                             }
//                             >
//                                 {item.title}
//                         </Link>
//                     );
//                 })}
//             </ul>
//         </nav>
//     </div>
//   );
// }

export default Navbar;