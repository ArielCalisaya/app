import { Box } from '@chakra-ui/react';
import { isDevMode } from '../utils';

export const getStaticProps = () => {
  if (!isDevMode) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      seo: {
        unlisted: true,
      },
    },
  };
};

export default function Example() {
  return (
    <Box>
      Pagina limpia!!!
    </Box>
  );
}
