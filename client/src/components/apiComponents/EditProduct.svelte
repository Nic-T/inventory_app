<script>
    import {dataStore} from '../../stores/dataStore'; 
    import {onMount} from 'svelte';
    import { tokenStore } from '../../stores/tokenStore';
    import refreshToken from './refreshToken.svelte'
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
            refreshToken();
            throw new Error(json)
        }
    }

    onMount(() =>{
        product = getProduct();
        name= product.name
        description=product.description
        category= product.category
        price= product.price
        stock= product.stock
        url= product.url
    })
    

    async function EditProduct(){

        const res = await fetch(`http://localhost:3100/api/products/${id}`, {
            method: 'PUT',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${$tokenStore}`,
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

    <form class="flex flex-col space-y-4 p-2" on:submit|preventDefault={EditProduct}>
        <input class="rounded p-1 text-gray-900" type="text" name="name" placeholder={product.name} bind:value={name}>
        <input class="rounded p-1 text-gray-900" type="text" name="description" placeholder={product.description} bind:value={description}>
        <input class="rounded p-1 text-gray-900" type="text" name= "category" placeholder={product.category} bind:value={category}>
        <input class="rounded p-1 text-gray-900" type="number" name="price" placeholder={product.price} bind:value={price}>
        <input class="rounded p-1 text-gray-900" type="number" name="stock" placeholder={product.stock} bind:value={stock}>
        <input class="rounded p-1 text-gray-900" type="url" name="url" placeholder={product.url} bind:value={url}>
        <button class="rounded p-2 bg-cyan-400	text-white mt-4" type="submit">Edit Product</button>
    </form>

    {:catch error}
    <p>{error.message}</p>
    {/await}
</main>