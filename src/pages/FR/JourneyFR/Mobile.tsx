import Icons from "@/components/Icons";
import Me from "../../../assets/IMG_1841.jpeg";
import { skills } from "./skills";
import MainTitle from "@/components/MainTitle";
import { useState } from "react";

const Mobile = () => {
  const savedTheme = localStorage.getItem("darkMode");

  let booleanSavedTheme;
  if (savedTheme === "true") booleanSavedTheme = true;
  else booleanSavedTheme = false;

  const [darkMode] = useState(booleanSavedTheme);

  return (
    <section className="relative -top-5 md:top-0 dark:text-offwhite lg:hidden">
      <MainTitle changeStyle={"w-full"} title="Parcours" />
      <div className="flex flex-col items-center">
        <div className="mt-10 w-screen flex justify-center">
          <img
            src={Me}
            alt=""
            className=" w-3/5 grayscale hover:grayscale-0 transition duration-500 rounded-2xl"
          />
        </div>
        <div className="mt-10 flex flex-col text-justify text-lg">
          <p className="mb-3">
            Salut, je suis Alfredo, un Brésilien fier vivant actuellement dans
            la ville vibrante de Montréal. Je suis heureusement marié à Carol et
            profondément lié à ma foi chrétienne.
          </p>
          <p className="mb-3">
            En tant que développeur déterminé, mon enthousiasme réside dans
            l'exploration de nouvelles technologies et l'élargissement du champ
            de la découverte numérique. Vous pouvez trouver mon répertoire
            actuel ci-dessous.
          </p>
          <p className="mb-3">
            Mais il y a plus en moi que seulement le développement ! Quand je ne
            travaille pas, j'aime lire, la course à pied et explorer les mondes
            de la cuisine et du café.
          </p>
          <p className="mb-3">
            Un fait original sur moi ? J'ai une collection croissante de
            tatouages.
          </p>
          <p className="mb-3 text-left">Bienvenue !</p>

          <div className="my-10 grid grid-cols-3 gap-8">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons darkMode={darkMode} skill={item} />
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
