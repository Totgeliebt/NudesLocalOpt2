import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinContent from "./CoinContent";
import RadioButton from "./RadioButton";
import {
  getPaymentAmounts,
  getPaymentLink,
  getPaymentTypes,
} from "../../thunkApi/depositSlice";

const DepositContainer = ({ children }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.user.authToken);
  const paymentAmount = useSelector((state) => state.deposit.amounts);

  const [coinValue, setCoinValue] = useState(1);

  const createCoin = (dataRadioButton) => {
    const onClick = (idCoin) => {
      setCoinValue(idCoin);
    };
    const radioButton = handleCreateRadioButton({
      onClick: onClick,
      value: coinValue,
      dataRadioButton: {
        name: "coin",
        id: dataRadioButton.price,
        ...dataRadioButton,
      },
      ContentComponent: CoinContent,
    });
    return radioButton;
  };

  const handleCreateRadioButton = ({
    onClick,
    value,
    dataRadioButton,
    ContentComponent,
  }) => {
    return (
      <RadioButton
        ContentComponent={ContentComponent}
        key={dataRadioButton.id}
        value={value}
        data={dataRadioButton}
        onClick={onClick}
      />
    );
  };

  const handleSubmitDeposit = (e) => {
    e.preventDefault();
    dispatch(getPaymentLink({ token, coinValue }))
      .then((data) => {
        console.log(data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    dispatch(getPaymentTypes(token))
      .then((data) => {
        console.log(data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(getPaymentAmounts(token))
      .then((data) => {
        console.log(data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const props = {
    handleSubmitDeposit,
    paymentAmount,
    createCoin,
  };

  return children(props);
};

export default DepositContainer;
