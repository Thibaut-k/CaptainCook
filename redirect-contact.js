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
    redirect = (id, pageName) => {
        id = document.getElementById(id)
        id.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = `${pageName}.html`
        })
    }
}

let onReady = () => {

    // PAGE ACCUEIL
    new Redirect("acceuil", "index")
    new Redirect("recette", "all-recipes")
    new Redirect("contact", "contact")
    new Redirect("acceuil-logo", "index")
    new Redirect("recette_create", "recettePage")
    new Redirect("acceuil-footer", "index")
    new Redirect("todolist", "toDo")

}

/* if page is loaded */
if (document.readyState !== "loading") {
    onReady()
}

/* execute the function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", onReady);
