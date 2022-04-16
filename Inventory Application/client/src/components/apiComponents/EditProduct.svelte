<script>
    import {dataStore} from '../../stores/dataStore'; 
    import {onMount} from 'svelte';
    let name;
    let description;
    let category;
    let price;
    let stock;
    let url;
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
    

    async function EditProduct(){

        const res = await fetch(`http://localhost:3100/api/products/${id}`, {
            method: 'PUT',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            origin: 'http://localhost:3100',
            body: JSON.stringify({name:name, desciption:description,category:category,price:price,stock:stock,url:url}),
        });
        dataStore.update(n=> n+1);
        return res.json();
    }
    
</script>

<main>
    {#await product}
    <p>wait</p>

    {:then product}

    {name= product.name}
    {description=product.description}
    {category= product.category}
    {price= product.price}
    {stock= product.stock}
    {url= product.url}

    <form on:submit|preventDefault={EditProduct}>
        <input type="text" name="name" placeholder="name" bind:value={name}>
        <input type="text" name="description" placeholder="description" bind:value={description}>
        <input type="text" name= "category" placeholder="category" bind:value={category}>
        <input type="number" name="price" placeholder="price" bind:value={price}>
        <input type="number" name="stock" placeholder="stock" bind:value={stock}>
        <input type="url" name="url" placeholder="url" bind:value={url}>
        <button type="submit">Edit Product</button>
    </form>

    {:catch error}
    <p>{error.message}</p>
    {/await}
</main>