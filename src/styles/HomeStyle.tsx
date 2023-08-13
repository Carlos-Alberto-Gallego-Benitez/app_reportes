import { StyleSheet } from "react-native";

export  const homeStyle = StyleSheet.create({

  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
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
    backgroundColor: 'rgba(242, 13, 30, 0.96)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content_footer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'rgba(0, 252, 29, 0.98)',
    position: 'absolute',
    height: 100,
    width: '100%',
    bottom: 0
  },
  content_hijo_footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
  },
  card_title: {
    color: 'white',
    textAlign: 'center',
  },
  container_principal: {
    backgroundColor: 'rgba(30, 132, 234, 0.75)',
    height: 713,
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  }
});