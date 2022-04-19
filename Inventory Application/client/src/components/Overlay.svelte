<script>
    import {addProductOverlay, viewProductOverlay, editProductOverlay} from '../stores/OverlayStore'
</script>

<div on:click={()=>addProductOverlay.set(false)} on:click={()=>viewProductOverlay.set(false)} on:click={()=>editProductOverlay.set(false)} class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">

    <div on:click|stopPropagation class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-95">
        <button class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform" on:click={()=>addProductOverlay.set(false)} on:click={()=>viewProductOverlay.set(false)} on:click={()=>editProductOverlay.set(false)}>
            &times;
        </button>
        <slot/>
    </div>

</div>