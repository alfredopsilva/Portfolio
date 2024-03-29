import transition from '@/Transition'
import Mobile from './Mobile'
import Web from './Web'
import ArrowUp from '@/components/ArrowUp'
import Social from '@/components/Social'

const SayHello = () => {
  return (
    <section
      id="sayhello"
      className="scroll-mt-10 min-h-screen flex flex-col justify-between md:min-h-full "
    >
      <Mobile />
      <Web />
      <section className="relative flex justify-center mt-10 lg:mt-20 ">
        <div className="flex">
          <Social
            link="https://github.com/alfredopsilva"
            isGitHub={true}
            className="h-14 w-14 xlg:h-24 xlg:w-24 fill-accentColor dark:fill-darkAccentColor"
          />
          <Social
            link="https://www.linkedin.com/in/alfredopsilva/"
            isGitHub={false}
            className="h-14 w-14 xlg:h-24 xlg:w-24 fill-accentColor dark:fill-darkAccentColor"
          />
          <ArrowUp href={"/"} />
        </div>
      </section>
    </section>
  );
}

export default transition(SayHello);