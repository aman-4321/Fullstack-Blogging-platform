import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import { motion } from "framer-motion";

export const Signin = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center"
      >
        <Auth type="signin" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex flex-1 bg-slate-100"
      >
        <Quote />
      </motion.div>
    </div>
  );
};
