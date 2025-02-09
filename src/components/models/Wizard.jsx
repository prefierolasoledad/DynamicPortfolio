"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/maid.glb')
  return (
    <group {...props} 
    dispose={null}
      position={[0,-0.5,0]}
      scale={[0.6,0.6,0.6]}
      rotation={[-0.8,0.3,0]}
    >
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