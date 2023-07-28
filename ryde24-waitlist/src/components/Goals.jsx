import { CheckIcon, GlobeIcon, ShieldCheckIcon, TrendingDownIcon } from '@heroicons/react/outline';


const goals = [
  {
    name: 'Reduce Unlicensed Taxis',
    description:
      'One of our primary goals is to significantly reduce the number of unlicensed taxis on the streets. By providing a reliable and safe alternative, we aim to improve overall transportation standards in the city.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Enhance Commuters Security',
    description:
      'We are committed to enhancing commuters\' security during their daily commutes. Our strict driver screening process and in-app emergency assistance ensure a secure and worry-free journey for everyone.',
    icon: CheckIcon,
  },
  {
    name: 'Traffic Reduction',
    description:
      'By encouraging the use of public transportation and carpooling, we are actively working towards reducing traffic congestion in the city. Join us in making our city greener and more accessible for everyone.',
    icon: TrendingDownIcon,
  },
  {
    name: 'Sustainable Transportation',
    description:
      'At Ryde 24, we believe in sustainable transportation solutions. With more people using our eco-friendly buses, we can collectively reduce our carbon footprint and contribute to a cleaner environment.',
    icon: GlobeIcon,
  },
];


export default function Goals() {

    return (

        <>
        
        <div className=" bg-slate-100  rounded-lg   text-left pt-20 sm:pt-5">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl lg:text-center">
    <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Goals</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Redefining Commuting for a Better City
    </p>
  </div>
  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {goals.map((goal) => (
        <div key={goal.name} className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <goal.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            {goal.name}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">{goal.description}</dd>
        </div>
      ))}
    </dl>
  </div>
</div>
    </div>
        </>


    );
    }