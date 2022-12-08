import React from "react";
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
// import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import styles from '../components/Fv.module.scss'

export function Fv() {
    // const gltf = useLoader(GLTFLoader, "../public/Three_13.glb")
    // const gltf = new GLTFLoader("../public/Three_13.glb")
    return (
        <div className={styles.fv} style={{ width: "860px", height: "70vh" }}>
     <Canvas flat linear>
         <ambientLight intensity={3}　/>
         <directionalLight position={[4,-4,20]} intensity={40} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* <OrbitControls /> */}
     </Canvas>
     </div>
    )
  }

