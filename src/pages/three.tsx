import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Box(props: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef(null)
  // Hold state for hovered and clicked events
  const [clicked, { toggle }] = useBoolean()
  const [hovered, { setTrue, setFalse }] = useBoolean()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) =>
      ((meshRef.current as unknown as THREE.Mesh).rotation.x += delta),
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={toggle}
      onPointerOver={setTrue}
      onPointerOut={setFalse}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeApp() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}
