import React from "react";
import { useBox } from "@react-three/cannon";


const Dice = (props) => {
    const [ref, api] = useBox(() => ({ mass: 1,...props}));
    return (
        <mesh
            ref={ref}
            onClick={() => api.applyImpulse([0, 20, 0], [0, 0, 0])}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1,1,1]}/>
            <meshNormalMaterial attach="material" />
        </mesh>
    );
};


export default Dice;