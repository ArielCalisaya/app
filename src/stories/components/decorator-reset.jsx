import * as React from 'react'
import { levaStore } from 'leva';

const DefaultStory = (story) => {
  const Story =  story;
  const [_, set] = React.useState(false)
  React.useEffect(() => {
    levaStore.dispose()
    set(true)
  }, [])
  return _ ? <Story /> : <></>
};
export default DefaultStory;
