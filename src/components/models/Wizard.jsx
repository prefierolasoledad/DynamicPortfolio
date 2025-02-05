"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
  materials.Body.roughness = 0.2;  // Makes material smoother
  materials.Body.metalness = 0.5; // Adds subtle reflectivity
  materials.EyeStuff.color.set('white'); // Ensures eyes are bright white

  return (
    <group {...props} dispose={null}
      position={[0,-0.5,0]}
      scale={[0.6,0.6,0.6]}
      rotation={[-0.8,0.3,0]}
      
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Body}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.material}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.EyeStuff}
        position={[0, 1.167, -0.894]}
        material-color="white"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.material_4}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.EyeStuff}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.FullBlack}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.ClothB}
        position={[0, 1.167, -0.894]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.ClothA}
        position={[0, 1.53, 0.071]}
        rotation={[0.492, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.Hair}
        position={[0, 1.861, -0.058]}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')