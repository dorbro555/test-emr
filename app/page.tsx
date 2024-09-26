import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from './blank_pic.webp'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-purple-700 text-white p-1 flex justify-between items-center">
          <h1 className="text-lg font-bold m-2">Test EMR</h1>
          <div className="flex space-x-4">
            <input type="text" placeholder="Search Client" className="p-2 rounded-full bg-purple-700 border text-black" />
            <div className="rounded-full bg-purple-700 border w-10 h-10 flex items-center justify-center">AH</div>
          </div>
      </header>
      {/* Navigation */}
      <div id="navigation" className='text-black relative flex overflow-x-auto overflow-y-hidden w-full bg-white shadow-md'>
        <ul className='flex gap-2 ml-4 text-sm'>
          <li className="p-1">
            <a href='/'>Dashboard</a>
          </li>
          <li className='p-1 border-b-2 border-purple-700 bg-gray-200'>
            <a href='/'>Clients</a>
          </li>
          <li className="p-1">
            <a href='/'>Occupancy</a>
          </li>
          <li className="p-1">
            <a href='/'>Schedules</a>
          </li>
          <li className="p-1">
            <a href='/'>Shifts</a>
          </li>
          <li className="p-1">
            <a href='/'>Contacts</a>
          </li>
          <li className="p-1">
            <a href='/'>Reports</a>
          </li>
          <li className="p-1">
            <a href='/'>Inventory</a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex flex-grow text-black">

        {/* Clients section */}
        <main className="flex-grow p-4 text-black">
          <div className='flex items-center mb-2'>
            <h2 className="text-xl font-bold mr-2">Clients</h2>
            <span className='text-sm mx-2'>Census 6 • Incoming 0 • Discharge 0</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Sample client cards */}
            {[
              { name: 'Bryan Sanderson', id: 'SLR2024-47', color: 'bg-red-500' },
              { name: 'Bryan Sanderson', id: 'SLR2024-49', color: 'bg-red-500' },
              { name: 'Bryan Sanderson', id: 'SLR2024-46', color: 'bg-red-500' },
              { name: 'Bryan Sanderson', id: 'SLR2024-42', color: 'bg-red-500' },
              { name: 'Bryan Sanderson', id: 'SLR2024-50', color: 'bg-green-500' },
            ].map((client) => (
              <Link href={`/patients/${client.id}`}>
                <div
                  key={client.id}
                  className={`${client.color} px-4 pt-2 rounded-lg flex flex-col items-center`}
                >
                  <Image
                    src={profilePic}
                    width={113}
                    height={150}
                    alt="Picture of the author"
                  />
                  <span className="font-bold text-xs">{client.name}</span>

                  <span className="font-bold text-xs">{client.id}</span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 border-r">
          <button className="bg-green-500 w-full py-2 mb-4">New</button>
          <div className="flex flex-col space-y-2">
            <button className="bg-gray-200 py-2 text-left">Pre-Admission</button>
            <button className="bg-gray-200 py-2 text-left">Arriving Today</button>
            <button className="bg-gray-200 py-2 text-left">Discharging Tomorrow</button>
            <button className="bg-gray-200 py-2 text-left">Review Past Due</button>
          </div>

          {/* Search filter */}
          <div className="mt-6">
            <h2 className="font-bold mb-2">Programs</h2>
            <div className="space-x-2">
              <button className="bg-gray-200 py-1 px-4">Unassigned</button>
              <button className="bg-gray-200 py-1 px-4">DTX</button>
              <button className="bg-gray-200 py-1 px-4">IOP</button>
            </div>

            {/* Custom filter */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="bg-gray-300 w-full mt-2 p-2">Submit</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;