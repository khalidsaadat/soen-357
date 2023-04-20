import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/payment.css";
import visa from "../static/images/visa.png";
import mastercard from "../static/images/mastercard.png";
import amex from "../static/images/amex.png";

const Payment = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="payment-container">
      <div className="payment-form-container">
        <div>
          <p className="payment-text-center payment-text-xl payment-py-4">
            {" "}
            Payment{" "}
          </p>
        </div>

        <div className="payment-text-center">
          <form onSubmit={handleSubmit} className="p-4">
            <p className="payment-mb-4">
              Your payment is encrypted and you can change how you pay anytime.
            </p>
            <div style={{ textAlign: "left", marginLeft: "102px" }}>
              <img
                src={visa}
                alt="visa"
                style={{
                  display: "inline-block",
                  width: 40,
                  textAlign: "center",
                }}
              />
              <img
                src={mastercard}
                alt="visa"
                style={{
                  display: "inline-block",
                  width: 40,
                  textAlign: "center",
                }}
              />
              <img
                src={amex}
                alt="visa"
                style={{
                  display: "inline-block",
                  width: 40,
                  textAlign: "center",
                }}
              />
            </div>
            <div className="payment-mb-4 payment-mt-4">
              <input
                className="payment-input-card"
                type="Card Number"
                placeholder="Card Number"
              />
            </div>
            <div style={{ textAlign: "left", marginLeft: 105 }}>
              <div className="payment-mb-3">
                <input
                  className="payment-input-date"
                  type="Expiration Date"
                  placeholder="Expiration Date"
                />
              </div>
              <div className="payment-mb-3">
                <input
                  className="payment-input-cvv"
                  type="CVV"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="payment-mb-4 payment-mt-4">
              <input
                className="payment-input-firstName"
                type="First Name"
                placeholder="First Name"
              />
            </div>
            <div className="payment-mb-4 payment-mt-4">
              <input
                className="payment-input-lastName"
                type="Last Name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <p style={{ display: "inline-block" }}>Your total is:</p>
              <p
                style={{
                  display: "inline-block",
                  color: "#bb8be7",
                  marginLeft: 5,
                }}
              >
                CAD 9.75$
              </p>
            </div>
            <button className="payment-submit-btn" type="submit">
              PAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
