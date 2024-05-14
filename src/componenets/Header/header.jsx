import { useState, useEffect } from "react";

const Header = () => {
    const [indicatorStyle, setIndicatorStyle] = useState(null);

    

    useEffect(() => {
        const handleResize = () => {

            const screenWidth = window.innerWidth;
            
            if (screenWidth > 700) {
                setIndicatorStyle({
                    position: 'absolute',
                    width: '6.5rem',
                    height: '70%',
                    backgroundColor: '#28292add',
                    opacity: '0',
                    zIndex: '-1',
                    transition: 'transform 0.12s, opacity 0.3s ease-in',
                    top: '15%',
                    left: '0'
                });
                
            } else {
                setIndicatorStyle({
                    position: 'absolute',
                    height: '70%',
                    backgroundColor: '#28292add',
                    opacity: '0',
                    zIndex: '-1',
                    transition: 'transform 0.12s, opacity 0.3s ease-in',
                    width: '21vw',
                    top: '15%',
                    left: '0'
                });
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (index) => {
        const translateValue = window.innerWidth > 700 ? '6.5rem' : '21vw';
        if (indicatorStyle) {
            setIndicatorStyle(prevStyle => ({
                ...prevStyle,
                opacity: '1',
                transform: `translateX(calc(${translateValue} * ${index}))`,
            }));
        }
    };

    const handleMouseLeave = () => {
        if (indicatorStyle) {
            setIndicatorStyle(prevStyle => ({
                ...prevStyle,
                opacity: '0'
            }));
        }
    };

    return (
        <header className='top-0 fixed w-[95%] h-16 flex justify-between items-center border-b-2 border-indigo-950 left-[50%] translate-x-[-50%] px-12 bg-[#120f0f] z-50 rounded-lg'>
            <span id="logo" className="text-white">Logo</span>

            <ul id="links" className="relative flex-grow max-w-[25rem] flex list-none">
                <li><a href="#home" className="text-white" onMouseEnter={() => { handleMouseEnter(0) }} onMouseLeave={handleMouseLeave}>   Home</a></li>
                <li><a href="#product-details" className="text-white" onMouseEnter={() => { handleMouseEnter(1) }} onMouseLeave={handleMouseLeave}>Details</a></li>
                <li><a href="#review-section" className="text-white" onMouseEnter={() => { handleMouseEnter(2) }} onMouseLeave={handleMouseLeave}>Reviews</a></li>
                <li><a href="#contact" className="text-white" onMouseEnter={() => { handleMouseEnter(3) }} onMouseLeave={handleMouseLeave}>Contact</a></li>

                {indicatorStyle && <div style={indicatorStyle}></div>}
            </ul>
        </header>
    );
};

export default Header;
