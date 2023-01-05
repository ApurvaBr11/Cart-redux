import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { ADD, fetchdata } from "../redux/Action";

const Cards = () => {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const meradata = useSelector((state) => state.cartreds);
  const { loading, datas } = meradata;

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  const Send = (e) => {
    dispatch(ADD(e));
  };
  
  return (
    <div className="row d-flex justify-center items-center">
      <>
        {loading ? (
          <div className="w-screen h-screen bg-black flex justify-center items-center">
            <img
              className="h-[460px]"
              src="https://i.pinimg.com/originals/ff/20/1b/ff201b10f8fb094d3ac640f8687ed511.gif"
              alt=""
            />
          </div>
        ) : (
          datas.map((ele, id) => {
            return (
              <Card
                style={{ width: "22rem" }}
                className="mx-4 my-2 p-2"
                key={id}
              >
                <Card.Img
                  variant="top"
                  src={ele.imgdata}
                  className="h-[14rem]"
                />
                <Card.Body>
                  <Card.Title>{ele.rname}</Card.Title>
                  <Card.Text>Price :₹ {ele.price}</Card.Text>
                  <Button onClick={() => Send(ele)} variant="primary">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </>
    </div>
  );
};

export default Cards;
