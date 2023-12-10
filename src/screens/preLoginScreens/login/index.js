import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Custombutton from '../../../components/customButton';
import CustomTextInput from '../../../components/customTextInputTypeOne';
import { IMAGES } from '../../../resources';

const LoginPage = props => {
  const [userName, Setusername] = useState();
  const [password, Setpassword] = useState();
  const [cnfPassword, Setcnfpassword] = useState();
  const [email, Setemail] = useState();
  const [passwordFieldVisibleToggle, setPasswordFieldVisibleToggle] =
    useState(true);
  const [
    confirmPasswordFieldVisibleToggle,
    setConfirmPasswordFieldVisibleToggle,
  ] = useState(true);

  
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Text style={styles.headline}>Welcome!</Text>
          <Text style={styles.subheadline}>
            Login up with your email address
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: 40}}>
         

          <CustomTextInput
            icon={IMAGES.Email}
            placeholder={'Enter email address'}
            Width={300}
            onChangeText={text => Setemail(text)}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
            }}>
            <CustomTextInput
              secureTextEntry={passwordFieldVisibleToggle}
              icon={IMAGES.Lock1}
              placeholder={'Password'}
              Width={300}
              onChangeText={text => Setpassword(text)}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordFieldVisibleToggle(!passwordFieldVisibleToggle);
              }}
              style={{position: 'absolute', right: 10, top: 5}}>
              <Image
                style={{height: 25, width: 25}}
                source={
                  passwordFieldVisibleToggle
                    ? IMAGES.visibility_off
                    : IMAGES.visibility_on
                }
              />
            </TouchableOpacity>
          </View>

       
        </View>
        <Custombutton
          title="Login Now"
          marginTop={114}
          height={51}
          width={241}
          marginHorizontal={20}
          onPress={() => {
            Alert.alert('hello');
          }}
        />
        <View style={{flexDirection: 'row', margin: 50}}>
          <Text
            style={{
              fontSize: 14,
              color: '#4E4E4E',
              fontFamily: 'Open Sans',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity style={{marginLeft: 4}}>
            <Text
              style={{
                fontSize: 14,
                color: '#00958C',
                fontFamily: 'Open Sans',
              }}
              onPress={() => {
                props.navigation.navigate('RegistrationPage');
              }}>
               Register now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Open Sans',
    marginTop: 10,
    width: 240,
    color: '#000000',
  },
  subheadline: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Open Sans',
    width: 600,
    marginTop: 20,
    color: '#00958C',
  },
  topBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default LoginPage;
