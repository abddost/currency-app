import { makeStyles } from "@material-ui/core";

export const globalStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 900,
    height: 500,
    padding: 20,
    marginTop: theme.spacing(1),
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
}));
