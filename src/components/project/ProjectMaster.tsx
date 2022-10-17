import {SimpleGrid,HStack,Button,Wrap,WrapItem
} from '@chakra-ui/react'
import { ProjectCard,TagColors} from './ProjectCard'
import {Container} from "../Container";
import projects_db from '../../projects_db.json'
import {useState,useEffect,useRef} from "react";


const ProjectsDB = projects_db.map((project, index) => {
    return {...project, key: index}
}
)

const ProjectMaster = () => {
    const [selectedTags, setSelectedTags] = useState([])
    const [projects, setProjects] = useState(ProjectsDB)
    //const [tags, setTags] = useState(new Map())
    const [uniqueTagsList, setUniqueTagsList] = useState([])



    const uniqueTagsListRef = useRef(uniqueTagsList)
    uniqueTagsListRef.current = uniqueTagsList

    //const tagsRef = useRef(tags)
    //tagsRef.current = tags

    const selectedTagsRef = useRef(selectedTags)
    selectedTagsRef.current = selectedTags

    const projectsRef = useRef(projects)
    projectsRef.current = projects

    useEffect(() => {
        setUniqueTagsList(projectsRef.current.map((project) => project.Property.split(',')).flat().filter((value, index, self) => self.indexOf(value) === index))
    }, [])


    useEffect(() => {
        setProjects(ProjectsDB.filter((project) => {
            return selectedTagsRef.current.length === 0 || project.Property.split(',').some((tag) => selectedTagsRef.current.includes(tag))
        }))
    }, [selectedTags])

    return (
        <Container>
            <HStack spacing={4} mt={4} mb={8}>
                <Button
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => {
                        setSelectedTags([])
                    }}
                >
                    All
                </Button>
                <Wrap spacing={4}>
                    {uniqueTagsListRef.current.map((tag) => (
                        <WrapItem key={tag}>
                            <Button
                                colorScheme={TagColors(tag)}
                                variant={selectedTagsRef.current.includes(tag) ? 'solid' : 'outline'}
                                onClick={() => {
                                    setSelectedTags(selectedTagsRef.current.includes(tag) ?
                                        selectedTagsRef.current.filter((t) => t !== tag) :
                                        [...selectedTagsRef.current, tag])
                                }}
                            >
                                {tag}
                            </Button>
                        </WrapItem>
                    ))}
                </Wrap>
            </HStack>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                {projectsRef.current.map((project) => (
                    <ProjectCard key={project.key}
                                 title={project.OrgName}
                                 description={project.Comments}
                                 website={project.website}
                                 tags={project.Property.split(',')}/>
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default ProjectMaster