
import React from 'react';
import { SectionProps } from '../../types/SectioType';
import {styles} from '../../styles/SectionStyle';
import { Text, View } from 'react-native';


export default function Section({ children, title }: SectionProps): JSX.Element {

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription
        ]}>
        {children}
      </Text>
    </View>
  );
}