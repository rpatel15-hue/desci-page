import { 
  Box,
  SimpleGrid,
  Flex, 
  FlexProps, 
  Spacer, 
  Heading,
  Container, 
} from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'
import {FaLaugh} from "react-icons/fa";


const cards_data = [
  {
    icon: FaLaugh,
    title: 'Wellness DAO',
    description: 'We are building a DAO dedicated to normalizing Mental-Health Care and providing Resources as a Public Good and shatter the stigmas that surround getting help.',
    website: 'wellnessdao.life'
  },
  {
    icon: FaLaugh,
    title: 'UltraRareBIO',
    description: 'UltraRare is a web3 collective exploring the intersection of art and science. Our team includes scientists, developers, and artists. We care about communicating science through audio and visual means, and produce UltraRare The Podcast to help onboard people to web3 space.',
    website: 'ultrarare.bio/'
  },
  {
    icon: FaLaugh,
    title: 'VitaDAO',
    description: 'VitaDAO is a DAO collective for community-governed and decentralized drug development. Our core mission is the acceleration of research and development (R&D) in the longevity space and the extension of human life and healthspan. To achieve this, VitaDAO collectively funds and digitizes research in the form of IP-NFTs.',
    website: 'vitadao.com'
  },
  {
    icon: FaLaugh,
    title: 'DeBio',
    description: 'DeBio eliminates risks of genetic discrimination by leveraging blockchain technology and high-level encryption to protect identity — while allowing users to access the benefits of genetic testing, Anonymous-First Appchain for Medical and Bioinformatics Data.',
    website: 'debio.network'
  },
  {
    icon: FaLaugh,
    title: 'PsyDao',
    description: 'PsyDAO is a decentralised organisation with the goal of funding research at the intersection of psychedelics and mental health.',
    website: 'psydao.io'
  },
]

export const ProjectMaster = () => (
  <Container>
    <SimpleGrid columns={1} spacingY='20px' width={"1000px"}>
      {cards_data.map((card) => (
        <ProjectCard icon={card.icon} title={card.title} description={card.description} website={card.website}/>
      ))}
    </SimpleGrid>
  </Container>
)