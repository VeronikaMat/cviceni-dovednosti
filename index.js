const updateSkill=(skillId, value)=> {

    
    const hodnotaElement = skillElement.querySelector(`${skillId} .skill__value`)
    const progressPrvku = skillElement.querySelector(`${skillId} .skill__progress`)

    if (hodnotaElement) {
        hodnotaElement.textContent =value +  "/ 100"
    }

    if (progressPrvku) {
        progressPrvku.style.width =  value + "%"
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


