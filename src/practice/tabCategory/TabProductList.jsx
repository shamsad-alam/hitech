import React, { useState } from 'react'

function TabProductList() {
    const [activeTab, setactiveTab] = useState("All")
    const CategoriesTab = ["All", "Mens", "Women", "Kids"];
    return (
        <>
            <section className='w-7xl mx-auto px-12'>
                <div>
                    {/* tab section */}
                    <div className=' text-center mt-10'>
                        {CategoriesTab.map((tab) => (
                            <button key={tab.id} className={`mx-5 px-6 py-2 rounded-md cursor-pointer text-center text-black
                                ${activeTab === tab ? 'bg-amber-500' : 'bg-zinc-200'} `}
                                onClick={() => setactiveTab(tab)} >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TabProductList
