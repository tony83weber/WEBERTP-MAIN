import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: 300,
    width: "100%",
    gap: ".8rem",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "#424242",
    color: "#f5f5f5",
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    fontWeight: "100",
    fontSize: "0.7rem",
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      <BoxOfBoxes>
        <CategoryContainer className={classes.root}>
          <ButtonBase
            onClick={() => history.push("/categories/escritorios")}
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "45%",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_5253-2_1400x.jpg?v=1593804405)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                ESCRITORIOS
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>

          <ButtonBase
            onClick={() => history.push("/categories/sillas")}
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "45%",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4626_1400x.jpg?v=1615479823)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                SILLAS
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>

          <ButtonBase
            onClick={() => history.push("/categories/sillones")}
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "45%",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_4545-2_1400x.jpg?v=1615838612)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                SILLONES
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>

          <ButtonBase
            onClick={() => history.push("/categories/accesorios")}
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "45%",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0252/3122/8975/products/DSC_3534-2_e68e3a8d-326c-4e8d-9afd-55e0e3bcaca3_1400x.jpg?v=1613527109)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                ACCESORIOS
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </CategoryContainer>
      </BoxOfBoxes>
    </>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoxOfBoxes = styled.div`
  padding: 10px;
  background-color: whitesmoke;
`;
