import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '@/styles/GlobalStyles';
import Theme from '@/styles/Theme';
import DarkBackground from '@/components/common/DarkBackground';
import Loading from '@/components/common/Loading';
import { useLoadingStore } from '@/stores/loading';
import Router from '@/Router';
import Layout from '@/components/layouts';
import useMSWSetter from '@/hooks/useMSWSetter';

export default function App() {
  const { isLoading } = useLoadingStore();
  useMSWSetter();
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
      <AnimatePresence>
        {isLoading && (
          <DarkBackground>
            <Loading mode="fixed" />
          </DarkBackground>
        )}
      </AnimatePresence>
    </Theme>
  );
}
