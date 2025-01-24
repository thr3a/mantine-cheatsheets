import { Button, Flex } from '@mantine/core';

export function SampleFlex() {
  return (
    <Flex mih={50} bg='gray' gap='md' justify='center' align='center' direction='row-reverse' wrap='wrap-reverse'>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
