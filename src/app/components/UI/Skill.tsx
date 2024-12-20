interface skillProps {
  name: string;
}

const Skill = ({ name }: skillProps) => {
  return (
    <div className='bg-[var(--primary-gray)] text-[var(--primary-blue)] font-medium font-montserrat py-2 px-4 rounded-xl inline-flex text-center'>
      <p className='text-base'>{name}</p>
    </div>
  );
};

export default Skill;
