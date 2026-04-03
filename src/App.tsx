import Particles from '@/components/Particles'
import AnimatedCursor from 'react-animated-cursor'

export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={38}
        innerScale={1}
        outerScale={2}
        color='250, 250, 250'
        outerAlpha={0.3}
      />
      {/* Background - sits behind everything */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={600}
          particleSpread={13}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* All your page sections go here */}
      <div>

      </div>
    </>
  )
}