import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    color="black"
    _dark={{
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    maxW={'7xl'}
    mx={'auto'}
    {...props}
  />
)
