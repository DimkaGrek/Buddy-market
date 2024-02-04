import iconCat from '../../assets/images/cat.png';
import iconDog from '../../assets/images/dog.png';
import iconFish from '../../assets/images/fish.png';
import iconBird from '../../assets/images/bird.png';
import iconRodent from '../../assets/images/rodent.png';
import iconReptile from '../../assets/images/reptile.png';
import logo from '../../assets/images/logo.png';

export const Hero = () => {
    const heroMenuItem =
        'flex items-center gap-4 h-24 pl-6 text-white font-normal leading-normal border-b border-my-light-violet cursor-pointer hover:bg-my-violet';
    const heroItemBtn =
        'flex items-center gap-3 pr-6 text-my-dark-violet font-[14px] font-semibold leading-normal border-none rounded-[32px] bg-my-purple bg-opacity-70 hover:bg-my-yellow hover:bg-opacity-80';
    return (
        <div className="container-xl px-4 flex md:items-stretch bg-none">
            <div className="w-[190px] bg-my-dark-violet">
                <ul>
                    <li className={heroMenuItem}>
                        <img src={iconCat} alt="cat" />
                        Cats
                    </li>
                    <li className={heroMenuItem}>
                        <img src={iconDog} alt="dog" />
                        Dogs
                    </li>
                    <li className={heroMenuItem}>
                        <img src={iconFish} alt="fish" />
                        Fish
                    </li>
                    <li className={heroMenuItem}>
                        <img src={iconBird} alt="bird" />
                        Birds
                    </li>
                    <li className={heroMenuItem}>
                        <img src={iconRodent} alt="rodent" />
                        Rodents
                    </li>
                    <li className={heroMenuItem}>
                        <img src={iconReptile} alt="reptile" />
                        Reptiles
                    </li>
                </ul>
            </div>
            <div className="hero-main">
                <ul>
                    <li className="absolute top-[90px] left-[150px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Grooming tools
                        </button>
                    </li>
                    <li className="absolute top-[45px] left-[680px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Care and hygiene
                        </button>
                    </li>
                    <li className="absolute top-[300px] left-[690px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Clothing & Accessories
                        </button>
                    </li>
                    <li className="absolute top-[490px] left-[540px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Food
                        </button>
                    </li>
                    <li className="absolute top-[490px] left-[50px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Health and wellness
                        </button>
                    </li>
                    <li className="absolute top-[300px] left-[20px]">
                        <button className={heroItemBtn}>
                            <div className="flex w-10 h-10 justify-center items-center rounded-[100px] bg-white">
                                <img src={logo} alt="logo" width="28" />
                            </div>
                            Supplies
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
