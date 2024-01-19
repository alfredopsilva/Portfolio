import { useState } from "react";
import ResumeButtom from "./ResumeButtom";
import SettingsButton from "./SettingsButton";

type HeaderProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Web = ({ setLanguage, darkMode , setDarkMode}: HeaderProps) => {

  const [settings, setSettings] = useState(false);

  const toggleSettings = () => {
    setSettings(!settings);
  }

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('userLanguage', lang);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header
      className="xsm:hidden relative md:flex justify-between items-center ps-8 pe-4 py-5"
    >
      <a href="/">
        <p className="font-JetBrains">{"{ AScode }"}</p>
      </a>
      <nav className="flex gap-3 xlg:gap-4 xxlg:gap-5 xxxlg:gap-6 items-center text-base">
        <a
          href="/journey"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Journey
        </a>
        <a
          href="/creations"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Creations
        </a>
        <a
          href="/sayhello"
          className="me-3 hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Say Hello
        </a>
        <a className="me-3 cursor-pointer" onClick={toggleSettings}><SettingsButton /></a>
        {settings &&
          <div className="z-50 flex flex-col border bg-accentColor/10 border-accentColor dark:border-darkAccentColor dark:bg-darkAccentColor/60 rounded-md justify-start items-center w-[175px] h-[85px] absolute top-[4.5rem] right-20">
            <div className="mb-2 mt-3">
              <button className="cursor-pointer" onClick={() => toggleLanguage('en')}>En</button> | <button className="cursor-pointer" onClick={() => toggleLanguage('fr')}>Fr</button>
            </div>
            <div>
              <button className="cursor-pointer" onClick={() => toggleDarkMode()}>Light</button> | <button className="cursor-pointer" onClick={() => toggleDarkMode()}>Dark</button>
            </div>
          </div>}
        <ResumeButtom />
      </nav>
    </header>
  );
};

export default Web;
