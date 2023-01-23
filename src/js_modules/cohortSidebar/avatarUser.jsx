import { memo } from 'react';
import {
  WrapItem,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Box,
  useMediaQuery,
  AvatarBadge,
  useColorModeValue,
  // AvatarBadge,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';
import Heading from '../../common/components/Heading';
import Text from '../../common/components/Text';

const AvatarUser = ({
  data, fullName, containerStyle, width, height, badge, customBadge, isOnline, isWrapped, index, withoutPopover,
}) => {
  const { user } = data;
  const { t } = useTranslation('dashboard');
  const fullNameLabel = fullName || `${user.first_name} ${user.last_name}`;
  const router = useRouter();

  const [isBelowTablet] = useMediaQuery('(max-width: 768px)');
  const dateFormated = {
    en: data?.created_at && format(new Date(data?.created_at), 'MMMM dd, yyyy'),
    es: data?.created_at && format(new Date(data?.created_at), "dd 'de' MMMM, yyyy", { locale: es }),
  };

  const borderColor = useColorModeValue('white', 'featuredDark');

  const roles = {
    teacher: t('common:teacher'),
    assistant: t('common:assistant'),
    student: t('common:student'),
  };
  const infoText = {
    en: `${roles[data?.role?.toLowerCase()] || 'member'} in this cohort since`,
    es: `${roles[data?.role?.toLowerCase()] || 'member'} en esta cohorte desde`,
  };
  const placementCard = isBelowTablet ? 'auto' : 'left-end';

  return !withoutPopover ? (
    <Popover trigger="hover" key={fullNameLabel} placement={placementCard}>
      <PopoverTrigger>
        <WrapItem as="div" aria-expanded={false} justifyContent="center" alignItems="center" style={containerStyle}>
          <Avatar
            id={fullNameLabel}
            width={width}
            height={height}
            style={{ userSelect: 'none' }}
            title={fullNameLabel}
            src={user?.profile?.avatar_url || user?.github?.avatar_url}
            marginLeft={isWrapped ? '-10px' : '0px'}
            zIndex={index}
          >
            {customBadge && (customBadge)}
            {badge && isOnline && (
              <AvatarBadge
                boxSize="11px"
                // bg={isOnline ? 'success' : 'danger'}
                bg="success"
                top="-4px"
                right={isWrapped ? '6px' : '4px'}
                border="2px solid"
                borderColor={borderColor}
              />
            )}
          </Avatar>
        </WrapItem>
      </PopoverTrigger>
      <PopoverContent>
        {data?.role && (
          <PopoverHeader>
            <Heading
              size="15px"
              fontWeight="semibold"
              textTransform="uppercase"
              py="4px"
              px="8px"
              dangerouslySetInnerHTML={{
                __html: `${roles[data?.role?.toLowerCase()] || 'member'}`,
              }}
            />
          </PopoverHeader>
        )}
        <PopoverArrow />
        <PopoverBody display="flex" flexDirection="row" gridGap="15px" my="8px">
          <Avatar
            id={fullNameLabel}
            width="95px"
            height="95px"
            style={{ userSelect: 'none' }}
            src={user?.profile?.avatar_url || user?.github?.avatar_url}
          />
          <Box display="flex" flexDirection="column" justifyContent="center" gridGap="10px" height="auto">
            <Heading size="15px">
              {fullNameLabel}
            </Heading>
            <Text size="sm" fontWeight="400">
              {`${infoText[router?.locale]} ${dateFormated[router?.locale]}`}
            </Text>

          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ) : (
    <WrapItem as="div" aria-expanded={false} justifyContent="center" alignItems="center" style={containerStyle}>
      <Avatar
        id={fullNameLabel}
        width={width}
        height={height}
        style={{ userSelect: 'none' }}
        title={fullNameLabel}
        src={user?.profile?.avatar_url || user?.github?.avatar_url}
        marginLeft={isWrapped ? '-10px' : '0px'}
        zIndex={index}
      >
        {customBadge && (customBadge)}
        {badge && isOnline && (
          <AvatarBadge
            boxSize="11px"
            // bg={isOnline ? 'success' : 'danger'}
            bg="success"
            top="-4px"
            right={isWrapped ? '6px' : '4px'}
            border="2px solid"
            borderColor={borderColor}
          />
        )}
      </Avatar>
    </WrapItem>
  );
};

AvatarUser.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  fullName: PropTypes.string,
  containerStyle: PropTypes.objectOf(PropTypes.any),
  width: PropTypes.string,
  height: PropTypes.string,
  badge: PropTypes.bool,
  customBadge: PropTypes.node,
  isOnline: PropTypes.bool,
  isWrapped: PropTypes.bool,
  index: PropTypes.number,
  withoutPopover: PropTypes.bool,
};
AvatarUser.defaultProps = {
  fullName: '',
  containerStyle: {},
  width: '39px',
  height: '39px',
  badge: false,
  customBadge: null,
  isOnline: false,
  isWrapped: false,
  index: 0,
  withoutPopover: false,
};

export default memo(AvatarUser);