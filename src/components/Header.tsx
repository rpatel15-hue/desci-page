import {Box, Flex, HStack, IconButton, Text, useColorModeValue} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {DarkModeSwitch} from "./DarkModeSwitch";

export const Header = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useColorModeValue("sm", "md");
    return (
        <Box bg={bg} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={<HamburgerIcon/>}
                    aria-label={"Open Menu"}
                    display={{md: "none"}}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <Text>DeSci Page</Text>
                </HStack>
                <Flex alignItems={"center"}>
                    <DarkModeSwitch/>
                </Flex>
            </Flex>
        </Box>
    );
};
