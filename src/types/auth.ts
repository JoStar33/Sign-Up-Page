import { DefaultResponse, YNType } from '.';

/*************************** Domain & DTO ***************************/

/******************************* Form ********************************/
export interface SignInForm {
  email: string;
  password: string;
}

export interface SignUpOneStepForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignUpTwoStepForm {
  phoneNumber: string;
  address: string;
  addressDetail: string;
}

export interface SignUpThreeStepForm {
  agreement: YNType;
}

export type SignUpForm = SignUpOneStepForm | SignUpTwoStepForm | SignUpThreeStepForm;

/***************************** Request *****************************/
export type SignUpRequest = Omit<SignUpForm, 'passwordConfirm'>;

/***************************** Response *****************************/
export interface SignUpResponse extends DefaultResponse {
  value: string;
}
