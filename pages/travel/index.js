import { getSession } from 'next-auth/react'
import Nav from '../../components/nav'
import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
    {
        title: 'Travel Authorizations',
        href: '/travel/travelauth',
        icon: ClockIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Benefits',
        href: '#',
        icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Travel = () => {
    return (
        <div className="h-[100vh] w-[100vw]">
            <Nav />
            <div className="w-full h-full bg-gray-100 p-10">
                <div className="sm:px-6 lg:px-8">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Travel</h1>
                    <div className="mt-10 divide-y divide-gray-200 overflow-hidden sm:grid sm:grid-cols-2 sm:gap-[20px] sm:divide-y-0">
                        {actions.map((action, actionIdx) => (
                            <div
                                key={action.title}
                                className='border-solid border-gray-200 border-1 rounded group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[var(--primary-color)]'
                            >
                                <div>
                                    <span
                                        className={classNames(
                                            action.iconBackground,
                                            action.iconForeground,
                                            'inline-flex rounded-lg p-3 ring-4 ring-white'
                                        )}
                                    >
                                        <action.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                                        <a href={action.href} className="focus:outline-none">
                                        {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {action.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                                        quo et molestiae.
                                    </p>
                                </div>
                                    <span
                                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                        aria-hidden="true"
                                    >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return {
        redirect: {
            destination: '/login',
            permanent: false
        }
        }
    }

    return {
        props: { session }
    }
}

export default Travel

  
  
  
  

  