"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HatModel = React.memo(function HatModel(props) {
  const { nodes, materials } = useGLTF("/models/laptop-transformed.glb");
  const modelRef = useRef();

  // Rotate around its own Y-axis while keeping y=0
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.007; // Adjust speed as needed
    }
  });

  return (
    <group ref={modelRef} {...props} dispose={null} position={[0, 0, 0]} rotation={[-0.5, 0, 0]} scale={[1.7, 1.7, 1.7]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.PaletteMaterial003}
        position={[0.001, 0.004, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.001, -0.006, -0.022]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.Painted}
        position={[-0.001, -0.006, -0.022]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.PaletteMaterial005}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Keyboard}
        position={[-0.002, 0.007, -0.044]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.Logo}
        position={[0, 0.103, -0.162]}
        rotation={[-1.927, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.Screen}
        position={[0, 0.103, -0.162]}
        rotation={[-1.927, 0, 0]}
      />
    </group>
  );
});

export default HatModel;
useGLTF.preload("/models/laptop-transformed.glb");
