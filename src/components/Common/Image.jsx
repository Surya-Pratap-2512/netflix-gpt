import React from "react";
import { useIntl } from "react-intl";

const Image = ({ src, alt, className }) => {
  const intl = useIntl();
  return (
    <img
      src={src}
      alt={intl.formatMessage({ id: alt })}
      className={className}
    />
  );
};

export default Image;
