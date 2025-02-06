import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Customer() {
  return (
    <div className="grow p-6 md:overflow-y-auto md:p-12">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-[lustina]">Customers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <div className="relative flex flex-1 flex-shrink-0">
            <input
              type="text"
              placeholder="Search for customers..."
              className="peer block w-full rounded-md border border-gray-300 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute top-3 left-3 text-gray-500"
            />
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden"></div>
              <table className=" min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th className="px-4 py-5 font-medium sm:pl-6">Name</th>
                    <th className="px-4 py-5 font-medium sm:pl-6">Email</th>
                    <th className="px-4 py-5 font-medium sm:pl-6">Total Invoice</th>
                    <th className="px-4 py-5 font-medium sm:pl-6">Total Pending</th>
                    <th className="px-4 py-5 font-medium sm:pl-6">Total Paid</th>
                  </tr>
                </thead>
                <tbody className="bg-white tex-left">
                  {/* Placeholder for customer data */}
                  <tr className="w-full border-b border-gray-300 py-3 text-sm last-of-type:border-none">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          alt=""
                          loading="lazy"
                          className="rounded-full"
                          width={28}
                          height={28}
                        />
                        <p>John Doe</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 lowercase">johndoe@gmail.com</td>
                    <td className="whitespace-nowrap px-3 py-3">1</td>
                    <td className="whitespace-nowrap px-3 py-3">$0.00</td>
                    <td className="whitespace-nowrap px-3 py-3">$1000.00</td>
                  </tr>
                  {/* Repeat similar rows for other customers */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;