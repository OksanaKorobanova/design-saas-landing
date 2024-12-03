'use client';
import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { Button } from '@/components/Button';
import designExample1Img from '@/assets/images/design-example-1.png';
import designExample2Img from '@/assets/images/design-example-2.png';
import Image from 'next/image';
import Pointer from '@/components/Pointer';
import cursorImg from '@/assets/images/cursor-you.svg';

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);
  }, []);
  return (
    <section
      className='py-24 overflow-x-clip'
      style={{ cursor: `url(${cursorImg.src}), auto` }}>
      <div className='container relative'>
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className='hidden lg:block absolute -left-40 top-16'>
          <Image
            src={designExample1Img}
            alt='1 design example'
            draggable='false'
          />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className='hidden lg:block absolute -right-72 -top-16'>
          <Image
            src={designExample2Img}
            alt='2 design example'
            draggable='false'
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className='hidden lg:block absolute left-56 top-96'>
          <Pointer name='Andrea' />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className='hidden lg:block absolute right-80 -top-4'>
          <Pointer name='Bryan' color='red' />
        </motion.div>
        <div className='flex justify-center'>
          <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>
            🪄 $7.5M seed round raised
          </div>
        </div>

        <h1 className='text-6xl md:text-7xl lg:text-[5.8rem] font-medium text-center mt-6'>
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
            className='bg-transparent px-4 md:flex-1 w-full'
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
