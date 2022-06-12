import React from "react";
import styled from "styled-components";

export default function MessageInNavbar() {
  return (
    <div>
      <MessageInNavBar>12 Cuotas sin interés | Envío sin cargo desde $35.000 en C.A.B.A y Zona OESTE de G.B.A</MessageInNavBar>
    </div>
  );
}

const MessageInNavBar = styled.div`
  background-color: black;
  color: white;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.5px;
  font-size: 0.6rem;
  align-items: center;
`;
