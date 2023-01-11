import { Box } from '@chakra-ui/react';
import { useControls } from 'leva';
import Reset from './components/decorator-reset';

export default {
  title: 'Components/LEVA',
  argTypes: {},
  decorators: [Reset],
}

const Component = (args) => {
  const colors = useControls(args)

  return (
    <Box>
      <pre>
        {JSON.stringify(colors, null, '  ')}
      </pre>
    </Box>
  )
};
export const Default = Component.bind({});
Default.args = {
  hexColor: '#fff',
  rbgaColor: { r: 200, b: 125, g: 106, a: 0.4 },
};
