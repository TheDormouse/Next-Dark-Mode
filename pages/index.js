import Home from '../components/home'
export default function Index({setDark, dark}){
    return(
        <main>
        <Home setDark={setDark} dark={dark} />
        </main>
    )
}