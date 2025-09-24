import {
  PiCompass,
  PiHouse,
  PiMountains,
  PiTent,
  PiBackpack,
  PiTarget,
  PiStar,
  PiShield,
  PiPhone,
  PiEnvelope,
  PiTree,
  PiLeaf,
  PiWaves,
  PiUsers,
  PiCalendar,
  PiClock,
  PiMapPin,
  PiSwimmingPool,
  PiFire,
  PiFirstAid,
  PiTrophy,
  PiGraduationCap,
  PiStudentFill,
  PiSun,
  PiSnowflake,
  PiFlower, 
} from 'react-icons/pi';

import { GiHiking } from "react-icons/gi";
import { FaVestPatches } from "react-icons/fa6";

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const icons = {
  // Navigation & UI
  compass: PiCompass,
  home: PiHouse,

  // Outdoor Activities
  mountain: PiMountains,
  tent: PiTent,
  hiking: GiHiking,
  backpack: PiBackpack,

  // Skills & Achievements
  target: PiTarget,
  badge: FaVestPatches,
  star: PiStar,
  trophy: PiTrophy,

  // Safety & Protection
  shield: PiShield,
  firstAid: PiFirstAid,

  // Communication
  phone: PiPhone,
  mail: PiEnvelope,

  // Nature & Environment
  tree: PiTree,
  leaf: PiLeaf,
  fire: PiFire,

  // Water Activities
  waves: PiWaves,
  swimming: PiSwimmingPool,

  // Leadership & Growth
  users: PiUsers,
  student: PiStudentFill,
  graduation: PiGraduationCap,

  // Time & Events
  calendar: PiCalendar,
  clock: PiClock,

  // Location
  mapPin: PiMapPin,

  // Seasonal
  spring: PiFlower,
  summer: PiSun,
  fall: PiLeaf,
  winter: PiSnowflake,
};

export default function Icon({ name, className = "", size = "md" }: IconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };

  const IconComponent = icons[name as keyof typeof icons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent className={`${sizeClasses[size]} ${className}`} />
  );
}