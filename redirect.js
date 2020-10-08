/*-------------------------------------------------
                    REDIRECT CLASS 
--------------------------------------------------*/

class Redirect {

    constructor(hrefClass, pageToRedirect) {
        this.hrefClass = hrefClass
        this.pageToRedirect = pageToRedirect
        
        this.redirect(this.hrefClass, this.pageToRedirect)
    
    }

    /* function to redirect to another page onClick 
        id = id name of the clicable element
        pageName = page name, ex : index.html
    */
    redirect = (className, pageName) => {
        className = document.getElementsByClassName(className)
        className.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = `${pageName}.html`
        })
    }
}

let onReady = () => {
    new Redirect("recipes", "all-recipes")
    new Redirect("acceuil", "index")
    new Redirect("contact", "contact")
    new Redirect("accueil2", "recettePage")
    new Redirect("accueilLogo", "index")
    new Redirect("accueilLogo2", "index")
    new Redirect("recette", "index")
    new Redirect("recette", "index")
}


/* if page is loaded */
if (document.readyState !== "loading") {
    onReady()
}

/* execute the function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", onReady);
