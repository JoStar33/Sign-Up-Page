import { HttpResponse } from 'msw';
import { CommonResponseReturn } from '@/mocks/types';

const CustomResponse = ({ code, message, value }: CommonResponseReturn) =>
  new HttpResponse(
    JSON.stringify({
      code,
      message,
      value,
    }),
    {
      status: code,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

export default CustomResponse;
