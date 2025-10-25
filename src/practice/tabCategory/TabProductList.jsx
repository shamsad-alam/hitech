import React, { useState } from 'react'
import ProductData from './ProductData';
import TabProductCard from './TabProductCard';

function TabProductList() {
    const [activeTab, setactiveTab] = useState("All")
    const CategoriesTab = ["All", "Mens", "Women", "Kids"];

    // const renderCategory = ProductData.filter((items) => {
    //     const asd = activeTab == "All" ? ProductData : activeTab === items.tab
    //     return asd
    // })
    return (
        <>
            <section className='w-7xl mx-auto px-12'>
                <div>
                    {/* tab section */}
                    <div className=' text-center mt-10'>
                        {CategoriesTab.map((tab) => (
                            <button key={tab} className={`mx-5 px-6 py-2 rounded-md cursor-pointer text-center text-black
                                ${activeTab === tab ? 'bg-amber-500' : 'bg-zinc-200'} `}
                                onClick={() => setactiveTab(tab)} >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* all cards section */}
                    <TabProductCard  />
                </div>
            </section>
        </>
    )
}

export default TabProductList
