'use client'
import { useRouter } from 'next-nprogress-bar'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

interface Props {
  label: string
  path: string
}

export const MainButtonLink = ({ label, path }: Props) => {
  const router = useRouter()
  return (
      <button
        onClick={() => router.push(`${ path }`)}
        className='group flex font-bold gap-3 items-center px-6 md:px-8 py-3 rounded-[4rem] dyn-gradient md:text-lg text-background'
      >
        { label }
        <div className='group-hover:ml-2 group-hover:-mr-2 transition-all duration-300 ease-in-out'>
          <ArrowForwardRoundedIcon/>
        </div>
      </button>
  );
}