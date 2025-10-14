import React, { Fragment } from 'react';
interface StepperProps {
  currentStep: number;
  steps: string[];
}
export const Stepper: React.FC<StepperProps> = ({
  currentStep,
  steps
}) => {
  return <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => <Fragment key={step}>
            {/* Step circle */}
            <div className="flex flex-col items-center relative">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-sm transition-all duration-300 z-10 
                  ${currentStep > index ? 'bg-green-500' : currentStep === index ? 'bg-blue-600 scale-110 shadow-lg' : 'bg-gray-300'}`}>
                {index + 1}
              </div>
              <span className={`mt-2 text-xs font-medium transition-colors duration-300
                ${currentStep > index ? 'text-green-600' : currentStep === index ? 'text-blue-600' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
            {/* Connecting line */}
            {index < steps.length - 1 && <div className="flex-1 h-1 mx-2">
                <div className={`h-full rounded-full transition-all duration-500
                    ${currentStep > index ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              </div>}
          </Fragment>)}
      </div>
    </div>;
};