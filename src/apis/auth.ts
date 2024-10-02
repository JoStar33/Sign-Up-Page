/** GET **/

import * as Auth from '@/types/auth';
import { requests } from '.';

/** POST **/
/**회원가입 */
export const postSignUp = (body: Auth.SignUpRequest) => {
  return requests.post<Auth.SignUpResponse>('/auth/sign-up', body);
};

/** PUT **/

/** PATCH **/

/** DELETE **/
