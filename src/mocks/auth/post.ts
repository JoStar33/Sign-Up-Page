import { delay, http } from 'msw';
import { commonUrl } from '@/mocks';
import CustomResponse from '../utils/customResponse';
const authUrl = (path?: string) => `${commonUrl(`/auth${path}`)}`;

const authPostHandler = [
  http.post(`${authUrl('/sign-up')}`, async () => {
    await delay(3000);
    return CustomResponse({
      code: 200,
      message: '성공!',
      value: undefined,
    });
  }),
];

export default authPostHandler;
