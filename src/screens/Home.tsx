import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, ScrollView, View, } from 'react-native';
import {SectionProps} from '../types/SectioType';
import Section from '../components/common/Section';
import {homeStyle} from '../styles/HomeStyle';
import Card from '../components/view/Card';
import Footer from '../components/view/Footer';


function Home({ navigation }: any ): JSX.Element {

  return (
    <>
      <View>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={homeStyle.container_principal}>
              <View>
                <Section title="REPORTES ARBOLETES">
                  Edit to change this screen and then come back to see your
                  edits.
                </Section>
                {/*lista de opciones a reportar*/}
                <Card navigation={navigation}></Card>
              </View>
              {/* pie de página de la app*/}
              <Footer></Footer>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}

export default Home;
