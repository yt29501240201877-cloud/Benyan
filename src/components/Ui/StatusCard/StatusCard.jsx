import Style from './StatusCard.module.css'

export default function StatusCard({counter, title, icon}) {
  return (
    <>
        <div className={`${Style.cardStatus} d-flex align-items-center`}>
            <div className={`${Style.icon} d-flex w-100 align-items-center justify-content-center`}>
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <div className={`${Style.info} w-100 d-flex flex-column align-items-center gap-2`}>
                <span className={Style.counter}>{counter}</span>
                <span className={Style.tittle}>{title}</span>    
            </div>
        </div>        
    </>
        
  )
}
