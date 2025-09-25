'use client'

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface FAQCardProps {
  title: string
  description?: string
  isFirst?: boolean
}

const FAQCard: React.FC<FAQCardProps> = ({ title, description, isFirst = false }) => {
  const [isOpen, setIsOpen] = useState(isFirst)
  const contentRef = useRef<HTMLDivElement>(null)
  const chevronRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.4,
          ease: 'power2.out'
        })
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
      }
    }

    if (chevronRef.current) {
      gsap.to(chevronRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }, [isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      className={`border rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'border-light bg-white' 
          : 'border-light bg-[#F4FDF8]'
      }`}
      style={isOpen ? {
        boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1), 5px 4px 7px rgba(0, 0, 0, 0.09)'
      } : {}}
    >
      {/* Header */}
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={toggleOpen}
      >
        <h2 className={`text-2xl md:text-[40px] font-bold ${isOpen ? 'text-secondary' : 'text-black'} pr-4`}>
          {title}
        </h2>
        <div 
          ref={chevronRef}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className={`overflow-hidden ${isFirst ? '' : 'h-0'}`}
        style={isFirst ? { height: 'auto' } : { height: 0 }}
      >
        {description && (
          <div className="px-6 pb-6">
            <p className="text-[20px] leading-7 tracking-[2%]">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQCard