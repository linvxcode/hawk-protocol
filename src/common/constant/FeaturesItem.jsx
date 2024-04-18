import { FaEthereum, FaFigma, FaReact,FaSuperpowers } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdAnimation,MdOutlineInterests  } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";
import { SiRarible,SiOpensea,SiLinuxfoundation,SiOrigin    } from "react-icons/si";
import { CiTablets1 } from "react-icons/ci";


const Bid = (
  <>
    <div className="absolute top-[74%] lg:top-[70%] xl:top-[80%] left-[1%] lg:left-[2%]  w-auto h-auto">
      <div className="bg-[#ffffff3d] rounded-full backdrop-blur-md items-center flex gap-1 px-5 py-3">
        <div className="w-auto">
          <FaEthereum size={40} />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-sm">Highest Bid</h1>
          <h1 className="text-sm lg:text-base">
            3.5 <span className="!text-xs">ETH</span>
          </h1>
        </div>
      </div>
    </div>
  </>
);

const Placebid = (
  <>
    <div className="absolute top-[74%] lg:top-[70%] xl:top-[80%] left-[42%] lg:left-[36%] xl:left-[50%]  w-auto h-auto">
      <div className="bg-[#ffffff3d] w-full rounded-full backdrop-blur-md items-center flex gap-1 px-5 py-3">
        <div className="w-auto ">
          <svg
            width="45"
            height="45"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9817 11.1066C11.8942 11.1941 11.7833 11.235 11.6725 11.235C11.5617 11.235 11.4508 11.1941 11.3633 11.1066L8.47583 8.21915L8.785 7.90998L9.09416 7.60081L11.9817 10.4883C12.1508 10.6575 12.1508 10.9375 11.9817 11.1066Z"
              fill="white"
            />
            <path
              d="M3.77416 5.41332L7.15749 8.79665C7.38499 9.02415 7.38499 9.39165 7.15749 9.61915L6.63249 10.15C6.15999 10.6167 5.41332 10.6167 4.94666 10.15L2.41499 7.61832C1.95416 7.15749 1.95416 6.40499 2.41499 5.93832L2.94582 5.40749C3.17332 5.18582 3.54666 5.18582 3.77416 5.41332Z"
              fill="white"
            />
            <path
              d="M10.8442 5.94415L8.62165 8.16082C8.38832 8.39415 8.01499 8.39415 7.78165 8.16082L4.40999 4.78915C4.17665 4.55582 4.17665 4.18249 4.40999 3.94915L6.63249 1.72665C7.09332 1.26582 7.84582 1.26582 8.31248 1.72665L10.8442 4.25832C11.305 4.72499 11.305 5.47165 10.8442 5.94415Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-full flex">
          <h1 className="text-sm sm:text-base text-nowrap">Place Bid</h1>
        </div>
      </div>
    </div>
  </>
);

const Hearts = (
  <>
    <div className="absolute top-[3%] right-[3%] w-auto h-auto">
      <div className="bg-[#ffffff3d] rounded-full backdrop-blur-md items-center justify-center flex gap-1 p-3">
        <IoHeart size={35} />
      </div>
    </div>
  </>
);

export const FeaturesItem = [
  {
    title: "Your NFT Trading Hub",
    desc: "Explore Fusion all-in-one platform for seamless NFT transactions.",
    img: "https://images.unsplash.com/photo-1702318262455-26cd2c991c44?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start flex-col",
  },
  {
    title: "Simplifying NFT Trading",
    desc: "Unlock Fusion intuitive platform for effortless NFT buying and selling.",
    img: "https://images.unsplash.com/photo-1692401891528-44cf0c97154e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start   flex-col",
  },
  {
    title: "Streamlined NFT Exchange",
    desc: "Discover Fusion user-friendly platform for swift NFT transactions. ",
    img: "https://images.unsplash.com/photo-1702318262466-095ea83867b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start   flex-col",
  },
];

