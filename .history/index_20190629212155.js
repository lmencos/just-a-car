let color = 0xfffdfa
let color1 = 0xfccf9f
let color2 = 0xffa647

let light1 = .5
let light2 = .9
let light3 = 1.2
let light4 = 1.8

let scene, camera, renderer;
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfff6ed);

  camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,50);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 0;
  camera.position.y = 2;
  camera.position.z = 4;

  controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);

  hlight = new THREE.AmbientLight (color2,light1);
  scene.add(hlight);
  directionalLight = new THREE.DirectionalLight(color2,light1);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(color1,light2);
  light.position.set(0,30,50);
  scene.add(light);
  light2 = new THREE.PointLight(color2,light3);
  light2.position.set(50,10,0);
  scene.add(light2);
  light3 = new THREE.PointLight(color,light4);
  light3.position.set(0,100,-500);
  scene.add(light3);
  light4 = new THREE.PointLight(color,light4);
  light4.position.set(-500,300,500);
  scene.add(light4);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  let loader = new THREE.GLTFLoader();
  loader.load('./src/model/scene.gltf', function(gltf){
    mask = gltf.scene.children[0];
    mask.scale.set(1,1,1);
    scene.add(gltf.scene);
    animate();
  });
}

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
init();
