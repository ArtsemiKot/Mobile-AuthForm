import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from './style'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font'

const loadFont = async () => {
    await Font.loadAsync({
        Inter400: require('../../../fonts/Inter-Regular.ttf'),
        Inter700: require('../../../fonts/Inter-Bold.ttf')
    })
}

export default function Auth({ navigation }) {
    const [inp, setInp] = useState({ email: '', password: '' })

    function changeValue(val, name) {
        setInp({ ...inp, [name]: val })
    }

    useEffect(() => {
        loadFont()
    }, [])

    function checkInp() {
        try {
            console.log(inp.email);
            console.log(inp.password);
            if (!inp.email.trim()) throw new Error('Отсутствует ввод почты')
            if (!inp.password.trim()) throw new Error('Не ввели пароль')
            if (inp.password < 8) throw new Error('Пароль меньше 8 символов')
            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(inp.password)) throw new Error('Не верный пароль');
            if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.[a-z]{2,4}$/gm.test(inp.email)) throw new Error('Не верный ввод почты')
            console.log(`success ${inp}`);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'email')} placeholder='Email'></TextInput>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'password')} placeholder='Password' secureTextEntry={true}></TextInput>
            <Text style={styles.signUp}>Don’t have an account ? <Text onPress={() => navigation.navigate('Reg')}>Sign Up</Text></Text>
            <Text style={styles.login} onPress={checkInp}>Login</Text>
        </View >
    );
}
