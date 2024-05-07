import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableHighlight, Platform } from 'react-native'
import { SearchBar, color } from '@rneui/base'

import { useAppContext } from '../Context'
import { supportedCurrencies } from '../data/supportedCurrencies'
import { useNavigation } from '@react-navigation/native'
import { Styles } from '../styles/Styles'

const CurrencySelect = ({ route }: any) => {
  const navigation = useNavigation();
  const { changeTargetCode } = route.params

  const { baseCode, targetCode, setBaseCode, setTargetCode } = useAppContext();

  const [searchCode, setSearchCode] = useState('')
  const [filteredCodes, setFilteredCodes] = useState<ListElementProps[]>(supportedCurrencies)

  interface ListElementProps {
    code: string
    name: string
    flag: string
  }

  const handleSearch = (text: string) => {
    setSearchCode(text)
    const filteredCurrencies = supportedCurrencies.filter(currency =>
      currency.name.toLowerCase().includes(text.toLowerCase()) ||
      currency.code.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCodes(filteredCurrencies)
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
        inputContainerStyle={{ backgroundColor: '#222' }}
        inputStyle={{ color: 'white' }}
        onChangeText={handleSearch}
        value={searchCode}

        placeholder={`Search ${changeTargetCode ? 'target' : 'base'} currency`}
        platform={Platform.OS === 'ios' || "deafult" ? 'ios' : 'android'}
        searchIcon={Platform.OS === 'ios' || "deafult" ? { name: 'search' } : { name: 'magnify', type: 'material-community' }}
        clearIcon={Platform.OS === 'ios' || "deafult" ? { name: 'close-circle' } : { name: 'close-circle', type: 'material-community' }}
      />
      <FlatList
        showsVerticalScrollIndicator={true}
        style={{ width: '100%' }}
        data={filteredCodes}
        renderItem={({ item }) => (
          <ListElement code={item.code} name={item.name} flag={item.flag} />)}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

    </SafeAreaView >
  )
}

export default CurrencySelect