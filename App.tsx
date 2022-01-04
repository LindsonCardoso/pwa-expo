import React from 'react';
import Routes from './src/routes'
import { NativeBaseProvider, Box } from 'native-base';
import theme from './src/theme'


export default function App() {



  return(
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  )
}

