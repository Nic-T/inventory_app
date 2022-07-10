<script>
    import {tokenStore} from '../stores/tokenStore'
    import { goto } from '$app/navigation';
    let username;
    let password;
    let email;


    if($tokenStore){
        goto('/')
    }

    async function register() {

        const res = await fetch(`http://localhost:3100/api/authentification/register`, {
            method: 'POST',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            origin: 'http://localhost:3100',
            body: JSON.stringify({username:username, password:password, email:email})
        });
        goto('/login')
        return res.json(res)

    }

</script>

<main>

    <form on:submit|preventDefault={register}>

        <input type="text" name="username" placeholder="username" bind:value={username} />
        <input type="email" name="email" placeholder="email" bind:value={email} />
        <input type="password" name="password" placeholder="password" bind:value={password} />
        <button type="submit">Register</button>

    </form>

</main>