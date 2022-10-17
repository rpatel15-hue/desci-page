import {
    SimpleGrid, HStack, Button, Wrap, WrapItem, Divider
} from '@chakra-ui/react'
import { ProjectCard,TagColors} from './ProjectCard'
import {Container} from "../Container";
import projects_db from '../../projects_db.json'
import {useState,useEffect} from "react";

// sort by OrgName
const ProjectsDB = projects_db.map((project, index) => {
    return {...project, key: index}
}
).sort((a, b) => {
    if (a.OrgName < b.OrgName) {
        return -1;
    }
    if (a.OrgName > b.OrgName) {
        return 1;
    }
    return 0;
}
)

const TagFilter = ({uniqueTagsList, selectedTags, setSelectedTags}) => {
    return (
        <HStack spacing={4} mt={4} mb={4}>
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
                {uniqueTagsList.map((tag) => (
                    <WrapItem key={tag}>
                        <Button
                            colorScheme={TagColors(tag)}
                            variant={selectedTags.includes(tag) ? 'solid' : 'outline'}
                            onClick={() => {
                                setSelectedTags(selectedTags.includes(tag) ?
                                    selectedTags.filter((t) => t !== tag) :
                                    [...selectedTags, tag])
                            }}
                        >
                            {tag}
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>
        </HStack>
    )
}

const ProjectList = ({projects}) => {
    return (
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
            {projects.map((project) => (
                <ProjectCard key={project.key}
                             title={project.OrgName}
                             description={project.Comments}
                             website={project.website}
                             tags={project.Property.split(',').map((tag) => tag.trim())}
                />
            ))}
        </SimpleGrid>
    )
}

const ProjectMaster = () => {
    const [selectedTags, setSelectedTags] = useState([])
    const [projects, setProjects] = useState(ProjectsDB)

    const uniqueTagsList = ProjectsDB.map((project) => project.Property.split(',')).flat().map((tag) => tag.trim()).filter((value, index, self) => self.indexOf(value) === index)

    useEffect(() => {
        setProjects(ProjectsDB.filter((project) => {
            if (selectedTags.length === 0) return true
            return selectedTags.every((tag) => project.Property.split(',').map((tag) => tag.trim()).includes(tag))
        }))
    }
    , [selectedTags])

    return (
        <Container>
            <TagFilter uniqueTagsList={uniqueTagsList} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            <Divider
                mb={4}
            />
            <ProjectList projects={projects}/>
        </Container>
    );
}

export default ProjectMaster