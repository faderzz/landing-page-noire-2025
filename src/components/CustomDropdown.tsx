import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

interface DropdownOption {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    id: string;
    name: string;
    placeholder: string;
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    id,
    name,
    placeholder,
    options,
    value,
    onChange,
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === value);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <button
                type="button"
                id={id}
                name={name}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center justify-between"
            >
                <span className={selectedOption ? 'text-white' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <HiChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSelect(option.value)}
                            className="w-full px-3 py-2.5 text-left text-gray-900 hover:bg-purple-50 focus:bg-purple-50 focus:outline-none transition-colors"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Overlay to close dropdown when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[5]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default CustomDropdown;
