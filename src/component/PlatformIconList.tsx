import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNiconico } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hook/useGame";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNiconico,
    web: BsGlobe,
  };

  return (
    <>
      {platforms.map((platform) => (
        <p key={platform.id}>{platform.slug}</p>
        // <Icon name={iconMap[Platform.slug]} />
      ))}
    </>
  );
};

export default PlatformIconList;
