<script>

    let {name, description, category, price, stock,url} = data;

    async function editData(){

        const res = await fetch(`http://localhost:3100/api/products`, {
            method: 'PUT',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            origin: 'http://localhost:3100',
            body: JSON.stringify({name:name, desciption:description,category:category,price:price,stock:stock,url:url}),
        });
        return res.json();
    }
    
</script>

<main>

</main>