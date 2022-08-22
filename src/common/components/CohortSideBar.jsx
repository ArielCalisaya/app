import { memo, useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Divider,
  Grid,
  useColorMode,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import io from 'socket.io-client';
import bc from '../services/breathecode';
import axios from '../../axios';
import Icon from './Icon';
import Text from './Text';
import AvatarUser from '../../js_modules/cohortSidebar/avatarUser';
import { AvatarSkeleton } from './Skeleton';
import { usePersistent } from '../hooks/usePersistent';

const ProfilesSection = ({
  title, paginationProps, setAlumniGeeksList, profiles, usersConnected,
}) => {
  const { t } = useTranslation('dashboard');
  const [showMoreStudents, setShowMoreStudents] = useState(false);
  // limit the student list to 15 and when "showMoreStudents" is true, show all
  const studentsToShow = showMoreStudents ? profiles : profiles?.slice(0, 15);
  return (
    <Box display="block">
      {title && (
        <Heading as="h4" padding="0 0 8px 0" fontSize={15} lineHeight="18px" margin={0}>
          {title}
        </Heading>
      )}
      <Grid
        gridAutoRows="3.4rem"
        templateColumns="repeat(auto-fill, minmax(3.5rem, 1fr))"
        gap={0}
        minH={showMoreStudents ? '395px' : 'auto'}
      >
        {
          studentsToShow?.map((c) => {
            const fullName = `${c.user.first_name} ${c.user.last_name}`;
            const isConnected = usersConnected.some((id) => c.user.id === id);
            console.log(fullName, 'id:', c.user.id, isConnected);
            return (
              <AvatarUser key={`${c.id} - ${c.user.first_name}`} isConnected={isConnected} fullName={fullName} data={c} />
            );
          })
        }
      </Grid>

      {paginationProps && (
        <Box display={profiles.length <= 15 || showMoreStudents ? 'flex' : 'none'} justifyContent="center" gridGap="10px">
          <Box
            color="blue.default"
            cursor={paginationProps.next ? 'pointer' : 'not-allowed'}
            opacity={paginationProps.next ? 1 : 0.6}
            fontSize="15px"
            display="flex"
            alignItems="center"
            gridGap="10px"
            letterSpacing="0.05em"
            padding="14px 0 0 0"
            fontWeight="700"
            onClick={() => {
              if (paginationProps.next) {
                axios.get(paginationProps.next)
                  .then(({ data }) => {
                    const cleanedData = [...profiles, ...data.results];
                    setAlumniGeeksList({
                      ...data,
                      results: cleanedData.sort(
                        (a, b) => a.user.first_name.localeCompare(b.user.first_name),
                      ),
                    });
                  });
              }
            }}
          >
            {t('common:load-more')}
            <Box
              as="span"
              display="block"
              transform="rotate(-90deg)"
            >
              <Icon icon="arrowLeft2" width="18px" height="10px" />
            </Box>
          </Box>
        </Box>
      )}

      {profiles?.length > 15 && (
        <Text
          display="flex"
          cursor="pointer"
          color="blue.default"
          alignItems="center"
          width="auto"
          fontWeight="700"
          padding="14px 0 0 0"
          justifyContent="center"
          gridGap="10px"
          size="md"
          onClick={() => setShowMoreStudents(!showMoreStudents)}
        >
          {showMoreStudents ? t('cohortSideBar.show-less') : t('cohortSideBar.show-more')}
          <Box
            as="span"
            display="flex"
            onClick={(e) => e.preventDefault()}
            transition="all .25s ease-in-out"
            transform={showMoreStudents ? 'rotate(-90deg)' : 'rotate(90deg)'}
          >
            <Icon icon="arrowRight" color="#0097CD" width="12px" height="12px" />
          </Box>
        </Text>
      )}
    </Box>
  );
};

const CohortSideBar = ({
  title, teacherVersionActive, cohort, cohortCity, background, width, containerStyle,
  studentAndTeachers,
}) => {
  const { t } = useTranslation('dashboard');
  const router = useRouter();
  const toast = useToast();
  const { slug } = router.query;
  const { colorMode } = useColorMode();
  const [alumniGeeksList, setAlumniGeeksList] = useState({});
  const [activeStudentsLoading, setActiveStudentsLoading] = useState(true);
  const [graduatedStudentsLoading, setGraduatedStudentsLoading] = useState(true);
  const [profile] = usePersistent('profile', {});
  const [usersConnected, setUsersConnected] = useState([]);
  const teacher = studentAndTeachers.filter((st) => st.role === 'TEACHER');
  const activeStudents = studentAndTeachers.filter(
    (st) => st.role === 'STUDENT' && st.educational_status === 'ACTIVE',
  );
  const studentsJoined = alumniGeeksList.results?.filter(
    (st) => st.role === 'STUDENT' && st.educational_status !== 'ACTIVE',
  );

  const teacherAssistants = studentAndTeachers.filter((st) => st.role === 'ASSISTANT');
  const commonTextColor = useColorModeValue('gray.600', 'gray.200');

  const kickoffDate = {
    en: format(new Date(cohort.kickoff_date), 'MMM do'),
    es: format(new Date(cohort.kickoff_date), 'MMM d', { locale: es }),
  };

  const endingDate = {
    en: format(new Date(cohort.ending_date), 'MMM do'),
    es: format(new Date(cohort.ending_date), 'MMM d', { locale: es }),
  };

  // Alumni Geeks data
  useEffect(() => {
    bc.cohort({
      limit: 60,
      roles: 'STUDENT',
      syllabus: slug,
      distinct: true,
    }).getFilterStudents()
      .then(({ data }) => {
        // const uniqueIds = new Set();
        // const cleanedData = data.results.filter((l) => {
        //   const isDuplicate = uniqueIds.has(l.id);
        //   uniqueIds.add(l.id);
        //   if (!isDuplicate) {
        //     return true;
        //   }
        //   return false;
        // });

        setAlumniGeeksList({
          ...data,
          results: data.results.sort(
            (a, b) => a.user.first_name.localeCompare(b.user.first_name),
          ),
        });
      }).catch(() => {
        toast({
          title: t('alert-message:error-fetching-alumni-geeks'),
          status: 'error',
          duration: 7000,
          isClosable: true,
        });
      });
  }, [slug]);

  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const socket = io();
      if (profile?.id) {
        socket.once('connect', () => {
          socket.emit('user-connection', { userId: profile.id });
        });
      } else {
        socket.emit('user-disconnection', { userId: profile.id });
      }

      // socket.on('disconnect', () => {
      //   console.log('disconnect');
      // });
      socket.on('user-info', (data) => {
        // console.log('data received from server:::', data);

        // eslint-disable-next-line no-unused-vars
        const userIds = Object.entries(data).map(([_, v]) => v);
        setUsersConnected(userIds);
      });
    });
  }, []);

  console.log('usersConnected:::', usersConnected);

  useEffect(() => {
    if (studentsJoined?.length === 0) {
      setTimeout(() => {
        setGraduatedStudentsLoading(false);
      }, 2500);
    }
    if (activeStudents.length === 0) {
      setTimeout(() => {
        setActiveStudentsLoading(false);
      }, 4000);
    }
  }, [studentsJoined]);

  return (
    <Box
      transition="background 0.2s ease-in-out"
      width={width}
      style={containerStyle}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={colorMode === 'light' ? background || 'blue.light' : 'featuredDark'}
    >
      <Box padding={26}>
        <Heading
          as="h4"
          fontSize={15}
          fontWeight="900"
          margin={0}
          lineHeight="18px"
          letterSpacing="0.05em"
          marginBottom={18}
          textTransform="uppercase"
        >
          {t('cohortSideBar.title')}
        </Heading>
        <Box d="flex" alignItems="center" marginBottom={18}>
          <Icon icon="group" width="39px" height="39px" />
          <Box id="cohort-dates" marginLeft={13}>
            <Heading as="h4" color={commonTextColor} fontSize={15} fontWeight="700" lineHeight="18px" margin={0}>
              {(`${t('cohortSideBar.cohort')} ${teacherVersionActive ? ` | ${router.locale === 'en' ? 'Day' : 'Día'} ${cohort.current_day}` : ''}`) || title}
            </Heading>
            <Text size="l" color={commonTextColor} fontWeight="400" lineHeight="18px" margin={0}>
              {cohortCity}
            </Text>
            {cohort.ending_date !== null && (
              <>
                <Text pt="4px" size="sm" color={commonTextColor} fontWeight="700" lineHeight="18px" margin={0}>
                  {t('cohortSideBar.last-date')}
                  {' '}
                  <Text as="span" size="sm" color={commonTextColor} fontWeight="400" lineHeight="18px" margin={0}>
                    {endingDate[router.locale]}
                  </Text>
                </Text>
                <Text size="sm" color={commonTextColor} fontWeight="700" lineHeight="18px" margin={0}>
                  {t('cohortSideBar.start-date')}
                  {' '}
                  <Text as="span" size="sm" color={commonTextColor} fontWeight="400" lineHeight="18px" margin={0}>
                    {kickoffDate[router.locale]}
                  </Text>
                </Text>
              </>
            )}
          </Box>
        </Box>
        {!teacherVersionActive && teacher.map((el) => {
          const { user } = el;
          const fullName = `${user.first_name} ${user.last_name}`;
          return (
            <Box id="cohort-teachers" key={fullName} d="flex" alignItems="center">
              <AvatarUser data={el} />
              <Box marginLeft={13}>
                <Heading as="h4" fontSize={15} fontWeight="700" lineHeight="tight" margin={0}>
                  {t('cohortSideBar.mainTeacher')}
                </Heading>
                <Text size="l" fontWeight="400" lineHeight="18px" margin={0}>
                  {fullName}
                </Text>
              </Box>
            </Box>
          );
        })}
        {teacher.length === 0 && t('cohortSideBar.no-teachers')}
      </Box>
      <Divider margin={0} style={{ borderColor: useColorModeValue('gray.250', 'gray.700') }} />
      <Box id="cohort-students" display="flex" flexDirection="column" gridGap="20px" padding="18px 26px">
        {teacherAssistants.length > 0 && (
          <ProfilesSection
            title={t('cohortSideBar.assistant')}
            profiles={teacherAssistants}
            usersConnected={usersConnected}
          />
        )}
        <Tabs display="flex" flexDirection="column" variant="unstyled" gridGap="16px">
          <TabList display="flex" width="100%">
            <Tab
              p="0 14px 14px 14px"
              display="block"
              textAlign="center"
              isDisabled={false}
              textTransform="uppercase"
              fontWeight="900"
              fontSize="13px"
              letterSpacing="0.05em"
              width="100%"
              // height="100%"
              _selected={{
                color: 'blue.default',
                borderBottom: '4px solid',
                borderColor: 'blue.default',
              }}
              _disabled={{
                opacity: 0.5,
                cursor: 'not-allowed',
              }}
            >
              {cohort.ending_date
                ? t('cohortSideBar.classmates', { studentsLength: activeStudents.length })
                : t('cohortSideBar.active-geeks', { studentsLength: activeStudents.length })}
            </Tab>
            <Tab
              p="0 14px 14px 14px"
              display="block"
              textAlign="center"
              isDisabled={false}
              textTransform="uppercase"
              fontWeight="900"
              fontSize="13px"
              letterSpacing="0.05em"
              width="100%"
              // height="100%"
              _selected={{
                color: 'blue.default',
                borderBottom: '4px solid',
                borderColor: 'blue.default',
              }}
              _disabled={{
                opacity: 0.5,
                cursor: 'not-allowed',
              }}
            >
              {t('cohortSideBar.alumni-geeks', { studentsLength: alumniGeeksList?.count || 0 })}
            </Tab>
          </TabList>
          <TabPanels p="0">
            <TabPanel p="0">
              {activeStudents.length !== 0
                ? (
                  <ProfilesSection
                    profiles={activeStudents}
                    usersConnected={usersConnected}
                  />
                ) : (
                  <>
                    {activeStudentsLoading ? (
                      <AvatarSkeleton pt="0" quantity={15} />
                    ) : t('cohortSideBar.no-active-students')}
                  </>
                )}
            </TabPanel>
            <TabPanel p="0">
              {studentsJoined?.length !== 0
                ? (
                  <ProfilesSection
                    profiles={studentsJoined}
                    setAlumniGeeksList={setAlumniGeeksList}
                    paginationProps={alumniGeeksList}
                  />
                ) : (
                  <>
                    {graduatedStudentsLoading ? (
                      <AvatarSkeleton pt="0" quantity={15} />
                    ) : t('cohortSideBar.no-graduated-students')}
                  </>
                )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

ProfilesSection.propTypes = {
  title: PropTypes.string,
  paginationProps: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  setAlumniGeeksList: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  profiles: PropTypes.arrayOf(PropTypes.object),
  usersConnected: PropTypes.arrayOf(PropTypes.number),
};

ProfilesSection.defaultProps = {
  title: '',
  paginationProps: null,
  setAlumniGeeksList: () => {},
  profiles: [],
  usersConnected: [],
};

CohortSideBar.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  teacherVersionActive: PropTypes.bool,
  containerStyle: PropTypes.objectOf(PropTypes.any),
  studentAndTeachers: PropTypes.arrayOf(PropTypes.object),
  cohortCity: PropTypes.string,
  cohort: PropTypes.objectOf(PropTypes.any),
  background: PropTypes.string,
  // handleStudySession: PropTypes.func,
};
CohortSideBar.defaultProps = {
  width: '352px',
  title: '',
  teacherVersionActive: false,
  containerStyle: {},
  studentAndTeachers: [
    {
      id: 688,
      user: {
        id: 545,
        first_name: 'Fake',
        last_name: 'Student',
        email: 'fake_mail+1@gmail.com',
      },
      role: 'STUDENT',
      finantial_status: null,
      educational_status: 'GRADUATED',
      created_at: '2020-11-09T17:02:18.273000Z',
    },
    {
      id: 753,
      user: {
        id: 584,
        first_name: 'Carlos',
        last_name: 'Maldonado',
        email: 'carlos234213ddewcdzxc@gmail.com',
      },
      role: 'STUDENT',
      finantial_status: null,
      educational_status: 'GRADUATED',
      created_at: '2020-11-09T17:02:18.600000Z',
    },
    {
      id: 2164,
      user: {
        id: 1563,
        first_name: 'Felipe',
        last_name: 'Valenzuela',
        email: 'felipe_+43@gmail.com',
      },
      role: 'TEACHER',
      finantial_status: null,
      educational_status: null,
      created_at: '2020-11-09T17:02:33.773000Z',
    },
    {
      id: 2308,
      user: {
        id: 1593,
        first_name: 'Hernan',
        last_name: 'Garcia',
        email: 'hernan.jkd@gmail.com',
      },
      role: 'ASSISTANT',
      finantial_status: null,
      educational_status: null,
      created_at: '2020-11-09T17:02:34.279000Z',
    },
  ],
  cohortCity: 'Miami Downtown',
  cohort: {},
  background: '',
  // handleStudySession: () => {},
};

export default memo(CohortSideBar);