export const ProFeatureitem = [
  {
    img: "https://s3-alpha-sig.figma.com/img/825a/cbae/10a3fdb3711a46a2054f6436b6ef219c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYHA1Om1BRnD6PTALW67zlvbu50ks3RmYc8UQ1kouU1VbxzgO3HIR5A~XjWIlMgxTrWH~O4L6AxG2l3DBCfxWtyBdt431fVZQkQOULbezbBTSYuZIG9eI1ItgmvgniAu6IlQyvFnypUrwAO7-pVCPjxUkAapw~AY6WSnM~olAfjOkU4Z0vck3XLzeLKOf8R61J9bBhFymOvCSApXI7qI9PWTzbtmS3OlZ0nacntfuTb5c~yHzk5EvyUOd9PUbYm2cZ1vfsKxM3tsTa4Ndju9eoyC2hsXvR1kpO3pChsrforNIrUw2V4m9mv7MERH1IMJ2jy3r5IlhK7NxK3bbcefEg__",
    bid: Bid,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f3e2/3f14/97d19c96f5a5a07860b17bb42dd52940?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EFnm~f6odRwCyiBWRq7qgJrXxzutUsKpVHUG6AqMEonfygLufby7OoOjQdrdFQBTg3KbaHA8CirdNwBp3oXGNqcRNNYRTP~YBWX6kefGEbwP0CXzE9D4KzrFQOZHUJyHC6iA5EYiWKShFP0vX5pZ1NWwK~MLGTRKkeYNcjLf3Y9fLintv1QYBbH5agGtj6CG9MI5TiNmAKmd5iWjwMaHRYg0eb-Ku7yXZ7XrztpET3wYJyVhKHUmBeth~jNMZq23Rs4qtOi9OWBS6-V15UdLFQLrGik1I31nJ1~6h1RoIrnGnoFvvQyYX2qMJaYGtM~jOmClxoRb2r7ZDU14Q~nttA__",
    bid: Placebid,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/b19b/c976/450ae00fff37a2c194ad5cd41734a02a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a5b3o5DReHVVMpEhXliJEtsUiBq0a6u7diMsw09vJnuOTRu5EGr7q0mWeDc8P4w6xc0bxVCnNCn9v4rmxCy6S8ioOMgtCsSzo~5xGVvz9Jc29ocurrH-z~VyQV~zsT3cSrRk0uHuHQmee5cTlE90~8M29h1W~zV0CDY7Bqbmfbnt8l-Ohs1FKxnaoEfMs40XIt1ecQcoDAJtmcF3n6y0IB9XAXO3B6tU5fuJ32m7QHJUivjd1qTmkqJPeGQdw8HayljHhRZGszybw5nhqxDaz8YZrBq47ny8VtzkvRtAEj9ClpuaFIoocuM9jo~p-XoCo6OLD5TumCIw5RkBsB0gpw__",
    bid: Hearts,
  },
];

