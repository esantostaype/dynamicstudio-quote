interface Props {
  children: React.ReactNode
}

export default function QuoteTemplate({ children }: Props) {
  return (
    <div className="flex flex-1 overflow-y-auto border border-[rgba(255,255,255,0.16)] rounded-lg">
      { children }
    </div>
  )
}
