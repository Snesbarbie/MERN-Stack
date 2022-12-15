//import * as THREE from 'three';
import {Canvas} from 'react-three-fiber'
import React, { Suspense } from "react";


function Box(){
    return(
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="matterial" color="hotpink"/>
        </mesh>
    )

}
const Travel = () => {
    /*
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bd')
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(30)

    renderer.render(scene, camera)

    const geo = new THREE.TorusGeometry(10,3,16,100)
    const mat = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
    const torus = new THREE.Mesh (geo,mat)

    scene.add(torus)

    renderer.render(scene, camera)
*/
    return(
        <Canvas>
        <Suspense fallback={null}>
            <Box />
        </Suspense>
        </Canvas>
    )
}

export default Travel;