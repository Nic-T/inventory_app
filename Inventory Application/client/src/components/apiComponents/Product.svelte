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

<main >

    {#await product}
    <p>wait</p>

    {:then product}
    <div class="flex flex-col space-y-4 p-2">
        <h2 class="rounded p-1 text-white">{product.name}</h2>
        <h2 class="rounded p-1 text-white">{product.description}</h2>
        <h2 class="rounded p-1 text-white">{product.category}</h2>
        <h2 class="rounded p-1 text-white">{product.price}</h2>
        <h2 class="rounded p-1 text-white">{product.stock}</h2>
        <h2 class="rounded p-1 text-white">{product.url}</h2>
    </div>
    

    {:catch error}
    <p>{error.message}</p>
    {/await}

</main>