/** GET **/

import * as Auth from '@/types/auth';
import { requests } from '.';

/** POST **/
/**회원가입 */
export const postSignUp = (body: string) => {
  return requests.post<Auth.SignUpResponse>('/auth/sign-up', { data: body });
};

/** PUT **/

/** PATCH **/

/** DELETE **/
