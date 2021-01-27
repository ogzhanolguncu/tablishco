import { extendTheme } from '@chakra-ui/react';
import globalStyles from './styles';

const customTheme = extendTheme({
  globalStyles,
  colors: {
    fullBlack: '#343434',
    mainColor: '#FACE7D',
    bgColor: '#FBF7EF',
  },
  fonts: {
    body: `Inter, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
});
export default extendTheme(customTheme);
