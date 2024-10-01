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
  agreement1: YNType;
  agreement2: YNType;
  agreement3: YNType;
  agreement4: YNType;
}

export type SignUpForm = SignUpOneStepForm &
  SignUpTwoStepForm & {
    agreement: YNType;
  };

/***************************** Request *****************************/
export type SignUpRequest = Omit<SignUpForm, 'passwordConfirm'>;

/***************************** Response *****************************/
export interface SignUpResponse extends DefaultResponse {
  value: string;
}
