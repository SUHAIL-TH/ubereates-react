import React from 'react'

function HeadlineCards() {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'> 
                    {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                    <p className='font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO' s Out</p>
                    <p className='px-2 '>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 font-bold absolute bottom-4'>Order Now</button>
                </div>
                <img className=' max-h-[250px]  md:mx-h-[200px] w-full object-cover rounded-xl ' 
                src="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg" alt="" />
            </div>
            <div className='rounded-xl relative'> 
                    {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                    <p className='font-bold text-2xl px-2 pt-2'>New Restaurand</p>
                    <p className='px-2 '>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 font-bold absolute bottom-4'>Order Now</button>
                </div>
                <img className=' max-h-[250px]  md:mx-h-[200px] w-full object-cover rounded-xl ' 
                src="https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg" alt="" />
            </div>
            <div className='rounded-xl relative'> 
                    {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
                    <p className='font-bold text-2xl px-2 pt-2'>Hurry New Deal</p>
                    <p className='px-2 '>Buy One get One free!!!</p>
                    <button className='border-white bg-white text-black mx-2 font-bold absolute bottom-4'>Order Now</button>
                </div>
                <img className=' max-h-[250px]  md:mx-h-[200px] w-full object-cover rounded-xl ' 
                src="https://cdn.pixabay.com/photo/2023/10/20/17/30/hamburger-8329939_640.jpg" alt="" />
            </div>
        </div>
    )
}

export default HeadlineCards