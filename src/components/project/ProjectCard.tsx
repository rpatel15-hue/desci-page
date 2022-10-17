// create a card with title, description, and website

import {Box, Divider, Heading, Link, Tag, Text} from '@chakra-ui/react'
import project_db from '../../projects_db.json'

type ProjectCardProps = {
    title: string
    description: string
    website: string
    tags: string[]

}

const uniqueTagsList = project_db.map((project) => project.Property.split(',')).flat().filter((value, index, self) => self.indexOf(value) === index)
const tagColors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink', 'gray']
const tagColorMap = new Map()
uniqueTagsList.forEach((tag, index) => tagColorMap.set(tag, tagColors[index % tagColors.length]))

export const TagColors = (tag) => {
    return tagColorMap.get(tag)
}


export const ProjectCard = ({title, description, website, tags}: ProjectCardProps) => {
    return (
        <Box
            as="article"
            role="article"
            mx="auto"
            py="12"
            px={{
                base: '4',
                md: '8',
            }}
            shadow={'md'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{
                shadow: 'xl',
                transform: 'translateY(-2px)',
                transition: 'all 0.15s ease-out',
            }}
        >
            <Heading as="h2" size="xl">
                {title}
            </Heading>
            <Link href={website} isExternal>
                {website}
            </Link>
            <Divider mt={2}/>
            <Text mt={4}>{description}</Text>
            <Divider mt={2}/>
            <Box mt={4}>
                {tags.map((tag) => (
                    <Tag
                        key={tag}
                        size="sm"
                        variant="solid"
                        colorScheme={TagColors(tag)}
                        mx={1}
                    >
                        {tag}
                    </Tag>
                ))}

            </Box>
        </Box>
    )
}