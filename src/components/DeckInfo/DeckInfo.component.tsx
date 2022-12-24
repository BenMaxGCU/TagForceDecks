import {
  createStyles,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Badge,
  Group,
  Title,
} from '@mantine/core';
import { Card } from '../../apiHooks/useDecks';

const useStyles = createStyles((theme) => {
  return {
    stack: {
      gap: 0,
    },

    listItem: {
      marginLeft: 8,
    },
  };
});

interface DeckInfoProps {
  monsters?: Card[];
  spells?: Card[];
  traps?: Card[];
  extra?: Card[];
  side?: Card[];
}

export function DeckInfo({
  monsters,
  spells,
  traps,
  extra,
  side,
}: DeckInfoProps) {
  const { classes } = useStyles();

  return (
    <Container my='md'>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        <Stack spacing='xs' className={classes.stack}>
          <>
            <Title order={5}>Monsters ({monsters?.length ?? 0})</Title>
            {monsters &&
              monsters?.map((monster, index) => (
                <Group
                  id={index.toString()}
                  spacing='xs'
                  className={classes.listItem}
                >
                  <Text size='md'>{monster.name}</Text>
                  {monster.quantity > 1 && <Badge>{monster.quantity}</Badge>}
                </Group>
              ))}
          </>
          <>
            <Title order={5}>Spells ({spells?.length ?? 0})</Title>
            {spells &&
              spells?.map((spell, index) => (
                <Group
                  id={index.toString()}
                  spacing='xs'
                  className={classes.listItem}
                >
                  <Text size='md'>{spell.name}</Text>
                  {spell.quantity > 1 && <Badge>{spell.quantity}</Badge>}
                </Group>
              ))}
          </>
          <>
            <Title order={5}>Traps ({traps?.length ?? 0})</Title>
            {traps &&
              traps?.map((trap, index) => (
                <Group
                  id={index.toString()}
                  spacing='xs'
                  className={classes.listItem}
                >
                  <Text size='md'>{trap.name}</Text>
                  {trap.quantity > 1 && <Badge>{trap.quantity}</Badge>}
                </Group>
              ))}
          </>
        </Stack>
        <Stack>
          <>
            <Title order={5}>Extra Deck ({extra?.length ?? 0})</Title>
            {extra &&
              extra?.map((extra, index) => (
                <Group
                  id={index.toString()}
                  spacing='xs'
                  className={classes.listItem}
                >
                  <Text size='md'>{extra.name}</Text>
                  {extra.quantity > 1 && <Badge>{extra.quantity}</Badge>}
                </Group>
              ))}
          </>
          <>
            <Title order={5}>Side Deck ({side?.length ?? 0})</Title>
            {side &&
              side?.map((side, index) => (
                <Group
                  id={index.toString()}
                  spacing='xs'
                  className={classes.listItem}
                >
                  <Text size='md'>{side.name}</Text>
                  {side.quantity > 1 && <Badge>{side.quantity}</Badge>}
                </Group>
              ))}
          </>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
