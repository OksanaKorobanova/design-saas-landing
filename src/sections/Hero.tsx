import { Button } from '@/components/Button';
import designExample1Img from '@/assets/images/design-example-1.png';
import designExample2Img from '@/assets/images/design-example-2.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Image src={designExample1Img} alt='1 design example' />
        </div>
        <div>
          <Image src={designExample2Img} alt='2 design example' />
        </div>
        <div className='flex justify-center'>
          <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>
            🪄 $7.5M seed round raised
          </div>
        </div>

        <h1 className='text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6'>
          Impactful design, created effortlessly
        </h1>
        <p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto'>
          Design shouldn&apos;t slow you down. Layers combines powerful features
          with an intuitive interface that keeps you in your creative flow.
        </p>
        <form className='flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto'>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-transparent px-4 md:flex-1'
          />
          <Button
            type='submit'
            variant='primary'
            size='sm'
            className='whitespace-nowrap'>
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
