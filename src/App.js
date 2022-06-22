import React from 'react';
import NavBar from './component/NavBar/navbar';
import Layout from './component/Layout/layout';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';


const App = () => {
  //   const theme = createTheme({
  //     typography: {
  //       fontFamily: ['Cooper Black'],
  // },
  //   });


  return (
    <>
      <NavBar />
      <Layout />


      {/* <ThemeProvider theme={theme}> */}
      {/* </ThemeProvider> */}

    </>
  )
}

export default App;