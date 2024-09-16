import React from 'react';
import './Pricing.css';

function Pricing() {
  const plans = [
    { 
      name: 'Basic', 
      price: '$49/month', 
      features: [
        '1 job posting',
        'Basic analytics',
        '30-day listing',
        'Email support'
      ]
    },
    { 
      name: 'Pro', 
      price: '$99/month', 
      popular: true,
      features: [
        '5 job postings',
        'Advanced analytics',
        '60-day listing',
        'Featured listings',
        'Priority email support'
      ]
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      features: [
        'Unlimited job postings',
        'Premium analytics',
        '90-day listing',
        'Featured listings',
        'Dedicated account manager',
        'API access'
      ]
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan for your hiring needs</p>
      </div>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular-plan' : ''}`}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;