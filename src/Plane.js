import React from "react";
import { usePlane } from "@react-three/cannon";

const Plane = ({ color, ...props }) => {
    const [ref] = usePlane(() => ({ ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshPhongMaterial attach="material" color={color} />
        </mesh>
    )
}

export default Plane;