import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="h-screen w-screen backdrop-blur-md fixed top-0 left-0 z-50 flex justify-center items-center bg-black">
      <Loader2 className="animate-spin text-black dark:text-white" size={100}></Loader2>
    </div>
  );
};

export default Loader;
<Loader2 className="animate-spin"></Loader2>;
