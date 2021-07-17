
// DADI

var dice_user = Math.floor((Math.random() * 6) + 1 );
var dice_pc = Math.floor((Math.random() * 6) + 1 );

if (dice_user > dice_pc) 
{
    document.getElementById("dice_game").innerHTML += ("Complimenti il tuo " + dice_user + " batte il " + dice_pc + " del computer , hai vinto!!");
} 
else if (dice_user < dice_pc) 
{
    document.getElementById("dice_game").innerHTML += ("Peccato il tuo " + dice_user + " é stato battuto dal " + dice_pc + " del computer , hai perso!!");
}
else
{
    document.getElementById("dice_game").innerHTML += ("Stesso risultato!! = " + dice_user + " é patta !!");
}

// Verifica

var your_email = prompt("Inserisci la tua email : "); 
var users = ['Romolo@virgilio.it','NumaPompilio@gmail.com','TulloOstilio@hotmail.it','AncoMarzio@live.it','TarquinioPrisco@outlook.it','ServioTullio@alice.it','TarquinioilSuperbo@yhaoo.it'];

var whitelist_true = false;

for (var lenght = 0; lenght < users.length; lenght++) 
{
    if (users[lenght] == your_email) 
    {
        whitelist_true = true;
        break;
    }    
}
if (whitelist_true) 
{
    document.getElementById("verified_users").innerHTML += ("Complimenti fai parte della setta segreta dei Re Di Roma muhahahahah");    
}
else
{
    document.getElementById("verified_users").innerHTML += ("YOU SHALL NOT PAAAAAASSS!!!!!!!!!");   
}