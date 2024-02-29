import { ReactNode } from "react";
import "./marquee.css";

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return <div className="marquee">{children}</div>;
};

export default Marquee;
