import { useState, useEffect } from "react";

const OfferTimer = () => {
    // Offer end time (for example: current time + 5 hours)
    const offerEndTime = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 hours later

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = offerEndTime - now;

        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-yellow-200 p-4 text-center rounded-md shadow-md w-80 mx-auto mt-10">
            <h2 className="text-lg font-bold text-red-600">⚡ Limited Time Offer ⚡</h2>
            <p className="mt-2 text-xl font-semibold text-gray-800">
                Ends in:{" "}
                <span className="text-red-700">

                    <div className="bg-gray-400 text-white p-3 rounded-md ">

                    </div>
                    {timeLeft.minutes.toString().padStart(2, "0")}:
                    {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <div className="mt-2 text-gray-600">
                    <div className="flex gap-1  bg-gray-400 text-white p-3 rounded-md ">
                        <h3>{timeLeft.hours.toString().padStart(2, "0")}</h3>
                        <span> Hours</span>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default OfferTimer;
