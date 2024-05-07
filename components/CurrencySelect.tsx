import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, FlatList, Pressable, Animated, TouchableHighlight, Platform } from 'react-native'

import { useAppContext } from '../Context'
import { supportedCurrencies } from '../data/supportedCurrencies'
import { Styles } from '../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { Icon, SearchBar } from '@rneui/base'

const CurrencySelect = ({ route }: any) => {
  const navigation = useNavigation();
  const { changeTargetCode } = route.params

  const { baseCode, targetCode, setBaseCode, setTargetCode } = useAppContext();

  const [searchCode, setSearchCode] = useState('')

  interface ListElementProps {
    code: string
    name: string
    flag: string
  }

  const ListElement = ({ code, name, flag }: ListElementProps) => {
    return (
      <TouchableHighlight
        underlayColor="#222"
        style={{ alignItems: 'center', borderRadius: 12 }}
        onPress={() => {
          changeTargetCode ? setTargetCode(code) : setBaseCode(code);
          //@ts-ignore
          navigation.navigate('Calculator');
        }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
            <View>
              <Text style={{ color: 'white', fontSize: 36, marginRight: 10 }}>{flag}</Text>
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: 18 }}>{name}</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: 'gray', marginLeft: 'auto', fontWeight: '700' }}>{code}</Text>
          </View>

        </View>
      </TouchableHighlight >
    )
  }
  return (
    <SafeAreaView style={Styles.backGround}>

      <SearchBar
        containerStyle={{ backgroundColor: 'transparent', width: '100%' }}
        inputContainerStyle={{ backgroundColor: '#222', }}

        onChangeText={(event) => { console.log(event); }}
        placeholder={`Search ${changeTargetCode ? 'target' : 'base'} currency`}
        platform={Platform.OS === 'ios' || "deafult" ? 'ios' : 'android'}
        searchIcon={Platform.OS === 'ios' || "deafult" ? { name: 'search' } : { name: 'magnify', type: 'material-community' }}
        clearIcon={Platform.OS === 'ios' || "deafult" ? { name: 'close-circle' } : { name: 'close-circle', type: 'material-community' }}
      />

      <FlatList
        showsVerticalScrollIndicator={true}
        style={{ marginTop: 16, width: '100%' }}
        data={supportedCurrencies}
        renderItem={({ item }) => (
          <ListElement code={item.code} name={item.name} flag={item.flag} />)}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

    </SafeAreaView >
  )
}



export default CurrencySelect