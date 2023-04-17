import { name, about, bio } from 'content/about';

export default async function HomePage() {
  return (
    <section>
        <h1 className='font-bold text-3xl font-serif'>{name}</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
    </section>
  );
}
