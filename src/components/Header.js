import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RMV } from "../redux/Action";
import { useDispatch } from "react-redux";

const Header = () => {
  const [pri, setPri] = useState(0);
  const getdata = useSelector((state) => state.cartreds);
  console.log(getdata.Carts,"hjhjhj")
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id) => {
    dispatch(RMV(id));
  };
  const total = () => {
    let pri = 0;
    getdata.map((e, i) => {
      pri += e.price * e.qnty;
    });
    setPri(pri);
  };
  // useEffect(() => {
  //   total();
  // }, [total]);

  return (
    <div>
      <Navbar className="h-[60px]" bg="dark" variant="dark">
        <Container>
          <NavLink className="text-white font-bold mx-3" to="/">
            HOME
          </NavLink>
          <Badge
            badgeContent={3}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping text-white text-2xl"></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="flex-col flex p-6 space-y-4">
              {getdata.carts.map((e) => {
                return (
                  <div className="flex gap-6 hover:bg-slate-100 p-1">
                    <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                      <img className="w-40 h-12" src={e.imgdata} alt="" />
                    </NavLink>
                    <p className="w-2/3 font-semibold">{e.rname}</p>
                    <p>{e.price}</p>
                    <p>{e.qnty}</p>
                    <p className="text-red-900" onClick={() => dlt(e.id)}>
                      <i className="fas fa-trash"></i>
                    </p>
                    <hr />
                  </div>
                );
              })}
              <div className="h-[2px] bg-black w-full mt-12 mx-2"></div>
              <p className="mx-6 font-bold uppercase">total : {pri}</p>
            </div>
          ) : (
            <div className="px-4 py-1 flex" onClick={handleClose}>
              your cart is empty
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
