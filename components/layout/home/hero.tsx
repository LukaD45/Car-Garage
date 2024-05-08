interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="w-full mt-[-80px] flex items-center justify-center h-[35rem] bg-hero">
      <h1 className="text-4xl backdrop-blur-sm p-2 text-white">{title}</h1>
    </div>
  );
};

export default Hero;
