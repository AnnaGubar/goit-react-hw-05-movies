import s from './Container.module.css'

function Container({children}){
  return(
    <section className={s.section}>
      {children}
    </section>
  )

}

export default Container;