import { STEPS } from '@/src/constants';

interface StepItemProps {
  step: (typeof STEPS)[number];
  activeStep: number;
}

export const StepItem = ({ step, activeStep }: StepItemProps) => {
  const { id, title } = step;
  return (
    <div
      className={`flex items-center gap-2 border-b-2 pb-4 ${id === activeStep ? 'border-gray-800' : 'border-gray-200'}`}>
      <div
        className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${id === activeStep ? 'bg-gray-800' : 'bg-gray-400'}`}>
        {id}
      </div>
      <p className={`text-sm font-medium ${id === activeStep ? 'text-gray-800' : 'text-gray-400'}`}>{title}</p>
    </div>
  );
};
