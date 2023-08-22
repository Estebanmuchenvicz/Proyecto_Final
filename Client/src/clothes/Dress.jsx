import { MeshStandardMaterial, DoubleSide } from 'three'
import { useGLTF } from '@react-three/drei'
import { join } from 'path'; // Importar la función join para construir rutas

// Obtener la ruta absoluta al archivo .glb
const dressGlbPath = join(import.meta.url, '../assets/models/dress.glb');

export function Dress( props ){
    const { nodes } = useGLTF( dressGlbPath )

    const { clothingColor } = props

    const material = new MeshStandardMaterial( { color: clothingColor, side: DoubleSide } )

    return (
        <group { ...props } dispose={ null } position={ [ 0, -1, 0 ] } >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["01_FABRIC_1_FRONT_1309_0"].geometry}
                material={material}
                scale={.05}
            />
        </group>
    )
}

useGLTF.preload( dressGlbPath )
