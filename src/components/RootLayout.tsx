import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface IRootProps {
  children: any;
}

export default function RootLayout({ children }: IRootProps) {
  const { count } = useSelector((state: any) => state.loader);
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple lighten-3">
          <Link
            to="/"
            className="brand-logo"
            style={{ fontSize: 20, marginLeft: 10 }}
          >
            Currency Convertor
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Convert</Link>
            </li>
            <li>
              <Link to="/currencies">Currencies</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">{count > 0 ? "loading" : children}</div>
    </div>
  );
}
