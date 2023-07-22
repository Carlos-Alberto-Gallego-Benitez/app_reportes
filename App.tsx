
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="REPORTES ARBOLETES">
            Edit to change this screen and then come back to see your edits.
          </Section>
          <View style={styles.container}>
            <View style={styles.card_template}>
              <Image
                style={styles.card_image}
                source={require('./image/icons/reciclaje.png')}
              />
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Baches</Text>
              </View>
            </View>

            <View style={styles.card_template}>
              <Image
                style={styles.card_image}
                source={require('./image/icons/reciclaje.png')}
              />
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Accidentes/Seguridad</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.card_template}>
              <Image
                style={styles.card_image}
                source={require('./image/icons/reciclaje.png')}
              />
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Alumbrado Público</Text>
              </View>
            </View>

            <View style={styles.card_template}>
              <Image
                style={styles.card_image}
                source={require('./image/icons/reciclaje.png')}
              />
              <View style={styles.text_container}>
                <Text style={styles.card_title}>Medio Ambiente</Text>
              </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'workSans-regular',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  card_template: {
    width: 150,
    height: 150,
    boxShadow: '0 0 14.3676px rgba(0,0,0,.25)',
  },
  card_image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text_container: {
    position: 'absolute',
    width: 150,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: 'white',
    textAlign: 'center'
  },
});

export default App;
