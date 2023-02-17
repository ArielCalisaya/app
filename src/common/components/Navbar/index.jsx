import {
  Box, Flex, IconButton, Avatar, Stack, Collapse, useColorModeValue,
  useBreakpointValue, useDisclosure, useColorMode, Popover, PopoverTrigger,
  PopoverContent, PopoverArrow, Button, useMediaQuery,
} from '@chakra-ui/react';
import {
  useState, memo, useEffect, Fragment,
} from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { es } from 'date-fns/locale';
import { formatDistanceStrict } from 'date-fns';
import NextChakraLink from '../NextChakraLink';
import Icon from '../Icon';
import DesktopNav from '../../../js_modules/navbar/DesktopNav';
import MobileNav from '../../../js_modules/navbar/MobileNav';
import { usePersistent } from '../../hooks/usePersistent';
import Heading from '../Heading';
import Text from '../Text';
import useAuth from '../../hooks/useAuth';
import LanguageSelector from '../LanguageSelector';
import syllabusList from '../../../../public/syllabus.json';
import { isWindow } from '../../../utils';

const NavbarWithSubNavigation = ({ haveSession, translations, pageProps }) => {
  const { t } = useTranslation('navbar');
  const router = useRouter();
  // const [readSyllabus, setReadSyllabus] = useState([]);
  const [ITEMS, setITEMS] = useState([]);
  const [isBelowTablet] = useMediaQuery('(max-width: 1000px)');
  const locale = router.locale === 'default' ? 'en' : router.locale;

  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const commonColors = useColorModeValue('white', 'gray.800');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const commonBorderColor = useColorModeValue('gray.200', 'gray.700');
  const { user, logout } = useAuth();
  const [cohortSession] = usePersistent('cohortSession', {});
  const [settingsOpen, setSettingsOpen] = useState(false);

  const langs = ['en', 'es'];
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const fontColor = useColorModeValue('black', 'gray.200');

  const query = isWindow && new URLSearchParams(window.location.search || '');
  const queryToken = isWindow && query.get('token')?.split('?')[0];
  const queryTokenExists = isWindow && queryToken !== undefined && queryToken;
  const sessionExists = haveSession || queryTokenExists;

  const { selectedProgramSlug } = cohortSession;

  const programSlug = cohortSession?.selectedProgramSlug || '/choose-program';

  const noscriptItems = t('ITEMS', {
    selectedProgramSlug: selectedProgramSlug || '/choose-program',
  }, { returnObjects: true });
  const readSyllabus = JSON.parse(syllabusList);

  useEffect(() => {
    const items = t('ITEMS', {
      selectedProgramSlug: selectedProgramSlug || '/choose-program',
    }, { returnObjects: true });
    setITEMS(items.filter((item) => item.disabled !== true));
  }, [selectedProgramSlug]);

  // Verify if teacher acces is with current cohort role
  const getDateJoined = user?.active_cohort?.date_joined
    || cohortSession?.date_joined
    || new Date();

  const dateJoined = {
    en: `Member since ${formatDistanceStrict(
      new Date(getDateJoined),
      new Date(),
      { addSuffix: true },
    )}`,
    es: `Miembro desde ${formatDistanceStrict(
      new Date(getDateJoined),
      new Date(),
      { addSuffix: true, locale: es },
    )}`,
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const userImg = user?.profile?.avatar_url || user?.github?.avatar_url;
  // const getImage = () => {
  //   if (user && user.github) {
  //     return user.github.avatar_url;
  //   }
  //   return '';
  // };

  const getName = () => {
    if (user && user?.first_name) {
      return `${user?.first_name} ${user?.last_name}`;
    }
    return user?.github?.name;
  };

  if (pageProps?.previewMode) return null;

  return (
    <Box>
      <Flex
        transition="all .2s ease"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        // minH="60px"
        height="7vh"
        py={{ base: '8px' }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={isBelowTablet ? 'flex' : 'none'}
          gridGap="12px"
          className="here-2"
        >
          <IconButton
            onClick={onToggle}
            _hover={{
              background: commonColors,
            }}
            _active={{
              background: commonColors,
            }}
            background={commonColors}
            icon={
              isOpen ? (
                <Icon icon="close2" width="22px" height="22px" />
              ) : (
                <Icon icon="hamburger2" width="22px" height="22px" />
              )
            }
            variant="default"
            height="auto"
            aria-label="Toggle Navigation"
          />
          <NextChakraLink href={sessionExists ? programSlug : '/'} alignSelf="center" display="flex">
            <Icon icon="logoModern" width="90px" height="20px" />
          </NextChakraLink>
        </Flex>

        <Flex className="here" flex={{ base: 1 }} display={isBelowTablet ? 'none' : 'flex'} justify={{ base: 'center', md: 'start' }}>
          <NextChakraLink href={sessionExists ? programSlug : '/'} alignSelf="center" display="flex">
            <Icon icon="logoModern" width="90px" height="20px" />
          </NextChakraLink>

          <Flex display="flex" ml={10}>
            <DesktopNav NAV_ITEMS={ITEMS.length > 0 ? ITEMS : noscriptItems} haveSession={sessionExists} readSyllabus={readSyllabus} />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" gridGap="5px">
          <LanguageSelector display={{ base: 'none ', md: 'block' }} translations={translations} />
          <IconButton
            style={{
              margin: 0,
            }}
            display={useBreakpointValue({ base: 'none', md: 'flex' })}
            height="auto"
            _hover={{
              background: commonColors,
            }}
            _active={{
              background: commonColors,
            }}
            aria-label="Dark mode switch"
            background={commonColors}
            onClick={() => {
              // if (colorMode === 'light') {
              //   document.documentElement.setAttribute('data-color-mode', 'dark');
              // } else {
              //   document.documentElement.setAttribute('data-color-mode', 'light');
              // }
              toggleColorMode();
            }}
            icon={
              colorMode === 'light' ? (
                <Icon icon="light" width="25px" height="23px" color="black" />
              ) : (
                <Icon icon="dark" width="20px" height="20px" />
              )
            }
          />

          {sessionExists ? (
            <Popover
              id="Avatar-Hover"
              isOpen={settingsOpen}
              onClose={closeSettings}
              placement="bottom-start"
              trigger="click"
            >
              <PopoverTrigger>
                <Button
                  bg="rgba(0,0,0,0)"
                  alignSelf="center"
                  width="20px"
                  minWidth="20px"
                  maxWidth="20px"
                  height="30px"
                  borderRadius="30px"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                >
                  <Avatar
                    // name={user?.first_name}
                    width="30px"
                    marginY="auto"
                    height="30px"
                    src={userImg}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow="2xl"
                // bg={popoverContentBgColor}
                rounded="md"
                width={{ base: '100%', md: 'auto' }}
                minW={{ base: 'auto', md: 'md' }}
              >
                <PopoverArrow />
                <Box
                  // border={0}
                  boxShadow="dark-lg"
                  bg={popoverContentBgColor}
                  rounded="md"
                  width={{ base: '100%', md: 'auto' }}
                  minW={{ base: 'auto', md: 'md' }}
                >

                  {/* Language Section */}
                  <Box
                    width="100%"
                    borderBottom={2}
                    borderStyle="solid"
                    borderColor={commonBorderColor}
                    display="flex"
                    justifyContent="space-between"
                    padding="12px 1.5rem"
                  >
                    <Text size="md" fontWeight="700">
                      {t('language')}
                    </Text>
                    <Box display="flex" flexDirection="row">
                      {langs.map((lang, i) => {
                        const getIconFlags = lang === 'en' ? 'usaFlag' : 'spainFlag';
                        const getLangName = lang === 'en' ? 'Eng' : 'Esp';
                        return (
                          <Fragment key={lang}>
                            <NextChakraLink
                              _hover={{
                                textDecoration: 'none',
                                color: 'blue.default',
                              }}
                              color={locale === lang ? 'blue.default' : linkColor}
                              fontWeight={locale === lang ? '700' : '400'}
                              href={router.asPath}
                              locale={lang}
                              display="flex"
                              alignItems="center"
                              textTransform="uppercase"
                              gridGap="5px"
                              size="sm"
                            >
                              <Icon icon={getIconFlags} width="16px" height="16px" />
                              {getLangName}
                            </NextChakraLink>
                            {
                              i < langs.length - 1 && (
                                <Box width="1px" height="100%" background="gray.350" margin="0 6px" />
                              )
                            }
                          </Fragment>
                        );
                      })}
                    </Box>
                  </Box>

                  {/* Container Section */}
                  <Box p="1rem 1.5rem 0 1.5rem">
                    <Stack flexDirection="row" gridGap="10px" pb="15px">
                      <Avatar
                        // name={user?.first_name}
                        width="62px"
                        marginY="auto"
                        height="62px"
                        src={userImg}
                      />
                      <Flex flexDirection="column" alignItems="flex-start" gridGap="6px">
                        <Heading as="p" size="20px" fontWeight="700">
                          {getName() || ''}
                        </Heading>
                        {(cohortSession?.date_joined || user?.active_cohort?.date_joined) && (
                          <Heading as="p" size="16px" maxWidth="300px" textTransform="initial" fontWeight="400">
                            {dateJoined[locale]}
                          </Heading>
                        )}
                      </Flex>
                    </Stack>

                    <Flex
                      borderTop={2}
                      borderStyle="solid"
                      borderColor={commonBorderColor}
                      // padding="20px 0"
                      alignItems="center"
                      padding="1rem 0rem"
                    >
                      <NextChakraLink
                        href="/profile/info"
                        fontWeight="400"
                        color={fontColor}
                        fontSize="14px"
                        textDecoration="none"
                        // cursor="pointer"
                        _hover={{
                          textDecoration: 'none',
                        }}
                        letterSpacing="0.05em"
                      >
                        {t('my-profile')}
                      </NextChakraLink>
                    </Flex>
                    <Flex
                      borderTop={2}
                      borderStyle="solid"
                      borderColor={commonBorderColor}
                      // padding="20px 0"
                      alignItems="center"
                      padding="1rem 0rem"
                    >
                      <Box
                        as="button"
                        cursor="pointer"
                        width="auto"
                        display="flex"
                        gridGap="10px"
                        onClick={() => {
                          setSettingsOpen(false);
                          setTimeout(() => {
                            logout();
                          }, 150);
                        }}
                      >
                        <Icon icon="logout" width="20px" height="20px" />
                        <Box
                          fontWeight="700"
                          color="blue.400"
                          as="span"
                          fontSize="14px"
                        >
                          {t('logout')}
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </PopoverContent>
            </Popover>
          ) : (
            <NextChakraLink
              href="/login"
              fontWeight="700"
              style={{
                margin: '0 0px 0 10px',
              }}
              fontSize="13px"
              lineHeight="22px"
              _hover={{
                textDecoration: 'none',
              }}
              letterSpacing="0.05em"
            >
              <Button
                display={useBreakpointValue({ base: 'flex', md: 'flex' })}
                width="100px"
                fontWeight={700}
                lineHeight="0.05em"
                variant="default"
              >
                {t('login')}
              </Button>
            </NextChakraLink>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {isBelowTablet && (
          <MobileNav
            NAV_ITEMS={ITEMS}
            haveSession={sessionExists}
            translations={translations}
            readSyllabus={readSyllabus}
            isBelowTablet
          />
        )}
      </Collapse>
    </Box>
  );
};

NavbarWithSubNavigation.propTypes = {
  haveSession: PropTypes.bool,
  translations: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.any]),
  pageProps: PropTypes.objectOf(PropTypes.any),
};
NavbarWithSubNavigation.defaultProps = {
  haveSession: false,
  translations: undefined,
  pageProps: undefined,
};

export default memo(NavbarWithSubNavigation);
