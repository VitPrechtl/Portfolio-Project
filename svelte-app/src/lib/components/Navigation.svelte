<script>
    let isOpen = false; // Menu state (open/closed)
</script>


<nav class="nav">
    <!-- Burger Menu Button (Visible on Small Screens) -->
     <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">☰</button>

     <!-- Navigation Links -->
    <ul class:open={isOpen}>
        <li><a href="/services">SERVICES</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/about">ABOUT ME</a></li>
    </ul>
</nav>


<style>
    /* Base Navigation Styling */
    .nav {
        background-color: var(--primary-color);
        padding: 1rem;
        text-align: center;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex; /* Enables Flexbox for menu */
        justify-content: center; /* Centers menu items horizontally*/
        gap: 20px; /* Adds equal spacing between items */
    }

    .nav ul li {
        display: inline-block;
        border: 2px solid var(--background-color);
        padding: 10px;
        border-radius: 20px;
        transition: 0.25s;
    }
    .nav ul li:hover {
        background-color: #ff0000;
        box-shadow: 0px 0px 30px;
        transform: translateY(-5px);
    }

    .nav ul li a {
        color: var(--background-color);
        text-decoration: none;
        font-weight: bold;
    }

    /* Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
            top: 15px;
        }

        .nav ul {
            display: none; /* Hides the menu */
            flex-direction: column; /* Stacks items vertically */
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: var(--primary-color);
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
            justify-content: center;
            text-align: center;
        }

        .nav ul li {
            padding: 10px 20px;
            margin: 10px;
        }
    }
</style>