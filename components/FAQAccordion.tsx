'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div 
      className={`
        group relative
        transition-all duration-300 ease-out
        ${isOpen 
          ? 'bg-gradient-to-r from-[--color-primary-50] to-transparent' 
          : 'hover:bg-[--color-neutral-50]'
        }
      `}
    >
      {/* Left accent bar */}
      <div 
        className={`
          absolute left-0 top-0 bottom-0 w-1 
          transition-all duration-300
          ${isOpen 
            ? 'bg-gradient-to-b from-[--color-primary-500] to-[--color-primary-600]' 
            : 'bg-transparent group-hover:bg-[--color-neutral-200]'
          }
        `}
      />
      
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Number badge */}
          <span 
            className={`
              flex-shrink-0 flex items-center justify-center
              w-8 h-8 rounded-full
              text-[length:var(--text-sm)] font-semibold
              transition-all duration-300
              ${isOpen 
                ? 'bg-[--color-primary-600] text-white shadow-lg shadow-[--color-primary-600]/25' 
                : 'bg-[--color-neutral-100] text-[--color-neutral-500] group-hover:bg-[--color-neutral-200]'
              }
            `}
          >
            {index + 1}
          </span>
          <span 
            className={`
              font-[family-name:var(--font-heading)] 
              text-[length:var(--text-lg)] 
              leading-[--leading-snug] 
              tracking-[--tracking-tight] 
              font-semibold 
              transition-colors duration-300
              ${isOpen ? 'text-[--color-primary-800]' : 'text-[--color-neutral-900]'}
            `}
          >
            {question}
          </span>
        </div>
        
        {/* Modern animated icon */}
        <div 
          className={`
            flex-shrink-0 flex items-center justify-center
            w-10 h-10 rounded-xl
            transition-all duration-300
            ${isOpen 
              ? 'bg-[--color-primary-600] text-white rotate-180 shadow-lg shadow-[--color-primary-600]/25' 
              : 'bg-[--color-neutral-100] text-[--color-neutral-500] group-hover:bg-[--color-neutral-200]'
            }
          `}
        >
          <svg
            className="h-5 w-5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      {/* Answer content with smooth animation */}
      <div
        className={`
          grid transition-all duration-300 ease-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pl-[4.5rem]">
            <p className="text-[length:var(--text-base)] leading-[--leading-relaxed] text-[--color-neutral-600]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  faqs: Array<{ question: string; answer: string }>;
  allowMultiple?: boolean;
}

export default function FAQAccordion({ faqs, allowMultiple = false }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[--color-neutral-200] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className={index !== faqs.length - 1 ? 'border-b border-[--color-neutral-100]' : ''}
        >
          <FAQItem
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndexes.includes(index)}
            onToggle={() => handleToggle(index)}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
