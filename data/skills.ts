export interface TechnologyProps {
    technology: string,
    logo: string,
}

export interface ProjectProps {
    projectTitle: string,
    projectDescription: string,
    stack: string[],
    github: string,
    website: string,
    banner: string,
}

export const technologies: TechnologyProps[] = [
    {
        technology: 'HTML',
        logo: '/html.svg'
    },
    {
        technology: 'CSS',
        logo: '/css.svg'
    },
    {
        technology: 'JavaScript',
        logo: '/javascript.svg'
    },
    {
        technology: 'React',
        logo: '/react.svg'
    },
    {
        technology: 'NextJs',
        logo: '/nextjs.svg'
    },
    {
        technology: 'Python',
        logo: '/python.svg'
    },
    {
        technology: 'SQL',
        logo: '/sql.svg'
    },
    {
        technology: 'PHP',
        logo: '/php.svg'
    },
    {
        technology: 'R',
        logo: '/r.svg'
    },

]

export const projects: ProjectProps[] = [
    {
        projectTitle: 'Feed For Speed',
        stack: ['R Programming', 'Python', 'Shiny', ' HTML', 'CSS'],
        projectDescription: '',
        github: 'https://github.com/pixelatedcode01/feed-for-speed',
        website: 'https://feed-for-speed.shinyapps.io/',
        banner: ''
    },
    {
        projectTitle: 'Should I Drink',
        projectDescription: '',
        stack: ['React', 'Vite', 'Python', 'Docker', 'PostgreSQL', 'AWS'],
        github: 'https://github.com/Hadoop-Hooligans/should-i-drink',
        website: '',
        banner: ''
    },
    {
        projectTitle: 'Read One Piece',
        projectDescription: '',
        stack: ['HTML', 'CSS', 'JavaScript', 'Express'],
        github: 'https://github.com/pixelatedcode01/mangareader',
        website: '',
        banner: '/onepiece.jpg'
    },
]