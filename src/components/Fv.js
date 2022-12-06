// import Image from 'next/image'
// import styles from '../components/Fv.module.scss'
// import { useState, useRef } from "react";
// import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react'
// import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Fv() {
    const gltf = useLoader(GLTFLoader, "../public/Three_13.glb")
    return (
     <canvas>
         <ambientLight />
      <directionalLight />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
     </canvas>
    )
  }




















// const Box = () => {
//     const ref = useRef(null);
//     const [isHovered, setIsHovered] = useState(false);
  
//     useFrame(() => {
//       ref.current.rotation.x += 0.02;
//       ref.current.rotation.y += 0.02;
//     }, []);
  
//     return (
//       <mesh
//         ref={ref}
//         onPointerOver={() => setIsHovered(true)}
//         onPointerOut={() => setIsHovered(false)}
//       >
//         <boxBufferGeometry args={isHovered ? [3.5, 3.5, 3.5] : [3, 3, 3]} />
//         <meshLambertMaterial color={isHovered ? 0x276D7C : 0x8D7147} />
//       </mesh>
//     );
//   };
  
//   export function Fv() {
//     return (
//         <div className={styles.fv}>
//       <Canvas dpr={2}>
//         <color attach="background" args={[0xF3F0EB]} />
//         <ambientLight intensity={0.9} />
//         <directionalLight intensity={0.5} position={[-10, 10, 10]} />
//         <Box />
//         <OrbitControls />
//       </Canvas>

      

//       </div>
//     );
//   }
  
  