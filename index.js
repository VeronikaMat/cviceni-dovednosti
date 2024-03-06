// Funkce
function updateSkill(skillId, value) {
    const dovednost = document.getElementById(skillId);
    if (!dovednost) return; //Proto if (!dovednost) return; v podstatě znamená "pokud není nalezen žádný prvek se specifikovaným ID, okamžitě ukončete funkci." 
                             //Je to způsob, jak řešit případ, kdy požadovaný prvek není nalezen, 
                             //což zabrání dalšímu vykonávání kódu a potenciálním chybám souvisejícím s pokusem o přístup k vlastnostem nebo metodám neexistujícího prvku.

    const progressElement = skillElement.querySelector('.skill__progress');
    const valueElement = skillElement.querySelector('.skill__value');

    if (progressElement && valueElement) {
        progressElement.style.width = value + '%'
        valueElement.textContent = value + ' / 100'
    }
}


// Zeptej se uživatele aby vložil svůj skill levels
const html = prompt("Vyjáři svoji úroveň HTML (0-100):")
const css = prompt("Vyjáři svoji úroveň CSS (0-100):")
const js = prompt("Vyjáři svoji úroveň JavaScript (0-100):")

// Aktualizuje to "posuvníky" dovedností na stránce
updateSkill("skill1", html)
updateSkill("skill2", css)
updateSkill("skill3", js)

console.log('funguju!')
