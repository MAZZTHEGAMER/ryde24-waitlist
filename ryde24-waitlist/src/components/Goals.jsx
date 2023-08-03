import {
  CheckIcon,
  GlobeIcon,
  ShieldCheckIcon,
  TrendingDownIcon,
} from "@heroicons/react/outline";
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const goals = [
  {
    name: "Reduce Unlicensed Taxis",
    description:
      "One of our primary goals is to significantly reduce the number of unlicensed taxis on the streets. By providing a reliable and safe alternative, we aim to improve overall transportation standards in the city.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Enhance Commuters Security",
    description:
      "We are committed to enhancing commuters' security during their daily commutes. Our strict driver screening process and in-app emergency assistance ensure a secure and worry-free journey for everyone.",
    icon: CheckIcon,
  },
  {
    name: "Traffic Reduction",
    description:
      "By encouraging the use of public transportation and carpooling, we are actively working towards reducing traffic congestion in the city. Join us in making our city greener and more accessible for everyone.",
    icon: TrendingDownIcon,
  },
  {
    name: "Sustainable Transportation",
    description:
      "At Ryde 24, we believe in sustainable transportation solutions. With more people using our eco-friendly buses, we can collectively reduce our carbon footprint and contribute to a cleaner environment.",
    icon: GlobeIcon,
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export default function Goals() {
  return (
    <>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  {" "}
                  Our Goals
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {" "}
                  Redefining Commuting for a Better City
                </h1>
                {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas.
                </p> */}
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] h-[25rem] sm:h-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://lh3.googleusercontent.com/pw/AIL4fc8vY0bFGjwqvHz2vy7VkSrzZ2_RklD41rCIfQ01ULdBgDjtelkmqMfB4rtIbULAFjaoqI2_Aoe2NPKs_Emwf599TIGq6IHwHqAdaOSJfjxtNVf0kyBsiZ0ocT0RN_QaxuQLRE07ekJuclK9Vlz-ZX28q0_1C1K7WujySIRzbztxtu6vsPBM3gMfPnGvybD_TTwphwW0RdVSl98x73n8dZh3NkVb67VFa4rT8y5ba7xF4Fa5nsePM70dRozFMqIBvglCpFxpnBpIeq7F53K7EfZ_8MitnS93faDB7nodbXzwwqRNp-8-zRYPlUt19cC5rnVOpGvkZLJRa2rGI8kR6AkwmqAbCSBTR4h_GEQedAJVIT3nGxwzIppVoaMPRQmuEJidIt2aekj_YY0fwUYO9bTZzFHBhPx-MPjpl64VYCCtn1kb6-aZaAhCZZ3Yc1YRbnfdb9T7keTqN6YgCoxbdCvT6ZP11vqE8sedvgOztO5es7uHEU4wBEw9WnP9jT-xcvp1V6kLsTeoq_Rk_or8E0_n0C2EPWmTNbzfB7a1jI_A8zu9Z2y2PzuyLdyXlJSUJb7A2bYJnzqQ0Q0APLr1JE1kfXoWONqEG2-2AsYx9l_SFIXLE2iwPgdXwXtHFKa84y_1rTaTdodOec9m7b8K-StQ6xeOKqvh7YQSOEzcKgkRUQsHYvF08799EvfQXpcsPuPZjVC4h1EfrdzTqb_wXZ-XYscywI760bnvYtRY2ZzRshlm_YyGsBONdSmBgyGZ8yDPjtDQdgJAHs9PyAGJkDuxxkwvhoImOqWTDLt8PSGR7AoHOLDbjQC_4jV0q4tRskiZ9PQVH0aTy1SfEFnntZgoz6OyhXoqL71sOXtCZyUK64KkRVj3_yylNyYOIoWp5-zqbOmJ2JsruY0=w940-h1039-s-no?authuser=0"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2  text-left sm:text-center lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  {goals.map((goal) => (
                    <li key={goal.name} className="flex gap-x-3">
                      {/* <CloudArrowUpIcon  className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"  /> */}
                      <goal.icon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {goal.name}{" "}
                        </strong>
                        {goal.description}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p> */}
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2>
                <p className="mt-6">
                  Our team is dedicated to creating a city where everyone can
                  commute without stress and delays. We're actively working
                  towards minimizing traffic congestion and promoting
                  sustainable transportation. Join us in our journey to redefine
                  commuting for a better city, making it easy for everyone to
                  reach their destinations swiftly and safely.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <hr />
                <p className="italic">
                  Ready to experience a better commuting journey with Ryde 24?
                  Join our waitlist today and be the first to know about our
                  exciting offers and new features.
                </p>
                {/* <button
                  onClick={scrollToTop}
                  className="mt-8 px-6 py-3 rounded-md text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                >
                  Join the Waitlist 🚀
                </button> */}
                <button
                  onClick={scrollToTop}
                  className="mt-8 px-6 py-3 rounded-md text-white font-medium bg-gradient-to-tr from-[#ff73ada1] to-[#8981ff] bg-opacity-30 hover:bg-opacity-100 transition-all duration-300"
                >
                  Join the Waitlist 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
