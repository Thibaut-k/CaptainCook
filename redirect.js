/*-------------------------------------------------
                    REDIRECT CLASS 
--------------------------------------------------*/

class Redirect {

    constructor(hrefId, pageToRedirect) {
        this.hrefId = hrefId
        this.pageToRedirect = pageToRedirect
        
        this.redirect(this.hrefId, this.pageToRedirect)
    
    }

    /* function to redirect to another page onClick 
        id = id name of the clicable element
        pageName = page name, ex : index.html
    */
    redirect = (id, pageName) => {
        id = document.getElementById(id)
        id.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = `${pageName}.html`
        })
    }

}

let onReady = () => {
    new Redirect("recipes", "all-recipes")
    new Redirect("acceuil", "index")
}

/* if page is loaded */
if (document.readyState !== "loading") {
    onReady()
}

/* execute the function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", onReady);