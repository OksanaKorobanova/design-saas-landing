import logo from '@/assets/images/logo.svg';
import Image from 'next/image';

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
];

const Footer = () => {
  return (
    <footer className='py-16'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
          <div>
            <Image src={logo} alt='logo' />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map(({ href, label }) => (
                <a key={label} href={href} className='text-white/50 text-sm'>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
