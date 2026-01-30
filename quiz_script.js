function initQuiz() {
    console.log("Quiz loaded");
}

initQuiz();

const allElements = [
            {name: "Hydrogen", symbol: "H", number: 1, period: 1, group: 1, block: "s", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Helium", symbol: "He", number: 2, period: 1, group: 18, block: "s", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Lithium", symbol: "Li", number: 3, period: 2, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Beryllium", symbol: "Be", number: 4, period: 2, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Boron", symbol: "B", number: 5, period: 2, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Carbon", symbol: "C", number: 6, period: 2, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Nitrogen", symbol: "N", number: 7, period: 2, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Oxygen", symbol: "O", number: 8, period: 2, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Fluorine", symbol: "F", number: 9, period: 2, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Neon", symbol: "Ne", number: 10, period: 2, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Sodium", symbol: "Na", number: 11, period: 3, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Magnesium", symbol: "Mg", number: 12, period: 3, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Aluminium", symbol: "Al", number: 13, period: 3, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Silicon", symbol: "Si", number: 14, period: 3, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Phosphorus", symbol: "P", number: 15, period: 3, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Sulfur", symbol: "S", number: 16, period: 3, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Chlorine", symbol: "Cl", number: 17, period: 3, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Argon", symbol: "Ar", number: 18, period: 3, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Potassium", symbol: "K", number: 19, period: 4, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Calcium", symbol: "Ca", number: 20, period: 4, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Scandium", symbol: "Sc", number: 21, period: 4, group: 3, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Titanium", symbol: "Ti", number: 22, period: 4, group: 4, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Vanadium", symbol: "V", number: 23, period: 4, group: 5, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Chromium", symbol: "Cr", number: 24, period: 4, group: 6, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Manganese", symbol: "Mn", number: 25, period: 4, group: 7, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Iron", symbol: "Fe", number: 26, period: 4, group: 8, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Cobalt", symbol: "Co", number: 27, period: 4, group: 9, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Nickel", symbol: "Ni", number: 28, period: 4, group: 10, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Copper", symbol: "Cu", number: 29, period: 4, group: 11, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Zinc", symbol: "Zn", number: 30, period: 4, group: 12, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Gallium", symbol: "Ga", number: 31, period: 4, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Germanium", symbol: "Ge", number: 32, period: 4, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Arsenic", symbol: "As", number: 33, period: 4, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Selenium", symbol: "Se", number: 34, period: 4, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Bromine", symbol: "Br", number: 35, period: 4, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Krypton", symbol: "Kr", number: 36, period: 4, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Rubidium", symbol: "Rb", number: 37, period: 5, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Strontium", symbol: "Sr", number: 38, period: 5, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Yttrium", symbol: "Y", number: 39, period: 5, group: 3, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Zirconium", symbol: "Zr", number: 40, period: 5, group: 4, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Niobium", symbol: "Nb", number: 41, period: 5, group: 5, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Molybdenum", symbol: "Mo", number: 42, period: 5, group: 6, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Technetium", symbol: "Tc", number: 43, period: 5, group: 7, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Ruthenium", symbol: "Ru", number: 44, period: 5, group: 8, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Rhodium", symbol: "Rh", number: 45, period: 5, group: 9, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Palladium", symbol: "Pd", number: 46, period: 5, group: 10, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Silver", symbol: "Ag", number: 47, period: 5, group: 11, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Cadmium", symbol: "Cd", number: 48, period: 5, group: 12, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Indium", symbol: "In", number: 49, period: 5, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Tin", symbol: "Sn", number: 50, period: 5, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Antimony", symbol: "Sb", number: 51, period: 5, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Tellurium", symbol: "Te", number: 52, period: 5, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: true, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Iodine", symbol: "I", number: 53, period: 5, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Xenon", symbol: "Xe", number: 54, period: 5, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Caesium", symbol: "Cs", number: 55, period: 6, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Barium", symbol: "Ba", number: 56, period: 6, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Lanthanum", symbol: "La", number: 57, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Cerium", symbol: "Ce", number: 58, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Praseodymium", symbol: "Pr", number: 59, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Neodymium", symbol: "Nd", number: 60, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Promethium", symbol: "Pm", number: 61, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Samarium", symbol: "Sm", number: 62, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Europium", symbol: "Eu", number: 63, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Gadolinium", symbol: "Gd", number: 64, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Terbium", symbol: "Tb", number: 65, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Dysprosium", symbol: "Dy", number: 66, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Holmium", symbol: "Ho", number: 67, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Erbium", symbol: "Er", number: 68, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Thulium", symbol: "Tm", number: 69, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Ytterbium", symbol: "Yb", number: 70, period: 6, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: true, actinide: false, nonmetal: false},
            {name: "Lutetium", symbol: "Lu", number: 71, period: 6, group: 3, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Hafnium", symbol: "Hf", number: 72, period: 6, group: 4, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Tantalum", symbol: "Ta", number: 73, period: 6, group: 5, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Tungsten", symbol: "W", number: 74, period: 6, group: 6, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Rhenium", symbol: "Re", number: 75, period: 6, group: 7, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Osmium", symbol: "Os", number: 76, period: 6, group: 8, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Iridium", symbol: "Ir", number: 77, period: 6, group: 9, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Platinum", symbol: "Pt", number: 78, period: 6, group: 10, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Gold", symbol: "Au", number: 79, period: 6, group: 11, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Mercury", symbol: "Hg", number: 80, period: 6, group: 12, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Thallium", symbol: "Tl", number: 81, period: 6, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Lead", symbol: "Pb", number: 82, period: 6, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Bismuth", symbol: "Bi", number: 83, period: 6, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Polonium", symbol: "Po", number: 84, period: 6, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Astatine", symbol: "At", number: 85, period: 6, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Radon", symbol: "Rn", number: 86, period: 6, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: true},
            {name: "Francium", symbol: "Fr", number: 87, period: 7, group: 1, block: "s", alkali: true, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Radium", symbol: "Ra", number: 88, period: 7, group: 2, block: "s", alkali: false, alkaline: true, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Actinium", symbol: "Ac", number: 89, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Thorium", symbol: "Th", number: 90, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Protactinium", symbol: "Pa", number: 91, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Uranium", symbol: "U", number: 92, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Neptunium", symbol: "Np", number: 93, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Plutonium", symbol: "Pu", number: 94, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Americium", symbol: "Am", number: 95, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Curium", symbol: "Cm", number: 96, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Berkelium", symbol: "Bk", number: 97, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Californium", symbol: "Cf", number: 98, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Einsteinium", symbol: "Es", number: 99, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Fermium", symbol: "Fm", number: 100, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Mendelevium", symbol: "Md", number: 101, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Nobelium", symbol: "No", number: 102, period: 7, group: null, block: "f", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: true, nonmetal: false},
            {name: "Lawrencium", symbol: "Lr", number: 103, period: 7, group: 3, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Rutherfordium", symbol: "Rf", number: 104, period: 7, group: 4, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Dubnium", symbol: "Db", number: 105, period: 7, group: 5, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Seaborgium", symbol: "Sg", number: 106, period: 7, group: 6, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Bohrium", symbol: "Bh", number: 107, period: 7, group: 7, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Hassium", symbol: "Hs", number: 108, period: 7, group: 8, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Meitnerium", symbol: "Mt", number: 109, period: 7, group: 9, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Darmstadtium", symbol: "Ds", number: 110, period: 7, group: 10, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Roentgenium", symbol: "Rg", number: 111, period: 7, group: 11, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Copernicium", symbol: "Cn", number: 112, period: 7, group: 12, block: "d", alkali: false, alkaline: false, transition: true, postTransition: false, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Nihonium", symbol: "Nh", number: 113, period: 7, group: 13, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Flerovium", symbol: "Fl", number: 114, period: 7, group: 14, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Moscovium", symbol: "Mc", number: 115, period: 7, group: 15, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Livermorium", symbol: "Lv", number: 116, period: 7, group: 16, block: "p", alkali: false, alkaline: false, transition: false, postTransition: true, metalloid: false, halogen: false, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Tennessine", symbol: "Ts", number: 117, period: 7, group: 17, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: true, noble: false, lanthanide: false, actinide: false, nonmetal: false},
            {name: "Oganesson", symbol: "Og", number: 118, period: 7, group: 18, block: "p", alkali: false, alkaline: false, transition: false, postTransition: false, metalloid: false, halogen: false, noble: true, lanthanide: false, actinide: false, nonmetal: false}
        ]

        var currentElement = null
        var currentQuestion = 1
        var numQuestions = allElements.length
        var quizElements = allElements.map((x)=>x)

        function displayQuiz(quiz){
            quizElements = []
            currentQuestion = 1
            document.getElementById("submit").disabled = false
            document.getElementById("answer").value = ""
            document.getElementById("feedback").innerHTML = ""
            if (quiz == "alkali"){
                for (let element of allElements){
                    if (element.alkali){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Alkali Metals:"
            } else if (quiz == "alkaline"){
                for (let element of allElements){
                    if (element.alkaline){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Alkaline Earth Metals:"
            } else if (quiz == "transition"){
                for (let element of allElements){
                    if (element.transition){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Transition Metals:"
            } else if (quiz == "post"){
                for (let element of allElements){
                    if (element.postTransition){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Post Transition Metals:"
            } else if (quiz == "halogen"){
                for (let element of allElements){
                    if (element.halogen){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Halogens:"
            } else if (quiz == "noble"){
                for (let element of allElements){
                    if (element.noble){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Noble Gases:"
            } else if (quiz == "lanthanide"){
                for (let element of allElements){
                    if (element.lanthanide){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Lanthanides:"
            } else if (quiz == "actinide"){
                for (let element of allElements){
                    if (element.actinide){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Actinides:"
            } else if (quiz == "sblock"){
                for (let element of allElements){
                    if (element.block == "s"){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="S-block Elements:"
            } else if (quiz == "fblock"){
                for (let element of allElements){
                    if (element.block == "f"){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="F-block Elements:"
            } else if (quiz == "pblock"){
                for (let element of allElements){
                    if (element.block == "p"){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="P-block Elements:"
            } else if (quiz == "metalloids"){
                for (let element of allElements){
                    if (element.metalloid){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="Metalloids:"
            } else if (quiz == "nonmetals"){
                for (let element of allElements){
                    if (element.nonmetal){
                        quizElements.push(element)
                    }
                }
                document.getElementById("quiz-type").innerHTML="NonMetals:"
            } else {
                quizElements = allElements.map((x)=> x)
            }
            numQuestions = quizElements.length
            nextElement = pickNextElement(quizElements)
            setElement(nextElement)
            document.getElementById("question-counter").innerHTML=1+"/"+numQuestions
            document.getElementById("answer").disabled = false
        }

        function pickNextElement(elements){
            const numberOfElements = elements.length;
            const ElementId = Math.floor(Math.random()*elements.length);
            if (numberOfElements == 0){
                return {name: "The quiz is finished now", symbol: null, number: null}
                document.getElementById("submit").disabled = true
            }
            currentElement = elements[ElementId];
            elements.splice(ElementId, 1);
            return currentElement
        }


        function setElement(currentElement){
            document.getElementById("element-name").innerHTML = currentElement.name
        }

        function checkAnswer() {
            const input = parseInt(document.getElementById("answer").value);
            const correctNumber = currentElement.number
            if (input == correctNumber){
                document.getElementById("feedback").innerHTML = "You a smart cookie, that's right"
            }
            else {
                document.getElementById("feedback").innerHTML = "Unfortunately that was wrong :( the correct answer is " + correctNumber
            }
            document.getElementById("next").disabled = false
            document.getElementById("submit").disabled = true
        }


        function nextQuestion(){
            const nextElement = pickNextElement(quizElements)
            setElement(nextElement)
            document.getElementById("next").disabled = true
            document.getElementById("answer").value = ""
            document.getElementById("feedback").innerHTML = ""
            if (nextElement.number){
                document.getElementById("submit").disabled = false
                updateQuestionCounter()
            }
            else{
                document.getElementById("answer").disabled = true
            }
        }

        function updateQuestionCounter(){
            currentQuestion = ++currentQuestion
            document.getElementById("question-counter").innerHTML=currentQuestion +"/"+ numQuestions
        }

        const firstElement = pickNextElement(quizElements)
        setElement(firstElement)