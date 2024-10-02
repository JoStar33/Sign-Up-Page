import environment from '@/environment';

const VERSION = '/v1';
const URL_API = '/api';

export const commonUrl = (path?: string) => `${environment.serverUrl}${URL_API}${VERSION}${path}`;
