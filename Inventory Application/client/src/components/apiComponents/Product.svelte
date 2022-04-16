<script>
    import {onMount} from 'svelte';

    export let id;

    let product = getProduct();
    async function getProduct(){
        const res = await fetch(`http://localhost:3100/api/products/${id}`)
        const product = await res.json();

        if (res.ok){
            return product;
        } else{
            throw new Error(json)
        }
    }

    onMount(() =>{
        product = getProduct();
    })

</script>

<main>

    {#await product}
    <p>wait</p>

    {:then product}

    <h1> {product.name}</h1>
    <h3> {product.description}</h3>
    <h3> {product.category}</h3>
    <p> {product.price}</p>
    <p> {product.stock}</p>
    <p> {product.url}</p>

    {:catch error}
    <p>{error.message}</p>
    {/await}

</main>