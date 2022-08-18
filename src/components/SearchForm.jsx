import React from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from './Layout';
const SearchForm = () => {

  const navigate = useNavigate()
  return (
    <>
      <Layout>
        <form className='w-[450px] min-h-[70vh] p-5 bg-[#fafafa] flex flex-col justify-between items-center rounded-md'>
          <fieldset className='flex flex-col py-1'>
            <legend className='text-green-900 text-center block font-semibold'>
              Pick the cities to compare(Minimum 2)
            </legend>
            <div className=' flex flex-wrap text-center'>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute ' />
                <span>San Diego, CA</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Atlanta, GA</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Dallas, TX</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Nashville, TN</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Phoenix, AZ</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-  rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Jacksonville, FL</span>
              </label>
            </div>
          </fieldset>
          <div className='text-center text-green-900 font-semibold'>
            Apartment Features
          </div>
          <fieldset className='mt-3'>
            <legend className='text-center text-green-700 font-semibold'>
              Beds
            </legend>
            <div className='flex'>
              <input type='radio' id='one' name='bedroom' className='mr-1' />
              <label htmlFor='one' className='mr-3 cursor-pointer'>
                One Bedroom
              </label>
              <input type='radio' id='two' name='bedroom' className='mr-1' />
              <label htmlFor='two' className='mr-3 cursor-pointer'>
                Two Bedroom
              </label>
              <input type='radio' id='three' name='bedroom' className='mr-1' />
              <label htmlFor='three' className='cursor-pointer'>
                Three Bedroom
              </label>
            </div>
          </fieldset>
          <fieldset className='mt-4'>
            <legend className='text-center text-green-900 font-semibold mb-3'>
              Monthly Rent
            </legend>
            <div className='flex'>
              <input
                type='number'
                placeholder='Min'
                className='block flex-[50%] w-[120px] mr-5 px-3 py-1'
              />
              <input
                type='number'
                placeholder='Max'
                className='block flex-[50%] w-[120px] px-3 py-1'
              />
            </div>
          </fieldset>
          <fieldset className='mt-4'>
            <legend className='text-center text-green-900 font-semibold mb-2'>
              Amenities (Minimum 2)
            </legend>
            <div className=' flex flex-wrap text-center'>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Pet Friendly</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Gated</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Pool</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>In-unit Washer Dryer</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Fitness Center</span>
              </label>
              <label className='flex-[50%] inline-block relative cursor-pointer mb-3 rounded-xl py-2 hover:bg-[#f2f2f2]'>
                <input type='checkbox' className='opacity-0 absolute' />
                <span>Parking</span>
              </label>
            </div>
          </fieldset>
          <button
            className='bg-[#A1D2DE] hover:text-white font-medium hover:bg-sky-700 px-6 py-2 rounded-xl'
            onClick={() => navigate('/search')}
            type='submit'
          >
            Search
          </button>
        </form>
      </Layout>
    </>
  );
}

export default SearchForm