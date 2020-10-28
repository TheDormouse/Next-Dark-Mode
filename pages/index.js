import s from '../components/index.module.css'
export default function Index({setDark, dark}){
    return(
        <>
        <div className={s.container}>
            <div className={s.one}/>
            <div className={s.two} />
            <div className={s.one} />
            <div className={s.two} />
            <div className={s.one} />
            <div className={s.two} />
            <div className={s.one} />
            <div className={s.two} />
            <div className={s.one} />
        </div>
        <button onClick={() => setDark(!dark)}>Toggle dark mode</button>
        </>
    )
}