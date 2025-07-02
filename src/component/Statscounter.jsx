// import React, { useEffect, useState } from "react";

// const stats = [
//   { label: "Fund Raised", value: 8803 },
//   { label: "Volunteers", value: 480 },
//   { label: "Causes for Donation", value: 6208 },
//   { label: "Happy People", value: 960 },
// ];

// const StatBox = ({ label, value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 1;
//     const duration = 2000;
//     const incrementTime = duration / value;

//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev < value) return prev + 1;
//         clearInterval(interval);
//         return value;
//       });
//     }, incrementTime);

//     return () => clearInterval(interval);
//   }, [value]);

//   return (
//     <div className="text-center px-6 py-6 bg-white/10 rounded-xl shadow-md w-full sm:w-auto">
//       <h2 className="text-4xl font-extrabold text-white drop-shadow">{count}</h2>
//       <p className="text-white mt-2 font-medium">{label}</p>
//     </div>
//   );
// };

// const StatsCounter = () => {
//   return (
//     <div className="relative px-4 py-10 bg-red-500 rounded-l-full sm:rounded-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 shadow-xl">
//       <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-l-full sm:rounded-full" />

//       {stats.map((item, index) => (
//         <StatBox key={index} label={item.label} value={item.value} />
//       ))}
//     </div>
//   );
// };

// export default StatsCounter;

// import React, { useEffect, useState } from "react";

// const stats = [
//   { label: "Fund Raised", start: 8400, value: 8803 },
//   { label: "Volunteers", start: 80, value: 480 },
//   { label: "Causes for Donation", start: 5800, value: 6208 },
//   { label: "Happy People", start: 560, value: 960 },
// ];

// const StatBox = ({ label, value, start }) => {
//   const [count, setCount] = useState(start);

//   useEffect(() => {
//     const duration = 2000; // total animation time in ms
//     const totalSteps = value - start;
//     const incrementTime = totalSteps > 0 ? duration / totalSteps : duration;

//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev < value) return prev + 1;
//         clearInterval(interval);
//         return value;
//       });
//     }, incrementTime);

//     return () => clearInterval(interval);
//   }, [value, start]);

//   return (
//     <div className="text-center px-6 py-6 bg-white/10 rounded-xl shadow-md w-full sm:w-auto">
//       <h2 className="text-5xl font-extrabold text-white drop-shadow">{count}</h2>
//       <p className="text-white mt-2 font-medium">{label}</p>
//     </div>
//   );
// };

// const StatsCounter = () => {
//   return (
//     <div className="mt-4 mb-5 relative px-4 py-10 bg-gray-600 rounded-l-full sm:rounded-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 shadow-xl">
//       <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-l-full sm:rounded-full" />

//       {stats.map((item, index) => (
//         <StatBox
//           key={index}
//           label={item.label}
//           value={item.value}
//           start={item.start}
//         />
//       ))}
//     </div>
//   );
// };

// export default StatsCounter;

// import React, { useEffect, useState } from "react";

// const stats = [
//   { label: "Fund Raised", start: 8000, value: 8803 },
//   { label: "Volunteers", start: 1, value: 480 },
//   { label: "Causes for Donation", start: 5200, value: 6208 },
//   { label: "Happy People", start: 1, value: 960 },
// ];

// const StatBox = ({ label, value, start }) => {
//   const [count, setCount] = useState(start);

//   useEffect(() => {
//     const duration = 2000;
//     const totalSteps = value - start;
//     const incrementTime = totalSteps > 0 ? duration / totalSteps : duration;

//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev < value) return prev + 1;
//         clearInterval(interval);
//         return value;
//       });
//     }, incrementTime);

//     return () => clearInterval(interval);
//   }, [value, start]);

//   return (
//     <div className="flex-1 min-w-[250px] text-center px-6 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
//       <h2 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow tracking-wide">
//         {count}
//       </h2>
//       <p className="text-white mt-3 text-lg sm:text-xl font-medium">{label}</p>
//     </div>
//   );
// };

// const StatsCounter = () => {
//   return (
//     <div className="mt-6 mb-10 relative px-4 py-10 bg-gray-900 rounded-t-[5rem] sm:rounded-full max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 shadow-2xl overflow-hidden">
//       <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-t-[5rem] sm:rounded-full" />
      
//       {stats.map((item, index) => (
//         <StatBox
//           key={index}
//           label={item.label}
//           value={item.value}
//           start={item.start}
//         />
//       ))}
//     </div>
//   );
// };

// export default StatsCounter;

// import React, { useEffect, useRef, useState } from "react";

// // Stat data
// const stats = [
//   { label: "Fund Raised", start: 8400, value: 8803 },
//   { label: "Volunteers", start: 80, value: 480 },
//   { label: "Causes for Donation", start: 5800, value: 6208 },
//   { label: "Happy People", start: 560, value: 960 },
// ];

// const StatBox = ({ label, value, start }) => {
//   const [count, setCount] = useState(start);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           animateCount();
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const animateCount = () => {
//     const duration = 2000;
//     const steps = value - start;
//     const incrementTime = steps > 0 ? duration / steps : duration;

//     let current = start;
//     const interval = setInterval(() => {
//       current++;
//       setCount(current);
//       if (current >= value) clearInterval(interval);
//     }, incrementTime);
//   };

//   return (
//     <div
//       ref={ref}
//       className="flex-1 min-w-[250px] text-center px-6 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
//     >
//       <h2 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow tracking-wide">
//         {count}
//       </h2>
//       <p className="text-white mt-3 text-lg sm:text-xl font-medium">{label}</p>
//     </div>
//   );
// };

// const StatsCounter = () => {
//   return (
//     <div className="mt-6 mb-10 relative px-4 py-10 bg-gray-700 rounded-t-[5rem] sm:rounded-full max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 shadow-2xl overflow-hidden">
//       <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-t-[5rem] sm:rounded-full" />
//       {stats.map((item, index) => (
//         <StatBox key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default StatsCounter;

import React, { useEffect, useRef, useState } from "react";

// Stats Data
const stats = [
  { label: "Fund Raised", start: 8400, value: 8803 },
  { label: "Volunteers", start: 80, value: 480 },
  { label: "Causes for Donation", start: 5800, value: 6208 },
  { label: "Happy People", start: 560, value: 960 },
];

const StatBox = ({ label, value, start }) => {
  const [count, setCount] = useState(start);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const duration = 2000;
    const steps = value - start;
    const incrementTime = steps > 0 ? duration / steps : duration;

    let current = start;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= value) clearInterval(interval);
    }, incrementTime);
  };

  return (
    <div
      ref={ref}
      className={`flex-1 min-w-[250px] text-center px-6 py-6 
        bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
        shadow-lg transition-all duration-700 
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    >
      <h2 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow tracking-wide">
        {count}
      </h2>
      <p className="text-white mt-3 text-lg sm:text-xl font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="mt-8 mb-10 relative px-4 py-10 bg-gradient-to-r from-red-700 to-gray-800 rounded-t-[5rem] sm:rounded-full ml-auto w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 shadow-2xl overflow-hidden md:rounded-r-xl md:pl-10 md:px-4 md:py-12 md:ml-6 md:pr-14">
      {/* Optional Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-t-[5rem] sm:rounded-full" />
      
      {stats.map((item, index) => (
        <StatBox key={index} {...item} />
      ))}
    </div>
  );
};

export default StatsCounter;

