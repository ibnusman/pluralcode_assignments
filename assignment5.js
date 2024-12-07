let welcome = prompt("Welcome to AB mall. Do you want to shop with us? (Y/N)");
welcome = welcome.toUpperCase();
const shopping = ["Mango", "Banana"];
let items; 
let moreFruit;

if (welcome === "Y") {
    let option;

    do {
        option = prompt("Do you want to add, display, delete, or exit? (a, d, del, q)");

        if (option === "a") {
            items = prompt("Enter a fruit you would like to add:");
            shopping.push(items);

            moreFruit = prompt("Do you want to add another fruit? (Y/N)").toUpperCase();
            while (moreFruit === "Y") {
                items = prompt("Enter a fruit you would like to add:");
                shopping.push(items);
                moreFruit = prompt("Do you want to add another fruit? (Y/N)").toUpperCase();
            }

        } else if (option === "d") {
            alert("Your shopping list: " + shopping.join(", "));
        } else if (option === "del") {
            let fruitToDelete = prompt("Enter the fruit you want to delete:");
            const index = shopping.indexOf(fruitToDelete);
            if (index !== -1) {
                shopping.splice(index, 1);
                alert(fruitToDelete + " has been removed from your shopping list.");
            } else {
                alert("Fruit not found in your shopping list.");
            }
        } else if (option === "q") {
            alert("Thanks for shopping with us today!");
        } else {
            alert("Invalid option, please choose a, d, del, or q.");
        }

    } while (option !== "q");

} else if (welcome === 'N') {
    alert("Thanks for visiting!");
} else {
    alert("Invalid input. Please enter Y or N.");
}
