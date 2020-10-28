import s from '../components/index.module.css'
export default function Index({setDark, dark}){
    return(
        <main>
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
        <p><a href="https://github.com/TheDormouse/Next-Dark-Mode" targe="_blank">View on GitHub</a></p>
        </main>
    )
}