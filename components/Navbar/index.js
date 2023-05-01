import Link from 'next/link';
import style from './navbar.module.css'

export default function Navbar(props) {
  const {links} = props;

  if (typeof document === 'undefined') {
    // during server evaluation
  } else {
      // during client's browser evaluation
      const ddClose = document.querySelector('#ddCloser');
      const dDown= document.querySelector('#dropdown');
      const burger = document.querySelector('#burger');
      const navLi1 = document.querySelectorAll('#dropdown a')[0];
      const navLi2 = document.querySelectorAll('#dropdown a')[1];
      const navLi3 = document.querySelectorAll('#dropdown a')[2];
      const navLi4 = document.querySelectorAll('#dropdown a')[3];
      const navBar = document.getElementById('navbar');
      
    window.addEventListener('scroll', () => {
      var value = window.scrollY;

      if(value > 300){
        navBar.classList.add('backdrop-blur-md');
        navBar.classList.add('bg-black');
        navBar.classList.add('bg-opacity-20');
        navBar.classList.remove('bg-secondary');
      }else{
        navBar.classList.remove('backdrop-blur-md');
        navBar.classList.remove('bg-black');
        navBar.classList.remove('bg-opacity-20');
        navBar.classList.add('bg-secondary');
      }
    })

      navLi1.addEventListener('click', () => {
        dDown.classList.add('hidden');
        ddClose.classList.add('hidden');
      })
      navLi2.addEventListener('click', () => {
        dDown.classList.add('hidden');
        ddClose.classList.add('hidden');
      })
      navLi3.addEventListener('click', () => {
        dDown.classList.add('hidden');
        ddClose.classList.add('hidden');
      })
      navLi4.addEventListener('click', () => {
        dDown.classList.add('hidden');
        ddClose.classList.add('hidden');
      })

      burger.addEventListener('click', () => {
        dDown.classList.remove('hidden');
        ddClose.classList.remove('hidden');
      })
      ddClose.addEventListener('click', () => {
        ddClose.classList.add('hidden');
        dDown.classList.add('hidden');
    })
  }
  
  return (
    <nav className="flex px-12 py-2 items-center bg-secondary text-fourth sticky top-0 z-30 transition-all ease-in-out" id='navbar'>
        <div className='space-x-1 font-ubuntu text-lg font-extrabold mr-auto'><Link href='/'>Trident Dev</Link></div>
        <div className='' id='navList'>
          <ul className='hidden md:flex md:items-center'>
            {links.map((link) => {
              const {lText, lRoute} = link;
              return(
                <li className='h-8 font-[500] rounded hover:bg-black hover:bg-opacity-10'>
                  <a className='px-4 h-full flex items-center' href={lRoute}>{lText}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex items-center ml-auto">
          <a href='https://codepen.io/THRG1170' className='py-1 px-2 mr-4 rounded-full text-xl hover:bg-opacity-20 hover:bg-black'><i class="fa-brands fa-codepen"></i></a>
          <button className="relative px-2 rounded h-7 bg-transparent cursor-pointer block peer/draft md:hidden hover:bg-black hover:bg-opacity-20 transition-all" id="burger">
            <i class="fa-solid fa-bars"></i>
          </button>
          <button className='absolute h-[100vh] w-[100vw] cursor-default bg-opacity-0 bg-black backdrop-blur-none top-0 right-0 md:hidden peer-focus/draft:bg-opacity-20 peer-focus/draft:backdrop-blur-sm transition-all hidden' id='ddCloser'></button>
          <div className='absolute bg-white text-slate-700 text-sm rounded w-52 shadow-md right-10 top-16 hidden md:hidden' id='dropdown'>
            <ul className=' my-3 cursor-pointer'>
                {links.map((link) => {
                  return(
                    <li className='h-10'>
                      <a href={link.lRoute} className='flex items-center justify-center w-full h-full hover:bg-slate-100'>{link.lText}</a>
                    </li>
                  )
                })}
              </ul>
          </div>
        </div>
    </nav>
  ) 
}
