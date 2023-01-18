import React, { PropsWithChildren } from "react";
import { CircleButton, ItemCounterContainer } from "./ItemCounter.styled";

export interface ItemCounterProps {
  label: string;
  plural: string;
  counter: number;
  onInc: () => void;
  onDec: () => void;
}

const ItemCounter: React.FC<PropsWithChildren<ItemCounterProps>> = ({
  label,
  plural,
  counter = 0,
  onInc,
  onDec,
}) => {
  return (
    <ItemCounterContainer>
      <CircleButton onClick={onDec}>
        <i className="twf-minus" />
      </CircleButton>

      <span>
        {counter} {counter > 1 ? plural : label}
      </span>

      <CircleButton onClick={onInc}>
        <i className="twf-plus" />
      </CircleButton>
    </ItemCounterContainer>
  );
};

export default ItemCounter;
