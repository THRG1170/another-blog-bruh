import Layout from '../components/Layout';
import Cta from '@/components/Cta';
import Card from '@/components/Card';
import Contact from '@/components/Contact';
import { useRef } from 'react';

export default function Home() {
  const button = useRef(null);
  const goToProject = (ref) => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth'
    })
  }

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  if (typeof document === 'undefined') {
    // during server evaluation
  } else{
    const title = document.title
    const btt = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
      var value = window.scrollY;
      
      if(value > 1200){
        btt.classList.remove('hidden')
      }else{
        btt.classList.add('hidden')
      }
    });
    window.addEventListener('blur', () => {
      document.title = 'Come here please'
    })
    window.addEventListener('focus', () => {
      document.title = title;
    })
  }
  return (
    <Layout title='Home'>
      <Cta click={( )=> goToProject(project.current)}></Cta>
      <div className='bg-primary text-fourth p-10'>
        <h1 className='font-thin text-sm'>PORTOFOLIO</h1>
        <h1 className='font-extrabold text-5xl' id='project'>Project</h1>
        <div className='flex border-b-[0.2px] opacity-50 my-8'></div>
        <p className=' mb-10'>I'm a beginner web developer passionate about creating engaging online experiences. <br /> My portfolio showcases projects where I've used HTML, CSS, and JavaScript <br /> to build simpleweb pages with clean and intuitive design. <br /> <span className='font-semibold text-base text-fourth'>Let's collaborate to bring your online presence to life.</span> </p>
        <Card cards={[
          {
            image: '/images/first.jpeg',
            altImage: 'an app',
            title: 'Blog web',
            paragraph: 'this is my very first blog its made with bootsrap',
            btnText: 'Go to App',
            href: 'https://triputra.triputraharzara.repl.co/'
          },
          {
            image: '/images/second.jpeg',
            altImage: 'an app',
            title: 'Another blog app',
            paragraph: 'This is my second blog its not finished because its so many errors its made out of sass, tailwind, and fontawesome',
            btnText: 'Go to App',
            href: 'https://triputraharza.vercel.app/'
          },
          {
            image: '/images/third.jpeg',
            altImage: 'an app',
            title: 'This blog',
            paragraph: 'its my latest blog im working on it its made with tailwind, nextjs, tilt vanila, and more tools',
            btnText: 'Go to App',
            href: '#'
          },
        ]}></Card>
      </div> 
      <Contact></Contact>
      <button onClick={() => backToTop()} className='hidden fixed bottom-20 left-20 z-40 h-10 bg-primary text-fourth px-6 rounded-xl font-ubuntu font-semibold hover:bg-secondary group transition-all' id='backToTop'>Back to top <i class="fa-solid fa-arrow-up ml-2 group-hover:-translate-y-1 transition-all"></i></button>
    </Layout>
  )
}
