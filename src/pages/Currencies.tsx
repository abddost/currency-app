import React, { useEffect } from "react";
import { Button, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import FormTextInputField from "../components/FormTextInputField";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  getCurrencies,
  convertCurrency,
} from "../redux/actions/currencyAction";
import { globalStyles } from "../global/styles";
import { IProps } from "../global/interface";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
    marginTop: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(0, 2, 0, 0),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: 400,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  list: {
    borderBottom: "1px solid #eee",
  },
}));

function Currencies(props: IProps) {
  const { pristine, submitting, handleSubmit } = props;

  const dispatch = useDispatch();

  const { list, item } = useSelector(
    createSelector(
      (state: any) => state.currency,
      ({ list, item }) => ({ list, item })
    )
  );

  const { rates } = item;

  const currencyArray: any = rates && Object.entries(rates);

  const classes = useStyles(props);

  const globalClasses = globalStyles(props);

  function submitForm(values: any) {
    console.log(values);

    dispatch(convertCurrency(values));
  }

  function getCurrenciesList() {
    dispatch(getCurrencies());
  }

  useEffect(() => {
    getCurrenciesList();

    let interval = setInterval(() => getCurrenciesList(), 15000);

    return () => {
      clearInterval(interval);
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={globalClasses.wrap}>
      <form
        className={globalClasses.form}
        noValidate
        onSubmit={handleSubmit(submitForm)}
      >
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12} sm={4}>
            <h6>Base</h6>
            <FormTextInputField
              validate={null}
              name="from"
              InputProps={
                {
                  fullWidth: true,
                  required: true,
                  variant: "outlined",
                  select: true,
                  currencies: Object.entries(list),
                }
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.submit}>
          <Button
            disabled={pristine || submitting}
            type="submit"
            color="primary"
            variant="contained"
          >
            Convert
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={false} className={classes.root}>
              {currencyArray &&
                currencyArray.map((item: any) => (
                  <ListItem className={classes.list}>
                    <ListItemText primary={`${item[0]} - ${item[1]}`} />
                  </ListItem>
                ))}
            </List>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "CurrenciesPage",
  enableReinitialize: true,
})(Currencies);
