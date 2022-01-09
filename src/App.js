import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function App() {
    return (
        <div className='p-2 flex flex-col items-center space-y-6'>
            <h1>Animating when in view (scroll)</h1>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    );
}

const boxVariants = {
    hidden: {
        scale: 0,
    },
    shown: { scale: 1 },
};
const Box = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('shown');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    return (
        <motion.div
            variants={boxVariants}
            animate={controls}
            ref={ref}
            initial='hidden'
            className='w-72 h-72 bg-indigo-500 rounded'
        ></motion.div>
    );
};
