import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  Flex,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Container } from '../components/Container'
// import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
// import { Main } from '../components/Main'
import { ProjectMaster } from '../components/project/ProjectMaster'
// import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    {/* <Header /> */}
    <Hero />
    <ProjectMaster />
    {/* <Footer /> */}
  </Container>
)

export default Index