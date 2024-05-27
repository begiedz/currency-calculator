import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableHighlight, Platform } from 'react-native'
import { SearchBar } from '@rneui/base'

import { useAppContext } from '../context/AppContext'
import { supportedCurrencies } from '../data/supportedCurrencies'
import { useNavigation } from '@react-navigation/native'
import { Styles } from '../styles/Styles'

const CurrencySelect = ({ route }: any) => {
  const navigation = useNavigation();
  const { changeTargetCode } = route.params

  const { setBaseCode, setTargetCode, setRate, responseRates } = useAppContext();

  const [searchCode, setSearchCode] = useState('')
  const [filteredCodes, setFilteredCodes] = useState<ListElementProps[]>(supportedCurrencies)

  interface ListElementProps {
    code: string
    name: string
    flag: string
  }

  const handleSearch = (searchText: string) => {
    setSearchCode(searchText)
    const filteredCurrencies = supportedCurrencies.filter(currency =>
      currency.name.toLowerCase().includes(searchText.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCodes(filteredCurrencies)
  }

  const handlePress = (code: string) => {
    if (changeTargetCode) {
      setTargetCode(code);
      setRate(responseRates[code]);
    } else {
      setBaseCode(code);
    }
    navigation.goBack();
  };

  const ListElement = ({ code, name, flag }: ListElementProps) => {
    return (
      <TouchableHighlight
        underlayColor="#222"
        style={{ alignItems: 'center', borderRadius: 12 }}
        onPress={() => {
          handlePress(code);
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
        platform={Platform.OS === 'ios' || "default" ? 'ios' : 'android'}
        searchIcon={Platform.OS === 'ios' || "default" ? { name: 'search' } : { name: 'magnify', type: 'material-community' }}
        clearIcon={Platform.OS === 'ios' || "default" ? { name: 'close-circle' } : { name: 'close-circle', type: 'material-community' }}
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