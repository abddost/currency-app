import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
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

// @params convertProps

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(0, 2, 0, 0),
  },
  text: {
    fontSize: 25,
    color: "blue",
  },
  underline: {
    padding: "0 20px",
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

function MainPage(props: IProps) {
  const { pristine, submitting, handleSubmit } = props;

  const dispatch = useDispatch();

  const { list, item } = useSelector(
    createSelector(
      (state: any) => state.currency,
      ({ list, item }) => ({ list, item })
    )
  );

  const [counter, setCounter] = useState(0);

  const { rates } = item;

  const classes = useStyles(props);
  const globalClasses = globalStyles(props);

  function submitForm(values: any) {
    setCounter((counter) => counter + 1);
    dispatch(convertCurrency(values));
  }

  function getCurrenciesList() {
    dispatch(getCurrencies());
  }

  useEffect(() => {
    getCurrenciesList();
  });

  return (
    <div className={globalClasses.wrap}>
      <form
        className={globalClasses.form}
        noValidate
        onSubmit={handleSubmit(submitForm)}
      >
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12} sm={4}>
            <label>Amount</label>

            <FormTextInputField
              validate={null}
              name="amount"
              InputProps={
                {
                  type: "number",
                  fullWidth: true,
                  required: true,
                  label: "Amount",
                  variant: "outlined",
                } as any
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <label>From</label>

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
                } as any
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <label>TO</label>
            <FormTextInputField
              validate={null}
              name="to"
              InputProps={
                {
                  fullWidth: true,
                  required: true,
                  variant: "outlined",
                  select: true,
                  currencies: Object.entries(list),
                } as any
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.submit}>
          <Button
            disabled={pristine || submitting}
            type="submit"
            color="primary"
            data-cy="button"
            variant="contained"
          >
            Convert
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.submit}>
          <span className={classes.text} data-cy="result">
            {rates && Object.keys(rates).length < 2
              ? `${Object.keys(rates)[0]} - ${Object.values(rates)[0]}`
              : counter > 0
              ? "Select correct currency to convert!"
              : null}
          </span>
        </Grid>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "MainPage",
  enableReinitialize: true,
})(MainPage);
