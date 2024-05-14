import './specification.css'

const Specification = ({ details }) => {
  return (
    <div className="specification">
      <ul className="spec-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const Specifications = () => {
  return (
    <section className="specifications" id='product-details'>
      <Specification
        details={[
          "Battery Capacity: 500mAh lithium-ion battery",
          "Battery Life: Up to 4 weeks on a single charge"
        ]}
      />
      <Specification
        details={[
          "Case Material: Stainless steel with a brushed finish",
          "Water Resistance: 50 meters (5 ATM), suitable for swimming and snorkeling"
        ]}
      />
      <Specification
        details={[
          "Case Size: 42mm diameter, suitable for both men and women",
          "Strap Options: Interchangeable leather and stainless steel straps available"
        ]}
      />
      <Specification
        details={[
          "Activity Tracking: Steps, distance, calories burned, active minutes",
          "Workout Modes: Pre-set modes for running, cycling, swimming, and more"
        ]}
      />
      <Specification
        details={[
          "Warranty: 2-year international warranty covering manufacturing defects",
          "Quality Assurance: Rigorous testing for durability and performance"
        ]}
      />
    </section>
  );
};

export default Specifications;
