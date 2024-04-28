
const TopDivLeft = () => {
  return (
    <div className='grid grid-cols-4 sm:gap-8 gap-6 lg:w-auto w-full sm:text-sm xs:text-[10px] text-[9px] leading-[1rem]'>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Products</p>
            <span className='text-white'>Mempool Data</span>
            <span className='text-white'>Block Streaming</span>
            <span className='text-white'>Transaction Propagation</span>
            <span className='text-white'>Frontrunning Protection</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Developers </p>
            <span className='text-white'>Overview</span>
            <span className='text-white'>How to Connect</span>
            <span className='text-white'>With or Without a Node</span>
            <span className='text-white'>API Integration</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Company</p>
            <span className='text-white'>Why bloXroute</span>
            <span className='text-white'>Our Team</span>
            <span className='text-white'>Careers</span>
            <span className='text-white'>Pricing</span>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#818CF8] mb-4'>Contact</p>
            <span className='text-white'>Developer Contact</span>
            <span className='text-white'>Developer Email</span>
            <span className='text-white'>Developer Gmail</span>
            <span className='text-white'>Developer text</span>
        </div>
    </div>
  )
}

export default TopDivLeft;