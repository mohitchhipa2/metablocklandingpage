import React, { useState, useEffect } from 'react';

function Timer() {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-04-28') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Handle the case where timeLeft is undefined
    const hours = timeLeft?.hours?.toString().padStart(2, '0');
    const minutes = timeLeft?.minutes?.toString().padStart(2, '0');
    const seconds = timeLeft?.seconds?.toString().padStart(2, '0');

    return (
        <div className='timers-div'>
            <button>{hours}</button>:
            <button>{minutes}</button>:
            <button>{seconds}</button>
        </div>
    );
}

export default Timer;