import * as THREE from 'three'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import { VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper.js';
import Stats from 'stats-gl';
			import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export const setRenderer = ({ref, width=window.innerWidth, height=window.innerHeight}) => {

  const renderer = new THREE.WebGLRenderer(
    {
      antialias : true,
      alpha: true
    }
  );

  renderer.setPixelRatio(window.devicePixelRatio); 
  renderer.setSize(width, height);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = true; 

  ref.appendChild(renderer.domElement)

  return renderer
}

export const setScene = ({color}) => {
  const scene = new THREE.Scene();
  if (color || color === 0) {
    scene.background = new THREE.Color(color); 
  }
  return scene
}

export const setPerspectiveCamera = ({width=window.innerWidth, height=window.innerHeight, x = 0, y = 0, z = 10, targetX = 0, targetY = 0, targetZ = 0}) => {
  const camera = new THREE.PerspectiveCamera(60, (width || window.innerWidth)/(height || window.innerHeight), 0.1, 1000)
  
  camera.position.set(x, y, z);
  const target = new THREE.Vector3(targetX, targetY, targetZ);
  camera.lookAt(target);

  camera.updateProjectionMatrix();

  return camera
}

export const setOrthographicCamera = ({width = window.innerWidth, height = window.innerHeight, x = 0, y = 0, z = 10, frustumSize = 100}) => {
  const aspect = width / height;

  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) * -1,  // left
    (frustumSize * aspect) * 1,   // right
    frustumSize * 1,              // top
    frustumSize * -1,             // bottom
    0.1,                          // near
    1000,                          // far
  );

  camera.zoom = 10;
  const center = new THREE.Vector3(0, 1/2, 0);
  const viewDir = new THREE.Vector3(1, 1, 1).normalize();
  camera.position.copy(viewDir.clone().multiplyScalar(2));
  camera.lookAt(center);

  return camera;
};

export const setAmbientLight = ({scene, color, intensity}) => {
  const light = new THREE.AmbientLight(color, intensity)
  scene.add(light)
  return light
}

export const setDirectionalLight = ({
  scene,
  color = 0xffffff,
  intensity = 1,
  x = 5,
  y = 10,
  z = 5,
  shadow = false
}) => {
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(x, y, z);
  light.castShadow = shadow;
  scene.add(light);
  return light;
};


// Helpers 
export const boxHelper = ({scene, mesh}) => {
  const boxHelper = new THREE.BoxHelper(mesh);
  scene.add(boxHelper);
  return boxHelper
}

export const tangentsHelper = ({scene, mesh}) => {
  if (mesh.geometry.attributes.tangent) {
    const tangentsHelper = new VertexTangentsHelper(mesh, 5, 0xff0000);
    scene.add(tangentsHelper);

    return tangentsHelper
  } else {
    console.warn('No tangentes');
    return null
  }
}

export const normalsHelper = ({scene, mesh}) => {
  if (mesh.geometry.attributes.normal) {
    const normalsHelper = new VertexNormalsHelper(mesh, 5, 0x00ff00);
    scene.add(normalsHelper);
    return normalsHelper
  } else {
    console.warn('No normales');
    return null
  }
}

export const gridHelper = ({scene}) => {
  const gridHelper = new THREE.GridHelper(20, 5, 0x0000ff, 0x808080);
  gridHelper.position.y = 0;
  gridHelper.position.x = 0;
  gridHelper.position.z = 0;
  scene.add( gridHelper );
  return gridHelper
}

export const polarGridHelper = ({scene}) => {
  const polarGridHelper = new THREE.PolarGridHelper(10, 0, 2, 64, 0x0000ff, 0x808080);
  polarGridHelper.position.y = 0;
  polarGridHelper.position.x = 0;
  polarGridHelper.position.z = 0;
  scene.add( polarGridHelper );
  return polarGridHelper
}

export const directionalLightHelper = ({scene}) => {
  const directionalLightHelper = new THREE.DirectionalLight( directionalLight, 10 );
  scene.add( directionalLightHelper );
  return directionalLightHelper
}

export const cameraOrthographicHelper = ({scene, camera}) => {
  const cameraOrthographicHelper = new THREE.CameraHelper( camera);
  scene.add( cameraOrthographicHelper );
  return cameraOrthographicHelper
}

export const cameraPerspectiveHelper = ({scene, camera}) => {
  const cameraPerspectiveHelper = new THREE.CameraHelper( camera);
  scene.add( cameraPerspectiveHelper );
  return cameraPerspectiveHelper
}

export const axesHelper = ({scene}) => {
  const axesHelper = new THREE.AxesHelper(5);
  scene.add( axesHelper );
  return axesHelper
}

