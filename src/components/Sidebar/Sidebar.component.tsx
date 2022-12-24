import {
  createStyles,
  Navbar,
  UnstyledButton,
  Badge,
  Image,
  Flex,
} from '@mantine/core';
import { IconFiles } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { useDecks } from '../../apiHooks';
import ColourToggle from '../ColourToggle';
import Logo from '../../assets/logo.png';

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.lg,
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
}));

export function Sidebar() {
  const { classes } = useStyles();
  const { data: decks } = useDecks();

  const [links, setLinks] = useState([
    { icon: IconFiles, label: 'Decks', notifications: 0 },
  ]);

  useEffect(() => {
    if (decks) {
      setLinks([
        { icon: IconFiles, label: 'Decks', notifications: decks.length },
      ]);
    }
  }, [decks]);

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
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
          <ColourToggle />
        </Flex>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
}
