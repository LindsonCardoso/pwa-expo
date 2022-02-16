import { Heading, Text, HStack, VStack,Spacer, Box, Center } from 'native-base';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Results from '../model/DataActions'

interface AcoesProps {
    symbol: string;
    shortName: string;
    longName: string;
    currency: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketDayRange: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: Date;
    marketCap: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    averageDailyVolume10Day: number;
    averageDailyVolume3Month: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
}


const MainScreen = () => {
    const { datafull: acao, isFetching } = 
        useFetch<AcoesProps[]>('quote/COGN3,MGLU3,OIBR3');

    function renderItem(item: AcoesProps): JSX.Element {
        return(
            <View  // Important
            style={{
              flex: 1,
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
            }}> 
            <Box borderBottomWidth="1" _dark={{
                borderColor: "gray.600"
                }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={2} justifyContent="space-between">
              <VStack>
              <Text _dark={{
                color: "warmGray.50"
                }} color="coolGray.800" bold
                >
                 {item.symbol}
                </Text>
                </VStack>
                <Spacer/>
                <Text fontSize="xs" _dark={{
                color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                {item.currency}
              </Text>
              <Text fontSize="xs" _dark={{
                color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                {item.regularMarketPrice}
              </Text>
              </HStack>
            </Box>
          </View>
        )
    }

    return(
        <SafeAreaView style={{
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        }}>
        <Heading fontSize="xl" p="4" pb="3">
        Ações
      </Heading>
      { isFetching && <Center><Text>Buscando...</Text></Center>}
        <FlatList
            data={acao}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.symbol}
        />
        </SafeAreaView>
    );
};



export default MainScreen