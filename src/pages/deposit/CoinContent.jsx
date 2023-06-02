import React from "react";
import giftPic from "../../assets/icons/gift-icon.svg";
import { useTranslation } from "react-i18next";

const CoinContent = ({ data }) => {
  const { t } = useTranslation();
  const lng = t("deposit", { returnObjects: true });
  const { price, amount, gift } = data;
  return (
    <div className="coins">
      <h3>{price}$</h3>
      {amount === 1 ? (
        <p>
          {amount} {lng["photo"]}
        </p>
      ) : (
        <p>
          {amount} {lng["photos"]}
        </p>
      )}
      {gift !== 0 ? (
        <>
          <p>
            +{gift} {lng["free"]}
          </p>
          <img src={giftPic} alt="gift" />
        </>
      ) : null}
    </div>
  );
};

export default CoinContent;
