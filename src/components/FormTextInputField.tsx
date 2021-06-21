import React from "react";
import { Field } from "redux-form";
// import * as PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";

// FormTextInputComponent.propTypes = {
//     meta: PropTypes.object,
//     input: PropTypes.object,
//     InputProps: PropTypes.object,
//     multiline: PropTypes.bool,
//     rowsMax: PropTypes.string,
//     rows: PropTypes.string,
//     variant: PropTypes.string
// };
function FormTextInputComponent({ input, meta, InputProps, ...custom }: any) {
  return (
    <TextField
      {...input}
      {...InputProps}
      margin={custom.margin}
      rows={custom.rows}
      rowsMax={custom.rowsMax}
      multiline={custom.multiline}
      placeholder={custom.placeholder}
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
      onChange={(e) => input.onChange(e)}
    >
      {InputProps.currencies &&
        InputProps.currencies.map((option: any) => (
          <MenuItem key={option[1]} value={option[0]}>
            {option[0]} - {option[1]}
          </MenuItem>
        ))}
    </TextField>
  );
}

// FormTextInputField.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     margin: PropTypes.string
// };
//
FormTextInputField.defaultProps = {
  margin: "normal",
};

export default function FormTextInputField(props: any) {
  const { min } = props;
  if (min) console.log(min);
  return <Field {...props} component={FormTextInputComponent} />;
}
