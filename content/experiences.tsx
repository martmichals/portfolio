
export type Experience = {
    key: string;
    title: string;
    company: string;
    start: Date;
    end?: Date;
    description: string;
    bullets: string;
}

export const experiences = () => {
    const exps: Experience[] = [
        {
            key: 'latest',
            title: 'Data Scientist',
            company: 'Alight Solutions',
            start: new Date("2023-02-13"),
            description: 'Developing a website search engine with a data-driven deployment cycle.',
            bullets: `- Bullet 1`
        }
    ]

    return exps;
}
