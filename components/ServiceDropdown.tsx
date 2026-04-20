'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ServiceDropdownProps = {
  id: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
};

export default function ServiceDropdown({ id, name, options, defaultValue }: ServiceDropdownProps) {
  const initialValue = defaultValue && options.includes(defaultValue) ? defaultValue : options[0];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <input type="hidden" id={id} name={name} value={selected} />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-xl border border-white/15 bg-[#0a1628] px-4 py-3 pr-10 text-left text-brandText outline-none ring-brandAccent transition focus:ring-2"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
      >
        {selected}
      </button>

      <ChevronDown
        size={20}
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brandText/90 transition ${open ? 'rotate-180' : ''}`}
      />

      {open && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          aria-label="Tipo de servicio"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/15 bg-[#0a1628] shadow-lg"
        >
          {options.map((option) => {
            const isActive = option === selected;
            return (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left transition ${
                    isActive ? 'bg-brandAccent/20 text-brandText' : 'text-brandMuted hover:bg-white/5 hover:text-brandText'
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
