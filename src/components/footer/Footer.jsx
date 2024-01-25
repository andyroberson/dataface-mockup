import './footer.scss'

export const Footer = () => {
  return (
    <div className='footer'>

      <div className='copyright'>
        <h4>Medical Costs</h4>
        <p>Copyright ©2024. All rights reserved. Website for personal, non-commercial use only.</p>
      </div>

      <div className='navigation'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio id nemo corrupti dolore. Recusandae cum vitae molestiae alias sequi maiores accusamus repudiandae ipsam quas provident! Optio similique asperiores excepturi obcaecati?
        </p>
        <div className='linkGroup'>
          <a>Email us</a>
          <a>
            Privacy policy
          </a>
          <a>
            Terms & conditions
          </a>
        </div>
      </div>
    </div>
  )
}
