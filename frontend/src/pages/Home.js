import banner from '../photos/Untitled.jpg'
const Home = () => {
    return (
        <div>
        <div>
        <img src={banner} alt='Banner' className='banner'/>
        </div>
        <div className='head'>
        <h1>Vujaday Music Festival</h1>  
        </div>
        </div>
    )
}
export default Home;