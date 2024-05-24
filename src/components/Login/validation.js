import * as Yup from "yup";

const LoginValidation = (isSignIn) => {
  return Yup.object({
    firstName: Yup.string().when([], {
      is: () => !isSignIn,
      then: () => Yup.string().required("errReq").max(15, "errMax"),
    }),
    lastName: Yup.string().when([], {
      is: () => !isSignIn,
      then: () => Yup.string().required("errReq").max(20, "errMax"),
    }),
    email: Yup.string().required("errReq").email(),
    password: Yup.string()
      .required("errReq")
      .min(6, "errMin")
      .max(10, "errMax"),
  });
};

export default LoginValidation;
