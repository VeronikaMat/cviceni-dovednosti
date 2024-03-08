function updateSkill(skillId, value) {
    const dovednost = document.querySelector(skillId)
    if (dovednost===null) return 
    
    //if (!dovednost) return=Proto if (!dovednost) return; v podstatě znamená "pokud není nalezen žádný prvek se specifikovaným ID, okamžitě ukončete funkci." 
    //Je to způsob, jak řešit případ, kdy požadovaný prvek není nalezen, 
    //což zabrání dalšímu vykonávání kódu a potenciálním chybám souvisejícím s pokusem o přístup k vlastnostem nebo metodám neexistujícího prvku.


    const progressPrvku = skillElement.querySelector('.skill__progress')
    const hodnotaElement = skillElement.querySelector('.skill__value')

    if (progressPrvku) {
        progressPrvku.style.width = value + "%"
    }

    if (hodnotaElement) {
        hodnotaElement.textContent = value +  "/ 100"
    }
}


// Zeptej se uživatele aby vložil svůj skill levels
const html = Number(prompt("Vyjáři svoji úroveň HTML (0-100):"))
const css = Number(prompt("Vyjáři svoji úroveň CSS (0-100):"))
const js = Number(prompt("Vyjáři svoji úroveň JavaScript (0-100):"))

// Aktualizuje to "posuvníky" dovedností na stránce
updateSkill("skill1", html)
updateSkill("skill2", css)
updateSkill("skill3", js)

console.log('funguju!')
