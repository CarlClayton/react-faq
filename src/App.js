import React, { useState } from 'react';
import './App.css';
import Header from './header';
import FAQ from './FAQ';

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'How does React work?',
      answer: 'magic wizards',
      open: true
    },
    {
      question: 'How does HTML work?',
      answer: 'witch craft',
      open: false
    },
    {
      question: 'How does JavaScript work?',
      answer: 'unicorn glitter',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='faqs'>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
        ))}
      </div>
    </div>
  );
}

export default App;
