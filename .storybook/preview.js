import React from 'react'
import {addDecorator} from '@storybook/react'
import { ChakraProvider } from "@chakra-ui/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn) => (
  <ChakraProvider>
    {storyFn()}
  </ChakraProvider>
))