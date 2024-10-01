import { DefaultTheme, css, ThemedCssFunction } from 'styled-components';

interface MediaQueryProps {
  [key: string]: number;
}
const breakpoints: MediaQueryProps = {
  mobile: 500,
  tablet: 768,
  laptop: 1024,
  pc: 1440,
};

interface IMedia {
  pc: ThemedCssFunction<DefaultTheme>;
  tablet: ThemedCssFunction<DefaultTheme>;
  laptop: ThemedCssFunction<DefaultTheme>;
  mobile: ThemedCssFunction<DefaultTheme>;
}

const styledMedia = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${breakpoints[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join('');
    return acc;
  },
  {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>,
) as unknown as IMedia;

export default styledMedia;
