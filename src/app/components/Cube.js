"use client";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

const Cube = () => {
    const mountRef = useRef(null);
    
    useEffect(() => {
        const mount = mountRef.current;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth/mount.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);


        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);


        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeChild(renderer.domElement);
        }; 

    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
};

export default Cube;