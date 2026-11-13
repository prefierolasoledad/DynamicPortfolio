"use client"
import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import SpeechBubble from '@/components/SpeechBubble'
import { greetings } from '@/app/data'

// Her mouth, in this model's coordinates (from the mesh bounds in maid.glb).
const MOUTH = [-0.03, 1.21, 0]

export default function Wizard({ lang = 'en', ...props }) {
  const { nodes, materials } = useGLTF('/models/maid.glb')
  // Greet in the page's language first, then cycle through the others.
  const messages = useMemo(() => {
    const start = Math.max(0, greetings.findIndex((g) => g.locale === lang))
    return [...greetings.slice(start), ...greetings.slice(0, start)]
  }, [lang])
  return (
    <group {...props}
    dispose={null}
      position={[0,-0.5,0]}
      scale={[0.6,0.6,0.6]}
      rotation={[-0.8,0.3,0]}
    >
      {/* Speech bubble anchored to her mouth, so it follows the model. */}
      <Html position={MOUTH} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
        <SpeechBubble messages={messages} />
      </Html>
      <group position={[0, 1.167, -0.894]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.EyeStuff}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.FullBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_4}
        />
      </group>
      <group position={[0, 1.53, 0.071]} rotation={[0.492, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.ClothA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.FullBlack}
        />
      </group>
      <group position={[0, 1.167, -0.894]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.ClothB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.FullBlack}
        />
      </group>
      <group position={[0, 1.861, -0.058]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.FullBlack}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/maid.glb')