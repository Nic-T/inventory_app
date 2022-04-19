<script>
    import { addProductOverlay } from "../../stores/OverlayStore";
    
    
    
        function addSelection() {
            addProductOverlay.set(true)
        }   
    
    </script>
    <button class=" absolute bottom-0 left-0 rounded-full w-16 h-16 p-4 m-4 bg-cyan-400 text-white text-2xl flex justify-center items-center" on:click="{addSelection}"  >
        <p>&#43;</p>
    </button>
    