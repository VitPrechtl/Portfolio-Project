<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<div class="homepage-container">
    <div class="welcome-container">
        <div class="left-section">
            <h1>WELCOME</h1>
            <h2>Communicate your ideas <br> with striking visuals to stand out!</h2>
            <div class="button-group">
                <a class="showreel" href="https://www.instagram.com/suryqata/">SHOWREEL</a>
                <a class="contact" href="https://www.instagram.com/suryqata/">CONTACT</a>
                <a class="CV" href="https://www.instagram.com/suryqata/">CV</a>
            </div>
            <div class="clients">
                <h3>Clients</h3>
                    <div class="client-logos">
                        <img id="VisualHeightsNYC" src="clients_logo/Visual_Heights_Logo.png" alt="Visual Heights NYC">
                        <img id="CoheedAndCambria" src="clients_logo/CoheedAndCambriaLogo.png" alt="Coheed and Cambria">
                    </div>
            </div>
        </div>
        <div class="right-section">
            <img src="brand_img/VitMotionPictures.png" alt="VIT Motion Pictures Logo">
            <p class="tagline">Bringing over 7 years of art direction and content creation experience.</p>
        </div>
    </div>
</div>


<style>
    .homepage-container {
        margin: 0; /* Remove all margins */
        background-image: url(brand_img/VitMotionPictures_SpiralStraightOnBlurred.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed; /* Fixed background for better coverage */
        padding: 0;
        width: 100%; /* Use 100% instead of 100vw to prevent scrollbar issues */
        min-height: 100vh; /* Minimum full viewport height */
        padding-bottom: 20px; /* Add bottom padding */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center content vertically */
        position: relative; /* For proper positioning of child elements */
        overflow: hidden; /* Prevent any scrollbars */
        box-sizing: border-box; /* Include padding in width/height calculations */
    }

    .left-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Align content to the top */
        padding: 0 1rem; /* Add padding to the section instead of container */
    }
    .left-section h1 {
        color: var(--secondary-color);
        font-size: 8rem;
        text-align: left;
        filter:drop-shadow(0px 0px 10px rgb(255, 153, 153))
    }
    .left-section h2 {
        margin-top: -30px;
        font-size: 2rem;
        text-align: left;
        line-height: 120%;
    }
    .button-group {
        text-align: left;
    }

    .clients {
        margin-top: 110px; /* Further reduced margin-top */
        margin-bottom: 50px; /* Increased bottom margin */
        font-size: 1.5rem;
        text-align: left;
    }
    .client-logos{
        background: linear-gradient(to right, #B1B2B5, transparent);
        display: flex;
        align-items: center;
        justify-content: space-between; /* Distribute space between logos */
        padding: 15px 0;
        flex-wrap: wrap; /* Allow wrapping on small screens */
        width: 100%;
        position: relative;
    }
    .client-logos img {
        height: auto;
        object-fit: contain;
    }
    #CoheedAndCambria {
        width: 250px;
        margin: -10px auto 0;
        display: block;
        /* Logo will be centered due to container layout */
    }
    #VisualHeightsNYC {
        width: 160px;
        margin-right: auto; /* Push to the left */
    }
    
    /* Create a pseudo-element for the third "slot" to balance the layout */
    .client-logos::after {
        content: "";
        width: 160px; /* Same as VisualHeightsNYC */
        display: block;
        visibility: hidden; /* Hidden but takes space */
    }

    .right-section {
        display: flex;
        flex-direction: column;
        color: gray;
        font-size: 1rem;
        width: 100%;
        align-items: center;
        justify-content: flex-start; /* Align content to the top */
        padding: 0 1rem; /* Add padding to the section instead of container */
    }
    
    .right-section img {
        width: 100%;
        max-width: none; /* Remove max-width constraint */
        height: auto;
        object-fit: contain;
        object-position: center;
        display: block; /* Remove any extra space below the image */
        margin: 0;
    }
    
    .tagline {
        margin-top: -20px;
        max-width: 80%;
        text-align: center;
    }

    /* BUTTONS */
    .showreel{
        width: 150px;
        height: 50px;
        font-family: Mitter-Bold;
        font-size: 1.5rem;
        text-align: center;
        border: 5px solid black;
        border-radius: 10px;
        background-color: #ff0000;
        transition: 0.5s;
    }
    .showreel:hover{
        text-decoration: none;
        transform: translateY(-5px);
        box-shadow: 5px 10px;
    }
    .contact{
        width: 150px;
        height: 50px;
        font-family: Mitter-Bold;
        font-size: 1.5rem;
        text-align: center;
        border: 5px solid white;
        border-radius: 10px;
        background-color: black;
        color: white;
        transition: 0.5s;
    }
    .contact:hover{
        text-decoration: none;
        transform: translateY(-5px);
        box-shadow: 5px 10px;
    }
    .CV{
        width: 50px;
        height: 50px;
        font-family: Mitter-Bold;
        font-size: 1.5rem;
        text-align: center;
        border: 5px solid black;
        border-radius: 10px;
        background-color: white;
        color: black;
        transition: 0.5s;
    }
    .CV:hover{
        text-decoration: none;
        transform: translateY(-5px);
        box-shadow: 5px 10px;
    }
    .button-group{
        display: flex;
        margin-top: 20px;
        gap: 15px
    }

    .welcome-container {
        display: grid;
        grid-template-columns: 45% 55%; /* Give more space to the right section */
        height: auto;
        min-height: 60vh; /* Reduced to prevent footer overlap */
        max-height: 85vh; /* Limit maximum height */
        gap: 40px; /* Increased for better spacing between sections */
        max-width: 1400px; /* Constrain content width */
        margin: 0 auto 40px auto; /* Only keep bottom margin to prevent footer overlap */
        position: relative; /* For proper positioning */
        z-index: 1; /* Ensure content is above background */
        align-items: flex-start; /* Align grid items to the top */
    }
    
    /* Responsive adjustments */
    @media (max-width: 900px) {
        .welcome-container {
            grid-template-columns: 1fr;
            gap: 30px; /* Increased for better spacing in mobile view */
            width: 90%; /* Slightly narrower on mobile for better margins */
        }
        
        .right-section {
            order: 1; /* Display image first on mobile */
        }
        
        .left-section {
            order: 2;
            text-align: center;
            align-items: center;
        }
        
        .left-section h1 {
            text-align: center;
        }
        
        .left-section h2 {
            text-align: center;
        }
        
        .clients {
            margin-top: 40px;
            margin-bottom: 30px;
            text-align: center;
        }
            
        .client-logos {
            /* Keep row layout for mobile */
            background: linear-gradient(to bottom, #B1B2B5, transparent);
            padding: 15px 0;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
        
        #CoheedAndCambria {
            width: 180px; /* Smaller for mobile row layout */
            margin: 0;
            /* Remove order property to keep natural order */
        }
        
        #VisualHeightsNYC {
            width: 120px; /* Smaller for mobile row layout */
            margin: 0;
            /* Remove order property to keep natural order */
        }
        
        /* Hide the balancing pseudo-element on mobile */
        .client-logos::after {
            display: none;
        }
        
        .button-group {
            text-align: center;
        }
    }
</style>
