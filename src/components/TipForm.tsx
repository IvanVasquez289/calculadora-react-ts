const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]
type TipFormProps = {
    setTip: (tip: number) => void;
    tipPercent: number
}
const TipForm = ({setTip, tipPercent}: TipFormProps) => {
  return (
    <div>
        <h2 className="text-2xl font-black">Propina</h2>
        <form>
            {tipOptions.map((option) => (
                <div key={option.id} className="flex gap-2">
                    <label htmlFor={option.id}>{option.label}</label>
                    <input 
                        id={option.id} 
                        type="radio" 
                        name="tip" 
                        value={option.value} 
                        onChange={(e) => setTip(+e.target.value)}
                        checked={option.value === tipPercent}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipForm