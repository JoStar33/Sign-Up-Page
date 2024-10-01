import * as yup from 'yup';
import { validation } from '@/utils/validate/validation';

/**로그인*/
const signInSchema = yup.object({
  email: validation.EMAIL,
  password: validation.PASSWORD,
});

/**회원가입 첫번째 스탭 */
const signUpOneStepSchema = yup.object({
  email: validation.EMAIL,
  password: validation.PASSWORD,
  passwordConfirm: validation.PASSWORD_CONFIRM,
  name: validation.REQUIRED_TEXT_6({ maxLength: 6, minLength: 1 }),
});

/**회원가입 두번째 스탭 */
const signUpTwoStepSchema = yup.object({
  phoneNumber: validation.PHONE_NUMBER,
  address: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
  addressDetail: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
});

/**회원가입 세번째 스탭 */
const signUpThreeStepSchema = yup.object({
  agreement1: validation.REQUIRED_YES_CHECK,
  agreement2: validation.REQUIRED_YES_CHECK,
  agreement3: validation.REQUIRED_YES_CHECK,
  agreement4: validation.REQUIRED_YES_CHECK,
});

/**회원가입*/
const signUpSchema = yup.object({
  email: validation.EMAIL,
  password: validation.PASSWORD,
  passwordConfirm: validation.PASSWORD_CONFIRM,
  name: validation.REQUIRED_TEXT_6({ maxLength: 6, minLength: 1 }),
  phoneNumber: validation.PHONE_NUMBER,
  agreement: validation.REQUIRED_YES_CHECK,
  address: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
  addressDetail: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
});

export const schema = {
  signInSchema,
  signUpSchema,
  signUpOneStepSchema,
  signUpTwoStepSchema,
  signUpThreeStepSchema,
};
