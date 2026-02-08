import { ReactNode, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function Field({ id, label, required, hint, error, children, className = '' }: FieldProps) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`ui-field ${className}`.trim()}>
      <label htmlFor={id} className="ui-label">
        {label} {required && <span className="ui-required">*</span>}
      </label>
      <div className="ui-control" aria-describedby={describedBy}>
        {children}
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="ui-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="ui-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };
export function Input({ className = '', hasError, ...props }: InputProps) {
  return <input className={`ui-input ${hasError ? 'ui-input--error' : ''} ${className}`.trim()} {...props} />;
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean };
export function Select({ className = '', hasError, children, ...props }: SelectProps) {
  return (
    <select className={`ui-select ${hasError ? 'ui-input--error' : ''} ${className}`.trim()} {...props}>
      {children}
    </select>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean };
export function Textarea({ className = '', hasError, ...props }: TextareaProps) {
  return <textarea className={`ui-textarea ${hasError ? 'ui-input--error' : ''} ${className}`.trim()} {...props} />;
}
