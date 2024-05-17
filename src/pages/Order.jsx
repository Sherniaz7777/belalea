import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Order = ({ setIsvisible, isvisible }) => {
  const { cartData } = useSelector((state) => state.cart);
  const [orderInput, setOrderInput] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    city: false,
    address: false,
  });

  const orderHandler = (e) => {
    e.preventDefault();
    if (
      orderInput.name.trim() !== "" &&
      orderInput.phone.trim() !== "" &&
      orderInput.city.trim() !== "" &&
      orderInput.address.trim() !== ""
    ) {
      console.log("Order submitted:", orderInput);
      setOrderInput({
        name: "",
        phone: "",
        city: "",
        address: "",
      });
      setIsvisible(false);
      toast.success("Order successfully placed");
      setTimeout(() => {
        localStorage.removeItem("cart");

          location.reload();
      },3000);

    } else {
      let newErrors = {};
      for (let key in orderInput) {
        if (orderInput[key].trim() === "") {
          newErrors[key] = true;
        }
      }
      setErrors(newErrors);
      toast.error("Please fill out all fields");
    }
  };

  const total = cartData.reduce((el, next) => {
    return el + next.count * next.price;
  }, 0);

  return (
    <div className="Order">
      <div className="container">
        <h1>Order Placement</h1>
        <br />
        <div className="Order-All">
          <form onSubmit={orderHandler}>
            <div className="order-1">
              <h2 style={{ paddingBottom: 30 }}>Personal Information</h2>
              <div className="order-inputs-1">
                <div>
                  <label> Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={orderInput.name}
                    onChange={(e) =>
                      setOrderInput({ ...orderInput, name: e.target.value })
                    }
                    className={errors.name ? "error" : ""}
                  />
                </div>
                <div>
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    placeholder="+7"
                    value={orderInput.phone}
                    onChange={(e) =>
                      setOrderInput({ ...orderInput, phone: e.target.value })
                    }
                    className={errors.phone ? "error" : ""}
                  />
                </div>
              </div>
              <br />
              <h2>Address</h2>
              <br />
              <div className="order-inputs-2">
                <div>
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={orderInput.city}
                    onChange={(e) =>
                      setOrderInput({ ...orderInput, city: e.target.value })
                    }
                    className={errors.city ? "error" : ""}
                  />
                </div>
                <div>
                  <label>Address</label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={orderInput.address}
                    className={errors.address ? "error" : ""}
                    onChange={(e) =>
                      setOrderInput({ ...orderInput, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <br />
              <button>Submit</button>
            </div>
          </form>
          <div className="order-2">
            <h2>Your Cart</h2>
            <div className="order-cart-all">
              {cartData.map((el) => (
                <div key={el.id} className="order-cart">
                  <p>
                    <span style={{ color: "black", fontWeight: 600 }}>
                      {el.name}
                    </span>{" "}
                    - {el.descrtion1}
                  </p>
                  <h5>Price: {el.price * el.count}$</h5>
                </div>
              ))}
            </div>
            <div className="order-total">
              <h4>Total amount</h4>
              <h5>Price: {total}$</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
