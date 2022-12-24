import {
  createStyles,
  Navbar,
  UnstyledButton,
  Badge,
  Image,
  Flex,
} from '@mantine/core';
import { TablerIcon, IconDeviceGamepad } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { useDecks, useGames } from '../../apiHooks';
import ColourToggle from '../ColourToggle';
import Logo from '../../assets/logo.png';
import { useActionsStore } from '../../stores';
import { Deck } from '../../apiHooks/useDecks';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingTop: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    marginTop: 'auto',
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.sm,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },

  active: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.red[6] : theme.colors.red[2],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export interface NavbarLink {
  icon: TablerIcon;
  label: string;
  itemId?: string;
  notifications?: number;
}

export function Sidebar() {
  const { selectedItem, selectItem } = useActionsStore();
  const { classes, cx } = useStyles();
  const { data: decks } = useDecks();
  const { data: games } = useGames();

  const [links, setLinks] = useState<NavbarLink[]>([]);

  // Create Navbar Links from games and decks objects
  useEffect(() => {
    if (games) {
      const gameLinks = games.map((game) => {
        // Check amount of decks associated with the game.
        const deckCount = decks?.filter(
          (deck: Deck) => deck.associatedGame === game.id
        );

        return {
          icon: IconDeviceGamepad,
          label: game.gameTitle as string,
          itemId: game.id,
          notifications: deckCount?.length ?? 0,
        };
      });

      setLinks([...gameLinks]);
      selectItem(gameLinks[0]); // Set first link as active
    }
  }, [games]);

  const mainLinks = links.map((link) => (
    <UnstyledButton
      key={link.label}
      className={cx(classes.mainLink, {
        [classes.active]: selectedItem === link,
      })}
      onClick={() => selectItem(link)}
    >
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size='sm' variant='filled' className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  return (
    <Navbar width={{ sm: 300 }} p='md' className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Flex gap='xs' direction='row' align='center'>
          <Image height={100} fit='contain' src={Logo} />
        </Flex>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <ColourToggle />
      </Navbar.Section>
    </Navbar>
  );
}
