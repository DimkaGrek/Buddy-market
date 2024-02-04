import logo from '../../assets/images/logo.png';
import logoText from '../../assets/images/buddy.png';
import iconSearch from '../../assets/images/icon-search.svg';
import iconLocation from '../../assets/images/location.svg';
import iconSelectArrow from '../../assets/images/select-arrow.svg';
import iconBurger from '../../assets/images/burger-icon.svg';
import iconUserDesktop from '../../assets/images/icon-user-desctop.svg';
import iconFavourites from '../../assets/images/icon-favourites.svg';
import iconShoppingCart from '../../assets/images/icon-shopping-cart.svg';
import { Outlet } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header className="mb-3 xl:mb-0 bg-my-dark-violet">
                <div className="container-xl px-4 mx-auto flex items-center py-3 md:block md:py-8 md:pb-4">
                    <div className="md:flex md:items-center md:gap-7 md:mb-6">
                        <div className="flex items-center gap-2 xl:gap-6">
                            <img
                                className="w-8 h-8 xl:w-11 xl:h-11"
                                src={logo}
                                alt="Logo"
                                width="32"
                                height="32"
                            />
                            <img
                                src={logoText}
                                alt="logo text"
                                height="32"
                                className="h-8 xl:h-11"
                            />
                        </div>

                        {/* <div className="md:hidden header-mobile-icons">
                        <img
                            className="header-icons"
                            src="./img/icon_en.png"
                            alt="EN"
                            width="24"
                            height="16"
                        />
                        <img
                            className="header-icons"
                            src="./img/heart.png"
                            alt="Favourites"
                            width="24"
                            height="24"
                        />
                        <img
                            className="header-icons"
                            src="./img/shopping-cart.png"
                            alt="Cart"
                            width="24"
                            height="24"
                        />
                    </div> */}

                        <div className="xl:flex xl:w-min-[546px]">
                            <input
                                className="border-none outline-none p-[11px] px-[16px] text-black text-[14px] rounded-l-md w-[506px] h-[40px]"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="flex justify-center items-center border-none w-10 h-10 rounded-r-md bg-my-light-grey-bg">
                                <img src={iconSearch} alt="Search" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 ml-auto">
                            <div className="flex items-center gap-2 text-">
                                <img
                                    src={iconLocation}
                                    alt="location"
                                    width="24"
                                    height="24"
                                />
                                <select
                                    name="city"
                                    className={`appearance-none border-none text-white text-[14px] font-semibold leading-normal bg-my-dark-violet bg-[url('${iconSelectArrow}')] bg-no-repeat bg-right-0 bg-center w-[80px]`}
                                >
                                    <option value="Kiev">Kiev</option>
                                    <option value="Lviv">Lviv</option>
                                    <option value="Kharkiv">Kharkiv</option>
                                </select>
                            </div>
                            <button className="border-none bg-none text-white text-[14px] font-semibold leading-normal">
                                Support
                            </button>
                            <button className="border-none bg-none text-white text-[16px] font-normal leading-normal">
                                <span className="font-bold">UA</span> | EN
                            </button>
                        </div>
                    </div>

                    <div className="flex">
                        <nav className="text-white">
                            <ul className="flex items-center gap-4">
                                <li className="flex items-center gap-2 text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    <img
                                        src={iconBurger}
                                        alt="burger icon"
                                        width="24"
                                        height="24"
                                    />
                                    <p>Catalog</p>
                                    <img
                                        src={iconSelectArrow}
                                        alt="select arrow"
                                        width="24"
                                        height="24"
                                    />
                                </li>
                                <li className="flex items-center gap-2 text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    Shop by brands
                                    <img
                                        src={iconSelectArrow}
                                        alt="select arrow"
                                        width="24"
                                        height="24"
                                    />
                                </li>
                                <li className="text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    Pharmacy
                                </li>
                                <li className="text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    Sales
                                </li>
                                <li className="text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    Services
                                </li>
                                <li className="text-[16px] font-semibold leading-normal py-1 px-2 uppercase hover:rounded-md hover:bg-my-violet cursor-pointer">
                                    For pet owners
                                </li>
                            </ul>
                        </nav>
                        <div className="flex justify-between w-[154px] ml-auto cursor-pointer">
                            <img
                                className="w-6 h-6"
                                src={iconUserDesktop}
                                alt="icon user"
                                width="24"
                                height="24"
                            />
                            <img
                                className="w-6 h-6"
                                src={iconFavourites}
                                alt="icon favourites"
                                width="24"
                                height="24"
                            />
                            <img
                                className="w-6 h-6"
                                src={iconShoppingCart}
                                alt="icon user"
                                width="24"
                                height="24"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};
