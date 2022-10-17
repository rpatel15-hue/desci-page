import {Box, Flex, Link, Text} from '@chakra-ui/react';

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
            <Text mt="2">Made with ❤️ by {''}
                <Link href="https://www.psyk.care/"
                    color={"blue.500"}
                    _hover={{
                        textDecoration: 'underline',
                    }}
                      isExternal>
                    psyk.care
                </Link> Team</Text>
        <Text mt="2">
                Special thanks to {''}
                <Link href="https://twitter.com/JocelynnPearl"
                    color="blue.500"
                    _hover={{
                        textDecoration: 'underline',
                    }}
                      isExternal
                > Jocelyn Pearl</Link>
                , who curates the {''}
                <Link href="https://docs.google.com/document/d/1aQC6zn-eXflSmpts0XGE7CawbUEHwnL6o-OFXO52PTc"
                    color="blue.500"
                    _hover={{
                        textDecoration: 'underline',
                    }}
                        isExternal
                > DeSci Wiki Document</Link>
            . This project would not have been possible without the information found on the document.
            </Text>
        </Flex>
    </Box>
);