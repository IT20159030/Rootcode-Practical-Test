import React from 'react'
import { BiMoney, BiSolidAddToQueue, BiSolidReport } from 'react-icons/bi'
import HomeCard from '../components/HomeCard'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/ContextProvider'


const Home = () => {

  const { mode } = useGlobalContext();

  const homeCards = [
    {
      icon: <BiSolidAddToQueue className='className="h-6 w-6 text-white' />,
      title: 'Add Expense',
      description: 'Add a new expense',
      link: '/add-expense'
    },
    {
      icon: <BiMoney className='className="h-6 w-6 text-white' />,
      title: 'Expenses',
      description: 'View all your expenses',
      link: '/all-expenses'
    },
    {
      icon: <BiSolidReport className='className="h-6 w-6 text-white' />,
      title: 'Reports',
      description: 'View reports',
      link: '/reports'
    },
  ]

  return (
    <div>
      <div className={`bg-${mode === 'light' ? 'white' : 'gray-800'} text-${mode === 'light' ? 'gray-800' : 'white'} min-h-screen`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Welcome to Expense Tracker</h2>
            <p className="mt-4 text-lg text-center">Choose an option below to get started</p>
          </div>
        <div>
          <div className="flex justify-center items-center h-screen">
            <div className="max-w-5xl grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 mx-auto">
              {homeCards.map((card, index) => (
                <Link to={card.link} key={index}>
                  <HomeCard key={index} icon={card.icon} title={card.title} description={card.description} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
};

export default Home;