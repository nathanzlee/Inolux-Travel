import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ items, page, onChange }) => {

    const [currentPage, setCurrentPage] = useState(page)
    const [range, setRange] = useState(0)

    let pages = []
    if (Math.ceil(items / 10) < 6) {
        pages = [1, 2, 3, 4, 5, '...']
    } else if (range > 0 && range < Math.ceil(items / 10) - 5) {
        pages.push('...')
        for (let i = range; i < range + 5; i++) {
            pages.push(i + 1)
        }
        pages.push('...')
    } else if (range == 0) {
        for (let i = 0; i < 5; i++) {
            pages.push(i + 1)
        }
        pages.push('...')
    } else {
        pages.push('...')
        for (let i = range; i < range + 5; i++) {
            pages.push(i + 1)
        }
    }

    const currentStyle = 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    const defaultStyle = 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
    console.log(pages)
    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-5">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{items % 10}</span> of{' '}
                        <span className="font-medium">{items}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button 
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => {
                                setRange(0)
                                setCurrentPage(0)
                            }}
                        >
                            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button 
                            className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => {
                                if (currentPage > 0) setCurrentPage(currentPage - 1)
                            }}
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {pages.map(page => {
                            return (page === currentPage + 1) ? 
                            (
                                <button className={currentStyle}>
                                    {page}
                                </button>
                            )
                            :
                            (
                                <button className={defaultStyle}>
                                    {page}
                                </button>
                            )
                        })}
                        
                        <button
                            className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => {
                                if (currentPage < Math.ceil(items / 10) - 1) setCurrentPage(currentPage + 1)
                            }}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination