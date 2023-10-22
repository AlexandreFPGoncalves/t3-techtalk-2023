import { Hero } from "@/components";
import { images } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const HostsModule: React.FC = () => {
  const hosts = [
    {
      name: "Alexande Gonçalves",
      description: "IT Consultant",
      picture: images.host1.src,
    },
    {
      name: "Diogo Moutinho",
      description: "IT Consultant",
      picture: images.host2.src,
    },
    {
      name: "Emanuel Azevedo",
      description: "IT Consultant",
      picture: images.host3.src,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Hero activeStep={{ id: 1 }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.75 }}
        className="flex h-full items-center justify-evenly until-sm:flex-col"
      >
        {hosts.map((host) => (
          <motion.div
            variants={item}
            key={host.name}
            className="flex flex-col items-center "
          >
            <Image
              width={208}
              height={208}
              src={
                host.picture ??
                `https://ui-avatars.com/api/?name=${host.name.replace(
                  " ",
                  "+",
                )}&background=7241FF&color=fff`
              }
              alt={host.name}
              className="h-52 w-52 rounded-lg object-cover shadow-glow md:mb-2 until-md:h-32 until-md:w-32"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.15 }}
              className="flex flex-col"
            >
              <motion.text className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-bold tracking-wider text-transparent">
                {host.name}
              </motion.text>
              <motion.text className="tex text-center font-light text-grey">
                {host.description}
              </motion.text>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Hero>
  );
};
