import React from "react";
import { useField } from "formik";
import { useIntl, FormattedMessage } from "react-intl";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const intl = useIntl();
  return (
    <>
      {label && (
        <label htmlFor={props.id | props.name}>
          <FormattedMessage id={label} />
        </label>
      )}
      <input
        {...field}
        {...props}
        placeholder={intl.formatMessage({ id: props.placeholder })}
        className={
          meta.touched && meta.error
            ? `${props.className} ring-2 ring-red-700`
            : props.className
        }
      />
      {meta.touched && meta.error ? (
        <span className="text-red-700">
          <FormattedMessage id={meta.error} />
        </span>
      ) : null}
    </>
  );
};

export default Input;
