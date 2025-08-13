
import { useAppSelector } from "../../../../Redux Toolkit/Store";

const grid = [
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {"categoryId":"men_formal_shoes",
        "section": "GRID",
        "name": "men formal shoes",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.hlhC0L07E6Zfiek0L_kcAAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://promotions.newegg.com/nepro/25-0685/1150x320@2x.jpg",
  },
  {"categoryId":"men_sherwanis",
        "section": "GRID",
        "name": "men sherwanis",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?_gl=1*1yav5io*_ga*MTUwNDI4MjkwMC4xNzUzMjM2NTYw*_ga_8JE65Q40S6*czE3NTMyMzg5NjIkbzIkZzEkdDE3NTMyMzg5NzYkajQ2JGwwJGgw",
  },
  {"categoryId":"women_jewellery",
        "section": "GRID",
        "name": "women jewellery",
    image:
      "https://dlcdnwebimgs.asus.com/gain/AF782FBE-08C0-48C6-A86D-3B72598F9AD6/fwebp/fwebp",
  },
  {"categoryId":"women_footwear",
        "section": "GRID",
        "name": "women footwear",
    image:
      "https://img.freepik.com/premium-photo/picture-laptop_931878-305748.jpg",
  },
];
const TopBrand = () => {
  const {homePage}=useAppSelector(store=>store)
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className=" col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[0].image}
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6  text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[1].image}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[2].image}
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[3].image}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[4].image}
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6  text-white rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[5].image}
          alt=""
        />
      </div>

      {/* https://tristenwallace.com/wp-content/uploads/2022/06/wed-7.jpg */}
    </div>
  );
};

export default TopBrand;
