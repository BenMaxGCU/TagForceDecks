import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
  AppShell,
  Container,
  Grid,
  Group,
  Text,
  Loader,
  Accordion,
  Badge,
  Image,
  createStyles,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ModalsProvider, openModal } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { useDecks } from './apiHooks';
import { Deck } from './apiHooks/useDecks';
import { ImageCard } from './components';
import DeckInfo from './components/DeckInfo';
import { Sidebar } from './components/Sidebar/Sidebar.component';

const emotionCache = createEmotionCache({ key: 'tagforcedecks' });

const useStyles = createStyles((theme) => ({
  grid: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

function App() {
  const [colourScheme, setColourScheme] = useLocalStorage<ColorScheme>({
    key: 'colour-scheme',
    defaultValue: 'dark' as ColorScheme,
  });
  const { data: decks, isLoading: isLoadingDecks } = useDecks();
  const { classes } = useStyles();

  const toggleColourScheme = (value?: ColorScheme) =>
    setColourScheme(value || (colourScheme === 'dark' ? 'light' : 'dark'));

  const openCardModal = (deck: Deck) => {
    const monsters = deck.deckContents?.monsters;
    const spells = deck.deckContents?.spells;
    const traps = deck.deckContents?.traps;
    const extra = deck.deckContents?.extra;

    openModal({
      title: deck.deckTitle,
      size: 'xl',
      children: (
        <DeckInfo
          monsters={monsters}
          spells={spells}
          traps={traps}
          extra={extra}
        />
      ),
    });
  };

  const deckGrid = decks?.map((deck: Deck) => (
    <Grid.Col
      id={deck.id}
      className={classes.grid}
      onClick={() => openCardModal(deck)}
      span={3}
    >
      <ImageCard
        image={deck.coverImg}
        title={deck.deckTitle}
        author={deck.deckCreator}
      />
    </Grid.Col>
  ));

  return (
    <ColorSchemeProvider
      colorScheme={colourScheme}
      toggleColorScheme={toggleColourScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: colourScheme,
          fontFamily: 'Satoshi, sans-serif',
          headings: { fontFamily: 'Satoshi, sans-serif' },
        }}
        emotionCache={emotionCache}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider position='top-right'>
          <ModalsProvider>
            <AppShell navbar={<Sidebar />} padding={0}>
              <Container size='xl' my='xl' p={50}>
                {isLoadingDecks ? (
                  <Loader color='grape' />
                ) : (
                  <Grid>{deckGrid}</Grid>
                )}
              </Container>
            </AppShell>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
