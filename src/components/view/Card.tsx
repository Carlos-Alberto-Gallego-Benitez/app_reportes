import { Alert, Button, Image, Text, View } from "react-native";
import { homeStyle } from "../../styles/HomeStyle";

export default function Card({ navigation } : any) : JSX.Element {
  return (
    <>
      <View style={homeStyle.container}>
        <View style={homeStyle.card_template}>
          <Image
            style={homeStyle.card_image}
            source={require('../../image/img/reciclaje.png')}
          />
          <View style={homeStyle.text_container}>
            {/* <Text style={homeStyle.card_title}>Baches</Text> */}
          </View>
          <Button
            color={'white'}
            title="hols"
            onPress={() => navigation.navigate('Report')}
          />
        </View>

        <View style={homeStyle.card_template}>
          <Image
            style={homeStyle.card_image}
            source={require('../../image/img/reciclaje.png')}
          />
          <View style={homeStyle.text_container}>
            <Text style={homeStyle.card_title}>Accidentes/Seguridad</Text>
          </View>
        </View>
      </View>

      <View style={homeStyle.container}>
        <View style={homeStyle.card_template}>
          <Image
            style={homeStyle.card_image}
            source={require('../../image/img/reciclaje.png')}
          />
          <View style={homeStyle.text_container}>
            <Text style={homeStyle.card_title}>Alumbrado Público</Text>
          </View>
        </View>

        <View style={homeStyle.card_template}>
          <Image
            style={homeStyle.card_image}
            source={require('../../image/img/reciclaje.png')}
          />
          <View style={homeStyle.text_container}>
            <Text style={homeStyle.card_title}>Medio Ambiente</Text>
          </View>
        </View>
      </View>
    </>
  );
}