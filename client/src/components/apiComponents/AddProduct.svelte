<script>
    
    import {dataStore} from '../../stores/dataStore'; 
    import { tokenStore } from '../../stores/tokenStore';
    import refreshToken from './refreshToken.svelte'

    let name;
    let description;
    let category;
    let price;
    let stock;
    let url;
    let token;

    tokenStore.subscribe(value =>{
        token = value;
    })

    let bearerToken = `Bearer ${token}`;


    async function postData(){
        try {
        const res = await fetch(`http://localhost:3100/api/products`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "*/*",
                "Authorization": bearerToken,
            },
            
            body: JSON.stringify({name:name, description:description, category:category,price:price,stock:stock,url:url}),
        });
        dataStore.update(n=> n+1);
        return res.json();
        } catch (err) {
            refreshToken();
            console.error(err);
            
        }
        
        
    }
</script>

<div>

    <form class="flex flex-col space-y-4 p-2" on:submit|preventDefault={postData}>
        <input class="rounded p-1 text-gray-900" type="text" name="name" placeholder="name" bind:value={name}>
        <input class="rounded p-1 text-gray-900" type="text" name="description" placeholder="description" bind:value={description}>
        <input class="rounded p-1 text-gray-900" type="text" name= "category" placeholder="category" bind:value={category}>
        <input class="rounded p-1 text-gray-900" type="number" name="price" placeholder="price" bind:value={price}>
        <input class="rounded p-1 text-gray-900" type="number" name="stock" placeholder="stock" bind:value={stock}>
        <input class="rounded p-1 text-gray-900" type="url" name="url" placeholder="url" bind:value={url}>
        <button class="rounded p-2 bg-cyan-500	text-white mt-4" type="submit">Add Product</button>
    </form>

</div>