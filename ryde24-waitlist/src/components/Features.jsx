import { RiSafe2Line, RiMoneyDollarCircleLine, RiEmotionHappyLine, RiMapPin2Line, RiUserHeartLine } from 'react-icons/ri';
import { RiTimeLine } from 'react-icons/ri';
import { RiCommunityLine } from 'react-icons/ri';
import Goals from './Goals';


const features = [
  {
    name: 'Safety First',
    description:
      'Ryde 24 ensures your safety with our team of well-trained and licensed drivers. Enjoy peace of mind knowing you are in safe hands.',
    icon: RiSafe2Line,
  },
  {
    name: 'Reliable Commutes',
    description:
      'With our extensive fleet of buses, Ryde 24 offers reliable daily commutes to work, school, or wherever you need to go.',
    icon: RiTimeLine,
  },
  {
    name: 'Comfortable Rides',
    description:
      'Gone are the days of crowded busses and taxis. Experience comfort like never before with designated seats for all commuters. Pay ahead of time to focus on other important things.',
    icon: RiSafe2Line,
  },
  {
    name: 'Affordable Prices',
    description:
      'We believe commuting shouldn’t be a burden on your wallet. Enjoy cost-effective rides with transparent pricing and no hidden fees.',
    icon: RiMoneyDollarCircleLine,
  },
  {
    name: 'Happy Commuters',
    description:
      'We value our commuters and their happiness is our priority. Enjoy friendly service and a smile every time you ride with Ryde 24.',
    icon: RiEmotionHappyLine,
  },
  {
    name: 'Convenient Routes',
    description:
      'Ryde 24 offers a network of convenient routes to cover all major destinations. Plan your journey effortlessly with our user-friendly app.',
    icon: RiMapPin2Line,
  },
  {
    name: 'Community Driven',
    description:
      'Join a community of commuters who share a passion for efficient and sustainable transportation. Together, we make a difference.',
    icon: RiCommunityLine,
  },
];



export default function Features() {
  return (
    <>
    <div className=" text-left pt-20 sm:pt-5">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <hr />
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Your Ultimate Daily Commute Companion
          </h2>
          <p className="mt-2 text-3xl pt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introducing Ryde 24
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Say goodbye to commuting woes with Ryde 24, the app that
            revolutionizes your daily travel experience. We've carefully crafted
            Ryde 24 to cater to the needs of busy commuters like you, providing
            a seamless, safe, and cost-effective journey every time you step out
            the door.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900  flex-col sm:flex-row">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                  {/* 😊🚌🚀 */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

     <Goals />
    

      </>
      
    
  )
}

// import React from "react";
// // import {
// //   ArrowPathIcon,
// //   CloudArrowUpIcon,
// //   FingerPrintIcon,
// //   LockClosedIcon,
// //   ShieldCheckIcon,
// //   CurrencyDollarIcon,
// //   SunIcon,
// //   UserGroupIcon,
// //   ChatIcon,
// // } from "@heroicons/react/outline";

// const features = [
//   {
//     name: "Reliability",
//     description:
//       "On-time, every time! Our fleet of well-maintained buses ensures efficient and punctual daily commutes to work, school, or wherever you need to go.",
//    icon: LockClosedIcon,
//   },
//   {
//     name: "Safety First",
//     description:
//       "Your well-being matters. Rest assured with our highly trained and licensed drivers, along with buses that meet the highest safety standards for a secure daily commute.",
//      icon: LockClosedIcon,
//   },
//   {
//     name: "Cost-Effectiveness",
//     description:
//       "Budget-friendly commutes without compromising on quality. Discover a range of fare options, discounts, and special plans for regular travelers on their daily commutes.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Comfort and Convenience",
//     description:
//       "Gone are the days of crowded buses and taxis! Enjoy a relaxing journey with designated seats in our clean, air-conditioned buses, and pay ahead of time for a hassle-free daily commute.",
//      icon: LockClosedIcon,
//   },
//   {
//     name: "Enhanced Security",
//     description:
//       "Peace of mind during your daily commute with our advanced security measures, including real-time tracking, emergency assistance, and 24/7 customer support.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Affordable Fares",
//     description:
//       "Say goodbye to fare hikes! We offer transparent and competitive pricing, ensuring that your daily commute remains cost-effective and budget-friendly.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Weatherproof Rides",
//     description:
//       "Stay comfortable rain or shine! Our buses are equipped to handle all weather conditions, providing a reliable and safe commute year-round.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Community Connection",
//     description:
//       "Join a vibrant community of commuters! Share experiences, make new connections, and stay informed with our interactive chat platform.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Customer Support",
//     description:
//       "Your satisfaction is our priority! Reach out to our friendly and dedicated customer support team for any assistance or queries related to your daily commute.",
//      icon: LockClosedIcon,
//   },
// ];

//
