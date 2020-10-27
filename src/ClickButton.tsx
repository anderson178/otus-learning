import React from "react";

interface Prop {
  handleSubmit: (event: any) => void;
  nameButton: string;
}

export const ClickButton: React.FC<Prop> = ({ handleSubmit, nameButton }) => (
  <button onClick={handleSubmit}>{nameButton}</button>
);
