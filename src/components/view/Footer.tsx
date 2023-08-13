import React from 'react';
import { Text, View } from 'react-native';
import { homeStyle } from '../../styles/HomeStyle';

export default function Footer(): JSX.Element {
    return (
      <>
        <View style={homeStyle.content_footer}>
          <View style={homeStyle.content_hijo_footer}>
            <Text>TExto de pruebas</Text>
            <Text>TExto de pruebas</Text>
            <Text>TExto de pruebas</Text>
            <Text>TExto de pruebas</Text>
          </View>
        </View>
      </>
    );
}