export const planeHelper = ({
  scene,
  planes,
  size = 5,
  margin = 0,
}) => {
  const colors = [0xff0000, 0x00ff00, 0x0000ff];
  const helperSize = size * 2 * (1 + margin);

  return planes.map((plane, i) => {
    
    const helper = new THREE.PlaneHelper(plane, helperSize, colors[i]);
    
    scene.add(helper);
    return helper;
  });
};

export const setOrbitControles = ({renderer, camera}) => {
  const controls = new OrbitControls(camera, renderer.domElement);  

  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI / 2;

  return controls
}

export const setTrackballControls = ({renderer, camera}) => {
  const controls = new TrackballControls( camera, renderer.domElement );

  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 1;

  return controls
}

export const createCube = ({scene, material, side = 1, x = 0, y=(2 * particleSize + (particlePerAxis * spacing / 2)), z = 0}) => {
  const geometry = new THREE.BoxGeometry(side, side, side);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x
  mesh.position.y = y
  mesh.position.z = z
  scene.add(mesh)

  return mesh
}

export const displayStats = ({ref, renderer}) => {
  let stats = new Stats({
    precision: 2,
    horizontal: false,
    trackGPU: true,
    trackCPT: true,
    trackHz: true,
  });

  stats.init(renderer);
  stats.dom.style.position = 'absolute';
  stats.dom.style.top = '0';
  stats.dom.style.left = '0';
  stats.dom.style.zIndex = '10';
  stats.dom.style.width = 'inherit';
  ref.appendChild(stats.dom);

  return stats 
}


  export const createRGBVolume = ({
      scene,
      particlePerAxis = 10,
      particleSize = 0.05,
      spacing = particleSize * 2,
    }) => {
      const maxPos = (particlePerAxis - 1) * spacing / 2;
      const y = maxPos + particleSize*2

      const planes = [
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      ];

      const circleGeometry = new THREE.CircleGeometry(particleSize, 8);
      const geometry = new THREE.InstancedBufferGeometry();
      geometry.index = circleGeometry.index;
      geometry.attributes = circleGeometry.attributes;l

      const particleCount = Math.pow(particlePerAxis, 3);
      const translateArray = new Float32Array(particleCount * 3);
      let i3 = 0;

      for (let xi = 0; xi < particlePerAxis; xi++) {
        for (let yi = 0; yi < particlePerAxis; yi++) {
          for (let zi = 0; zi < particlePerAxis; zi++) {
            translateArray[i3++] = (xi - particlePerAxis / 2) * spacing;
            translateArray[i3++] = (yi - particlePerAxis / 2) * spacing;
            translateArray[i3++] = (zi - particlePerAxis / 2) * spacing;
          }
        }
      }

      geometry.setAttribute('translate', new THREE.InstancedBufferAttribute(translateArray, 3));

      const vertexShader = `
        precision highp float;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        attribute vec3 position;
        attribute vec3 translate;
        varying vec3 vTranslate;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(translate, 1.0);
          mvPosition.xyz += position;
          vTranslate = translate;
          gl_Position = projectionMatrix * mvPosition;
        }
      `;

      const fragmentShader = `
        precision highp float;
        varying vec3 vTranslate;
        uniform float maxPos;
        uniform vec4 planeX;
        uniform vec4 planeY;
        uniform vec4 planeZ;
        uniform mat4 modelMatrixInverse;

        void main() {
          // Convertir en espace local du mesh
          vec3 localPos = (modelMatrixInverse * vec4(vTranslate, 1.0)).xyz;

          float distX = dot(vec3(planeX), localPos) + planeX.w;
          float distY = dot(vec3(planeY), localPos) + planeY.w;
          float distZ = dot(vec3(planeZ), localPos) + planeZ.w;

          if (distX < 0.0 || distY < 0.0 || distZ < 0.0) discard;

          vec3 color = (localPos + maxPos) / (2.0 * maxPos);
          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const uniforms = {
        maxPos: { value: maxPos },
        planeX: { value: new THREE.Vector4(1, 0, 0, 0) },
        planeY: { value: new THREE.Vector4(0, 1, 0, 0) },
        planeZ: { value: new THREE.Vector4(0, 0, 1, 0) },
        modelMatrixInverse: { value: new THREE.Matrix4() }
      };

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: false
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = false;
      mesh.localClippingEnabled = true;
      // mesh.position.y += y
      mesh.castShadow = true;
      scene.add(mesh);

      return { mesh, planes, uniforms, maxPos };
    }


    export const setupClippingGUI = ({ planes, uniforms, maxRange = 1 }) => {
      const gui = new GUI();

      const planeUniforms = [uniforms.planeX, uniforms.planeY, uniforms.planeZ];

      planes.forEach((plane, i) => {
        const folder = gui.addFolder(`Plane ${i + 1}`);
        const data = { constant: plane.constant };

        folder.add(data, 'constant', -maxRange, maxRange, 0.01).onChange(v => {
          plane.constant = v;
          planeUniforms[i].value.w = v;
        });

        folder.open();
      });

      return gui;
    }