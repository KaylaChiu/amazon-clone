import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../../store/StateProvider";
import { getBasketTotal } from "../../../store/reducer";

import "./Subtotal.css";

/* 
ColorPick Eyedropper chrome extension for find the hex of website
*/
function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
