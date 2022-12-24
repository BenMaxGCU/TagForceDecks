import {
  useMantineColorScheme,
  ActionIcon,
  Group,
  UnstyledButton,
  Text,
  createStyles,
  Kbd,
} from '@mantine/core';
import { upperFirst, useHotkeys } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    width: '100%',
  },
}));

export function ColourToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  useHotkeys([['mod+Q', () => toggleColorScheme()]]);
  return (
    <Group position='center' my='xl'>
      <UnstyledButton
        aria-label='Toggle Colour Theme'
        className={classes.control}
        onClick={() => toggleColorScheme()}
      >
        <ActionIcon
          size='lg'
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
          })}
        >
          {colorScheme === 'dark' ? (
            <IconSun size={18} />
          ) : (
            <IconMoonStars size={18} />
          )}
        </ActionIcon>
        <Text size='sm' fw={500}>
          {upperFirst(colorScheme === 'dark' ? 'dark' : 'light')} Theme
        </Text>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Kbd>Ctrl + Q</Kbd>
        </div>
      </UnstyledButton>
    </Group>
  );
}
