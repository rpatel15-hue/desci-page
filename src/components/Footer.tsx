import { Box, Flex, Text} from '@chakra-ui/react';

export const Footer = () => (
    <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        py="12"
        px={{
        base: '4',
        md: '8',
        }}
    >
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
        >
        <Text mt="2">© 2022 DeSci Page. All rights reserved</Text>
            <Text mt="2">Made with ❤️ by Psyk.Care Team</Text>
            <Text mt="2">
                Special thanks to Jocelynn Pearl, who curates the DeSci Wiki page. This project would not have been possible without the information found on the DeSci Wiki page.
            </Text>
        </Flex>
    </Box>
);