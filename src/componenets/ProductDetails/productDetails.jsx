import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faHardHat, faTint, faHeartbeat, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './productdetails.css'

const icons = [faBatteryFull, faHardHat, faTint, faClock, faHeartbeat, faShieldAlt];

const titles = [
    'Ultra Battery Life',
    'Durable Construction',
    'Water Resistance',
    'Classic Design',
    'Fitness Tracking',
    'Long-lasting Reliability'
];

const descriptions = [
    'Enjoy weeks of uninterrupted usage on one charge. Your watch is always there when you need it.',
    'Crafted from stainless steel and sapphire crystal, our watch handles everyday wear with confidence.',
    "Stay worry-free with a waterproof design up to 50 meters, ensuring your watch stays protected in any environment.",
   "Combine timeless charm with everyday practicality, effortlessly standing out wherever you go.",
    'Stay in tune with your body effortlessly, monitoring activity levels and heart rate.',
    "Made to withstand the test of time, this watch epitomizes the pinnacle of durability."
];

const Card = ({id, icon, title, description}) => {

    return (
        <div className='animate'>

        <div className='card' id={`card`+id}>
            <div className='animate3'></div>
            <span className='logo'> <FontAwesomeIcon icon={icon} /> </span>
          <span className='feature-title'> {title} </span>
          <p className='feature-description'> {description} </p>
        </div>

        </div>
    )
}


const Details = () => {

        const cards = titles.map((title, index) => {
            return <Card id={index + 1} key={index} icon={icons[index]} title={title} description={descriptions[index]} />
        })

    return (
        <section className=' text-white w-[90%] mx-auto my-16 features' id='features'>
             
             {cards}
            
        </section>
    )
}


export default Details