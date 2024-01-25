import './header.scss'

export const Header = ({ options }) => {

  const { activeLabel } = options

  return (
    <div className='medicalHeader'>
      <h1>{activeLabel.label}</h1>
      <p>{activeLabel.label_detailed}</p>
    </div>
  )
}
