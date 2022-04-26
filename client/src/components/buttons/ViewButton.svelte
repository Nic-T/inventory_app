
<script>
import { viewProductOverlay } from "../../stores/OverlayStore";
import {selected} from "../../stores/productSelectionStore"

    function viewSelection() {
        viewProductOverlay.set(true)
    }   

</script>




<button class="bg-cyan-400 text-white rounded p-2 flex justify-center items-center" on:click="{viewSelection}" disabled={$selected == false}>
    View
</button>
