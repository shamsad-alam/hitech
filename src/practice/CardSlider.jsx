import React, { useState } from "react";

const CardSlider = () => {
    const cards = [
        { id: 1, title: "Card 1", desc: "This is card 1" },
        { id: 2, title: "Card 2", desc: "This is card 2" },
        { id: 3, title: "Card 3", desc: "This is card 3" },
        { id: 4, title: "Card 4", desc: "This is card 4" },
        { id: 5, title: "Card 5", desc: "This is card 5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCard = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3

    const next = () => {
        if (currentIndex + visibleCard < cards.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="w-[90%] mx-auto my-10">
            <div className="flex justify-between mb-4">
                <button
                    onClick={prev}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Next
                </button>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-all duration-500"
                    style={{ transform: `translateX(-${(currentIndex * 100) / visibleCard}%)` }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex-none w-full md:w-1/2 lg:w-1/3 p-2"
                        >
                            <div className="bg-white shadow-md rounded p-4 text-center">
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
