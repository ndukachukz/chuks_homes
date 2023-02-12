import React from "react";
import Image from "next/image";
import { PropertyCardProps } from "../../types";
import PropertyCard from "../PropertyCard";

const propertyCards: PropertyCardProps[] = [
  {
    src: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-1.png",
    alt: "",
    width: 0,
    height: 0,
    title: "Ely-The Angry Girl",
    description:
      "Culpa est occaecat cillum anim duis ut fugiat reprehenderit duis aliqua non ex consequat. Amet ex in Lorem exercitation labore mollit sunt. Mollit duis non officia cupidatat voluptate mollit cupidatat cupidatat nulla consequat elit ut non.Nisi aute culpa exercitation tempor amet enim ex aliquip. Eu occaecat pariatur tempor ea. Incididunt ex amet reprehenderit cupidatat fugiat do esse dolore qui. Eiusmod deserunt sit aliqua exercitation irure ullamco ipsum Lorem duis. Excepteur deserunt occaecat enim in consequat anim nulla ipsum ad. Cupidatat veniam et occaecat incididunt consequat nulla incididunt. Occaecat qui exercitation minim pariatur id ad labore id sit nostrud.",
    price: 9394,
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-2.png",
    alt: "",
    width: 0,
    height: 0,
    title: "EJenny-Retro Art",
    description:
      "Ullamco nulla cillum non duis deserunt sint irure incididunt ad ut velit. Anim consequat amet cupidatat cupidatat duis deserunt esse et adipisicing ad ullamco aute adipisicing do. Consequat et dolor magna ea consequat id aliquip incididunt enim. Id cupidatat labore exercitation incididunt nisi dolore dolore ex dolore. Laborum cillum aute minim fugiat aliqua consequat culpa tempor qui sit reprehenderit commodo proident fugiat. Ullamco enim qui cillum enim deserunt cupidatat amet deserunt. Aute enim magna labore sit eu do nostrud nulla elit est sit exercitation. Qui veniam non laborum incididunt aliquip in in voluptate anim. Nulla esse culpa amet proident irure ullamco. Lorem id laboris cillum proident deserunt proident ipsum commodo labore. Aute irure ipsum pariatur sunt nulla in elit. Nostrud aliquip eiusmod cillum velit veniam. Id voluptate minim fugiat ipsum qui sunt irure reprehenderit est aute.",
    price: 7627,
  },

  {
    src: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-3.png",
    alt: "",
    width: 0,
    height: 0,
    title: "Naila-The Angry Girl",
    description:
      "Reprehenderit esse labore exercitation aliqua elit ipsum quis excepteur magna et. Officia quis sint excepteur laborum eiusmod proident fugiat eiusmod veniam qui. Reprehenderit et sit voluptate ea enim officia sint eu dolor enim. Duis ad est pariatur officia consectetur. Laboris culpa enim magna Lorem adipisicing. Deserunt labore eiusmod magna cupidatat. Dolor laborum non veniam elit esse mollit nulla excepteur occaecat. Consequat ea sit anim dolore voluptate minim commodo. Eiusmod fugiat Lorem commodo irure esse mollit aute elit ut ad eiusmod ad. Officia ut ullamco in sunt in esse sint minim consectetur id qui magna. Qui et et ad tempor nostrud dolor.",
    price: 0,
  },
];

const PropertyCardHeroWrapper = () => {
  return (
    <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2">
      <div className="relative w-full overflow-auto">
        <div className="flex gap-2 flex-nowrap">
          {propertyCards.map((card, i) => (
            <PropertyCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCardHeroWrapper;
