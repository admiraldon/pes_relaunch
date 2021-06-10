const ring = document.getElementById('ring')
        const dot = document.getElementById('dot')

        document.addEventListener('mousemove', (event) => {
            ring.style.top = (event.clientY - 12)+ "px";
            ring.style.left = (event.clientX - 12 ) + "px";
            dot.style.top = (event.clientY - 4)+ "px";
            dot.style.left = (event.clientX - 4) + "px";
        })