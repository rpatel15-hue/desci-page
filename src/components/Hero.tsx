import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="top"
    height="100px"
    minWidth="400px"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="72px">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'DeSci Page',
}
