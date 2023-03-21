import PropTypes from 'prop-types';
import {
  Box, Divider,
} from '@chakra-ui/react';
import Heading from './Heading';
import Text from './Text';
import Link from './NextChakraLink';
import useStyle from '../hooks/useStyle';

const MktOneColumn = ({
  title,
  subTitle,
  description,
  buttonUrl,
  buttonLabel,
  kpiList,
  slice,
}) => {
  const { fontColor, fontColor2, hexColor, backgroundColor } = useStyle();
  const sliceKpiList = [
    {
      title: slice?.primary?.kpi_title_1,
      description: slice?.primary?.kpi_description_1,
      color: slice?.primary?.kpi_color_1,
    },
    {
      title: slice?.primary?.kpi_title_2,
      description: slice?.primary?.kpi_description_2,
      color: slice?.primary?.kpi_color_2,
    },
    {
      title: slice?.primary?.kpi_title_3,
      description: slice?.primary?.kpi_description_3,
      color: slice?.primary?.kpi_color_3,
    },
    {
      title: slice?.primary?.kpi_title_4,
      description: slice?.primary?.kpi_description_4,
      color: slice?.primary?.kpi_color_4,
    },
    {
      title: slice?.primary?.kpi_title_5,
      description: slice?.primary?.kpi_description_5,
      color: slice?.primary?.kpi_color_5,
    },
  ];
  const KPIList = sliceKpiList.filter((l) => l?.title?.length > 0) || kpiList;

  // eslint-disable-next-line react/prop-types
  const MktKPI = ({ kpiTitle, kpiDescription, color }) => (
    <Box
      width="200px"
      background={backgroundColor}
      borderRadius="12px"
      padding="15px"
      textAlign="center"
    >
      <Heading size="m" color={color || hexColor.blueDefault}>
        {kpiTitle}
      </Heading>
      <Divider
        opacity="1"
        margin="15px auto"
        width="32px"
        border="3px solid"
        borderColor={color || hexColor.blueDefault}
      />
      <Text
        fontSize="sm"
        lineHeight="14px"
        color={fontColor}
      >
        {kpiDescription}
      </Text>
    </Box>
  );

  return (
    <Box padding="20px" textAlign="center">
      <Box>
        <Heading marginBottom="15px" as="h4" fontSize="14px" color={hexColor.blueDefault}>
          {slice?.primary?.subtitle || subTitle}
        </Heading>
        {KPIList?.length > 0 && (
          <Box gridGap="20px" flexWrap="wrap" marginBottom="15px" display="flex" justifyContent="center">
            {KPIList.map((kpi) => (
              <MktKPI kpiTitle={kpi?.title} kpiDescription={kpi?.description} color={kpi?.color} />
            ))}
          </Box>
        )}
        <Heading as="h2" size="m">
          {slice?.primary?.title || title}
        </Heading>
        <Text
          fontSize="sm"
          lineHeight="14px"
          margin="15px 0"
          color={fontColor2}
        >
          {slice?.primary?.description || description}
        </Text>

        {(slice?.primary?.button_url || buttonUrl) && (
          <Link
            variant="buttonDefault"
            href={slice?.primary?.button_url?.url || buttonUrl}
            textAlign="center"
            display="inline-block"
          >
            {slice?.primary?.button_label || buttonLabel}
          </Link>
        )}
      </Box>
    </Box>
  );
};

MktOneColumn.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
  kpiList: PropTypes.arrayOf(PropTypes.any),
  slice: PropTypes.objectOf(PropTypes.any),
};

MktOneColumn.defaultProps = {
  title: null,
  subTitle: null,
  description: null,
  buttonUrl: null,
  buttonLabel: null,
  kpiList: [],
  slice: {},
};

export default MktOneColumn;
