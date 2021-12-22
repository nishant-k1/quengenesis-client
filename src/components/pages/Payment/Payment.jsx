import "./Payment.css";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_kN0kRpDfZ4sTZgOpQHEEB0B9007vjnDxaD");

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const CheckoutForm=()=>{
  const [message, setMessage]=useState('');
  const [billingDetails, setBillingDetails]=useState({description:'', amount:'', name:'', email:'', phone:'', street:'', city:'', state:'', zip:''});
  const handleChannge=(event)=>{
    const {name, value}=event.target;
    setBillingDetails((initialValue)=>{
      switch (name){
        case "amount":  
            return({
                amount:value,
                name:initialValue.name, 
                email:initialValue.email, 
                phone:initialValue.phone, 
                street:initialValue.street, 
                city: initialValue.city, 
                state:initialValue.state, 
                zip: initialValue.zip,  
                description: initialValue.description
            });
            break;

        case "name":
            return({
              amount:initialValue.amount,
              name:value, 
              email:initialValue.email, 
              phone:initialValue.phone, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: initialValue.zip,
              description: initialValue.description
            });
            break;

        case "email":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:value, 
              phone:initialValue.phone, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: initialValue.zip,
              description: initialValue.description
            });
            break;

        case "phone":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:initialValue.email, 
              phone:value, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: initialValue.zip,
              description: initialValue.description
            });
            break;
            
        case "street":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:initialValue.email, 
              phone:initialValue.phone, 
              street:value, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: initialValue.zip, 
              description: initialValue.description
              });
            break;  
            
            case "city":
              return({
                amount:initialValue.amount,
                name:initialValue.name, 
                email:initialValue.email, 
                phone:initialValue.phone, 
                street:initialValue.street, 
                city: value, 
                state:initialValue.state, 
                zip: initialValue.zip,
                description: initialValue.description
              });
              break;    

          case "state":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:initialValue.email, 
              phone:initialValue.phone, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:value, 
              zip: initialValue.zip,
              description: initialValue.description
            });
            break;

          case "zip":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:initialValue.email, 
              phone:initialValue.phone, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: value,
              description: initialValue.description
            });
            break;  

          case "description":
            return({
              amount:initialValue.amount,
              name:initialValue.name, 
              email:initialValue.email, 
              phone:initialValue.phone, 
              street:initialValue.street, 
              city: initialValue.city, 
              state:initialValue.state, 
              zip: initialValue.zip,
              description: value
            });
            break;

            default:
              // 
    }  
    });
  }

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit=async (event)=>{
    event.preventDefault();
    stripe
      .createPaymentMethod(
        {
          type: 'card',
          card: elements.getElement(CardNumberElement),
          card: elements.getElement(CardExpiryElement),
          card: elements.getElement(CardCvcElement),
          billing_details: {
            address: {
              city: billingDetails.city,
              country: 'US',
              line1: billingDetails.street,
              line2: null,
              postal_code: billingDetails.zip,
              state: billingDetails.state
            },
            email: billingDetails.email,
            name: billingDetails.name,
            phone: billingDetails.phone
          },
        }
      ).then(result=>{
        console.log(result);
        return(
          axios(
            {
              method: 'post',
              url: '/payments',
              data: {result, amount: billingDetails.amount, description: billingDetails.description}
            }
          )
          .then(result => setMessage(result.data))
          .catch(err => console.log(err))
        );
      })
        .catch(err=>console.log(err));
      setBillingDetails({amount:'', name:'', email:'', phone:'', street:'', city:'', state:'', zip:'', description:''});
      // elements.getElement(CardNumberElement).clear();
      // elements.getElement(CardExpiryElement).clear();
      // elements.getElement(CardCvcElement).clear();
  }

  return(
        <form onSubmit={handleSubmit} className='pay-section'>
          <div className='pay-container'>
            <fieldset className='pay-fieldset'>
              <legend className='pay-legend'>Billing Details</legend>
              <div className='billing-details'>
                <label className='pay-label'><abbr>*</abbr>Name</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='name' value={billingDetails.name} required/>

                <label className='pay-label' htmlFor="email"><abbr>*</abbr>Email</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='email' value={billingDetails.email} required/>
  
                <label className='pay-label' htmlFor="phone"><abbr>*</abbr>Phone</label>
                <input className='pay-input' onChange={handleChannge} type="tel" placeholder='000-000-0000' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength='12' name='phone' value={billingDetails.phone} required/>
                
                <label className='pay-label' htmlFor="street"><abbr>*</abbr>Street Address</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='street' value={billingDetails.street} required/>
        
                <label className='pay-label' htmlFor="city"><abbr>*</abbr>City</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='city' value={billingDetails.city} required/>
            
                <label className='pay-label' htmlFor="state"><abbr>*</abbr>State</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='state' value={billingDetails.state} required/>
    
                <label className='pay-label' htmlFor="zip"><abbr>*</abbr>Zip</label>
                <input className='pay-input' onChange={handleChannge} type="text" pattern="[0-9]*" maxlength="5" title="five digit ZIP code" name='zip' value={billingDetails.zip} required/>
              </div>
            </fieldset>
            <fieldset className='pay-fieldset'>
              <legend className='pay-legend'>Payment Details</legend>
              <div className='amount-details'>
                <label className='pay-label' htmlFor="description"><abbr>*</abbr>Description</label>
                <input className='pay-input' onChange={handleChannge} type="text" name='description' value={billingDetails.description} required/>
            
                <label className='pay-label' htmlFor="amount"><abbr>*</abbr>Amount to be paid (USD)</label>
                <input className='pay-input' onChange={handleChannge} type='number' min='0' name='amount' value={billingDetails.amount} required/>
              </div>
            </fieldset>
            <fieldset className='pay-fieldset'>
              <legend className='pay-legend'>Card Details</legend>
              <div className='card-details'>
                <label className='pay-label' htmlFor="card"><abbr>*</abbr>Card Number</label>
                <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
              
                <label className='pay-label' htmlFor="card"><abbr>*</abbr>Card Expiry</label>
                <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
          
                <label className='pay-label' htmlFor="card"><abbr>*</abbr>CVC</label>
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </fieldset>

            <button className='pay-btn' type='submit'>Pay ${billingDetails.amount}</button>
            
            <div className="submit-message">
              <h1>{message}</h1>  
            </div>
          </div>
      </form>
  );
}

const Payment=()=>{
  return <div className="payment">
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
}

export default Payment;