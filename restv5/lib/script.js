/**
 * Transaction Logic for Buy function
 * @param {org.rest.restaurant.ingredients.Buy} buyparam 
 * @transaction
 */
function Buy(buyparam){
    if(buyparam.RPBuy.ptype=="Producers"||buyparam.RPBuy.ptype=="RestNetworkAdmin"||buyparam.RPBuy.ptype=="RestPersonnel"||buyparam.RPBuy.ptype=="Customers")
        throw new Error ('The user cannot use this function.');
    else{
            buyparam.IngBuy.ownedBy=buyparam.RPBuy;
            console.log('Transferring goods');
            let assetRegistry = getAssetRegistry('org.rest.restaurant.ingredients');
            assetRegistry.update(buyparam.IngBuy);
            let event = getFactory().newEvent('org.rest.restaurant','Bought');
            event.IngBuy = buyparam.IngBuy;
            event.RPBuy = buyparam.RPBuy;
            emit(event);
    }
}
/**
 * Transaction Logic for Sell function
 * @param {org.rest.restaurant.ingredients.Sell} sellparam 
 * @transaction
 */
function Sell(sellparam){
    if(sellparam.RPSell.ptype=="RestNetworkAdmin"||sellparam.RPSell.ptype=="RestPersonnel"||sellparam.RPSell.ptype=="Customers")
        throw new Error ('The user cannot use this function.');
    else{
            if (sellparam.IngSell.ownedBy==sellparam.RPSell){
                sellparam.IngSell.ownedBy=sellparam.RPBuyer;
                console.log('Transferring goods');
                let assetRegistry = getAssetRegistry('org.rest.restaurant.ingredients');
                assetRegistry.update(sellparam.IngSell);
                let event = getFactory().newEvent('org.rest.restaurant','Sold');
                event.IngSell = sellparam.IngSell;
                event.RPSell = sellparam.RPSell;
                event.RPBuyer = sellparam.RPBuyer;
                emit(event);
            }
            else
                throw new Error ('The user does not have the asset to be sold.');
    }
}
/**
 * Transaction Logic for Add Ingredients function
 * @param {org.rest.restaurant.ingredients.AddIngredients} adding
 * @transaction
 */
/**function AddIngredients(adding) {
    adding.addIng.ingredientID = ""
    adding.addIng.ownedBy=
    adding.addIng.ingredientName=
    adding.addIng.typ=
    adding.addIng.quantity=
    adding.addIng.usedAsFood=
    adding.addIng.currentLocationI=
    adding.addIng.TempAsCelsius=
    adding.addIng.Humidity= 
    adding.addIng.Price=
    adding.addIng.origin=
    console.log('Creating goods');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.ingredients');
    assetRegistry.update(adding.addIng);
    let event = getFactory().newEvent('org.rest.restaurant','AddedIngredients');
    event.addIng = adding.addIng;
    emit(event);

}
*/

/**
 * Transaction Logic for Ingredients to prepped food function
 * @param {org.rest.restaurant.ingredients.IngToFood} ifood
 * @transaction
 */
function IngToFood(ifood) {
    ifood.iFood.usedAsFood = "Yes";
    console.log('Ingredient used');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.ingredients');
    assetRegistry.update(ifood.iFood);
    let event = getFactory().newEvent('org.rest.restaurant','IngUsed');
    event.iFood = ifood.iFood;
    emit(event);

}

/**
 * Transaction Logic for adding prepped food function
 * @param {org.rest.restaurant.preppedfood.AddPreppedFood} addfood
 * @transaction
 */
/**function AddPreppedFood(addfood) {
    addfood.pfoodID = 
    addfood.pFoodName = 
    addfood.preppedTime = new Date().getTime(); 
    console.log('Food prepared');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.preppedfood');
    assetRegistry.update(addfood.pFood);
    let event = getFactory().newEvent('org.rest.restaurant','AddedPFood');
    event.pFood = addfood.pFood;
    emit(event);

}
 */

/**
 * Transaction Logic for adding prepped food function
 * @param {org.rest.restaurant.preppedfood.AddPreppedFood} addfood
 * @transaction
 */
/**function AddPreppedFood(addfood) {
    addfood.pfoodID = 
    addfood.pFoodName = 
    addfood.preppedTime = new Date().getTime(); 
    console.log('Food prepared');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.preppedfood');
    assetRegistry.update(addfood.pFood);
    let event = getFactory().newEvent('org.rest.restaurant','AddedPFood');
    event.pFood = addfood.pFood;
    emit(event);

}
 */

 /**
 * Transaction Logic for delivering ingredients function
 * @param {org.rest.restaurant.transport.Delivered} del
 * @transaction
 */
function Delivered(del) {
    del.transportUsed.statusT = "Idle";
    del.transportUsed.ingredientsInTransit = [];
    console.log('Ingredient delivered');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.transport');
    assetRegistry.update(del.transportUsed);
    let event = getFactory().newEvent('org.rest.restaurant','DeliveredEv');
    event.transportUsed = del.transportUsed;
    emit(event);

}

 /**
 * Transaction Logic for delivering ingredients function
 * @param {org.rest.restaurant.transport.Transported} trans
 * @transaction
 */
/** function Transported(trans) {
    trans.transportBeingUsed.statusT = "Active";
    trans.transportBeingUsed.ingredientsInTransit = 
    console.log('Ingredients ready to transport');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.transport');
    assetRegistry.update(trans.transportBeingUsed);
    let event = getFactory().newEvent('org.rest.restaurant','TransportedEv');
    event.transportBeingUsed = trans.transportBeingUsed;
    emit(event);

}
*/

 /**
 * Transaction Logic for delivering ingredients function
 * @param {org.rest.restaurant.transport.Add_transport} addt
 * @transaction
 */
/**function Add_transport(addt) {
    addt.addtrans.transportID = 
    addt.addtrans.ingredientsInTransit = [];
    addt.addtrans.Owner =
    console.log('New transport added');
    let assetRegistry = getAssetRegistry('org.rest.restaurant.transport');
    assetRegistry.update(addt.addtrans);
    let event = getFactory().newEvent('org.rest.restaurant','AddedTransport');
    event.addtrans = addt.addtrans;
    emit(event);

}
 */