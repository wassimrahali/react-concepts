import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import TaskManagerTable from './ReducerTaskManager';
import Footer from './Footer';

export default function Bg() {
  // Define the background image URL or path
  const backgroundImage = 'url(./assets/img.jpeg)'; // Replace with the correct path

  // Scroll-related hooks
  const { scrollYProgress } = useScroll(); // Tracks how far you've scrolled (0 - 1)
  
  // Map scroll progress to scale (between 1 and 1.2)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Map scroll progress to opacity (fades out slightly)
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <>
      <Navbar />

      <motion.section
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale, // Animate scale based on scroll
          opacity, // Animate opacity based on scroll
        }}
        className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        {/* Main Content */}
        <div className="relative z-10">
          <TaskManagerTable />
        </div>

        {/* Starfield Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