export const FeatuePageItem = [
  {
    img: "https://s3-alpha-sig.figma.com/img/825a/cbae/10a3fdb3711a46a2054f6436b6ef219c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYHA1Om1BRnD6PTALW67zlvbu50ks3RmYc8UQ1kouU1VbxzgO3HIR5A~XjWIlMgxTrWH~O4L6AxG2l3DBCfxWtyBdt431fVZQkQOULbezbBTSYuZIG9eI1ItgmvgniAu6IlQyvFnypUrwAO7-pVCPjxUkAapw~AY6WSnM~olAfjOkU4Z0vck3XLzeLKOf8R61J9bBhFymOvCSApXI7qI9PWTzbtmS3OlZ0nacntfuTb5c~yHzk5EvyUOd9PUbYm2cZ1vfsKxM3tsTa4Ndju9eoyC2hsXvR1kpO3pChsrforNIrUw2V4m9mv7MERH1IMJ2jy3r5IlhK7NxK3bbcefEg__",
    bid: Bid,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f3e2/3f14/97d19c96f5a5a07860b17bb42dd52940?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EFnm~f6odRwCyiBWRq7qgJrXxzutUsKpVHUG6AqMEonfygLufby7OoOjQdrdFQBTg3KbaHA8CirdNwBp3oXGNqcRNNYRTP~YBWX6kefGEbwP0CXzE9D4KzrFQOZHUJyHC6iA5EYiWKShFP0vX5pZ1NWwK~MLGTRKkeYNcjLf3Y9fLintv1QYBbH5agGtj6CG9MI5TiNmAKmd5iWjwMaHRYg0eb-Ku7yXZ7XrztpET3wYJyVhKHUmBeth~jNMZq23Rs4qtOi9OWBS6-V15UdLFQLrGik1I31nJ1~6h1RoIrnGnoFvvQyYX2qMJaYGtM~jOmClxoRb2r7ZDU14Q~nttA__",
    bid: Placebid,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/b19b/c976/450ae00fff37a2c194ad5cd41734a02a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a5b3o5DReHVVMpEhXliJEtsUiBq0a6u7diMsw09vJnuOTRu5EGr7q0mWeDc8P4w6xc0bxVCnNCn9v4rmxCy6S8ioOMgtCsSzo~5xGVvz9Jc29ocurrH-z~VyQV~zsT3cSrRk0uHuHQmee5cTlE90~8M29h1W~zV0CDY7Bqbmfbnt8l-Ohs1FKxnaoEfMs40XIt1ecQcoDAJtmcF3n6y0IB9XAXO3B6tU5fuJ32m7QHJUivjd1qTmkqJPeGQdw8HayljHhRZGszybw5nhqxDaz8YZrBq47ny8VtzkvRtAEj9ClpuaFIoocuM9jo~p-XoCo6OLD5TumCIw5RkBsB0gpw__",
    bid: Hearts,
  },
  {
    img: "/nft1.png",
  },
  {
    img: "/nf2.png",
  },
  {
    img: "/nft3.png",
  },
];

export const PackedFeature = [
  {
    title: "Dynamic Animation",
    desc: "Bring your artwork to life with captivating animations that add depth and intrigue to your NFTs.",
    link: {
      title: 'Start for free',
      href: '/'
    },
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <MdAnimation size={40} className="text-[#0D0D0D]" />,
  },
  {
    title: "Interactive Elements",
    link: {
      title: 'Learn More',
      href: '/'
    },
    desc: "Engage your audience like never before with interactive features that encourage exploration and participation.",
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <MdOutlineInterests  size={40} className="text-[#0D0D0D]"  />,
  },
  {
    title: "Audio Integration",
    link: {
      title: 'Learn More',
      href: '/'
    },
    desc: "Immerse viewers in your digital world with synchronized audio effects that complement your artwork.",
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <SiAudiomack size={40} className="text-[#0D0D0D]"  />,
  },
 
];


export const Platformitem = [
  {
    title: "OpenSea",
    desc: "OpenSea is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <SiOpensea  size={40} className="text-blue-400 bg-white rounded-full overflow-hidden" />,
  },
  {
    title: "Rarible",
    desc: "is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <SiRarible  size={40} className="bg-black text-[#DDFF00] rounded-full overflow-hidden"  />,
  },
  {
    title: "Foundation",
    desc: "is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <SiLinuxfoundation  size={40} className="text-[#0D0D0D]"  />,
  },
  {
    title: "SuperRare",
    desc: "is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <FaSuperpowers size={40} className="text-[#0D0D0D]"  />,
  },
  {
    title: "KnownOrigin",
    desc: "is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <SiOrigin  size={40} className="text-[#0D0D0D]"  />,
  },
  {
    title: "Mintable",
    desc: "is one of the largest and most popular decentralized marketplaces for buying, selling, and trading non-fungible tokens (NFTs)",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <CiTablets1 size={40} className="text-[#0D0D0D]"  />,
  },
 
];
