import { useEffect, useRef } from 'preact/hooks'
import * as THREE from 'three'

import { setAmbientLight, setOrthographicCamera, setPerspectiveCamera, setDirectionalLight, setOrbitControles, setRenderer, setScene, createCube, setTrackballControls, polarGridHelper, gridHelper, axesHelper, cameraPerspectiveHelper, displayStats, createRGBVolume, setupClippingGUI, planeHelper } from './utils/setup'

const ThreeScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight
    
    const renderer = setRenderer({ref: mountRef.current, width, height});


    const scene = setScene({color: 0xaaaaaa})
    const camera = setPerspectiveCamera({width, height, x:1, y: 2, z:2, targetY:0.5});
    const cameraHelper = cameraPerspectiveHelper({scene, camera:camera})

    
    setAmbientLight({scene, color:0xffffff, intensity: 0.2})
    setDirectionalLight({scene, color:0xffffff, intensity: 0.8, shadow:true})
    
    const controls = setOrbitControles({ renderer, camera: camera });

    axesHelper({scene})
    gridHelper({scene})
    polarGridHelper({scene})
    let stats = displayStats({ref: mountRef.current, renderer: renderer})


    const particlePerAxis = 5;
    const particleSize = 0.05;
    const spacing = particleSize * 2;

    const { mesh, planes, uniforms, maxPos } = createRGBVolume({
      scene,
      particlePerAxis,
      particleSize,
      spacing
    });
    

    setupClippingGUI({ planes, uniforms, maxRange: maxPos + particleSize * 2});

    planeHelper({ scene, planes, size : maxPos + particleSize*2});



    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.8 });
    const floor = new THREE.Mesh(planeGeometry, planeMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);


    const render = () => {
      renderer.render(scene, camera);
    };
    
   const animate = () => {
    requestAnimationFrame(animate);
    uniforms.modelMatrixInverse.value.copy(mesh.matrixWorld);


    controls.update();
    cameraHelper.update();
    render();
    stats.update();
  };

    animate();

    return () => {
      gui.destroy();
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        maxHeight: "calc(100vh - 1rem)",
        position: 'relative',
      }}
    />
  )
}

export default ThreeScene
