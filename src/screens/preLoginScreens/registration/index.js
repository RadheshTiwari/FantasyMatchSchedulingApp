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

const RegistrationPage = props => {
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
            Sign up with your email address
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: 40}}>
          <CustomTextInput
            icon={IMAGES.User}
            placeholder={'Enter name'}
            Width={300}
            onChangeText={text => Setusername(text)}
          />

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
              
            }}>
            <CustomTextInput
              secureTextEntry={passwordFieldVisibleToggle}
              icon={IMAGES.Lock1}
              placeholder={'Set password'}
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <CustomTextInput
              secureTextEntry={confirmPasswordFieldVisibleToggle}
              icon={IMAGES.Lock2}
              placeholder={'Confirm password'}
              Width={300}
              onChangeText={(text)=>Setcnfpassword(text)}
              
            />
            <TouchableOpacity
              onPress={() => {
                setConfirmPasswordFieldVisibleToggle(
                  !confirmPasswordFieldVisibleToggle,
                );
              }}
              style={{position: 'absolute', right: 10, top: 5}}>
              <Image
                style={{height: 25, width: 25}}
                source={
                  confirmPasswordFieldVisibleToggle
                    ? IMAGES.visibility_off
                    : IMAGES.visibility_on
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <Custombutton
          title="Create Now"
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
            Already have an account?
          </Text>
          <TouchableOpacity style={{marginLeft: 4}}>
            <Text
              style={{
                fontSize: 14,
                color: '#00958C',
                fontFamily: 'Open Sans',
              }}
              onPress={() => {
                props.navigation.navigate('LoginPage');
              }}>
              Sign In now
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

export default RegistrationPage;
