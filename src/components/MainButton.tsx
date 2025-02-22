import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  label: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MainButton = ({ label, onClick, type="button" }: Props) => {
  return (
      <button
        type={ type }
        onClick={ onClick }
        className='group flex font-bold gap-3 items-center px-6 md:px-8 py-3 rounded-[4rem] dyn-gradient md:text-lg text-background'
      >
        { label }
        <div className='group-hover:ml-2 group-hover:-mr-2 transition-all duration-300 ease-in-out'>
          <ArrowForwardRoundedIcon/>
        </div>
      </button>
  );
}