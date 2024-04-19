
import React from 'react';
import { Button, Flex, Segmented } from 'antd';
const boxStyle = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #40a9ff',
};
const justifyOptions = [
  'Personal Detail',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
  'Data',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const App = () => {
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
  return (
    <Flex gap="middle" align="start" vertical>
      <h1>Info & Management</h1>
      <Segmented options={justifyOptions} onChange={setJustify} />
      <p>hellll</p>
      
      {/* <Flex style={boxStyle} justify={justify} align={alignItems}>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </Flex> */}
    </Flex>
  );
};
export default App;