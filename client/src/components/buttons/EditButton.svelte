
<script>
import { editProductOverlay } from "../../stores/OverlayStore";
import {selected} from "../../stores/productSelectionStore"


    function editSelection() {
        editProductOverlay.set(true)
    }   

</script>




<button class="bg-cyan-400 text-white rounded p-2 flex justify-center items-center" on:click="{editSelection}" disabled={$selected == false}>
    <p>Edit</p>
</button>
