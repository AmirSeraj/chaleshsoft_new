import React from 'react'

const BlogsCategories = () => {
    const categories = [
        {
            id:"defrfvrgt",
            name:"programming"
        },
        {
            id:"defrfvrgt",
            name:"blockchain"
        },
        {
            id:"defrfvrgt",
            name:"Data Science"
        },
        {
            id:"defrfvrgt",
            name:"Writing"
        },
        {
            id:"defrfvrgt",
            name:"Machine Learning"
        },
        {
            id:"defrfvrgt",
            name:"Self Improvement"
        },
        {
            id:"defrfvrgt",
            name:"Self Productivity"
        },
        {
            id:"defrfvrgt",
            name:"Relationships"
        },
    ]
  return (
    <div className='sticky w-full h-auto !pt-0 sm:p-10 p-5 top-5 flex flex-col'>
        <h4 className='text-base mb-5'>Discover more of what matters to you</h4>
        <div className='w-full p-2 flex flex-wrap sm:gap-3 gap-2'>
            {
                categories.map((category, index) => (
                    <span href="/" key={index} className='p-[0.7rem] text-[0.7rem] bg-[#ccc] rounded-xl text-black cursor-pointer hover:bg-lime-200'>{category.name}</span>
                ))
            }
        </div>
    </div>
  )
}

export default BlogsCategories