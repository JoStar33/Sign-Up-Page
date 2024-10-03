import React from 'react';

/**
 * MSW내에 있는 가짜 데이터베이스 활성화 및 5분이후에 연결이 끊기는 이슈해결을 해주는 훅.
 */
export default function useMSWSetter() {
  const focusConnect = () => {
    if ('serviceWorker' in navigator) {
      // Manually Activate the MSW again
      navigator.serviceWorker.controller?.postMessage('MOCK_ACTIVATE');
    }
  };

  // MSW 연결이슈를 해결해주는 useEffect
  React.useEffect(() => {
    window.addEventListener('focus', focusConnect);
    return () => {
      window.removeEventListener('focus', focusConnect);
    };
  }, []);
}
