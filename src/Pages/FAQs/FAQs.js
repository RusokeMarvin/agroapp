import React, { useState } from 'react';
import './FAQs.css';
import Header from '../../Components/Header/Header';

function FAQs() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(-1);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className='questions'>
       <Header/>
      <section>
        <h1>FAQs</h1>
        <div className='faqContainer'>
          {faqs.map((faq, index) => (
            <div className={`faq ${activeFaq === index ? 'active' : ''}`} key={index} onClick={() => toggleFaq(index)}>
              <div className='question'>
                <h3>{faq.question}</h3>
                <svg width="15" height="10" viewBox='0 0 42 25'>
                  <path d={activeFaq === index ? 'M3 3L21 21L39 3' : 'M3 3L21 21L39 3'} stroke='white' strokeWidth="7" strokeLinecap="round"/>
                </svg>
              </div>
              <div className='answer'>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const faqs = [
    { question: 'What is the primary focus of AWCI-AGRICULTURE?', answer: 'AWCI-AGRICULTURE is dedicated to empowering farmers and promoting sustainable practices in agriculture, including goat farming, broiler chicken rearing, vegetable cultivation, and oil seed value addition.' },
    { question: 'How does AWCI-AGRICULTURE support local farmers?', answer: 'We provide comprehensive support through training programs, access to resources, technology adoption, and market linkages, empowering farmers for sustainable and profitable agricultural practices.' },
    { question: 'Can you explain AWCI-AGRICULTURE\'s approach to goat farming practices?', answer: 'AWCI-AGRICULTURE emphasizes ethical and sustainable goat farming practices, prioritizing the well-being of goats, responsible land management, and community support.' },
    { question: 'What types of vegetables does AWCI-AGRICULTURE cultivate, and are they organic?', answer: 'AWCI-AGRICULTURE cultivates a diverse range of vegetables, including Irish potatoes, onions, cabbages, and other common vegetables in Uganda. We prioritize organic farming practices for environmental sustainability.' },
    { question: 'How does AWCI-AGRICULTURE contribute to reducing post-harvest losses in vegetable cultivation?', answer: 'AWCI-AGRICULTURE has implemented a freeze drying project to preserve the nutritional quality of vegetables, reducing post-harvest losses and contributing to food security.' },
    { question: 'What sets AWCI-AGRICULTURE apart in broiler chicken rearing?', answer: 'AWCI-AGRICULTURE distinguishes itself through ethical and sustainable broiler chicken rearing practices, focusing on quality breeds, responsible rearing, and state-of-the-art processing facilities.' },
    { question: 'How does AWCI-AGRICULTURE ensure the quality of its poultry products?', answer: 'We ensure quality by selecting high-quality breeds, employing ethical and sustainable rearing practices, and utilizing advanced processing facilities, ensuring consumers receive top-notch broiler chicken products.' },
    { question: 'How can individuals get involved with AWCI-AGRICULTURE as volunteers or supporters?', answer: 'AWCI-AGRICULTURE welcomes volunteers, partners, and supporters. Explore opportunities on our "Get Involved" page, whether you\'re interested in hands-on activities, partnerships, or providing financial support.' },
    { question: 'What measures does AWCI-AGRICULTURE take to minimize its environmental impact?', answer: 'AWCI-AGRICULTURE is committed to environmental responsibility, incorporating organic farming practices, water conservation, waste reduction, and sustainable packaging in its initiatives.' },
    { question: 'How does AWCI-AGRICULTURE contribute to the local economy?', answer: 'AWCI-AGRICULTURE contributes to the local economy by providing market linkages for farmers, supporting local entrepreneurs, and promoting sustainable agricultural practices that enhance economic value.' },
    { question: 'Is there a community-focused aspect to AWCI-AGRICULTURE\'s initiatives?', answer: 'Yes, AWCI-AGRICULTURE actively engages with communities through events, farmer gatherings, and knowledge-sharing sessions, fostering a supportive network and community-driven approach.' },];

export default FAQs;
