import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="bg-[#fff] w-full h-screen flex flex-col items-center justify-center">
      <img
        src="/airbnb.png"
        className="w-32 h-auto mb-8"
        loading={loading}
      />
      <BarLoader color={"gray"} loading={loading} />
    </div>
  );
}

export default Loader;
