import Navbar from '../Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const siteTitle = 'Next.js Sample Website'

export default function layout(props) {
  const {title, children} = props;
  return (
    <main>
        <Head>
          <title>{title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <Navbar links={[
        {
          lText: 'Home',
          lRoute: '#'
        },
        {
          lText: 'Project',
          lRoute: '#project'
        },
        {
          lText: 'About',
          lRoute: '#about'
        },
        {
          lText: 'Contact',
          lRoute: '/contact'
        },
      ]} />
      {children}
    </main>
  )
}
