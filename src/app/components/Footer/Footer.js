import { makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../../../assets/weber_white.png";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  logofooter: {
    width: "7vw",
  },
  titleinfooter: {
    color: "#f9f8f0",
  },
});

export default function Footer() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Foot>
      <FootBoxes>
        <BoxesContainer>
          <img className={classes.logofooter} src={logo} alt="logo"></img>
        </BoxesContainer>
        <BoxesContainer>
          Que tu espacio sea como siempre lo soñaste. Nosotros te ayudamos a
          hacerlo realidad.
        </BoxesContainer>
      </FootBoxes>

      <FootBoxes>
        <div></div>
      </FootBoxes>

      <FootBoxes>
        <div
          className={classes.titleinfooter}
          type="button"
          onClick={() => history.push("/categories/escritorios")}
        >
          PRODUCTOS
        </div>
        <div
          type="button"
          onClick={() => history.push("/categories/escritorios")}
        >
          Escritorios
        </div>
        <div
          type="button"
          onClick={() => history.push("/categories/escritorios")}
        >
          Sillas
        </div>
        <div
          type="button"
          onClick={() => history.push("/categories/escritorios")}
        >
          Sillones
        </div>
        <div
          type="button"
          onClick={() => history.push("/categories/escritorios")}
        >
          Accesorios
        </div>
      </FootBoxes>

      <FootBoxes>
        <div className={classes.titleinfooter} typeof="button">
          CONTACTANOS
        </div>
        <TextWithIcon>
          <AlternateEmailIcon fontSize="small"></AlternateEmailIcon>
          <div>contacto@weberdesign.com</div>
        </TextWithIcon>

        <TextWithIcon>
          <PhoneIcon fontSize="small"></PhoneIcon>
          <div>011 4453-1395</div>
        </TextWithIcon>

        <TextWithIcon>
          <HomeIcon fontSize="small"></HomeIcon>
          <div>Av. Buenos Aires 1474, CASTELAR</div>
        </TextWithIcon>
      </FootBoxes>
    </Foot>
  );
}

const Foot = styled.div`
  background-color: #3c3c3c;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: italic;
  justify-content: space-evenly;
  padding: 20px;
  font-size: 0.7rem;
  height: 20vh;
`;

const FootBoxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 0.4rem;
`;
const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TextWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;
