import style from './cta.module.css';

export default function Cta(props) {
    const {click} = props;
    if (typeof document === 'undefined') {
        // during server evaluation
    } else {
        let wave = document.getElementById('wave');
        let wave2 = document.getElementById('wave2');

        window.addEventListener('scroll', () => {
            var value = window.scrollY;
            setTimeout(() => {
                wave.style.marginBottom = value/4 + 'px';
                wave2.style.marginBottom = value/4 + 'px';
            }, 200)
        })
    }
  return (
    <div className='relative flex justify-center bg-third h-[100vh] w-full z-0 overflow-hidden'>
        <div className='text-fourth text-center mt-28 w-[34rem] z-20  animate__fadeIn' id='cta'>
            <h1 className='text-3xl font-ubuntu font-extrabold'>Hi, Welcome to my website!</h1>
            <p className='font-thin text-sm my-4'>My name is Triputra Harza and I'm a junior high school student who's interested in web development. I'm a beginner, but I'm passionate about creating websites and I'm excited to learn new things. Please take a look around and let me know what you think!</p>
            <button onClick={click} className='h-10 px-6 bg-primary rounded-full font-ubuntu font-bold mt-6'>Get Started</button>
        </div>
        <img src="/wave.png" alt="" className='absolute bottom-0 z-10 shadow-sm' id='wave'/>
        <div className='absolute -bottom-[100vh] bg-primary h-[100vh] w-full z-10' id='wave2'></div>
        <div className={style.area}>
            <ul className={style.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    </div>
  )
}
