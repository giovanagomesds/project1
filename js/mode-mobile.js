const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-mobile"),
      modeSwtich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });
      
      modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });
      
