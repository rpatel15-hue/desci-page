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
        </Flex>
    </Box>
);