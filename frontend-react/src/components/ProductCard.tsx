type ProductCardProps = {
nombre:string;
precio:number;
imagen:string;
onAdd:()=>void;
}

function ProductCard({
nombre,
precio,
imagen,
onAdd
}:ProductCardProps){

return(

<div className="card">

<img src={imagen} alt={nombre}/>

<div className="card-content">

<h3>{nombre}</h3>

<p>S/ {precio}</p>

<button onClick={onAdd}>
Agregar
</button>

</div>

</div>

)

}

export default ProductCard;