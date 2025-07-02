// import React from "react";
// import { assets } from "./assets/assets";

// const Categorycard = () => {
//   return (
//     <div>
//       <h1 className="text-center text-3xl font-bold mt-4">
//         Supporting Lives, One Step at a Time
//       </h1>
//       <div className="category-card flex justify-center text-center gap-2 mt-4">
//         <div className="people">
//           <img src={assets.Old} alt="" className="w-80 h-80" />
//           <h1>Old Age People</h1>
//         </div>
//         <div className="Beggers">
//           <img src={assets.Old} alt="" className="w-80 h-80" />
//           <h1>Beggers</h1>
//         </div>
//         <div className="ladies">
//           <img src={assets.Old} alt="" className="w-80 h-80" />
//           <h1>Pregnant Ladies</h1>
//         </div>
//         <div className="Handicapped">
//           <img src={assets.Old} alt="" className="w-80 h-80" />
//           <h1>Handicapped Children</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categorycard;

// import React from "react";
// import { assets } from "./assets/assets";

// const categories = [
//   {
//     img: assets.Old,
//     title: "Senior Citizens",
//   },
//   {
//     img: assets.Old,
//     title: "People in Need",
//   },
//   {
//     img: assets.Old,
//     title: "Expecting Mothers",
//   },
//   {
//     img: assets.Old,
//     title: "Children with Disabilities",
//   },
// ];

// const Categorycard = () => {
//   return (
//     <div className="px-4 py-8">
//       <h1 className="text-center text-3xl font-bold mb-8">
//         Supporting Lives, One Step at a Time
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full max-w-xs"
//           >
//             <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
//             <h2 className="text-lg font-semibold text-center py-4">{item.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categorycard;

// import React from "react";
// import { assets } from "./assets/assets";

// const categories = [
//   {
//     img: assets.Old,
//     title: "Senior Citizens",
//   },
//   {
//     img: assets.Old,
//     title: "People in Need",
//   },
//   {
//     img: assets.Old,
//     title: "Expecting Mothers",
//   },
//   {
//     img: assets.Old,
//     title: "Children with Disabilities",
//   },
// ];

// const Categorycard = () => {
//   return (
//     <div className="px-4 py-12 bg-gradient-to-br from-blue-50 to-white">
//       <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
//         Supporting Lives, One Step at a Time
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-tr from-white to-blue-100 border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl p-4 w-full max-w-xs text-center"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-52 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categorycard;

// import React from "react";
// import { assets } from "./assets/assets";

// const categories = [
//   {
//     img: assets.Old,
//     title: "Senior Citizens",
//   },
//   {
//     img: assets.Old,
//     title: "People in Need",
//   },
//   {
//     img: assets.Old,
//     title: "Expecting Mothers",
//   },
//   {
//     img: assets.Old,
//     title: "Children with Disabilities",
//   },
// ];

// const Categorycard = () => {
//   return (
//     <div className="px-4 py-12 bg-gradient-to-br from-blue-50 to-white animate-fade-in">
//       <h1 className="text-center text-4xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-300 mb-10">
//         Supporting Lives, One Step at a Time
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white bg-opacity-80 hover:bg-opacity-90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl p-4 w-full max-w-xs h-[400px] flex flex-col items-center"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-70 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">
//               {item.title}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categorycard;

// import React from "react";
// import { assets } from "./assets/assets";

// const categories = [
//   {
//     img: assets.Old,
//     title: "Senior Citizens",
//     desc: "Providing dignity, care, and companionship to the elderly in need.",
//   },
//   {
//     img: assets.Old,
//     title: "People in Need",
//     desc: "Supporting underprivileged individuals with food, shelter, and hope.",
//   },
//   {
//     img: assets.Old,
//     title: "Expecting Mothers",
//     desc: "Ensuring maternal health, nutrition, and safety during pregnancy.",
//   },
//   {
//     img: assets.Old,
//     title: "Children with Disabilities",
//     desc: "Empowering differently-abled children with care and opportunity.",
//   },
// ];

// const Categorycard = () => {
//   return (
//     <div className="px-4 py-12 bg-gradient-to-br from-gray-800 to-white animate-fade-in">
//       <h1 className="text-center text-4xl font-bold text-white hover:text-blue-600 transition-colors duration-300 mb-10">
//         Supporting Lives, One Step at a Time
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white bg-opacity-80 hover:bg-opacity-90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl p-4 w-full max-w-xs h-[420px] flex flex-col items-center"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-52 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 ">
//               {item.title}
//             </h2>
//             <p className="text- text-gray-600 mt-4 text-center px-2">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categorycard;

import React from "react";
import { assets } from "../assets/assets";

const categories = [
  {
    img: assets.Old,
    title: "Senior Citizens",
    desc: "Providing dignity, care, and companionship to the elderly in need.",
  },
  {
    img: assets.need,
    title: "People in Need",
    desc: "Supporting underprivileged individuals with food, shelter, and hope.",
  },
  {
    img: assets.women,
    title: "Expecting Mothers",
    desc: "Ensuring maternal health, nutrition, and safety during pregnancy.",
  },
  {
    img: assets.children,
    title: "Children with Disabilities",
    desc: "Empowering differently-abled children with care and opportunity.",
  },
];

const Categorycard = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 animate-fade-in">
      {/* Main Heading */}
      <h1 className="text-center text-5xl font-extrabold text-white relative inline-block mb-12">
        Supporting Lives, One Step at a Time
        <span className="block h-1 w-1/2 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 mx-auto animate-pulse rounded-full" />
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-80 hover:bg-opacity-90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl p-5 w-full max-w-xs h-[420px] flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover rounded-xl mb-5"
            />
            <h2 className="text-2xl font-semibold text- transition duration-300 text-center">
              {item.title}
            </h2>
            <p className="text-gray-900 mt-4 text-center px-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorycard;
