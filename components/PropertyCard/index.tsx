import { FC } from "react";
import Image from "next/image";
import { PropertyCardProps } from "../../types";
import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

interface Props {
  card: PropertyCardProps;
}

const PropertyCard: FC<Props> = ({ card }) => {
  return (
    <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 ">
      <div className="overflow-hidden bg-white rounded shadow-xl">
        <div className="aspect-w-4 aspect-h-3">
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4">
          <div className="flex items-end mt-1">
            <p className="text-lg font-bold text-gray-900">
              ${(91892).toLocaleString("en-US")}
            </p>
          </div>

          <p className="text-base font-bold text-gray-900">
            5bdrm Maisonette in Ikoyi Lagos for Sale
          </p>
          <p className="line-clamp-4 mt-3 text-xs font-medium tracking-widest text-gray-500 uppercase">
            Elit id aliqua do veniam. Aute officia culpa commodo dolore ex. Eu
            velit laborum consequat Lorem ad nulla mollit aliquip excepteur duis
            do nostrud dolor. Excepteur deserunt aliquip laborum velit ut veniam
            do ad sint consectetur. Deserunt proident eu mollit ex esse occaecat
            occaecat dolor elit magna eu eu nostrud labore. Mollit labore
            voluptate sint occaecat pariatur sit eiusmod irure non tempor.
          </p>

          {/* house info */}
          <div className="flex gap-5 mt-5 ">
            <span className="flex items-center font-medium text-sm">
              <FaBed className="text-black mr-2 text-xl" /> 2
            </span>

            <span className="flex items-center font-medium text-sm">
              <FaBath className="text-black mr-2 text-xl" /> 2
            </span>
          </div>

          <p className="flex mt-4 items-center font-medium text-sm">
            <MdLocationPin className="text-black mr-2 text-xl" />
            Lagos, Ikoyi
          </p>

          {/* agent info */}
          <div className="flex mt-5">
            <Link href={"/"}>
              <span className="flex items-center gap-2">
                {/* avatar */}
                <Image
                  width={0}
                  height={0}
                  unoptimized
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Bordered avatar"
                />

                {/* name */}
                <p>Daniel Nduka</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
