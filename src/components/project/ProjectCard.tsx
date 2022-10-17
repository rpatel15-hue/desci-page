// create a card with title, description, and website

import {Box, Heading, Text, Link, Divider} from '@chakra-ui/react'

export const ProjectCard = ({
    title,
    description,
    website,
}: {
    title: string
    description: string
    website: string
}) => (
    <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        width="100%"
        height="100%"
        _hover={{ shadow: 'lg',
            transform: 'scale(1.01)',
            transition: 'all 0.2s ease-in-out',
        }}

    >
        <Heading fontSize="xl">{title}</Heading>
        <Link href={website} isExternal>
            {website}
        </Link>
        <Divider mt={2}/>
        <Text mt={4}>{description}</Text>
    </Box>
);