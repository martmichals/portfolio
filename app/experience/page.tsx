import type { Metadata } from 'next';
import { experiences } from 'content/experiences';
import type { Experience } from 'content/experiences';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Read about my professional experience.',
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Experience</h1>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        {experiences().map((exp: Experience) => (
          <li key={exp.key}>
            <div className="flex-start flex items-center pt-3">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <div className='inline'>
                <h4 className="mb-1.5 text-xl font-semibold">Data Scientist</h4>
                <h6 className="mb-1.5 text-sm italic">Alight Solutions</h6>
              </div>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}