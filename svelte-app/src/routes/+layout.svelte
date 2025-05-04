<script>
    // import components
    import { Header, Footer } from "$lib";
</script>


<Header />

  <main>
    <slot />
  </main>

<Footer />


<style>
  /* Add this to ensure no white space */
  :global(body), :global(html) {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
    }
    
    /* Reset any potential main element padding/margin */
    :global(main) {
        padding: 0 !important;
        margin: 0 !important;
        overflow: hidden;
    }

    /* Main content area with white background */
    main {
        padding: 0; /* Remove padding to allow full-width content */
        text-align: center;
        background-color: #ffffff;
        min-height: 100vh; /* Full viewport height */
        max-width: 100%; /* Allow full width content */
        margin: 0; /* Remove all margins */
        overflow: hidden; /* Prevent scrollbars from edge content */
    }
</style>
