import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/+esm';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import { createColorMeterial, createCube, createSphere, setCamera, setGround, setLights, setRenderer, setScene } from './common.js';
import lilGui from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20.0/+esm'

// Renderer 
const renderer = setRenderer();

// Scene
const scene = setScene()

// Camera 
const camera = setCamera(-25, 100, -150)

// Param 
const size = 0.2
const rgbSize = 255
let rgbSpace  = []

const colorDomElment = document.querySelector('#color')
const redDomElment = document.querySelector('.red')
const greenDomElment = document.querySelector('.green')
const blueDomElment = document.querySelector('.blue')

// Mesh
for (let i = 0; i < 10; i++) {
  rgbSpace[i] = [];
  
  for (let j = 0; j < 10; j++) {
    rgbSpace[i][j] = [];
    
    for (let k = 0; k < 10; k++) {
      rgbSpace[i][j][k] = [];
      const color = new THREE.Color(i * 10 / rgbSize , j  * 10 / rgbSize, k  * 10 /rgbSize);
      const cube = createCube(scene, createColorMeterial(color), 5.1, 5.1 * i + 100, 5.1 * j + 5.1 / 2 , 5.1 * k)
      
      rgbSpace[i][j][k] = cube;
      scene.add(cube)
    }
  }
}


const geometry = new THREE.BoxGeometry(size * rgbSize, size * rgbSize, size * rgbSize);
const material = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPosition;
    void main() {
      vec3 color = (vPosition + vec3(${rgbSize / 5})) / ${rgbSize.toFixed(1)};
      gl_FragColor = vec4(color, 1.0);
    }
  `
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = (size * rgbSize / 2)
mesh.position.y = (size * rgbSize / 2)
mesh.position.z = (size * rgbSize / 2)

scene.add(mesh);

const origin = new THREE.Vector3(0, 0, 0);
const length = size * rgbSize + 20;

const dirRed = new THREE.Vector3(1, 0, 0 );
dirRed.normalize();
const arrowHelperRed = new THREE.ArrowHelper( dirRed, origin, length, 0xff0000 );
scene.add( arrowHelperRed );

const dirGreen = new THREE.Vector3(0, 1, 0 );
dirGreen.normalize();
const arrowHelperGreen = new THREE.ArrowHelper( dirGreen, origin, length, 0x00ff00 );
scene.add( arrowHelperGreen );

const dirBlue = new THREE.Vector3(0, 0, 1);
dirBlue.normalize();
const arrowHelperBlue = new THREE.ArrowHelper( dirBlue, origin, length, 0x0000ff );
scene.add( arrowHelperBlue );

const color = {
  r: 255,
  g: 100, 
  b: 0
}

const originColor = new THREE.Vector3(color.r * size, color.g * size , color.b * size);

const dirRedColor = new THREE.Vector3(1, 0, 0 );
dirRedColor.normalize();
const arrowHelperRedColor = new THREE.ArrowHelper(dirRedColor, originColor, length, 0xffffff);
scene.add(arrowHelperRedColor);

const dirGreenColor = new THREE.Vector3(0, 1, 0 );
dirGreen.normalize();
const arrowHelperGreenColor = new THREE.ArrowHelper( dirGreenColor, originColor, length, 0xffffff );
scene.add( arrowHelperGreenColor );

const dirBlueColor = new THREE.Vector3(0, 0, 1);
dirBlue.normalize();
const arrowHelperBlueColor = new THREE.ArrowHelper( dirBlueColor, originColor, length, 0xffffff );
scene.add(arrowHelperBlueColor);

colorDomElment.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`

const colorValue = new THREE.Color(color.r /255 , color.g / 255 , color.b / 255);


const colorSpereInRGBGroup = new THREE.Group();

const colorSpereInRGB = createSphere(scene, createColorMeterial(colorValue), 5, 0, 0, 0)

const textureLoader = new THREE.TextureLoader();
const normalMapTexture = textureLoader.load("./normal.jpg");
normalMapTexture.wrapS = THREE.RepeatWrapping;
normalMapTexture.wrapT = THREE.RepeatWrapping;
normalMapTexture.repeat.set(3, 3);

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.2,
  roughness: 0,
  transmission: 0.5,
  ior: 1,
  reflectivity: 0,
  thickness: 5,
  envMap: 0,
  envMapIntensity: 1,
  clearcoat: 1,
  clearcoatRoughness: 0.5,
  normalMap: normalMapTexture,
  clearcoatNormalMap: normalMapTexture,
  normalScale: new THREE.Vector2(0),
  clearcoatNormalScale: new THREE.Vector2(0)
});

const glassColorSpereInRGB = createSphere(scene, glassMaterial, 8, 0, 0, 0)

colorSpereInRGBGroup.add( colorSpereInRGB);
colorSpereInRGBGroup.add( glassColorSpereInRGB);
colorSpereInRGBGroup.position.set(color.r * size, color.g * size , color.b * size);
scene.add( colorSpereInRGBGroup );


const activeKeys = new Set();

const moveWithKeyboard = () => {
  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    activeKeys.add(event.key.toLowerCase());
  });

  window.addEventListener("keyup", (event) => {
    activeKeys.delete(event.key.toLowerCase());

  });
};

moveWithKeyboard();

const updateMovement = () => {

  console.log('updateMovement')
  if (activeKeys.has('r')&& activeKeys.has('arrowup') ) {
      if (color.r < 255) color.r +=1
    }
    if (activeKeys.has('r') && activeKeys.has('arrowdown')) {
      if (color.r > 0) color.r -=1
    }
    if (activeKeys.has('g') && activeKeys.has('arrowup')) {
      if (color.g < 255) color.g +=1 
    }
    if (activeKeys.has('g') && activeKeys.has('arrowdown')) {
      if (color.g > 0) color.g -=1 
    }
    if (activeKeys.has('b') && activeKeys.has('arrowup')) {
      if (color.b < 255) color.b +=1
    }
    if (activeKeys.has('b') && activeKeys.has('arrowdown')) {
      if (color.b > 0) color.b -=1
    }

    const updatedColor = new THREE.Color(color.r /255 , color.g / 255 , color.b / 255);
 

  colorSpereInRGBGroup.children.forEach(child => {
    if (child.material && child.material.color) {
      child.material.color.set(updatedColor);
    }
  });

    colorSpereInRGBGroup.position.set(color.r * size, color.g * size , color.b * size);

    colorDomElment.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`

    const newOriginColor = new THREE.Vector3(color.r * size, color.g * size , color.b * size);
  
    arrowHelperRedColor.position.copy(newOriginColor);
    arrowHelperGreenColor.position.copy(newOriginColor);
    arrowHelperBlueColor.position.copy(newOriginColor);

    arrowHelperRedColor.updateMatrixWorld();
    arrowHelperGreenColor.updateMatrixWorld();
    arrowHelperBlueColor.updateMatrixWorld();
}



// Ground 
const ground = setGround(scene)    


// Light
const light = new THREE.AmbientLight(0xFFFFFF, 1)
scene.add(light)


// Render
const controls = new OrbitControls(camera, renderer.domElement);

const container = document.getElementById('threejs')
container.appendChild(renderer.domElement)

const axesHelper = new THREE.AxesHelper(5); // taille 5 unités
scene.add(axesHelper);

const render = () => {
  renderer.render(scene, camera)
  updateMovement()
  requestAnimationFrame(render)
}

requestAnimationFrame(render)