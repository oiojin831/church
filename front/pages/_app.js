import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme/index';

const Didimdol = ({ Component }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  )
}

export default Didimdol;
