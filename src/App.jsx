import './App.css';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { BackgroundMaterial } from './BackgroundMaterial';
// import { useRef } from 'react';

export function Background() {
  const {
    viewport: { width, height },
  } = useThree();

  return (
    <>
      <mesh>
        <planeGeometry args={[width, height]} />
        <backgroundMaterial key={BackgroundMaterial.key} />
      </mesh>
    </>
  );
}

export function Can() {
  const { nodes, materials } = useGLTF('./3D Models/energy-can.glb');

  return (
    <group dispose={null}>
      <group
        position={[0, 10.742, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={4.944}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LowRes_Can_Body_0.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LowRes_Can_Alluminium_0.geometry}
          material={materials.Alluminium}
        />
      </group>
    </group>
  );
}
useGLTF.preload('./3D Models/energy-can.glb');

function App() {
  return (
    <>
      <div className='canvas-container background'>
        <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
          <ambientLight intensity={0.5} position={[100, 100, 100]} />
          <Background />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
