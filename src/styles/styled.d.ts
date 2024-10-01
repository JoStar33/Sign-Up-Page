import 'styled-components';
import { ColorsTypes } from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    pc: ThemedCssFunction<DefaultTheme>;
    tablet: ThemedCssFunction<DefaultTheme>;
    laptop: ThemedCssFunction<DefaultTheme>;
    mobile: ThemedCssFunction<DefaultTheme>;
    colors: ColorsTypes;
  }
}
