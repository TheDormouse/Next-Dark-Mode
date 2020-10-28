import s from './home.module.css'
export default function Home({dark, setDark}){
    return <div className={s.box}>
        <h1>Next.js Dark Mode</h1>
        <div className={s.onoffswitch}>
    <input type="checkbox" name="onoffswitch" className={s.onoffswitch_checkbox} id="myonoffswitch" tabIndex="0" onChange={() => setDark(!dark)} checked={dark} />
    <label className={s.onoffswitch_label} htmlFor="myonoffswitch">
        <span className={s.onoffswitch_inner}></span>
        <span className={s.onoffswitch_switch}></span>
    </label>
    
</div>
<p><center><a href="https://github.com/TheDormouse/Next-Dark-Mode" target="_blank">View on GitHub</a></center></p>
    </div>
}