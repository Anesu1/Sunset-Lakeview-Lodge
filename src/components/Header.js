/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { IconButton } from "@material-ui/core";
import { CloseRounded, MenuRounded } from "@material-ui/icons";
import {
  EmailRounded,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";




export const icons = [
  {
    src: "./imgs/icons/fb.png",
    link: "https://www.facebook.com/",
  },
  {
    src: "./imgs/icons/ig.png",
    link: "https://www.instagram.com/",
  },
  {
    src: "./imgs/icons/in.png",
    link: "https://www.linkedin.com/",
  },
  {
    src: "./imgs/icons/ta.png",
    link: "https://www.tripadvisor.com/",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const [menuChange, setMenuChange] = useState();

  useEffect(() => {
    if (window.innerWidth > 992) {
      setMenuChange(true);
      setOpen(false);
    } else {
      setMenuChange(false);
    }
  }, []);
  const ChangeMenu = () => {
    if (window.innerWidth > 992) {
      setMenuChange(true);
      setOpen(false);
    } else {
      setMenuChange(false);
    }
  };
  window.addEventListener("resize", ChangeMenu);
  return (
    <Small>
      <HeaderSec>
        <img src="./imgs/logo1.png" alt="" className="logo" />
        <ul className="menu">
          <li onClick={() => setOpen(false)}>
            <Link
              to="rooms"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Rooms
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to="reservations"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Reservations
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <IconButton color="white" onClick={() => setOpen(true)}>
          <MenuRounded />
        </IconButton>
      </HeaderSec>
      {menuChange ? null : (
        <div className={open ? "menu-open change" : "menu-open"}>
          <IconButton color="black" onClick={() => setOpen(false)}>
            <CloseRounded />
          </IconButton>
          <ul>
            <li >
              <Link
                to="rooms"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Rooms
              </Link>
            </li>
            <li >
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li >
              <Link
                to="reservation"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Reservations
              </Link>
            </li>
            <li >
              <Link
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>
            <li >
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Small>
  );
}


const HeaderSec = styled.header`
  overflow: hidden;
  display: flex;
  position: absolute;
  z-index: 99;
  top: 2%;
  transform: translateX(-50%);
  left: 50%;
  width: 95%;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 85%;
  }
  img {
    height: 80px;
  }

  .menu {
    display: none;
    @media (min-width: 768px) {
      display: block;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 40px;
    }
    li {
        cursor:pointer;
      a {
        display: block;
        text-decoration: none;
        color: #000000;
        letter-spacing: 2px;
        width: max-content;
        padding: 20px;
        @media (min-width: 768px) {
          color: #fff;
        }
      }
    }
  }

  .MuiIconButton-label {
    transition: 0.7s;
    position: relative;
    z-index: 99;
    svg {
      font-size: 35px !important;
      color: #fff;
    }
  }
`;

const Small = styled.div`
  .menu-open {
    position: absolute;
    right: 0;
    display: block;
    max-width: 0;
    overflow: hidden;
    top: 0;
    transform: translateX(100%);
    overflow: hidden;
    width: 100%;
    background: #fff;
    transition: 0.7s;
    height: 100vh;
    z-index: 7;
    display: flex;
    @media (min-width: 768px) {
      height: 660px;
      display: none;
    }
    @media (min-width: 992px) {
      width: 20%;
      padding: 5%;
      display: unset;
    }
    @media (min-width: 1200px) {
      height: 100vh;
    }
    ul {
      margin: auto;
      li {
        cursor:pointer;
        a {
          text-decoration: none;
          font-family: ${(props) => props.theme.fam.renner};
          text-transform: uppercase;
          display: block;
          padding: 20px;
          color: #000;
          text-align: center;
        }
      }
    }
    p {
      font-family: ${(props) => props.theme.fam.proxima};
      color: ${(props) => props.theme.color.dark};
      line-height: 25px;
      margin-bottom: 30px;
    }
    img {
      width: 150px;
    }
    .MuiButtonBase-root {
      position: absolute;
      right: 10%;
      top: 50px;
    }
  }
  .MuiButtonBase-root,
  .MuiIconButton-root {
    display: none;
    @media (max-width: 768px) {
      height: max-content;
      display: block;
    }
  }

  .change {
    transform: translateX(0);
    z-index: 99;
    max-width: 100%;
  }
  .footer-contact {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      margin-right: 20px;
      object-fit: contain;
    }
    span {
      width: 100%;
      letter-spacing: 1.5px;
      font-family: ${(props) => props.theme.fam.proxima};
      color: ${(props) => props.theme.color.dark};
      font-size: 12px;
      line-height: 20px;
    }
  }
  .icons {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    img {
      width: 25px;
      object-fit: contain;
      &:first-child {
        height: 30px;
      }
      &:last-child {
        height: 30px;
      }
    }
  }
`;

export default Header;
