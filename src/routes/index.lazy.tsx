import { animated, useSpring } from '@react-spring/three'
import { Helper, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createLazyFileRoute } from '@tanstack/react-router'
import { PointLightHelper } from 'three'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)

function Index() {
  return (
    <div className="size-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={2} position={[0, 6, 0]} decay={0.2}>
          <Helper type={PointLightHelper} args={[1, '#ccc']} />
        </pointLight>

        <MyScene />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

const MyScene = () => {
  const [clicked, setClicked] = useState(false)

  const springs = useSpring({
    color: clicked ? '#569AFF' : '#ff6d6d',
  })

  const handleClick = () => setClicked((s) => !s)

  return (
    <mesh onClick={handleClick}>
      <sphereGeometry args={[1.5, 64, 32]} />
      <AnimatedMeshDistortMaterial
        speed={5}
        distort={0.5}
        color={springs.color}
      />
    </mesh>
  )
}
