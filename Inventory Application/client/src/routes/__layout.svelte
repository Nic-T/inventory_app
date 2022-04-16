<script>

import { addProductOverlay, editProductOverlay, viewProductOverlay} from "../stores/OverlayStore";
import { selectedId } from '../stores/productSelectionStore'
import "../app.css";
import Overlay from "../components/Overlay.svelte";
import AddProduct from "../components/apiComponents/AddProduct.svelte";
import EditProduct from "../components/apiComponents/EditProduct.svelte";
import EditButton from "../components/buttons/EditButton.svelte";
import Product from '../components/apiComponents/Product.svelte'
import ViewButton from "../components/buttons/ViewButton.svelte";
import DeleteProduct from "../components/apiComponents/DeleteProduct.svelte";
import AddButton from '../components/buttons/AddProductButton.svelte'

</script>

{#if $addProductOverlay}
<Overlay>
    <AddProduct/>
</Overlay>
    
{/if}

{#if $editProductOverlay}

<Overlay>
    <EditProduct id={$selectedId}/>
</Overlay>

{/if}

{#if $viewProductOverlay}

<Overlay>
    <Product id={$selectedId}/>
</Overlay>

{/if}

<main>
    <slot/>

    
</main>

<AddButton/>

<ViewButton/>

<EditButton/>

<DeleteProduct id={$selectedId}/>