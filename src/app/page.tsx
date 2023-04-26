'use client';

import { Accordion, Button, Group, Stack, Text } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <h1 className="bg-orange-300 text-3xl">hello</h1>
      <Stack>
        <Text className="mt-"></Text>
        <Text className="mt-">iii</Text>
      </Stack>
      <Group spacing="xxxl">
        <Button className="border-r-2">button1</Button>
        <Button>button2</Button>
      </Group>
      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control disabled>
            Flexibility<Text>aaa</Text>
          </Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>
            <Text color="gray">asdf</Text>
          </Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
