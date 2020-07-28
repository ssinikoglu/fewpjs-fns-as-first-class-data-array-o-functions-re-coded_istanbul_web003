/*const dogName = ["Xerox","Santa Paws","Lauren","Skippy"];
const dogBreed =["Border Collie","Husky","Golden Retriever","Welsh Corgi"];*/

function wakeDog(dogName,dogBreed) {
    return`Wake ${dogName} the ${dogBreed}`;
    };

//wakeDog("Xerox","Border Collie");

function leashDog(dogName,dogBreed) {
    return`Leash ${dogName} the ${dogBreed}`;
        };
//leash ("Boo Radley","Pibble");

function walkToPark(dogName,dogBreed){
    return`Walk to the park with ${dogName} the ${dogBreed}`;
        };
//walkToPark("Bunny","Labrador");

function throwFrisbee(dogName,dogBreed) {
    return`Throw the frisbee for ${dogName} the ${dogBreed}`;
        };
//throwFrisbee("Mary J. Blige","Papillon");

function walkHome(dogName,dogBreed){
    return `Walk home with ${dogName} the ${dogBreed}`;
        };
//walkHome("Santa Paws","Husky");

function unleashDog(dogName,dogBreed){
    return`Unleash ${dogName} the ${dogBreed}`;
        };
//unleashDog("Lauren","Golden Retriever");

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName,dogBreed){
        const arrayFunctions = [];
        for (let i = 0;  i < routine.length; i++) {
            arrayFunctions.push(routine[i](dogName,dogBreed));
        }
            return arrayFunctions;
        }
    exerciseDog()
   
/*function array(routine){ 
routine =[wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
for (i=0; routine.length===0;)
    function exerciseDog(dogName,dogBreed){
        function wakeDog() {
        console.log(`Wake ${dogName} the ${dogBreed}`);
        };
        function leashDog() {
        console.log(`Leash ${dogName} the ${dogBreed}`);
        };
        function walkToPark(){
        console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
        };
        function throwFrisbee() {
        console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
        };
        function walkHome(){
        console.log(`Walk home with ${dogName} the ${dogBreed}`);
        };
        function unleashDog(){
        console.log(`Unleash ${dogName} the ${dogBreed}`);
        };
        };
    }
        exerciseDog();*/