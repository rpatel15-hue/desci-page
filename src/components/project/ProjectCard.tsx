import { 
  Flex, 
  FlexProps, 
  Spacer, 
  SimpleGrid,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import {FaLaugh} from "react-icons/fa";

export const ProjectCard = ({icon, title, website, description}) => (
  <Flex justify='center' align={'center'}>
    <Grid
        templateAreas={`"icon title"
                        "icon web"
                        "icon desc"`}
      gridTemplateRows={'50px 30px 1fr'}
      gridTemplateColumns={'100px 1fr'}
      h='200px'
      w='800px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
    <GridItem area={'icon'}>
      <Icon as={icon} w={{base:12, sm:16}} h={{base:12, sm:16}}/>
    </GridItem>
    <GridItem pl='2' bg='pink.300' fontSize={'20px'}>
      {title}
    </GridItem>
    <GridItem pl='2' bg='green.300'>
      <a href={website}>{website}</a>
    </GridItem>
    <GridItem pl='2' bg='blue.300'>
      {description}
    </GridItem>
    </Grid>
  </Flex>
)


{/* <SimpleGrid columns={2} spacing={10} maxW={'1000px'}>
<Box height='250px'>
  <Icon as={icon} alt='Icon' w={{base:12, sm:16}} h={{base:12, sm:16}} color={'grey'}/>
</Box>
<Box height='100px'>
  <Box alignSelf={'flex-start'} textAlign={'start'} py={{base:3,sm:3}}>
    <Heading fontSize={{base:'xl',sm:'2xl'}} fontFamily={'body'}>
      {title}
    </Heading>
  </Box>
  <Box textAlign={'start'} >
    <Text>
        {description}
    </Text>
  </Box>
  <Box textAlign={'start'} >
    <Text>
        {website}
    </Text>
  </Box>
</Box>
</SimpleGrid> */}