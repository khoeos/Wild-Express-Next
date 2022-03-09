import { useState } from "react";
import styles from "../styles/CounterStyles.module.css";
import Image from "next/image";

const WilderBadge = ({title, votes}) => {
  return (
    <li className={'text-gray-400 text-sm flex align-items'}>
      {title}
      <div className="flex justify-center items-center ml-1 rounded-full bg-gray-400 text-white h-5 w-5">{votes}</div>
     </li>
  )
}

const Wilder = ({name, img, description, skills}) => {
  return(
    <article className="flex flex-col gap-4 rounded w-72 p-6 border-2 border-gray-300">
      <div className="mx-auto">
      {!img && (
        <Image src="/blank_profile.png" alt="" width={'200'} height={'200'}/>
      )}
      {img && (
        <Image src={img} alt="" width={'200'} height={'200'}/>
      )}
      </div>
      
      <h3 className="font-bold text-red-400 text-lg">{name}</h3>
      <p className="text-gray-400">{description}</p>
      <h4 className="font-bold text-red-400 text-sm">Wild Skills</h4>
      <ul className="flex gap-2 justify-center flex-wrap">
        {skills.map((skill) => (
          <WilderBadge key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
  )
}

export default Wilder