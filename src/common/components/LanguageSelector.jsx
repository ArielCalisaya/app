import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import styles from '../../../styles/flags.module.css';
import navbarTR from '../translations/navbar';
// import NextChakraLink from './NextChakraLink';

const LanguageSelector = ({ display, translations }) => {
  const router = useRouter();
  const locale = router.locale === 'default' ? 'en' : router.locale;
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const {
    languagesTR,
  } = navbarTR[locale];
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const currentLanguage = languagesTR.filter((l) => l.value === locale)[0];

  const translationsPropsExists = Object.keys(translations).length > 0;

  return (
    <Popover
      id="Language-Hover"
      isOpen={languagesOpen}
      onClose={() => setLanguagesOpen(false)}
      placement="bottom-start"
      trigger="click"
    >
      <PopoverTrigger>
        <Button
          padding="0"
          display={display}
          aria-label="Language Selector"
          textAlign="-webkit-center"
          height="auto"
          backgroundColor="transparent"
          width="auto"
          alignSelf="center"
          _hover={{
            background: 'transparent',
          }}
          _active={{
            background: 'transparent',
          }}
          onClick={() => setLanguagesOpen(!languagesOpen)}
        >
          <Box
            className={`${styles.flag} ${styles[currentLanguage.value]}`}
            width="25px"
            height="25px"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        // border={0}
        // boxShadow="dark-lg"
        bg={popoverContentBgColor}
        rounded="md"
        width={{ base: '100%', md: 'auto' }}
        minW="210px"
      >
        <PopoverArrow />
        <Box
          width="100%"
          display="flex"
          boxShadow="2xl"
          flexDirection="column"
          gridGap="10px"
          padding="12px"
        >
          {((translationsPropsExists
            && Object.keys(translations))
            || languagesTR).map((l) => {
            const lang = languagesTR.filter((language) => language.value === l)[0];
            const value = translationsPropsExists ? lang.value : l.value;
            const label = translationsPropsExists ? lang.label : l.label;

            const cleanedUrl = router.asPath.replace(`/${value}/`, '');
            return (
              <Link
                width="100%"
                key={value}
                href={`/${value}${cleanedUrl}`}
                // locale={value}
                role="group"
                alignSelf="center"
                display="flex"
                gridGap="5px"
                fontWeight="bold"
                textDecoration="none"
                opacity={locale === (value) ? 1 : 0.75}
                _hover={{
                  opacity: 1,
                }}
              >
                <Box className={`${styles.flag} ${styles[value]}`} width="25px" height="25px" />
                {label}
              </Link>
              // <NextChakraLink
              //   width="100%"
              //   key={value}
              //   href={href}
              //   // locale={value}
              //   role="group"
              //   alignSelf="center"
              //   display="flex"
              //   gridGap="5px"
              //   fontWeight="bold"
              //   textDecoration="none"
              //   opacity={locale === (value) ? 1 : 0.75}
              //   _hover={{
              //     opacity: 1,
              //   }}
              // >
              //   <Box className={`${styles.flag} ${styles[value]}`} width="25px" height="25px" />
              //   {label}
              // </NextChakraLink>
            );
          })}
        </Box>
      </PopoverContent>
    </Popover>
  );
};

LanguageSelector.propTypes = {
  translations: PropTypes.objectOf(PropTypes.any),
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

LanguageSelector.defaultProps = {
  translations: {},
};

export default LanguageSelector;
