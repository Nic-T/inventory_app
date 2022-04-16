<script>
    import { addProductOverlay } from "../../stores/OverlayStore";
    
    
    
        function addSelection() {
            addProductOverlay.set(true)
        }   
    
    </script>
    <button on:click="{addSelection}">
        Add
    </button>
    