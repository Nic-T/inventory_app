

<script>
    import {onMount} from 'svelte';

    onMount(() =>{
        fetch('http://localhost:3000/api/products').then((response) => {
            console.log('resolved',response.body);
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch((err) => {
                console.log('rejected', err)
        })
    })

</script>

<main>

</main>