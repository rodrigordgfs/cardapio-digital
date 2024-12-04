import { IoChevronBack } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-primary w-full max-w-full h-[320px] flex flex-col items-center">
      <div className="max-w-[1200px] w-full p-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <Link
            to={".."}
            className={`text-white flex flex-row items-center gap-2 rounded-lg bg-transparent hover:bg-primary-light transition-all px-4 py-2 font-semibold`}
          >
            <IoChevronBack className="w-6 h-6" />
            Voltar
          </Link>
          <div className="flex flex-row items-center gap-2">
            <Link
              className={`text-white flex flex-row items-center gap-2 rounded-lg hover:bg-primary-dark transition-all px-4 py-2 font-semibold ${
                location.pathname === "/"
                  ? "bg-primary-light"
                  : "bg-transparent"
              }`}
            >
              <FaHome className="w-6 h-6" />
              Home
            </Link>
            <Link
              className={`text-white flex flex-row items-center gap-2 rounded-lg bg-transparent hover:bg-primary-dark transition-all px-4 py-2 font-semibold ${
                location.pathname === "/cardapio"
                  ? "bg-primary-light"
                  : "bg-transparent"
              }`}
            >
              <CgMenuBoxed className="w-6 h-6" />
              Cardápio
            </Link>
            <Link
              className={`text-white flex flex-row items-center gap-2 rounded-lg bg-transparent hover:bg-primary-dark transition-all px-4 py-2 font-semibold ${
                location.pathname === "/pedido"
                  ? "bg-primary-light"
                  : "bg-transparent"
              }`}
            >
              <RiShoppingBag4Line className="w-6 h-6" />
              Pedidos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
