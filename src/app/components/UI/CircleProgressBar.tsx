interface ProgressBarProps {
  percentage: number;
  text: string;
}

const CircularProgressBar = ({ percentage, text }: ProgressBarProps) => {
  const strokeDasharray = `${percentage * 2.8} ${280 - percentage * 2.8}`;

  return (
    <div className='flex flex-col items-center gap-4 relative'>
      <div className='flex items-center justify-center'>
        {/* Outer Circle */}
        <svg className='w-25 h-25' style={{ transform: 'rotate(-50deg)' }}>
          <circle
            cx='50%'
            cy='50%'
            r='45%'
            stroke='var(--primary-gray)'
            strokeWidth='10'
            fill='transparent'
          />
          <circle
            cx='50%'
            cy='50%'
            r='45%'
            stroke='var(--primary-blue)'
            strokeWidth='10'
            fill='transparent'
            strokeDasharray={strokeDasharray}
            strokeDashoffset='0'
            strokeLinecap='round'
            style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
          />
        </svg>
        {/* Percentage Text */}
        <span className='absolute text-xl font-bold'>{percentage}%</span>
      </div>
      <p className='font-bold text-lg absolute top-[105%] py-2 text-center'>
        {text}
      </p>
    </div>
  );
};

export default CircularProgressBar;
