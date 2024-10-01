import { AnimatePresence } from 'framer-motion';
import Portal from '@/components/common/Portal';
import GlobalStyle from '@/styles/GlobalStyles';
import Theme from '@/styles/Theme';
import DarkBackground from '@/components/common/DarkBackground';
import Loading from '@/components/common/Loading';
import { useLoadingStore } from '@/stores/loading';
import Router from '@/Router';
import Layout from '@/components/layouts';

export default function App() {
  const { isLoading } = useLoadingStore();

  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
      <Portal>
        <AnimatePresence>
          {isLoading && (
            <DarkBackground>
              <Loading mode="fixed" />
            </DarkBackground>
          )}
        </AnimatePresence>
      </Portal>
    </Theme>
  );
}
