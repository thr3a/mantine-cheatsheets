import '@mantine/core/styles.css';
import { Container, MantineProvider, Title } from '@mantine/core';
import { ColorList } from './ColorList';
import { SampleFlex } from './SampleFlex';
import { SampleForm } from './SampleForm';
import { SampleStyle } from './SampleStyle';
// import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from './Welcome/Welcome';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container>
        <Title mt={'sm'} order={2}>
          Mantine Vite template
        </Title>
        <Title order={6} mb={'sm'} c={'dimmed'}>
          Mantine Vite template
        </Title>
        <SampleForm />
        <SampleFlex />
        <SampleStyle />
        <ColorList />

        {/* <Welcome /> */}
        {/* <ColorSchemeToggle /> */}
      </Container>
    </MantineProvider>
  );
}
