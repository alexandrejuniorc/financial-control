import Image from "next/image";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-gray-300 mb-8">
      <div className="container flex justify-between py-5">
        <div className="flex items-center gap-5">
          <Image src={Logo} alt={"Logo"} />
          <p>Controle financeiro</p>
        </div>

        <nav className="items-center flex">
          <ul className="flex bg-white py-1 px-5 gap-5">
            <li>Dashboard</li>
            <li>Resumo</li>
            <li>Configurações</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
