import React from "react";
import { Canvas } from '@react-three/fiber';
import { Physics } from "@react-three/cannon";
import niceColors from 'nice-color-palettes';
import Dice from "./Dice";
import Plane from "./Plane";
import './style.css'


const App = ()=>{
  return <Canvas concurrent shadowMap sRGB gl={{alpha:false}} camera={{position:[0,-5,5]}}>
    <hemisphereLight intensity={0.35} />
    <spotLight position={[30, 0, 30]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    <pointLight position={[-30, 0, -30]} intensity={0.5} />
      <Physics gravity={[0,0,-30]}>
      <Plane color={niceColors[17][4]} position={[0,0,1]}/>
      <Plane color={niceColors[17][1]} position={[-3, 0, 0]} rotation={[0, 1, 0]} />
      <Plane color={niceColors[17][2]} position={[3, 0, 0]} rotation={[0, -1, 0]} />
      <Plane color={niceColors[17][3]} position={[0, 3, 0]} rotation={[1, 0, 0]} />
      <Plane color={niceColors[17][0]} position={[0, -3, 0]} rotation={[-1, 0, 0]} />
        <Dice position={[0,0,10]}/>
    </Physics>
  </Canvas>
}

export default App;