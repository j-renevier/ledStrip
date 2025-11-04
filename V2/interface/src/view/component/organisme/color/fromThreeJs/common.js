import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/+esm';
import * as DAT from 'https://cdn.skypack.dev/dat.gui';

import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import improvedNoise from 'https://cdn.jsdelivr.net/npm/improved-noise@0.0.3/+esm'
import Stats from 'https://cdn.jsdelivr.net/npm/three-stats@1.0.1/+esm'

import * as GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20.0/+esm'

export const createColorMeterial = (color) => {
  return new THREE.MeshPhongMaterial({
    color : color,
    side: THREE.DoubleSide
  })
}

export const createCube = (scene, material, side = 1, x = 0, y = 0, z = 0) => {
  const geometry = new THREE.BoxGeometry(side, side, side);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x
  mesh.position.y = y
  mesh.position.z = z
  scene.add(mesh)

  return mesh
}


export const createSphere = (scene, material, radius = 1, x = 0, y = 0, z = 0, offsetX = 0, offsetY = 0) => {
  const geometry = new THREE.SphereGeometry(radius, 32, 16); 
  const sphere = new THREE.Mesh( geometry, material ); 
  
  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  sphere.offsetX = offsetX
  sphere.offsetY = offsetY
  scene.add(sphere);

  return sphere
}

export const setGround = (scene, width = 200, length = 200, color = 0xFFFFFF) => {
  const plane = new THREE.PlaneGeometry(width, length)
  const material = new THREE.MeshPhongMaterial({
      color: color,
      side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(plane, material);
  mesh.rotation.x = Math.PI / 2
  mesh.receiveShadow = true;
  scene.add(mesh);

  return mesh
}


export const moveWithKeyBoard = (element) => {

  window.addEventListener("keydown", (event) => {
    event.preventDefault()
    switch(event.key) {
      case 'ArrowLeft' : 
        element.position.x -= 1
        break
      case 'ArrowRight' : 
        element.position.x += 1
        break
      case 'ArrowUp' : 
        element.position.z -= 1
        break
      case 'ArrowDown' : 
        element.position.z += 1
        break
    }
  })
}


export const setRenderer = () => {
  const renderer = new THREE.WebGLRenderer({antialias : true}); 
  renderer.setPixelRatio(window.devicePixelRatio); 
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer
}

export const setScene = (color = 0x000000) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(color)
  return scene
}

export const setCamera = (x = 40, y = 40, z = 50 ) => {
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1550)

  camera.position.z = z
  camera.position.y = y
  camera.position.x = x

  camera.lookAt(0, 0, 0)

  return camera
}

export const setLights = (scene) => {
  const light = new THREE.AmbientLight(0xFFFFFF, 0.5)
  scene.add(light)

  const sun = new THREE.DirectionalLight(0xFFFFFF, 0.5)
  sun.position.set(10, 20, 10);
  scene.add(sun)

  return {sun, light}
}


export const shadow = () => {
  //Create a DirectionalLight and turn on shadows for the light
  const light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.castShadow = true;
  scene.add( light )
  light.position.set(50, 100, 50);
  
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 500;
  
  light.shadow.camera.left = -100;
  light.shadow.camera.right = 100;
  light.shadow.camera.top = 100;
  light.shadow.camera.bottom = -100;
  
  //Create a sphere that cast shadows
  const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
  const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.castShadow = true;
  sphere.receiveShadow = false;
  sphere.position.y = 20
  scene.add( sphere );
}


export const gui = (camera, objectName, object) => {
  const gui = new DAT.GUI()
  const cubeFolder = gui.addFolder(objectName)
  cubeFolder.add(object.rotation, 'x', 0, Math.PI * 2)
  cubeFolder.add(object.rotation, 'y', 0, Math.PI * 2)
  cubeFolder.add(object.rotation, 'z', 0, Math.PI * 2)
  cubeFolder.open()
  const cameraFolder = gui.addFolder('Camera')
  cameraFolder.add(camera.position, 'z', 0, 10)
  cameraFolder.open()
}


export const createBoxWithRoundedEdges = ( width, height, depth, radius0, smoothness ) => 
{
 let shape = new THREE.Shape();
 let eps = 0.00001;
 let radius = radius0 - eps;
 shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
 shape.absarc( eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true );
 shape.absarc( width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true );
 shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
 let geometry = new THREE.ExtrudeGeometry( shape, {
 depth: depth - radius0 * 2,
 bevelEnabled: true,
 bevelSegments: smoothness * 2,
 steps: 1,
 bevelSize: radius,
 bevelThickness: radius0,
 curveSegments: smoothness
 });

 geometry.center();

 return geometry
}
