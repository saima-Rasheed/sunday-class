import React from 'react'
import Image from 'next/image'

const Assignment2 = () => {
  return (
     <div className='grid place-content-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>  
    <div className='bg-white h-62 w-52'> 
        <Image 
        src="/shampoo2.jpg"
        width={100}
        height={100}
        alt='shampoo'
         
        
        
        />
       <p className='text-blue-600 text-center font-bold ' > Dove Shampoo</p>
       <p className='text-blue-600 text-center font-bold'>price:500 Rs</p> 
    </div>
    <div  className='bg-white h-62 w-52'>
 
 <Image 
        src="/shampoo2.jpg"
        width={100}
        height={100}
        alt='shampoo'
         
        
        />
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' > Dove Shampoo</p>
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>price:500 Rs</p>



        </div>
        <div  className='bg-white h-62 w-52'>
        <Image  
        src="/shampoo2.jpg"
        width={100}
        height={100}
        alt='shampoo'
         
        
        />
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' > Dove Shampoo</p>
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>price:500 Rs</p>
            </div>         
    </div>    
      
    
  )
}

export default Assignment2
